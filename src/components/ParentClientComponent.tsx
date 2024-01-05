'use client'
import React, { useState } from 'react'
import { CardData } from '../../types'
import Categories from './Categories'
import CreateCatBtn from './CreateCatBtn'
import FolderActions from './FolderActions'
import FolderCat from './FolderCat'
import SearchComponent from './SearchComponent'

const ParentClientComponent = ({foldercategories,categories,folders}:{foldercategories:CardData[],categories:CardData[],folders:any}) => {
    const [cat, setCat] = useState(categories)
    const [foldercat, setFolderCat] = useState(foldercategories);
    const [search, setSearch] = useState('');
  return (
    <>
    
    <SearchComponent id={''} />
      <CreateCatBtn />
      <div className="mx-auto  sm:w-[600px]  w-[350px] lg:w-[800px] mt-5 border-4 rounded-xl border-[#852E2C] p-5">
        <FolderActions folders={folders} />
        <FolderCat id={folderid} cat={cat} />
      </div>
      <Categories />

    </>
  )
}

export default ParentClientComponent