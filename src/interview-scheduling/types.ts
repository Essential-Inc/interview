export type TimeRange = {
  // Inclusive of start
  // Exclusive of end
  start: Date;
  end: Date;
};

export type Worker = {
  workerId: string;
  workerName: string;
  availabilities: TimeRange[];
};

export type Customer = {
  customerId: string;
  customerName: string;
  address: string;
  availabilities: TimeRange[];
};

export type Database = {
  workers: Worker[];
  customers: Customer[];
};

export type Appointment = {
  workerId: string;
  customerId: string;
  customerName?: string;
  address: string;
  start: Date;
  end: Date;
};
