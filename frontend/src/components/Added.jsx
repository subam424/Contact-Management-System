import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Added = () => {
  return (
    <div className="flex flex-col absolute right-0 p-3.5 bg-green-200 opacity-90 rounded-md w-2xs text-lg text-zinc-900">
      <span><FontAwesomeIcon icon={faCircleCheck} /> Yayy!! 🎉</span>
      <span className="pl-6">Contact added successfully</span>
    </div>
  );
};

export default Added;
