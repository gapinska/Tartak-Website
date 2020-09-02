import React from "react"

const ProductItem = (props) => {
  return (
    <div
      className="product-container"
      category={props.category}
      onClick={props.onClick}
    >
      <img src={"products/" + props.productImg} alt="" />
      <header>{props.name}</header>
    </div>
  )
}

export default ProductItem
