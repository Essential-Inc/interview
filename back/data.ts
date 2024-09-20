import {
  genAddress,
  genDatabase,
  genId,
  genMocks,
  genName,
  genWorkerAvailability,
} from "./generators";
import { Database } from "./types";
import { parseISO } from "date-fns";

export const staticDB: Database = {
  workers: [
    {
      workerId: genId(),
      workerName: genName(),
      availabilities: [
        {
          start: parseISO("2025-01-03T10:00:00Z"),
          end: parseISO("2025-01-03T12:00:00Z"),
        },
        {
          start: parseISO("2025-01-03T14:00:00Z"),
          end: parseISO("2025-01-03T16:00:00Z"),
        },
      ],
    },
    {
      workerId: genId(),
      workerName: genName(),
      availabilities: [
        {
          start: parseISO("2025-01-03T08:00:00Z"),
          end: parseISO("2025-01-03T09:00:00Z"),
        },
        {
          start: parseISO("2025-01-03T18:00:00Z"),
          end: parseISO("2025-01-03T19:00:00Z"),
        },
      ],
    },
    {
      workerId: genId(),
      workerName: genName(),
      availabilities: [
        {
          start: parseISO("2025-01-03T19:00:00Z"),
          end: parseISO("2025-01-04T05:00:00Z"),
        },
      ],
    },
  ],
  customers: [
    {
      customerId: genId(),
      customerName: genName(),
      address: genAddress(),
      preferences: [
        {
          start: parseISO("2025-01-03T11:00:00Z"),
          end: parseISO("2025-01-03T12:00:00Z"),
        },
        {
          start: parseISO("2025-01-03T13:00:00Z"),
          end: parseISO("2025-01-03T14:00:00Z"),
        },
      ],
    },
    {
      customerId: genId(),
      customerName: genName(),
      address: genAddress(),
      preferences: [
        {
          start: parseISO("2025-01-03T18:00:00Z"),
          end: parseISO("2025-01-03T19:00:00Z"),
        },
        {
          start: parseISO("2025-01-03T06:00:00Z"),
          end: parseISO("2025-01-03T07:00:00Z"),
        },
        {
          start: parseISO("2025-01-04T00:00:00Z"),
          end: parseISO("2025-01-04T01:00:00Z"),
        },
      ],
    },
    {
      customerId: genId(),
      customerName: genName(),
      address: genAddress(),
      preferences: [
        {
          start: parseISO("2025-01-04T10:00:00Z"),
          end: parseISO("2025-01-04T11:00:00Z"),
        },
        {
          start: parseISO("2025-01-04T12:00:00Z"),
          end: parseISO("2025-01-04T14:00:00Z"),
        },
      ],
    },
  ],
};

export const dynamicDB: Database = genDatabase(10, 20);

export const mocks = genMocks({ appointmentCount: 100 });
