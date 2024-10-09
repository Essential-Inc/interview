import { CircleCheckIcon, CircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";

export type AppointmentCardProps = {
  workerId: string;
  customerId: string;
  customerName?: string;
  address: string;
  start: Date;
  isCompleted: boolean;
};

export const AppointmentCard = ({
  workerId,
  address,
  customerName,
  start,
  isCompleted,
}: AppointmentCardProps) => {
  const onClick = () => {
    console.log(
      "AppointmentCard Clicked",
      workerId,
      address,
      customerName,
      start,
    );
  };

  return (
    <div
      className={cn(
        "transition-colors duration-200 ease-in-out",
        "max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 w-72 select-none cursor-pointer",
        isCompleted ? "bg-gray-300" : "bg-white",
      )}
    >
      <div className="p-4">
        <div className="flex flex-row justify-between my-4">
          <div className="flex flex-col items-start">
            <div>Time: {dayjs(start).format("YYYY-MM-DD HH:00")}</div>
          </div>
          <button onClick={onClick}>
            {isCompleted ? <CircleCheckIcon /> : <CircleIcon />}
          </button>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-lg font-semibold text-gray-800">
            Worker ID: {workerId}
          </div>
          <div className="flex flex-col items-start">
            <div className="text-gray-600 mt-2 font-semibold">
              Customer Name:
            </div>
            <div>{customerName}</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-gray-600 mt-2 font-semibold">
              Customer Address:
            </div>
            <div>{address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
