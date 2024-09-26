import {
  genAddress,
  genDatabase,
  genAppointmentMocks,
  genName,
} from "@/lib/generators";
import { Database } from "@/interview-scheduling/types";
import { parseISO } from "date-fns";

export const appointmentMocks = genAppointmentMocks({ appointmentCount: 100 });

export const sample: Database = {
  workers: [
    {
      workerId: "w1",
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
      workerId: "w2",
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
      workerId: "w3",
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
      customerId: "c1",
      customerName: genName(),
      address: genAddress(),
      availabilities: [
        {
          start: parseISO("2025-01-03T11:00:00Z"),
          end: parseISO("2025-01-03T12:00:00Z"),
        },
      ],
    },
    {
      customerId: "c2",
      customerName: genName(),
      address: genAddress(),
      availabilities: [
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
      customerId: "c3",
      customerName: genName(),
      address: genAddress(),
      availabilities: [
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
      customerId: "c4",
      customerName: genName(),
      address: genAddress(),
      availabilities: [
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

export const large: Database = genDatabase(100, 200);
