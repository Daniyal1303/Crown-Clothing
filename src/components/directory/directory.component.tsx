import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss'

type CategoryObject =  {
    id:number,
    title:string,
    imageUrl: string,
  }
 

const Directory = (props: {categories:Array<CategoryObject>}) => {

    const {categories} = props;
    
    return(

        <div className="directory-container">
        {categories.map((category:CategoryObject) => (
          <CategoryItem key={category.id} category={category} />
        ))}
        
      </div>
    )
   
}

export default Directory;
