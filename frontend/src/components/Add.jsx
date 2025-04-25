import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Add = ({setShowModal, showModal}) => {
  const toggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="absolute flex flex-col gap-4 p-4 shadow-sm rounded-lg bg-slate-600 text-slate-100 w-xs opacity-95">
      <h2 className="text-2xl">
        <FontAwesomeIcon icon={faUser} /> New Contact
      </h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-lg">Full Name</label>
        <input type="text" id="name" placeholder="John Doe" className="p-2 rounded-md outline outline-gray-500 focus:outline focus:outline-2 focus:outline-blue-400"/>
        <label htmlFor="role">Role</label>
        <input type="text" id="role" placeholder="Computer Scientist" className="p-2 rounded-md outline outline-gray-500 focus:outline focus:outline-2 focus:outline-blue-400"/>
        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          id="desc"
          className="resize-y p-2 rounded-md outline outline-gray-500 focus:outline focus:outline-2 focus:outline-blue-400"
          placeholder="He loves cats."
        />
      </div>
      <div className="flex gap-2 justify-end w-full">
        <button className="bg-blue-400 rounded-md w-15 p-2 text-center hover:bg-blue-500 cursor-pointer">
          Add
        </button>
        <button 
        onClick={toggle}
        className="bg-gray-700 rounded-md w-18 p-2 text-center hover:bg-gray-800 cursor-pointer">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Add;
