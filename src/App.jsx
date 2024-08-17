import {Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Home";
import Aboutpage from "./Pages/About";
import Projectpage from "./Pages/Projects";
import Contactpage from "./Pages/Contact";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/about" element={<Aboutpage/>} />
     <Route path="/projects" element={<Projectpage/>} />
     <Route path="/contact" element={<Contactpage />} />
      {/*<Route path="*" element={<NotFound />} /> */}
    </Routes>
  
    </div>
  );
}

export default App;