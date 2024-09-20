import { faker } from "@faker-js/faker";
import { CustomerPreference, Database, WorkerAvailability } from "./types";
import dayjs from "dayjs";

faker.seed(5852264571544052);

export const genId = () => faker.git.commitSha().substring(0, 8);
export const genAddress = () =>
  `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.zipCode()}`;
export const genName = () => faker.person.fullName();

const genTimeRange = (start: Date) => {
  const duration = faker.number.int({ min: 1, max: 10 });
  const roundedStart = dayjs(start)
    .set("millisecond", 0)
    .set("second", 0)
    .set("minute", 0);
  return {
    start: roundedStart.toDate(),
    end: roundedStart.add(duration, "hour").toDate(),
  };
};

const genTimeRanges = (len: number) => {
  const starts = Array(len)
    .fill(0)
    .map(() => {
      return faker.date.recent({ days: 7 });
    });

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
    preferences,
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
