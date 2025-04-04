
import { useContext, useEffect, useState } from "react"
import '../../../css/informationCss/assets.css'
import { Navbar } from "../../../component/navbar"
import AuthContext from "../../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import AllDataContext from "../../../context/Alldata"
import { Footer } from "../../../component/footer"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import meta5 from '../../../img/meta5.png'
import tradeMetal from '../../../img/trade-metals.png'
import tradeForex from '../../../img/trade-forex.png'
import trdaeSharedIndex from '../../../img/trade-pie.png'
import tradeStocks from '../../../img/trade-stocks.png'
import tradeEnergy from '../../../img/trade-oil-barrel.png'
import tradeCrypto from  '../../../img/trade-cryptocurrencies.png'
import commodites from '../../../img/trade-commondities.png'
import icon from '../../../img/trade-shared-index.png'
import laptopChart from '../../../img/laptop-chart.jpg'
export const Meta5Web = () =>{
  const { authTokens, 
    overlay,
    formatCurrency,
    formatName,
    roundUp,
    disablebutton, 

  } = useContext(AuthContext)

  const [step1Dropdown, setStep1Dropdown] = useState(false)
  const [step2Dropdown, setStep2Dropdown] = useState(false)
  const [step3Dropdown, setStep3Dropdown] = useState(false)


  const toggleStep1 = () =>{
    setStep1Dropdown(!step1Dropdown)
    setStep2Dropdown(false)
    setStep3Dropdown(false)
    
  }

  const toggleStep2 = () =>{
    setStep2Dropdown(!step2Dropdown)
    setStep1Dropdown(false)
    setStep3Dropdown(false)

  }

  const toggleStep3 = () =>{
    setStep3Dropdown(!step3Dropdown)
    setStep1Dropdown(false)
    setStep2Dropdown(false)

  }

  const [isDashboardActive, setIsDashboardActive] = useState(false)
  const [dashLink, setDashLink] = useState(false)
   useEffect(() =>{
     if(sessionStorage.getItem('tokenActive') === 'true'){
       setDashLink(sessionStorage.getItem('dashLink'))
       setIsDashboardActive(true)
     }
 
   }, [])


  return(
    <div>
      <div className="position-sticky1">
        <Navbar/>
      </div>


      <div>
        <div className="light-background2 mb-3 py-2">
          <div className="container-lg">
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / Trading Platform / MT5 Web Terminal</p>
          </div>
        </div>

        <section className="site-section-container">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="text-center">
                  <p className="lg-text font-weight-700 pb-3">Trade Forex from anywhere on MetaTrader WebTrader!</p>
                  <p className="light-text-2">MetaTrader WebTrader offers  fast order execution capabilities of MetaTrader with ease and convenience of being a web-based application. MetaTrader WebTrader is a user friendly web-based trading platform allowing you to enjoy trading in the IC Markets Global trading environment with no dealing desk from anywhere in the world. MetaTrader WebTrader has the same tight spreads, Level II Pricing, and one-click trading as the MetaTrader desktop version along with features such as a personalized trader dashboard to allow monitoring of your positions at a glance.</p>
                  <div className="pt-4">
                    <Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn px-5">Start Trading</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section-container">
          <div className="light-background4 py-5">
            <div className="container-lg">
              <div className="row g-4" >
                <div className="col-md-7">
                  <div>
                    <p className="site-primary-text font-weight-700">MetaTrader WebTrader</p>
                    <p className="site-header font-weight-700 pt-2 pb-3">Functionality of Web Trader</p>
                    <p className="light-text-2">Web Trader is almost identical to the desktop MetaTrader. This ensures the web platform's high reliability and compatibility with the entire MetaTrader ecosystem. The application is safe to use - all transmitted data is securely encrypted</p>

                    <div className="pt-3">
                      <div className="d-flex  py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                        <p className="ps-3 font-weight-700">One-click trading</p>
                      </div>

                      <div className="d-flex  py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                        <p className="ps-3 font-weight-700">Multilingual interface</p>
                      </div>

                      <div className="d-flex  py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                        <p className="ps-3 font-weight-700">Fully customized charts</p>
                      </div>

                      <div className="d-flex py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                        <p className="ps-3 font-weight-700">Stop loss/take operations</p>
                      </div>
                      <div className="d-flex py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                        <p className="ps-3 font-weight-700">Indicators</p>
                      </div>
                      


                      
                    </div>
                  </div>
                </div>

                <div className="col-md-5">
                  <div>
                    <img width='100%' src={meta5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="site-section-container">
          <div className="container-lg responsive-centralized-text">
            <div>
              <p className="site-header font-weight-700 text-center  uppercase pb-5">Why Trade Via MetaTrader 5 Web Terminal</p>

              <div className="row g-3">
                <div className="col-lg-4 col-md-6">
                  <div className="site-boxes p-5">
                    <p className="sm-text font-weight-700 uppercase pb-4 mb-1  site-boxes-header">Automated Trading</p>
                    <p className="site-boxes-text site-boxes-text">With mt5 webtrader you can set up your own automated trading algorithms.</p>
                  </div>

                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="site-boxes p-5">
                    <p className="sm-text font-weight-700 uppercase pb-4 mb-1  site-boxes-header">More Than 50 FX Pairs</p>
                    <p className="site-boxes-text site-boxes-text">Trade forex with CypherBlockSage MT5 Webtrader spreads starting at just 0.3 pips, long and short.</p>
                  </div>

                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="site-boxes p-5">
                    <p className="sm-text font-weight-700 uppercase pb-4 mb-1  site-boxes-header">Customizable charts</p>
                    <p className="site-boxes-text site-boxes-text">The mt5 web platform gives you the option to adjust trading charts to your own preferences.</p>
                  </div>

                </div>


              </div>

              <div className="d-flex justify-content-center pt-5">
                <Link to='/register' className="site-btn px-5">Open Live Account</Link>
              </div>
            </div>
          </div>

        </section>


        <section className="site-section-container">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="text-center col-xl-6 col-lg-8 col-md-10">
                <p className="site-header pb-4 font-weight-700">Have more questions about Metatrader 5?</p>
                <p className="light-text2">If you have more questions about Metatrader 5, feel free to contact our customer support team that will gladly answer any questions you may have about the platform and how to register there.</p>
              </div>
            </div>

            <div className="pt-5">
              <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep1}>
                <div className="d-flex justify-content-between font-weight-700  cursor-pointer">
                  <p className="ps-5">  How to trade with Metatrader 5 via any browser?   </p>
                  <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                </div>
                
                <div className={` dropdown-content  ${step1Dropdown ? "slide-in" : "slide-out"}`}>
                  <p className="ps-5 pt-4">You can easily use Metatrader5 through our website directly without installing any applications. All you need to do is log in to the site through a preferred browser.</p>
                </div>
              </div>

              <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep2}>
                <div className="d-flex justify-content-between font-weight-700  cursor-pointer">
                  <p className="ps-5">  How Exactly Does Metatrader 5 work?    </p>
                  <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                </div>
                
                <div className={` dropdown-content  ${step2Dropdown ? "slide-in" : "slide-out"}`}>
                  <p className="ps-5 pt-4">Metatrader 5 is one of the most reliable trading markets in the world. Metatrader 5 facilitates access to the financial markets and splits the platform between a server and client module. The server model is for licensed brokers, and the client module is for traders.</p>
                </div>
              </div>

              <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep3}>
                <div className="d-flex justify-content-between font-weight-700  cursor-pointer">
                  <p className="ps-5"> Is Metatrader 5 a legitimate platform?   </p>
                  <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                </div>
                
                <div className={` dropdown-content  ${step3Dropdown ? "slide-in" : "slide-out"}`}>
                  <p className="ps-5 pt-4">Yes, yes, yes. As a trading platform, Metatrader 5 has been around for over a decade and has helped hundreds of thousands of traders make fortunes.</p>
                </div>
              </div>
            </div>

          </div>


        </section>


        <section className="site-section-container">
            <div className="light-background4 py-5">
              <div className="container-lg">
                <div className="text-center font-weight-700 site-header">
                  <p>Tradable Assets <br /> Invest in Currencies, CFD's, Cryptocurrencies, Forex e.t.c</p>
                </div>

                <div className="home-trade-boxes-container mt-5">
                  <Link to='/metals/' className="Link home-trade-boxes">
                    <div className="">
                      <div className="d-flex justify-content-center">
                        <img src={tradeMetal} alt="" width='50px'/>
                      </div>
                      <p className="light-text font-weight-700 pt-3 text-center">Precious Metals</p>
                    </div>
                  </Link>

             
                  <Link to='/forex/' className="Link home-trade-boxes">
                    <div className="">
                      <div className="d-flex justify-content-center">
                        <img src={tradeForex} alt="" width='50px'/>
                      </div>
                      <p className="light-text font-weight-700 pt-3 text-center">Forex</p>
                    </div>
                  </Link>


                  <Link to='/indexes/' className="Link home-trade-boxes">
                    <div className="">
                      <div className="d-flex justify-content-center">
                        <img src={trdaeSharedIndex} alt="" width='50px'/>
                      </div>
                      <p className="light-text font-weight-700 pt-3 text-center">Shared Indexes</p>
                    </div>
                  </Link>

                  <Link to='/stock-indices/' className="Link home-trade-boxes">
                    <div className="">
                      <div className="d-flex justify-content-center">
                        <img src={tradeStocks} alt="" width='50px'/>
                      </div>
                      <p className="light-text font-weight-700 pt-3 text-center">Stocks</p>
                    </div>
                  </Link>

                  <Link to='/energy/' className="Link home-trade-boxes">
                    <div className="">
                      <div className="d-flex justify-content-center">
                        <img src={tradeEnergy} alt="" width='50px'/>
                      </div>
                      <p className="light-text font-weight-700 pt-3 text-center">Energy Carriers</p>
                    </div>
                  </Link>

                  <Link to='/crypto/' className="Link home-trade-boxes">
                    <div className="">
                      <div className="d-flex justify-content-center">
                        <img src={tradeCrypto} alt="" width='50px'/>
                      </div>
                      <p className="light-text font-weight-700 pt-3 text-center">Cryptocurrencies</p>
                    </div>
                  </Link>

                  <Link to='/commodities/' className="Link home-trade-boxes">
                    <div className="">
                      <div className="d-flex justify-content-center">
                        <img src={commodites} alt="" width='50px'/>
                      </div>
                      <p className="light-text font-weight-700 pt-3 text-center">Commodities</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
        </section>



        <Footer />
      </div>

    </div>
  )
}