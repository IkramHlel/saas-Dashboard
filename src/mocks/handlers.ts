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

  http.get('/api/dashboard/stats', async ({ request }) => {
    const url = new URL(request.url);
    const period = (url.searchParams.get('period') ?? 'week') as 'week' | 'month' | 'year';

    const dashboardData = {
      week: {
        sales: 4000000,
        volume: 450,
        customers: 1250,
        activeCustomers: 1180,
        allOrders: 450,
        pending: 5,
        completed: 445,
        allProducts: 45,
        activeProducts: 32,
        abandonedCart: 20,
        marketingSegments: {
          acquisition: 180,
          purchase: 120,
          retention: 60,
        },
        summarySeries: [
          { label: 'Sept 10', value: 60000 },
          { label: 'Sept 11', value: 80000 },
          { label: 'Sept 12', value: 40000 },
          { label: 'Sept 13', value: 120000 },
          { label: 'Sept 14', value: 83000 },
          { label: 'Sept 15', value: 20000 },
          { label: 'Sept 16', value: 91000 },
        ],
        recentOrders: [
          {
            id: 'order-1',
            product: 'iPhone 13',
            price: 730000,
            quantity: 1,
            date: '12 Sept 2022',
            status: 'Pending',
            imageUrl: 'https://via.placeholder.com/48/2563EB/FFFFFF?text=i13',
          },
          {
            id: 'order-2',
            product: 'iPhone 13',
            price: 730000,
            quantity: 1,
            date: '12 Sept 2022',
            status: 'Completed',
            imageUrl: 'https://via.placeholder.com/48/0F766E/FFFFFF?text=i13',
          },
          {
            id: 'order-3',
            product: 'MacBook Pro',
            price: 1200000,
            quantity: 1,
            date: '11 Sept 2022',
            status: 'Completed',
            imageUrl: 'https://via.placeholder.com/48/000000/FFFFFF?text=MBP',
          },
          {
            id: 'order-4',
            product: 'Airpods Pro',
            price: 250000,
            quantity: 2,
            date: '11 Sept 2022',
            status: 'Pending',
            imageUrl: 'https://via.placeholder.com/48/111827/FFFFFF?text=AP',
          },
          {
            id: 'order-5',
            product: 'iPhone 13',
            price: 730000,
            quantity: 1,
            date: '10 Sept 2022',
            status: 'Completed',
            imageUrl: 'https://via.placeholder.com/48/166534/FFFFFF?text=i13',
          },
          {
            id: 'order-6',
            product: 'Apple Watch',
            price: 300000,
            quantity: 1,
            date: '09 Sept 2022',
            status: 'Pending',
            imageUrl: 'https://via.placeholder.com/48/0f172a/FFFFFF?text=AW',
          },
        ],
      },
      month: {
        sales: 18000000,
        volume: 1820,
        customers: 5400,
        activeCustomers: 4900,
        allOrders: 1800,
        pending: 18,
        completed: 1782,
        allProducts: 78,
        activeProducts: 59,
        abandonedCart: 14,
        marketingSegments: {
          acquisition: 680,
          purchase: 520,
          retention: 310,
        },
        summarySeries: [
          { label: 'Week 1', value: 190000 },
          { label: 'Week 2', value: 260000 },
          { label: 'Week 3', value: 220000 },
          { label: 'Week 4', value: 280000 },
          { label: 'Week 5', value: 240000 },
        ],
        recentOrders: [
          {
            id: 'order-5',
            product: 'iPhone 13',
            price: 730000,
            quantity: 1,
            date: '05 Sept 2022',
            status: 'Completed',
            imageUrl: 'https://via.placeholder.com/48/047857/FFFFFF?text=i13',
          },
          {
            id: 'order-6',
            product: 'iPhone 13',
            price: 730000,
            quantity: 1,
            date: '08 Sept 2022',
            status: 'Pending',
            imageUrl: 'https://via.placeholder.com/48/BE185D/FFFFFF?text=i13',
          },
        ],
      },
      year: {
        sales: 92000000,
        volume: 8200,
        customers: 41500,
        activeCustomers: 39200,
        allOrders: 9200,
        pending: 90,
        completed: 9110,
        allProducts: 340,
        activeProducts: 310,
        abandonedCart: 12,
        marketingSegments: {
          acquisition: 4800,
          purchase: 3600,
          retention: 1800,
        },
        summarySeries: [
          { label: 'Jan', value: 680000 },
          { label: 'Feb', value: 720000 },
          { label: 'Mar', value: 810000 },
          { label: 'Apr', value: 940000 },
          { label: 'May', value: 870000 },
          { label: 'Jun', value: 920000 },
          { label: 'Jul', value: 980000 },
        ],
        recentOrders: [
          {
            id: 'order-7',
            product: 'iPhone 13',
            price: 730000,
            quantity: 1,
            date: '02 Jan 2022',
            status: 'Completed',
            imageUrl: 'https://via.placeholder.com/48/0f172a/FFFFFF?text=i13',
          },
        ],
      },
    };

    return HttpResponse.json(dashboardData[period]);
  }),
];