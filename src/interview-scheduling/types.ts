export type TimeRange = {
  // Inclusive of start
  // Exclusive of end
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
  address: string;
  availability: TimeRange[];
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
