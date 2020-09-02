import "./Offer.scss"
import React, { Component } from "react"
import products from "./../../assets/products.json"
import CategoryProducts from "./CategoryProducts"
import ProductItem from "./ProductItem"

const productsData = products,
  categoryProductsData = products["category-products"]

class Offer extends Component {
  state = {
    categoryProducts: categoryProductsData,
    productsData: products,
    category: "all",
  }

  handleClick = (category) => {
    if (category === "all") {
      this.setState({
        categoryProducts: categoryProductsData,
      })
    } else {
      let newCategoryProductsData = categoryProductsData.filter(
        (product) => product.category === category
      )
      this.setState({
        categoryProducts: newCategoryProductsData,
      })
    }
  }
  render() {
    const productsList = productsData.product.map((product) => (
      <ProductItem
        key={product.id}
        name={product.name}
        productImg={product.productImg}
        category={product.category}
        onClick={this.handleClick.bind(this, product.category)}
      />
    ))
    return (
      <>
        <div className="products-container">{productsList}</div>
        <div className="category-products">
          <CategoryProducts categoryProducts={this.state.categoryProducts} />
        </div>
      </>
    )
  }
}

export default Offer
