import "./AboutUs.scss"
import React from "react"
import Branch from "../../img/branch.png"

const AboutUs = () => {
  return (
    <div>
      <div className="slogan">
        TRADYCJA PRACY
        <br />Z DREWNEM OD <span>1994</span>
      </div>
      <div className="about-us-main-content">
        <div className="branch-container">
          <img className="branch" src={Branch} alt="" />
        </div>
        <div className="text about-us-text-1">
          <h3 className="about-us-brand-name">
            TARTAK LORKI <span>od 1994 r.</span>
          </h3>
          <h4 className="title">HISTORIA TARTAKU</h4>
          <p className="text-p">
            Historia Tartaku Lorki sięga 1994 r. Trzypokoleniowa tradycja pracy
            z drewnem, pasja i zamiłowanie oraz bezcenne doświadczenie to
            czynniki, które od lat wyróżniają nasz tartak.
          </p>
          <div className="text text-2">
            <h4 className="title">DOŚWIADCZENIE KILKU POKOLEŃ</h4>
            <p className="text-p">
              Tylko długoletnie doświadczenie może stworzyć solidny fundament
              dla nowoczesnych technologii i nowatorskich rozwiązań
              współczesnych czasów. Od lat jakość produktów i zadowolenie
              klientów są dla nas najważniejsze.
            </p>
          </div>
          <div className="text text-3">
            <h4 className="title">SOLIDNE FUNDAMENTY</h4>
            <p className="text-p">
              W poszanowaniu dla naszej historii i tradycji dokładamy wszelkich
              starań, aby Tartak Lorki dynamicznie się rozwijał, stawiając na
              profesjonalizm i najwyższą jakość.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
