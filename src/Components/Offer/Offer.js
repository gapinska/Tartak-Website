import "./Offer.scss"
import React, { Component } from "react"
import products from "./../../assets/products.json"
import ProductsList from "./ProductsList"
import CategoryProducts from "./CategoryProducts"

const productsData = products,
  categoryProducts = products["category-products"]

class Offer extends Component {
  state = {
    categoryProducts: categoryProducts,
  }
  render() {
    console.log(categoryProducts)
    return (
      <>
        <div className="products-container">
          <ProductsList productsData={productsData} />
        </div>
        <div className="category-products">
          <CategoryProducts categoryProducts={this.state.categoryProducts} />
        </div>
      </>
    )
  }
}

export default Offer
