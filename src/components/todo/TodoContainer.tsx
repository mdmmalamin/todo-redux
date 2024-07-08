import AddTodoModal from "./AddTodoModal";
import TodoCart from "./TodoCart";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between">
        <AddTodoModal />

        <TodoFilter />
      </div>

      <div className="bg-primary-gradient w-full h-full rounded-xl p-1.5 space-y-2.5">
        <div className="bg-slate-200 w-full h-full p-5 space-y-2.5 rounded-lg">
          {/* <div className="bg-slate-100 rounded-md text-xl font-bold flex justify-center items-center p-2.5">
          <p>There is no task pending</p>
        </div> */}
          <TodoCart />
          <TodoCart />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
