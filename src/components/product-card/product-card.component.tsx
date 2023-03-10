import "./product-card.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
// type  = () => void;
interface productData {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface productProps {
  key: number;
  product: productData;
}



const ProductCard = ({ product }: productProps) => {

    const {name,imageUrl,price} = product ;

   const {addItemToCart} =  useContext(CartContext)

   const addProductToCart = () =>  addItemToCart(product);
    
    return (
      
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>Add to card</Button>
    </div>
      
  );
    
}


export default ProductCard;
