// import { Home } from "./pages/home/home";


// const App = ()=>{
//   return(
//     <div>
//       <Home/>
//     </div>
//   )
// }
// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';  // Home component
import { Details } from './pages/home/details/details';  // Details component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page */}
        <Route path="/details" element={<Details />} />  {/* Details page */}
      </Routes>
    </Router>
  );
}

export default App;
