import "./App.css";
import Home from "./pages/Home/Home";
import JobList from "./pages/JobList/JobList";
import JobDetail from "./pages/JobDetail/JobDetail";
import RootRouter from "./routes/RootRouter";
import { LoginContext } from "./context/LoginContext";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <LoginContext.Provider value={{ isLogin, setIsLogin }}>
        <RootRouter isLogin={isLogin} setIsLogin={setIsLogin} />
        {/* <Home/> */}
        {/* <JobList/> */}
        {/* <JobDetail/> */}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
