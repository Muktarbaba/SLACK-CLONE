import React from "react";
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
   //const [user, setUser] = useState(null); 
   const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">
     <Router>
      {!user ? (
          <Login />
        ):(
    <>
     <Header />

     <div className ="appbody">
      {/* Sidebar */}
      <Sidebar />
      <Routes>
          <Route path = "/room/:roomId" element={<Chat />}>
          
          </Route>
          <Route path = "/">
          
          </Route>
        </Routes>
     </div>
     </>
        )}
     </Router>
    </div>
   
  );
}

export default App;
