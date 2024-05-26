import React, { useState } from 'react'
import ErrorContentLayout from './ErrorContentLayout'

const Container = ({isOpen, toggleModal, setItem, setSelectedRow, selectedRow}) => {

  return (
    <div className='w-[65%] h-[calc(100vh-10vh)] mx-auto bg-[#c9b8a1] py-5 mt-10 rounded-xl'>
      <ErrorContentLayout isOpen={isOpen} toggleModal={toggleModal} setItem={setItem} setSelectedRow={setSelectedRow} selectedRow = {selectedRow}/>
    </div>
  )
}

export default Container
