import logo from './logo.svg';
import './App.css';
import Date from './Date';
import Special from './Special';
import { BrowserRouter, Route, Routes} from "react-router-dom";


// function App() {

//   return (
//     <div className="App">
//       <Date></Date>
//     </div>
//   );
// }

// export default App;
function App() {
  return (
   
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Date />}></Route>
        
        <Route path="/special" element={<Special/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;