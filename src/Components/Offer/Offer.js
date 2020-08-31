import "./Offer.scss"
import React, { Component } from "react"
import products from "./../../assets/products.json"
import ProductsList from "./ProductsList"

const productsData = products

class Offer extends Component {
  state = {
    products: productsData,
  }

  render() {
    return (
      <div className="products-container">
        <ProductsList
          products={this.state.products}
          productsData={productsData}
        />
      </div>
    )
  }
}

export default Offer
