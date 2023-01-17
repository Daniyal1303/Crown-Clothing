import { useContext } from 'react';
import './shop.styles.scss';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component'

interface productData {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }

const Shop = () => {

    const {products} = useContext(ProductsContext)


    return (
        <div className='products-container'>
            {(products).map((product:productData) => (
               <ProductCard key={product.id} product={product} /> 
            ))}
        </div>
    )
}

export default Shop;