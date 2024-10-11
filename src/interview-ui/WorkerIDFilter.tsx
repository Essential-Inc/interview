import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

type WorkerFilterProps = {
  onSelect: (workerId: string) => void;
};

export const WorkerIDFilter = ({ onSelect }: WorkerFilterProps) => {
  return (
    <div className="flex flex-row items-center space-x-2 cursor-pointer select-none">
      <div className="text-sm text-gray-500">Filter by:</div>
      <Select onValueChange={onSelect}>
        <SelectTrigger>
          <SelectValue placeholder="None" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="None">None</SelectItem>
          <SelectItem value="666666">666666</SelectItem>
          <SelectItem value="777777">777777</SelectItem>
          <SelectItem value="888888">888888</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
