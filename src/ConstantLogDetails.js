import React from 'react'

const ConstantLogDetails = ({userData}) => {
  return (
    <div className="flex items-center text-xs font-semibold">
    <div className="w-[50%]">
      <ul>
        <li>Filed on:</li>
        <li>Composed By:</li>
        <li>Employee Id #</li>
        <li>Signature:</li>
      </ul>
    </div>
    <div className="w-[50%]">
      <ul>
        <li>Log Approved By:</li>
        <li>Approved On:</li>
        <li>Signature:</li>
      </ul>
    </div>
  </div>
  )
}

export default ConstantLogDetails
