import './App.css';
import Home from './pages/Home/Home';
import JobList from './pages/JobList/JobList';
import JobDetail from './pages/JobDetail/JobDetail';
import RootRouter from './routes/RootRouter';

function App() {
  return (
    <div className="App">
      <RootRouter/>
      {/* <Home/> */}
      {/* <JobList/> */}
      {/* <JobDetail/> */}
    </div>
  );
}

export default App;
