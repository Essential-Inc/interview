export type TimeRange = {
  start: Date;
  end: Date;
};

export type WorkerAvailability = {
  workerId: string;
  workerName: string;
  availabilities: TimeRange[];
};

export type CustomerPreference = {
  customerId: string;
  customerName: string;
  preferences: TimeRange[];
  address: string;
};

export type Database = {
  workers: WorkerAvailability[];
  customers: CustomerPreference[];
};

export type Appointment = {
  workerId: string;
  customerId: string;
  customerName?: string;
  address: string;
  start: Date;
  end: Date;
};
