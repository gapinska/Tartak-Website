import React from "react"
import ProductItem from "./ProductItem"

const ProductsList = (props) =>
  props.productsData.product.map((product) => (
    <ProductItem
      key={product.id}
      name={product.name}
      productImg={product.productImg}
    />
  ))

export default ProductsList
