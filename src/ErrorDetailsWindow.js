import React, { useState } from "react";

const ErrorDetailsWindow = ({ isOpen, toggleModal, item }) => {

  const priortyCss = item.priority === "H" ? 'bg-red-400'  : item.priority === "M" ? 'bg-yellow-400' : 'bg-green-400';
  const severityCss = item.severity === "H" ? 'bg-red-400' :  item.severity === "M" ? 'bg-yellow-400' : 'bg-green-400';
  const statusCss =  item.status == -1 ? "bg-gray-300"  : item.status == 0 ? "bg-orange-300" : "bg-green-300";
  
  return (
    <div className="bg-gray-100 p-6 h-full insideofarea">
      <div
        className={`fixed top-0 right-0 w-1/3 xs:w-7/12 h-full bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">
            {item.tracking} Error Details
          </h2>
          <div className="text-xs space-x-2 text-black font-bold">
            <span className={`${severityCss} p-[6px] rounded-xl`}>Severity</span>
            <span className={`${priortyCss} p-[6px] rounded-xl `}>Priority</span>
            <span className={`${statusCss} p-[6px] rounded-xl `}>Status</span>
            </div>
          <button
            onClick={() => toggleModal()}
            className="text-xl font-semibold"
          >
            &times;
          </button>
        </div>
        <div className="p-4 h-auto w-full">
          <div className="text-end">
            <ul>
              <li className="text-sm font-bold">
                Date Found: <span className="text-sm font-normal">12.12.2024</span>
              </li>
              <li className="text-sm font-bold">
                Assagiment: <span className="text-sm font-normal">Emin Arslan</span>
              </li>
            </ul>
          </div>
          <p className="bg-red-200 p-4 w-full overflow-hidden overflow-ellipsis whitespace-pre-wrap h-auto">
              {item.description}
          </p>
        </div>
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">
            Added Files            
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ErrorDetailsWindow;
