import { TodoProvider } from "./context/TodoContext";
import Homepage from "./pages/Homepage";
// import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <TodoProvider>
        {/* <Signup /> */}
        <Homepage />
      </TodoProvider>
    </>
  );
}

export default App;
