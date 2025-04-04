
import { useContext, useEffect, useState } from "react"
import '../../../css/informationCss/assets.css'
import { Navbar } from "../../../component/navbar"
import AuthContext from "../../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import AllDataContext from "../../../context/Alldata"
import { Footer } from "../../../component/footer"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import meta5 from '../../../img/meta5 (1).png'
import tradeMetal from '../../../img/trade-metals.png'
import tradeForex from '../../../img/trade-forex.png'
import trdaeSharedIndex from '../../../img/trade-pie.png'
import tradeStocks from '../../../img/trade-stocks.png'
import tradeEnergy from '../../../img/trade-oil-barrel.png'
import tradeCrypto from  '../../../img/trade-cryptocurrencies.png'
import commodites from '../../../img/trade-commondities.png'
import icon from '../../../img/trade-shared-index.png'
import laptopChart from '../../../img/laptop-chart.jpg'
export const Meta5Desktop = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / Trading Platform / MT5 Desktop</p>
          </div>
        </div>

        <section className="site-section-container">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="text-center">
                  <p className="lg-text font-weight-700 pb-3">Experience the next Generation of MetaTrader 5 with AmaniLightEquity</p>
                  <p className="light-text-2">The new platform is an updated and improved version of its predecessor which has long been the industry standard for traders around the world. AmaniLightEquity is proud to present the next generation MetaTrader 5 platform, designed to offer everything you need to trade the markets. MetaTrader 5’s advanced charting technology coupled with sophisticated order management tools help you to monitor and control your positions quickly and efficiently. It is a powerful platform packed with brand new features aimed at improving your trading experience. It is available on both of the AmaniLightEquity account types: Raw Pricing and Standard.</p>
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
                    <p className="site-primary-text font-weight-700">MetaTrader 5</p>
                    <p className="site-header font-weight-700 pt-2 pb-3">About MetaTrader 5</p>
                    <p className="light-text-2">The new platform is an updated and improved version of its predecessor which has long been the industry standard for traders around the world. Its advanced charting technology, together with sophisticated order management tools allow to monitor and control your positions efficiently. <br /> <br /> It is a powerful platform packed with brand new features aimed at improving your trading experience. It is available on AmaniLightEquity Raw Pricing and Standard account types.</p>

                    <div className="pt-3">
                      <div className="d-flex  py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                        <p className="ps-3 font-weight-700">Mobility</p>
                      </div>

                      <div className="d-flex  py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                        <p className="ps-3 font-weight-700">Analytics - DOM</p>
                      </div>

                      <div className="d-flex  py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                        <p className="ps-3 font-weight-700">MQL5</p>
                      </div>

                      <div className="d-flex py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                        <p className="ps-3 font-weight-700">Advanced Order types & execution</p>
                      </div>
                      <div className="d-flex py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                        <p className="ps-3 font-weight-700">Improved Strategy Tester for EAs</p>
                      </div>
                      
                      <div className="pt-4">
                        <a className="site-inverse-btn px-5"  href="https://download.mql5.com/cdn/web/14458/mt5/nsfxltd5setup.exe" target="_blank"><i class="fas fa-desktop pr-3 sm-text"></i> MetaTrader 5 for PC</a>
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
              <p className="site-header font-weight-700 text-center  uppercase pb-5">Why Trade With AmaniLightEquity on MetaTrader 5?</p>

              <div className="row g-3">
                <div className="col-lg-4 col-md-6">
                  <div className="site-boxes p-5">
                    <p className="sm-text font-weight-700 uppercase pb-4 mb-1  site-boxes-header">Customer/Technical Support</p>
                    <p className="site-boxes-text site-boxes-text">Access to MT5 platform specialists 24/5</p>
                  </div>

                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="site-boxes p-5">
                    <p className="sm-text font-weight-700 uppercase pb-4 mb-1  site-boxes-header">More Than 50 FX Pairs To Trade On</p>
                    <p className="site-boxes-text site-boxes-text">Long or short, spreads starting from 0.3 pips</p>
                  </div>

                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="site-boxes p-5">
                    <p className="sm-text font-weight-700 uppercase pb-4 mb-1  site-boxes-header">Advanced Trading Platform</p>
                    <p className="site-boxes-text site-boxes-text">Enjoy the cutting-edge features of MetaTrader 5, including enhanced charting tools, multiple order types, and superior execution speeds.</p>
                  </div>

                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="site-boxes p-5">
                    <p className="sm-text font-weight-700 uppercase pb-4 mb-1  site-boxes-header">Multi-Asset Trading</p>
                    <p className="site-boxes-text site-boxes-text">Trade forex, commodities, indices, stocks, and cryptocurrencies all in one platform with advanced trading capabilities.</p>
                  </div>

                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="site-boxes p-5">
                    <p className="sm-text font-weight-700 uppercase pb-4 mb-1  site-boxes-header">Fast Order Execution</p>
                    <p className="site-boxes-text site-boxes-text">Benefit from lightning-fast trade execution speeds, minimizing slippage and ensuring optimal market entry and exit.</p>
                  </div>

                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="site-boxes p-5">
                    <p className="sm-text font-weight-700 uppercase pb-4 mb-1  site-boxes-header">Customizable Trading Tools</p>
                    <p className="site-boxes-text site-boxes-text">Utilize advanced indicators, automated trading strategies (EAs), and customizable charts to enhance your trading efficiency.</p>
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
                  <p className="ps-5"> How To Download Metatrader 5 To A Mac Device?   </p>
                  <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                </div>
                
                <div className={` dropdown-content  ${step1Dropdown ? "slide-in" : "slide-out"}`}>
                  <p className="ps-5 pt-4">You can easily download Metatrader 5 from our website in the “Trading platforms” tab. Once the download is complete, open up the XM.dmg file, and you will be taken to the login page.</p>
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