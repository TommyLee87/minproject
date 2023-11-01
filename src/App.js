import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/Signup.jsx";
// import ImageUploader from "./pages/ImageUploader";
import MemberInfo from "./pages/MemberInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserStore from "./context/UserInfo";
import Modal from "./utils/Modal";

function App() {
  return (
    <UserStore>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/ImageUploader" element={<ImageUploader />} /> */}
          <Route path="/MemberInfo/:id" element={<MemberInfo />} />
          <Route path="/Modal" element={<Modal />} />
        </Routes>
      </Router>
    </UserStore>
  );
}

export default App;
