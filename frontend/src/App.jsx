import {useState} from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Add from "./components/Add";
import Added from "./components/Added";
import Update from "./components/update";

const App = () => {
const [showModal, setShowModal] = useState(false)
const [showUpdate, setShowUpdate] = useState(false)

  return (
    <>
      {/* <Added /> */}
      <Nav setShowModal={setShowModal} showModal={showModal}/>

      {showModal &&
        <div className="flex justify-center">
          <Add setShowModal={setShowModal} showModal={showModal}/>
        </div>
      }

      {showUpdate && 
        <div className="flex justify-center">
          <Update setShowUpdate={setShowUpdate} showUpdate={showUpdate}/>
        </div>
      }

      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto p-5 max-w-6xl gap-5">
        <Card role={"Family"} setShowUpdate={setShowUpdate} showUpdate={showUpdate} />
        <Card role={"Family"} setShowUpdate={setShowUpdate} showUpdate={showUpdate} />
        <Card role={"Family"} setShowUpdate={setShowUpdate} showUpdate={showUpdate} />
        <Card role={"Family"} setShowUpdate={setShowUpdate} showUpdate={showUpdate} />
      </div>

    </>
  );
};

export default App;
