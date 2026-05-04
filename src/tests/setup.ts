import '@testing-library/jest-dom';
import { server } from '../mocks/server';

// Start MSW server for all tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());