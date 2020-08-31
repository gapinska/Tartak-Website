import React, { Component } from "react"

const ProductItem = (props) => {
  const path = "./../../img/products"
  console.log(props.productImg)
  return (
    <div className="product-container">
      {/* <img src="products/highwaist-1.jpg" alt="" /> */}
      <img src={"products/" + props.productImg} alt="" />
      <header>{props.name}</header>
    </div>
  )
}

export default ProductItem
