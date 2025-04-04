import { useContext, useEffect, useState } from "react"
import '../../../css/informationCss/assets.css'
import { Navbar } from "../../../component/navbar"
import AuthContext from "../../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import AllDataContext from "../../../context/Alldata"
import { Footer } from "../../../component/footer"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import tradeMetal from '../../../img/trade-metals.png'
import tradeForex from '../../../img/trade-forex.png'
import trdaeSharedIndex from '../../../img/trade-pie.png'
import tradeStocks from '../../../img/trade-stocks.png'
import tradeEnergy from '../../../img/trade-oil-barrel.png'
import tradeCrypto from  '../../../img/trade-cryptocurrencies.png'
import commodites from '../../../img/trade-commondities.png'

export const Forex = () =>{
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
            <p><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / Assest / forex</p>
          </div>
        </div>

        <section className="site-section-container">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="text-center">
                  <p className="lg-text font-weight-700">Trade Forex Like A Pro</p>
                  <p className="light-text-2">Join the thousands of traders that have already started turning a profit with AmaniLightEquity. Gain access to over 40 CFDs on the global currency pairs. Enjoy the advantage of working with fast deposits and withdrawals, as well as tight spreads. Trade on the world's most popular platform MetaTrade5.</p>
                  <div className="pt-4">
                    <Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn">Start Trading</Link>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </section>

        <section className="site-section-container">
          <div className="light-background3 py-4 responsive-centralized-text">
            <div className="container-lg">
              <p className="site-header font-weight-700 text-center py-4">WHAT IS FOREX TRADING</p>
              <div className="row g-4 pb-4">
                <div className="col-md-6">
                  <div>
                    <p>Forex trading, also known as foreign exchange trading, involves buying and selling currencies on the global market with the aim of making a profit. It is the largest and most liquid financial market in the world, with a daily trading volume exceeding $6 trillion. Participants in forex trading range from central banks and financial institutions to individual retail traders, all seeking to capitalize on fluctuations in currency values. Trading occurs in currency pairs, such as EUR/USD or GBP/JPY, where the value of one currency is quoted against another. </p>

                  </div>
                </div>

                <div className="col-md-6">
                  <div>
                    <p>Traders employ various strategies, including technical analysis, fundamental analysis, and algorithmic trading, to identify opportunities in the market. The forex market is known for its high leverage, which can amplify both gains and losses, making risk management an essential aspect of trading. With the right knowledge, tools, and discipline, forex trading offers individuals and businesses the opportunity to diversify their investment portfolios and potentially achieve financial growth in a dynamic and fast-paced market.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div>
                    <p>wide range of factors, including economic data, geopolitical events, interest rates, and market sentiment. Forex trading is typically conducted over-the-counter (OTC) through electronic trading platforms, allowing traders to operate 24 hours a day, five days a week, across major trading sessions like those in London, New York, and Tokyo. </p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

        <section className="site-section-container">
          <div className="container-lg responsive-centralized-text">
            <div>
              <p className="site-header font-weight-700 text-center  uppercase pb-5">Why Trade Via AmaniLightEquity</p>

              <div className="row g-3">
                <div className="col-lg-4 col-md-6">
                  <div className="site-boxes p-5">
                    <p className="sm-text font-weight-700 uppercase pb-4 mb-1  site-boxes-header">Trusted Broker with a Global Presence</p>
                    <p className="site-boxes-text site-boxes-text">AmaniLightEquity has built a strong reputation by providing top-tier brokerage services to thousands of traders worldwide, ensuring transparency, reliability, and client satisfaction.</p>
                  </div>

                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="site-boxes p-5">
                    <p className="sm-text font-weight-700 uppercase pb-4 mb-1  site-boxes-header">Advanced Security & Fund Protection</p>
                    <p className="site-boxes-text site-boxes-text">At AmaniLightEquity, we prioritize the safety of our clients' funds through strict regulatory compliance, negative balance protection, and secure partnerships with Tier 1 banks.</p>
                  </div>

                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="site-boxes p-5">
                    <p className="sm-text font-weight-700 uppercase pb-4 mb-1  site-boxes-header">Cutting-Edge Trading Technology</p>
                    <p className="site-boxes-text site-boxes-text">We offer an intuitive and fast trading platform equipped with advanced tools, real-time market data, and seamless execution to enhance your trading experience.</p>
                  </div>

                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="site-boxes p-5">
                    <p className="sm-text font-weight-700 uppercase pb-4 mb-1  site-boxes-header">Diverse Investment Opportunities</p>
                    <p className="site-boxes-text site-boxes-text">AmaniLightEquity provides access to Forex, cryptocurrencies, commodities, and stocks, allowing traders to diversify their portfolios and maximize their earning potential.</p>
                  </div>

                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="site-boxes p-5">
                    <p className="sm-text font-weight-700 uppercase pb-4 mb-1  site-boxes-header">Dedicated Customer Support</p>
                    <p className="site-boxes-text site-boxes-text">Our expert support team is available 24/5 to assist traders with any inquiries, ensuring a smooth and hassle-free trading experience for all our clients.</p>
                  </div>

                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="site-boxes p-5">
                    <p className="sm-text font-weight-700 uppercase pb-4 mb-1  site-boxes-header">MT5 Trading Platform</p>
                    <p className="site-boxes-text site-boxes-text">AmaniLightEquity gives its clients the chance to trade on the world's most accredited and heavily regulated platform, MetaTrader 5.</p>
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
                <p className="site-header pb-4 font-weight-700">FAQ When It Comes To Forex</p>
                <p className="light-text2">If you still have a load of questions in regards to forex and how to profit from the forex market, do not hesitate to get in contact with our customer support team that will gladly answer any questions you have.</p>
              </div>
            </div>

            <div className="pt-5">
              <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep1}>
                <div className="d-flex justify-content-between font-weight-700  cursor-pointer">
                  <p className="ps-5">When Can I Trade Forex</p>
                  <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                </div>
                
                <div className={` dropdown-content  ${step1Dropdown ? "slide-in" : "slide-out"}`}>
                  <p className="ps-5 pt-4">The forex market is open 24 hours a day Monday through Friday and is traded globally amongst all of the big financial players on the market.</p>
                </div>
              </div>

              <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep2}>
                <div className="d-flex justify-content-between font-weight-700  cursor-pointer">
                  <p className="ps-5"> Which Platform Is The Best When It Comes To Forex Trading?  </p>
                  <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                </div>
                
                <div className={` dropdown-content  ${step2Dropdown ? "slide-in" : "slide-out"}`}>
                  <p className="ps-5 pt-4">As of today, MetaTrader 5 are known for being the most popular trading platforms on the market. Besides Meta platforms, AmaniLightEquity are all highly recommended with over 100 unique tools and add-ons for its traders to use.</p>
                </div>
              </div>

              <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep3}>
                <div className="d-flex justify-content-between font-weight-700  cursor-pointer">
                  <p className="ps-5">  How To Start Trading Forex With AmaniLghtEquity?  </p>
                  <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                </div>
                
                <div className={` dropdown-content  ${step3Dropdown ? "slide-in" : "slide-out"}`}>
                  <p className="ps-5 pt-4">To start trading on AmaniLightEquity all you have to do is go through the registration process on the website and a trading professional will reach out to you to guide you through your first trades. It's literally that simple!</p>
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