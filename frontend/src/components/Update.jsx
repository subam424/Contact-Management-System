import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faUser } from "@fortawesome/free-solid-svg-icons";

const Update = ({
  setShowUpdate,
  showUpdate,
  selectedContact,
  getContacts
}) => {
  const [name, setName] = useState(selectedContact.name);
  const [role, setRole] = useState(selectedContact.role);
  const [desc, setDesc] = useState(selectedContact.desc);

  const toggle = () => {
    setShowUpdate(!showUpdate);
  };

  const updateContact = async () => {
    const details = { name, role, desc }
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/contacts/${selectedContact.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        }
      );
    } catch (err) {
      console.log(err);
    }
    setShowUpdate(false)
    await getContacts()
  };

  return (
    <div className="absolute flex flex-col gap-4 p-4 shadow-sm rounded-lg bg-slate-600 text-slate-100 z-999 w-xs opacity-95 border border-gray-400">
      <h2 className="text-2xl">
        <FontAwesomeIcon icon={faUser} /> Edit Contact
      </h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-lg">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          className="p-2 rounded-md outline outline-gray-500 focus:outline focus:outline-2 focus:outline-blue-400"
        />
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Computer Scientist"
          className="p-2 rounded-md outline outline-gray-500 focus:outline focus:outline-2 focus:outline-blue-400"
        />
        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="resize-y p-2 rounded-md outline outline-gray-500 focus:outline focus:outline-2 focus:outline-blue-400"
          placeholder="He loves cats."
        />
      </div>
      <div className="flex gap-2 justify-end w-full">
        <button
          onClick={updateContact}
          className="bg-blue-400 rounded-md w-20 p-2 text-center hover:bg-blue-500 cursor-pointer"
        >
          Confirm
        </button>
        <button
          onClick={toggle}
          className="bg-gray-700 rounded-md w-18 p-2 text-center hover:bg-gray-800 cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Update;
