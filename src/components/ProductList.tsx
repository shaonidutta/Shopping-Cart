import React from 'react'
import '../css/ProductList.css'
import { Box } from '@mui/material';

interface ProductListProps {
  productImage: string;
}
const ProductList: React.FC<ProductListProps> = ({productImage}) => {
  return (
    <Box className="product-list">
      <img src={productImage} alt="Product" className="product-image" />
    </Box>
  )
}

export default ProductList