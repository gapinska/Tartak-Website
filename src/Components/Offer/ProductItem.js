import React from "react"

const ProductItem = (props) => {
  const path = "./../../img/products"
  return (
    <div className="product-container">
      <img src={"products/" + props.productImg} alt="" />
      <header>{props.name}</header>
    </div>
  )
}

export default ProductItem
