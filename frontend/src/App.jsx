import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Add from "./components/Add";
import Added from "./components/Added";
import Update from "./components/update";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/contacts/");
      const data = await response.json();
      setContacts(data);
    } catch (er) {
      console.log(er);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/contacts/${id}`, {
        method: "DELETE"
      });
      await getContacts()
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <>
      {/* <Added /> */}
      <Nav setShowModal={setShowModal} showModal={showModal} />

      {showModal && (
        <div className="flex justify-center">
          <Add
            setShowModal={setShowModal}
            showModal={showModal}
            setName={setName}
            setRole={setRole}
            setDesc={setDesc}
            name={name}
            role={role}
            desc={desc}
            getContacts={getContacts}
          />
        </div>
      )}

      {showUpdate && (
        <div className="flex justify-center">
          <Update
            setShowUpdate={setShowUpdate}
            showUpdate={showUpdate}
            selectedContact={selectedContact}
            getContacts={getContacts}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto p-5 max-w-7xl gap-5">
        {contacts.map((c) => {
          return (
            <Card
              id={c.id}
              name={c.name}
              role={c.role}
              desc={c.desc}
              setShowUpdate={setShowUpdate}
              showUpdate={showUpdate}
              setSelectedContact={setSelectedContact}
              selectedContact={selectedContact}
              deleteContact={deleteContact}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
