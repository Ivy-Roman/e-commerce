import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductHd from '../components/ProductHd';
import ProductMd from '../components/ProductMd';
import { ShopContext } from '../context/ShopContext';
import ProductDescription from '../components/ProductDescription';

const Product = () => {
    
    const { all_products } = useContext(ShopContext);
    const { productId } = useParams();
    console.log("productId: ", productId);

  const product = all_products.find((e)=> e._id === productId);
  if(!product) {
    return <div className='h1 pt-28'>product not found</div>
    // or redirect the user to a 404 page
  }

  return (
    <section className='max-padd-container py-20'>
      <div>
        <ProductHd product={product}/>
        <ProductMd product={product}/>
        <ProductDescription />
      </div>
    </section>
  )
}

export default Product