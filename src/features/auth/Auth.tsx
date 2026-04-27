import { useState, type FormEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { MdEmail, MdLock, MdPerson, MdArrowRightAlt } from 'react-icons/md';
import { loginUser, signupUser } from './services/authApi';
import { loginSuccess } from '../../app/store/slices/authSlice';
import { setActivePage } from '../../app/store/slices/uiSlice';
import Logo from '../../assets/MetricoLogo.png';
import styles from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginMutation = useMutation({
    mutationFn: () => loginUser({ email, password }),
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
      dispatch(setActivePage('Dashboard'));
    },
  });

  const signupMutation = useMutation({
    mutationFn: () => signupUser({ name, email, password }),
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
      dispatch(setActivePage('Dashboard'));
    },
  });

  const isLoading = mode === 'login' ? loginMutation.isPending : signupMutation.isPending;
  const error = mode === 'login' ? loginMutation.error : signupMutation.error;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mode === 'login') {
      loginMutation.mutate();
    } else {
      signupMutation.mutate();
    }
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.card}>
        <div className={styles.brandBlock}>
          <div className={styles.brandIcon}> 
            <img src={Logo} alt="Metrico Logo" className={styles.logo} /> 
          </div> 
          <div>
            <p className={styles.brandLabel}>Metrico</p>
          </div>
        </div>
        <div className={styles.formHeader}>
          <h2>{mode === 'login' ? 'Welcome back!' : 'Get Started with Metrix'}</h2>
          <p>{mode === 'login' ? 'Login to your account' : 'Create your free account'}</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <label className={styles.field}>
              <span>Your Full Name</span>
              <div className={styles.inputGroup}>
                <MdPerson className={styles.icon} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>
            </label>
          )}

          <label className={styles.field}>
            <span>Your Email Address</span>
            <div className={styles.inputGroup}>
              <MdEmail className={styles.icon} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
              />
            </div>
          </label>

          <label className={styles.field}>
            <span>{mode === 'login' ? 'Password' : 'Create a Strong Password'}</span>
            <div className={styles.inputGroup}>
              <MdLock className={styles.icon} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
          </label>

          {error && <div className={styles.error}>{(error as Error).message}</div>}

          <button type="submit" className={styles.primaryButton} disabled={isLoading}>
            {isLoading
              ? mode === 'login'
                ? 'Logging in…'
                : 'Signing up…'
              : mode === 'login'
              ? 'Login'
              : 'Sign Up'}
          </button>
        </form>

        <div className={styles.switchRow}>
          <span>
            {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
          </span>
          <button type="button" className={styles.switchButton} onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>
            {mode === 'login' ? 'Sign Up' : 'Login'}
            <MdArrowRightAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
