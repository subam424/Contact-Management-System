import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Add = ({
  name,
  setName,
  role,
  setRole,
  desc,
  setDesc,
  setShowModal,
  showModal,
  getContacts
}) => {
  const addContacts = async () => {
    const details = { name, role: role || "", desc : desc || ""};
    try {
      const response = await fetch("http://127.0.0.1:8000/api/contacts/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      await getContacts()
      setShowModal(false)
      setName("")
      setRole("")
      setDesc("")

    } catch (er) {
      console.log(er);
    }
  };

  const toggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="absolute flex flex-col gap-4 p-4 shadow-sm rounded-lg bg-slate-600 text-slate-100 w-xs opacity-95 border border-gray-400">
      <h2 className="text-2xl">
        <FontAwesomeIcon icon={faUser} /> New Contact
      </h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-lg">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="John Doe"
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded-md outline outline-gray-500 focus:outline focus:outline-2 focus:outline-blue-400"
        />
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          value={role}
          placeholder="Computer Scientist"
          onChange={(e) => setRole(e.target.value)}
          className="p-2 rounded-md outline outline-gray-500 focus:outline focus:outline-2 focus:outline-blue-400"
        />
        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          id="desc"
          value={desc}
          placeholder="He loves cats."
          onChange={(e) => setDesc(e.target.value)}
          className="resize-y p-2 rounded-md outline outline-gray-500 focus:outline focus:outline-2 focus:outline-blue-400"
        />
      </div>
      <div className="flex gap-2 justify-end w-full">
        <button
          className="bg-blue-400 rounded-md w-15 p-2 text-center hover:bg-blue-500 cursor-pointer"
          onClick={addContacts}
        >
          Add
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

export default Add;
