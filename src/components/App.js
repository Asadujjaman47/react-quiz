import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Signup from './pages/Signup';

function App() {
  return (
    // before routing
    // <Layout>
    //   <Home />
    //   <Signup />
    //   <Login />
    //   <Quiz />
    //   <Result />
    // </Layout>

    <Router>
      <Layout>
      {/* instead of "Switch" */}
        <Routes> 
          {/* <Route exact path="/" component={Home}/> */}
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/quiz' element={<Quiz />}/>
          <Route path='/result' element={<Result />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
