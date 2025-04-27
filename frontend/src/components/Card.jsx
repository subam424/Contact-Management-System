import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faUserXmark,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({
  id,
  role,
  name,
  desc,
  showUpdate,
  setShowUpdate,
  selectedContact,
  setSelectedContact,
  deleteContact
}) => {
  const toggle = () => {
    setSelectedContact({ id, name, role, desc });
    setShowUpdate(!showUpdate);
  };

  return (
    <div className="bg-slate-600 h-full w-full text-slate-100 p-5 grid grid-cols-2 gap-y-10 rounded-lg shadow-sm hover:scale-102 transition duration-200 ease-in-out">
      <div className="flex gap-3 items-center text-3xl md:text-5xl justify-start">
        <FontAwesomeIcon icon={faCircleUser} />
        <div className="flex flex-col">
          <h1 className="text-lg">{name}</h1>
          <h4 className="text-slate-300 text-sm">{role}</h4>
        </div>
      </div>
      <div className="flex gap-3 items-center text-lg justify-end">
        <button className="cursor-pointer" onClick={toggle}>
          <FontAwesomeIcon icon={faUserPen} className="text-sky-400" />
        </button>
        <button className="cursor-pointer" onClick={() => {
          console.log("Deleted")
          deleteContact(id)}}>
          <FontAwesomeIcon icon={faUserXmark} className="text-red-400" />
        </button>
      </div>
      <div className="col-span-2 text-justify">{desc}</div>
    </div>
  );
};

export default Card;
