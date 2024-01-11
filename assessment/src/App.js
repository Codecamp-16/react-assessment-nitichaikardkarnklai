import LoginPage from "./components/LoginPage";
import MyTodosPage from "./components/MyTodosPage";
import { useLogin } from "./context/LoginContext";

function App() {
  const {isLogin} = useLogin();
  return (

      <div className="App">
        {!isLogin? <LoginPage />: <MyTodosPage /> }
        {/* <MyTodosPage /> */}
      </div>
  );
}

export default App;