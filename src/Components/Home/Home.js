import "./Home.scss"
import React from "react"
import Img1 from "../../img/bg-img-1.jpg"
import Product1 from "../../img/product-1.jpg"
import Product2 from "../../img/product-2.jpg"
import Product3 from "../../img/product-3.jpg"
import Product4 from "../../img/product-4.jpg"
import Product5 from "../../img/product-5.jpg"
import Product6 from "../../img/product-6.jpg"
import WoodImg from "../../img/wood-img.jpg"
import Banner1 from "../../img/banner-1.jpg"
import Banner2 from "../../img/banner-2.jpg"
import Banner3 from "../../img/banner-3.jpg"

const Home = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="container-img">
          <img src={Img1} alt="" />
        </div>
      </div>
      <div className="container-1">
        <div className="product-icon product-icon-1">
          <img src={Product1} alt="" />
          <div className="product-title">
            <span className="title">DESKA ELEWACYJNA</span>
          </div>
        </div>
        <div className="product-icon product-icon-2">
          <img src={Product2} alt="" />
          <div className="product-title">
            <span className="title">DESKA PODBICIOWA</span>
          </div>
        </div>

        <div className="product-icon product-icon-3">
          <img src={Product3} alt="" />

          <div className="product-title">
            <span className="title">DESKA OKAPOWA</span>
          </div>
        </div>

        <div className="product-icon product-icon-4">
          <img src={Product4} alt="" />
          <div className="product-title">
            <span className="title">DESKA TARASOWA</span>
          </div>
        </div>

        <div className="product-icon product-icon-5">
          <img src={Product5} alt="" />
          <div className="product-title">
            <span className="title">DESKA PODŁOGOWA</span>
          </div>
        </div>

        <div className="product-icon product-icon-6">
          <img src={Product6} alt="" />
          <div className="product-title">
            <span className="title">DESKA SZALUNKOWA</span>
          </div>
        </div>

        <div className="content-1"></div>
      </div>
      <div className="content-2">
        <img className="wood-img" src={WoodImg} alt="" />
        <div className="content-2-text">
          DREWNO Z POLSKICH LASÓW{" "}
          <span className="content-2-text-1">NAJWYŻSZEJ JAKOŚCI</span>
        </div>
      </div>
      <div className="content-3">
        <div className="box box-1">
          <img src={Banner1} alt="" />
        </div>
        <div className="box box-2">
          <header className="content-3-header">ZAUFAJ TRADYCJI</header>
          <p className="content-3-text">
            Praca z drewnem to nasza pasja.
            <br />
            Znamy je i rozumiemy, to warunek najwyższej jakości <br />i 100%
            zadowolenia naszych klientów.
          </p>
        </div>
        <div className="box box-3">
          <img src={Banner2} alt="" />
        </div>
        <div className="box box-4">
          <header className="content-3-header">PROFESJONALNE DORADZTWO</header>
          <p className="content-3-text">
            Zapewniamy profesjonalne doradztwo <br />i konsultacje w temacie
            technologii drewna. <br />
            Możesz na nas polegać.
          </p>
        </div>
        <div className="box box-5">
          <img src={Banner3} alt="" />
        </div>
        <div className="box box-6">
          <header className="content-3-header">SOLIDNE WYKONANIE</header>
          <p className="content-3-text">
            Tartak Lorki to przede wszystkim pełen profesjonalizm, <br />
            precyzja wykonania i pasja tworzenia. <br />
            Szanujemy naturę i umiejętnie korzystamy z jej dobrodziejstw <br />w
            oparciu o najnowsze technologie.
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="menu">
          <ul className="info-container-1">
            <li className="list-item">
              <a href="#home">Home</a>
            </li>
            <li className="list-item">
              <a href="#o-nas">O nas</a>
            </li>
            <li className="list-item">
              <a href="#produkty">Produkty</a>
            </li>
            <li className="list-item">
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </div>
        <header className="brand-name">TARTAK LORKI</header>
      </div>
    </div>
  )
}

export default Home
