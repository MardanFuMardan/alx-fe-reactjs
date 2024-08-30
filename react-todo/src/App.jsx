import TodokList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import Taskbar from './components/Taskbar';

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 rounded-lg shadow-md bg-white text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Task Tracker</h1>
        </div>
        <div className="mb-4">
          <AddTodoForm />
          <TodoList />
        </div>
         <Taskkbar />
      </div>
    </div>
  );
}

export default App;