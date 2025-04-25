import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = ({setShowModal, showModal}) => {
  const toggle = () => {
    setShowModal(!showModal);
  };

  return (
    <nav className="bg-slate-600 text-slate-100 mx-auto md:my-8 mb-8 p-5 flex justify-between items-center rounded-xl shadow-md max-w-4xl">
      <div className="flex gap-2 h-full">
        <h1 className="md:text-4xl text-3xl font-bold cursor-pointer ">
          My Contacts
        </h1>
        <img
          src="/contacts.png"
          loading="lazy"
          className="md:h-11 h-9 cursor-pointer"
        />
      </div>
      <button 
      onClick={toggle}
      className="md:mr-5 bg-blue-400 rounded-md w-15 p-2 text-center hover:bg-blue-500 cursor-pointer">
        {showModal ? 
        <span className="text-xl font-semibold">
          <FontAwesomeIcon icon={faXmark} />
        </span> : 
        <span className="text-xl font-semibold">
          <FontAwesomeIcon icon={faUserPlus} />
        </span>
        }
      </button>
    </nav>
  );
};

export default Nav;
