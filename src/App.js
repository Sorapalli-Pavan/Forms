// import logo from './logo.svg';
// import './App.css';
// import Forms from './Components/Forms';
// import  './CSS/Bootstrap.css'
// function App() {
//   return (
//     <div className="App">
//       <Forms/>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import Forms from './Components/Forms';
// import './CSS/Bootstrap.css';
// import Register from './Components/Register'
// function App(){
//   return (
//     <div className="container-fluid bg-success">
//       <Forms/>
//       {/* <Register/> */}
//     </div>
//   )
// }
// export default App;
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error from './Components/Error';
import  './CSS/Bootstrap.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form />}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;