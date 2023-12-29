'use client'
import { faGear, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FolderBtn = () => {
  return (
    <div className=" flex  gap-2    px-2 cursor-pointer">
        <FontAwesomeIcon
          icon={faGear}
          className="md:h-6 h-3 bg-[#852E2C]  text-white rounded-full p-2"
        />
        <FontAwesomeIcon
          icon={faPen}
          className="md:h-6 h-3 bg-[#852E2C] text-white rounded-full p-2"
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="md:h-6 h-3 bg-[#852E2C] text-white rounded-full p-2"
        />
      </div>
  )
}

export default FolderBtn