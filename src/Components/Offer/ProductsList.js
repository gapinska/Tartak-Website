import React from "react"
import ProductItem from "./ProductItem"

const ProductsList = (props) =>
  props.productsData.product.map((product) => (
    <ProductItem name={product.name} productImg={product.productImg} />
  ))

export default ProductsList
