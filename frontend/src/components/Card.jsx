import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faUserXmark,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({role='Friend', showUpdate, setShowUpdate}) => {

  const toggle = () => {
    setShowUpdate(!showUpdate);
  };

  return (
    <div className="bg-slate-600 h-full w-full text-slate-100 p-5 grid grid-cols-2 gap-y-10 rounded-lg shadow-sm">
      <div className="flex gap-3 items-center text-3xl md:text-5xl justify-start">
        <FontAwesomeIcon icon={faCircleUser}/>
        <div className="flex flex-col">
          <h1 className="text-lg md:text-xl">Full Name</h1>
          <h4 className="text-slate-300 text-sm">{role}</h4>
        </div>
      </div>
      <div className="flex gap-3 items-center text-xl justify-end">
        <button className="cursor-pointer" onClick={toggle}>
          <FontAwesomeIcon icon={faUserPen} className="text-sky-400"/>
        </button>
        <button className="cursor-pointer">
          <FontAwesomeIcon icon={faUserXmark} className="text-red-400"/>
        </button>
      </div>
      <div className="col-span-2 text-justify">
        Description
      </div>
    </div>
  );
};

export default Card;
