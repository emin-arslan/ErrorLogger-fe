import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import ErrorDetailsWindow from './ErrorDetailsWindow'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState({});
  const [selectedRow, setSelectedRow] = useState({});

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      const isOutside = !event.target.closest(".insideofarea");
      if (isOutside) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Container  isOpen={isOpen} toggleModal={toggleModal} setItem={setItem} setSelectedRow={setSelectedRow}  selectedRow={selectedRow}/>
      <ErrorDetailsWindow  isOpen={isOpen} toggleModal={toggleModal} item={item}/>
    </div>
  )
}

export default App