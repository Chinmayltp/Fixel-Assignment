import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div>
      <div>
        <Toaster
          position='top-right'
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        ></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/editor/:roomId' element={<TextEditor />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
