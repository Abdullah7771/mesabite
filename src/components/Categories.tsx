import React from 'react'
import { getCategories, getFolderCategories } from '../../services/card-service';
import { CardData } from '../../types';
import Card from './Card';

const Categories = async() => {
    const categories = await getCategories() as CardData[];
    console.log(categories)
      return (
        <>
        <div className=' mx-auto sm:w-[600px]  w-[350px] lg:w-[750px] mt-5  rounded-xl  '>
        {categories.map((card, index) => (
            <Card
              title={card.title}
              description={card.description}
              key={index}
              image={card.image}
              imgName={card.imgName}
              id={card.id}
              folder={true}
            />
          ))}

        </div>
      
        </>
      );
}

export default Categories