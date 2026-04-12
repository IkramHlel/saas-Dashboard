import { http, HttpResponse } from 'msw';

const users = [
  {
    id: '1',
    name: 'Ikram Hlel',
    email: 'ikram.hlel@gmail.com',
    password: 'Password123',
    phone: '+33600000000',
    address: '237 Av. de la République',
    city: 'Chatenay-Malabry',
    country: 'France',
    state: 'Paris',
  },
];

const createToken = (email: string) => btoa(`${email}:${Date.now()}`);

export const handlers = [
  http.post('/api/auth/login', async ({ request }) => {
    const body = await request.json();
    const { email, password } = body as { email: string; password: string };

    const user = users.find((item) => item.email === email && item.password === password);

    if (!user) {
      return HttpResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 },
      );
    }

    return HttpResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        city: user.city,
        country: user.country,
        state: user.state,
      },
      token: createToken(user.email),
    });
  }),

  http.post('/api/auth/signup', async ({ request }) => {
    const body = await request.json();
    const { name, email, password } = body as { name: string; email: string; password: string };

    const existingUser = users.find((item) => item.email === email);
    if (existingUser) {
      return HttpResponse.json(
        { message: 'This email is already registered' },
        { status: 409 },
      );
    }

    const newUser = {
      id: String(users.length + 1),
      name,
      email,
      password,
      phone: '+33600000000',
      address: 'Unknown address',
      city: 'Unknown',
      country: 'France',
      state: 'Paris',
    };
    users.push(newUser);

    return HttpResponse.json({
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        address: newUser.address,
        city: newUser.city,
        country: newUser.country,
        state: newUser.state,
      },
      token: createToken(newUser.email),
    });
  }),

  http.get('/api/dashboard/stats', () => {
    return HttpResponse.json({
        sales: 0.00,
        volume: 0,
        customers: 0,
        active: 0,
        allOrders: 0,
        pending: 0,
        completed: 0,
    });
  }),
];