import Edit from "../svg/Edit";
import Trash from "../svg/Trash";
import { Button } from "../ui/button";

const TodoCart = () => {
  return (
    <div className="bg-slate-100 rounded-md flex justify-between items-center p-2.5">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-5">
        <Button className="bg-red-500">
          <Trash />
        </Button>
        <Button className="bg-purple-500">
          <Edit />
        </Button>
      </div>
    </div>
  );
};

export default TodoCart;
