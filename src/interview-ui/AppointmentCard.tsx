import { CircleCheckIcon, CircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { Appointment } from "@/interview-scheduling";

export type AppointmentCardProps = {
  appointment: Appointment;
  isCompleted: boolean;
  onClick?: () => void;
};

export const AppointmentCard = ({
  appointment,
  isCompleted,
  onClick,
}: AppointmentCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "transition-colors duration-200 ease-in-out",
        "max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 w-72 select-none cursor-pointer",
        isCompleted ? "bg-gray-300" : "bg-white",
      )}
    >
      <div className="p-4">
        <div className="flex flex-row justify-between my-4">
          <div className="flex flex-col items-start">
            <div>
              Time: {dayjs(appointment.start).format("YYYY-MM-DD HH:00")}
            </div>
          </div>
          <div>{isCompleted ? <CircleCheckIcon /> : <CircleIcon />}</div>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-lg font-semibold text-gray-800">
            Worker ID: {appointment.workerId}
          </div>
          <div className="flex flex-col items-start">
            <div className="text-gray-600 mt-2 font-semibold">
              Customer Name:
            </div>
            <div>{appointment.customerName}</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-gray-600 mt-2 font-semibold">
              Customer Address:
            </div>
            <div>{appointment.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
