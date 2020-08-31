import React from "react"
import CategoryProduct from "./CategoryProduct"

const CategoryProducts = (props) =>
  props.categoryProducts.map((product) => (
    <CategoryProduct
      key={product.id}
      name={product.name}
      feature={product.feature}
      onClick={props.onClick}
      category={props.category}
    />
  ))

export default CategoryProducts
