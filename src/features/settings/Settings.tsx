import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MdPerson, MdEmail, MdPhone, MdLocationOn, MdArrowDropDown, MdPhotoCamera } from 'react-icons/md';
import type { RootState } from '../../app/store';
import styles from './Settings.module.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Account');
  const user = useSelector((state: RootState) => state.auth.user);
  const [firstName, ...lastNameParts] = user?.name.split(' ') ?? [''];
  const lastName = lastNameParts.join(' ');

  return (
    <div className={styles.settingsPage}>
      <div className={styles.pageHeader}>
        <button type="button" className={styles.updateButton}>
          Update
        </button>
      </div> 

      <div className={styles.tabs}>
        {['Account', 'Business', 'Security'].map((tab) => (
          <button
            key={tab}
            type="button"
            className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.formCard}>
          <div className={styles.sectionHeader}>
            <h3>Account Settings</h3>
          </div>

          <div className={styles.formGrid}>
            <label className={styles.fieldLabel}>
              <span>First Name</span>
              <div className={styles.inputGroup}>
                <MdPerson className={styles.inputIcon} />
                <input type="text" defaultValue={firstName} className={styles.inputField} />
              </div>
            </label>

            <label className={styles.fieldLabel}>
              <span>Last Name</span>
              <div className={styles.inputGroup}>
                <MdPerson className={styles.inputIcon} />
                <input type="text" defaultValue={lastName} className={styles.inputField} />
              </div>
            </label>

            <label className={styles.fieldLabel}>
              <span>Email</span>
              <div className={styles.inputGroup}>
                <MdEmail className={styles.inputIcon} />
                <input type="email" defaultValue={user?.email ?? ''} className={styles.inputField} />
              </div>
            </label>

            <label className={styles.fieldLabel}>
              <span>Phone Number</span>
              <div className={styles.phoneRow}>
                <div className={styles.phonePrefix}>
                  <span>+234</span>
                  <MdArrowDropDown />
                </div>
                <div className={styles.inputGroup}>
                  <MdPhone className={styles.inputIcon} />
                  <input type="tel" defaultValue={user?.phone ?? ''} className={styles.inputField} />
                </div>
              </div>
            </label>

            <label className={styles.fieldLabel}>
              <span>Address</span>
              <div className={styles.inputGroup}>
                <MdLocationOn className={styles.inputIcon} />
                <input type="text" defaultValue={user?.address ?? ''} className={styles.inputField} />
              </div>
            </label>

            <label className={styles.fieldLabel}>
              <span>City</span>
              <div className={styles.inputGroup}>
                <input type="text" defaultValue={user?.city ?? ''} className={styles.inputField} />
              </div>
            </label>

            <label className={styles.fieldLabel}>
              <span>Country</span>
              <div className={styles.selectGroup}>
                <select defaultValue={user?.country ?? 'Nigeria'} className={styles.selectField}>
                  <option>Nigeria</option>
                  <option>Ghana</option>
                  <option>Kenya</option>
                </select>
                <MdArrowDropDown className={styles.selectIcon} />
              </div>
            </label>

            <label className={styles.fieldLabel}>
              <span>State</span>
              <div className={styles.selectGroup}>
                <select defaultValue={user?.state ?? 'Lagos'} className={styles.selectField}>
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Rivers</option>
                </select>
                <MdArrowDropDown className={styles.selectIcon} />
              </div>
            </label>
          </div>
        </div>

        <div className={styles.profileCard}>
          <div className={styles.profilePreview}>
            <div className={styles.avatarPlaceholder} />
            <button type="button" className={styles.uploadButton}>
              <MdPhotoCamera size={18} />
            </button>
          </div>
          <p className={styles.profileLabel}>Upload Display Picture</p>
          <p className={styles.profileText}>Choose a clear profile photo to personalize your account.</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
