// ContextMenu.js
import React, { useState, useEffect, useRef } from 'react';

const ContextMenu = ({ options, position, onClose }) => {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      style={{ top: position.y, left: position.x }}
      className="absolute bg-white shadow-lg rounded-md py-2 z-50"
    >
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => {
            option.onClick();
            onClose();
          }}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default ContextMenu;
