import { ArrowDownNarrowWideIcon, ArrowDownWideNarrowIcon } from "lucide-react";
export type SortOrder = "asc" | "desc";

export const SortToggle = ({
  order,
  onClick,
}: {
  order: SortOrder;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-row items-center space-x-2 cursor-pointer select-none"
    >
      <div className="text-sm text-gray-500">Sort by:</div>
      <div className="flex flex-row items-center space-x-2">
        <div className="text-sm text-gray-900">Date</div>
        {order === "asc" ? (
          <ArrowDownNarrowWideIcon />
        ) : (
          <ArrowDownWideNarrowIcon />
        )}
      </div>
    </div>
  );
};
