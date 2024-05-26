import React, { useState } from "react";
import ContextMenu from "./ContextMenu";

const TableRow = ({ isOpen, toggleModal, searchTerm, data , setItem, setSelectedRow, selectedRow}) => {

  const statusCss = (item) => item.status == -1 ? "bg-gray-300"  : item.status == 0 ? "bg-orange-300" : "bg-green-300";
  const titleTex = (item) =>  item.status == -1 ? "Pending"  : item.status == 0 ? "Working on it" : "Completed";

  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (event) => {
    event.preventDefault();
    setMenuPosition({ x: event.pageX, y: event.pageY });
    setMenuVisible(true);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  const menuOptions = [
    { label: 'Option 1', onClick: () => alert('Option 1 clicked') },
    { label: 'Option 2', onClick: () => alert('Option 2 clicked') },
    { label: 'Option 3', onClick: () => alert('Option 3 clicked') },
  ];

  const filteredData = data.filter(item =>
    Object.values(item).some(val =>
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => (
          part.toLowerCase() === highlight.toLowerCase() ? <span key={i} style={{ backgroundColor: 'orange'}}>{part}</span> : part
        ))}
      </span>
    );
  };

  return (
    <>
      {menuVisible && (
        <ContextMenu options={menuOptions} position={menuPosition} onClose={handleCloseMenu} />
      )}
      {filteredData.map(item => (
        <tr onClick={() => { 
          if(isOpen && selectedRow.tracking == item.tracking)
          {
            toggleModal(!isOpen)
          }
          else if(isOpen && selectedRow.tracking != item.tracking)
          {
            setItem(item);
          }
          else
          {
            setItem(item);
            toggleModal(!isOpen)
          }
          setSelectedRow(item)
          }} key={item.id} className="cursor-pointer">
          <td onContextMenu={handleContextMenu} className="py-2 px-4 border-b text-center">{highlightText(item.tracking, searchTerm)}</td>
          <td onContextMenu={handleContextMenu} className="py-2 px-4 border-b text-center ">{highlightText(item.description, searchTerm)}</td>
          <td onContextMenu={handleContextMenu} className="py-2 px-4 border-b text-center">{highlightText(item.datetime, searchTerm)}</td>
          <td onContextMenu={handleContextMenu} className="py-2 px-4 border-b text-center">{highlightText(item.assignment, searchTerm)}</td>
          <td onContextMenu={handleContextMenu} className="py-2 px-4 border-b text-center">{highlightText(item.severity, searchTerm)}</td>
          <td onContextMenu={handleContextMenu} className="py-2 px-4 border-b text-center">{highlightText(item.priority, searchTerm)}</td>
          <td onContextMenu={handleContextMenu} title={titleTex(item)} className="py-2 px-4 border-b"><span className={`w-5 h-5 flex rounded-full ${statusCss(item)}`}></span></td>
        </tr>
      ))}
    </>
  );
};


export default TableRow;
