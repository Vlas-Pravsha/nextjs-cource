import { Trash2 } from "lucide-react";

interface DeleteButtonProps {
  onDelete?: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      className="absolute right-2 top-2 z-10 rounded-full bg-white p-1 transition-colors hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300"
    >
      <Trash2 className="h-5 w-5 text-red-500 hover:text-red-700" />
    </button>
  );
};

export default DeleteButton;
