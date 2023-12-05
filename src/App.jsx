import { AuthProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <AuthProvider>
        <TodoProvider>
          <Router />
        </TodoProvider>
      </AuthProvider>
    </>
  );
}

export default App;
