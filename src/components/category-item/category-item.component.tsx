import React from 'react';
import './category-item.styles.scss'

type CategoryObject =  {
    id:number,
    title:string,
    imageUrl: string,
  }
 

const CategoryItem = (props: {category:CategoryObject} ) => {
    const {imageUrl , title} = props.category;
    return (
        <div  className="category-container">
          <div className="background-image" style={{ 
            backgroundImage:`url(${imageUrl})`
            }}/>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>

    )
}

export default CategoryItem