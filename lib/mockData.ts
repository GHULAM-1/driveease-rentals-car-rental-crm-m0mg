export type Car = {
  id: string;
  registration: string;
  model: string;
  year: number;
  currentLocation: string;
  availabilityStatus: 'available' | 'booked' | 'maintenance';
  serviceHistory: {
    date: string;
    serviceDetails: string;
  }[];
};

export type Booking = {
  id: string;
  carId: string;
  customerId: string;
  startDate: string;
  endDate: string;
  status: 'confirmed' | 'completed' | 'canceled';
};

export type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  documentUploads: string[];
  rentalHistory: {
    bookingId: string;
    car: string;
    date: string;
  }[];
};

export const cars: Car[] = [
  {
    id: '1',
    registration: 'XYZ 1234',
    model: 'Toyota Corolla',
    year: 2020,
    currentLocation: 'Branch 1',
    availabilityStatus: 'available',
    serviceHistory: [
      { date: '2023-02-15', serviceDetails: 'Oil change and tire rotation' },
      { date: '2023-04-22', serviceDetails: 'Brake pad replacement' },
    ],
  },
  {
    id: '2',
    registration: 'ABC 5678',
    model: 'Honda Civic',
    year: 2019,
    currentLocation: 'Branch 2',
    availabilityStatus: 'booked',
    serviceHistory: [
      { date: '2023-03-10', serviceDetails: 'Battery replacement' },
    ],
  },
];

export const bookings: Booking[] = [
  {
    id: '100',
    carId: '1',
    customerId: '500',
    startDate: '2023-10-01',
    endDate: '2023-10-05',
    status: 'confirmed',
  },
  {
    id: '101',
    carId: '2',
    customerId: '501',
    startDate: '2023-10-03',
    endDate: '2023-10-10',
    status: 'completed',
  },
];

export const customers: Customer[] = [
  {
    id: '500',
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice.smith@example.com',
    documentUploads: ['cnic.jpg', 'license.jpg'],
    rentalHistory: [
      { bookingId: '100', car: 'Toyota Corolla', date: '2023-10-01' },
    ],
  },
  {
    id: '501',
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob.johnson@example.com',
    documentUploads: ['cnic.jpg'],
    rentalHistory: [
      { bookingId: '101', car: 'Honda Civic', date: '2023-10-03' },
    ],
  },
];
