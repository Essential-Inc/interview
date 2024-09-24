import { faker } from "@faker-js/faker";
import {
  Appointment,
  CustomerPreference,
  Database,
  WorkerAvailability,
} from "@/interview-scheduling/types";
import dayjs from "dayjs";

faker.seed(5852264571544052);

export const genId = () => faker.git.commitSha().substring(0, 8);
export const genAddress = () =>
  `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.zipCode()}`;
export const genName = () => faker.person.fullName();

const genRecentHour = (props: Parameters<typeof faker.date.recent>[0]) => {
  const date = faker.date.recent(props);
  return dayjs(date)
    .set("millisecond", 0)
    .set("second", 0)
    .set("minute", 0)
    .toDate();
};

const genTimeRange = (start: Date) => {
  const duration = faker.number.int({ min: 1, max: 10 });
  return {
    start,
    end: dayjs(start).add(duration, "hour").toDate(),
  };
};

const genTimeRanges = (len: number) => {
  const starts = Array(len)
    .fill(0)
    .map(() => genRecentHour({ days: 7 }));

  const availabilities = starts.map((start) => genTimeRange(start));
  return availabilities;
};

export const genWorkerAvailability = (): WorkerAvailability => {
  const numAvailabilities = faker.number.int({ min: 1, max: 20 });
  const availabilities = genTimeRanges(numAvailabilities);

  return {
    workerId: genId(),
    workerName: genName(),
    availabilities,
  };
};

export const genCustomerPreference = (): CustomerPreference => {
  const numPreferences = faker.number.int({ min: 1, max: 20 });
  const preferences = genTimeRanges(numPreferences);

  return {
    customerId: genId(),
    customerName: genName(),
    availability: preferences,
    address: genAddress(),
  };
};

export const genDatabase = (min: number, max: number): Database => {
  const workers = Array(faker.number.int({ min, max }))
    .fill(0)
    .map(() => genWorkerAvailability());

  const customers = Array(faker.number.int({ min, max }))
    .fill(0)
    .map(() => genCustomerPreference());

  return {
    workers,
    customers,
  };
};

export const genAppointmentMocks = ({
  appointmentCount,
  workerCount,
  customerCount,
}: {
  appointmentCount: number;
  workerCount?: number;
  customerCount?: number;
}): Appointment[] => {
  const workerIds = Array(faker.number.int({ min: 1, max: workerCount ?? 10 }))
    .fill(0)
    .map(genId);

  const customerIds = Array(
    faker.number.int({ min: 1, max: customerCount ?? 10 }),
  )
    .fill(0)
    .map(genId);

  const customerAddresses = customerIds.reduce(
    (acc, id) => ({ ...acc, [id]: genAddress() }),
    {} as Record<string, string>,
  );

  const customerNames = customerIds.reduce(
    (acc, id) => ({ ...acc, [id]: genName() }),
    {} as Record<string, string>,
  );

  const appointments = Array(appointmentCount)
    .fill(0)
    .map(() => {
      const workerId =
        workerIds[faker.number.int({ min: 0, max: workerIds.length - 1 })];
      const [customerId, address] =
        faker.helpers.objectEntry(customerAddresses);
      const customerName = customerNames[customerId];
      const start = genRecentHour({ days: 7 });
      const end = dayjs(start).add(1, "hour").toDate();

      return {
        workerId,
        customerId,
        customerName,
        address,
        start,
        end,
      };
    });

  return appointments;
};
