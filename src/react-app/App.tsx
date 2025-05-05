// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import "./App.css";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//       </Routes>
//     </Router>
//   );
// }
function App() {
  return <Landing />;
}

export default App;
