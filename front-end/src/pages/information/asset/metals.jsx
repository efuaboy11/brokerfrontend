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
import icon from '../../../img/trade-shared-index.png'
export const Metals = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / Assest / Precious Metals</p>
          </div>
        </div>

        <section className="site-section-container">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="text-center">
                  <p className="lg-text font-weight-700 pb-3">Trading Precious Metals CFDs</p>
                  <p className="light-text-2">Trade CFDs on Spot metals and explore new trading opportunities with AmaniLightEquity today!</p>
                  <div className="pt-4">
                    <Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn">Start Trading</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section-container">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
               <p className="site-header font-weight-700 text-center pb-5">Popular Spot Metals - Invest in Spot Gold and Silver</p>
               <div className="box-shadow-2 dash-scroll-bar border-radius-5px">
                <table className="metals-table">
                  <thead>
                    <tr>
                      <th className="ps-5 py-2">Instrument</th>
                      <th>Spreads</th>
                      <th>Commission</th>
                      <th>Leverage (up to)</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="site-primary-text ps-5 font-weight-700 py-2">XAU/USD</td>
                      <td className="light-text-2">Floating from 1.5$</td>
                      <td className="light-text-2">8$/lot</td>
                      <td className="light-text-2">20</td>
                    </tr>

                    <tr>
                      <td className="site-primary-text ps-5 font-weight-700 py-2">XCU-Copper</td>
                      <td className="light-text-2">Floating from 3.3$</td>
                      <td className="light-text-2">0.5%/lot</td>
                      <td className="light-text-2">5</td>
                    </tr>

                    <tr>
                      <td className="site-primary-text ps-5 font-weight-700 py-2">XPB-Lead</td>
                      <td className="light-text-2">Floating from 2.2$</td>
                      <td className="light-text-2">0.5%/lot</td>
                      <td className="light-text-2">5</td>
                    </tr>

                    <tr>
                      <td className="site-primary-text ps-5 font-weight-700 py-2">XNI-Nickel</td>
                      <td className="light-text-2">Floating from 8.55$</td>
                      <td className="light-text-2">0.5%/lot</td>
                      <td className="light-text-2">5</td>
                    </tr>

                    <tr>
                      <td className="site-primary-text ps-5 font-weight-700 py-2">XAL-Aluminium</td>
                      <td className="light-text-2">Floating from 2.3$</td>
                      <td className="light-text-2">0.5%/lot</td>
                      <td className="light-text-2">5</td>
                    </tr>
                    <tr>
                      <td className="site-primary-text ps-5 font-weight-700 py-2">XPDUSD-Palladium</td>
                      <td className="light-text-2">Floating from 16.4$</td>
                      <td className="light-text-2">0.5%/lot</td>
                      <td className="light-text-2">5</td>
                    </tr>
                    <tr>
                      <td className="site-primary-text ps-5 font-weight-700 py-2">XPTUSD-Platinum</td>
                      <td className="light-text-2">Floating from 5.3$</td>
                      <td className="light-text-2">0.5%/lot</td>
                      <td className="light-text-2">5</td>
                    </tr>

                    <tr>
                      <td className="site-primary-text ps-5 font-weight-700 py-2">XZN-Zinc</td>
                      <td className="light-text-2">Floating from 2.8$</td>
                      <td className="light-text-2">0.5%/lot</td>
                      <td className="light-text-2">10</td>
                    </tr>
                    <tr>
                      <td className="site-primary-text ps-5 font-weight-700 py-2">XAG/USD</td>
                      <td className="light-text-2">Floating from 0.02$</td>
                      <td className="light-text-2">8$/lot</td>
                      <td className="light-text-2">10</td>
                    </tr>
                    <tr>
                      <td className="site-primary-text ps-5 font-weight-700 py-2">XAG/USD</td>
                      <td className="light-text-2">Floating from 0.02$</td>
                      <td className="light-text-2">8$/lot</td>
                      <td className="light-text-2">10</td>
                    </tr>

                  </tbody>
                </table>
               </div>
              </div>
            </div>
           
          </div>
        </section>

        <section className="site-section-container">
          <div className="container-lg ">
            <p className="site-header font-weight-700 text-center uppercase">Why You Should Trade CFDs With AmaniLightEquity</p>
            <div className="responsive-centralized-text">
              <div className="row g-3 pt-5">
                <div className="col-lg-4 col-md-6">
                  <div className="blue-boxes border-radius-5px p-4">
                    <img width='80px' src={commodites} alt="" />
                    <div>
                      <p className="font-weight-700 py-3">Online Safety</p>
                      <p className="light-text-2">Your data and funds are under isolation in segregated accounts with negative balance protection.</p>
                    </div>

                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="blue-boxes border-radius-5px p-4">
                    <img width='80px' src={icon} alt="" />
                    <div>
                      <p className="font-weight-700 py-3">24/5 Multilingual Support</p>
                      <p className="light-text-2">Enjoy having 24/5 support with our customer and technical support team that can assist in 5 languages.</p>
                    </div>

                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="blue-boxes border-radius-5px p-4">
                    <img width='80px' src={tradeCrypto} alt="" />
                    <div>
                      <p className="font-weight-700 py-3">Fully Regulated And Licensed</p>
                      <p className="light-text-2">AmaniLightEquity is heavily regulated and licensed by the UFSA (US Financial Services Authority)</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section-container">
          <div className="light-background4">
            <div className="container-lg py-5">
              <p className="font-weight-700 site-header text-center pb-5">TRADE GLOBAL MARKETS WITH AmaniLightEquity</p>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="box-shadow-2 px-4 py-5">
                    <div className="d-flex align-center">
                      <img width='70px' src={tradeMetal} alt="" />
                      <div className="ps-3">
                        <p className="font-weight-700 pb-3">Gold</p>
                        <p className="light-text-2">XAU/USD is based on the price of gold and is traded against the US dollar. Gold is a spot commodity and is one of the most traded precious metals. Its price is quoted per troy ounce (oz t), in US dollars.</p>
                      </div>
                    </div>

                    <div className="pt-5">
                      <Link className="site-inverse-btn width-100 text-center"> Learn More</Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box-shadow-2 px-4 py-5">
                    <div className="d-flex align-center">
                      <img width='70px' src={tradeMetal} alt="" />
                      <div className="ps-3">
                        <p className="font-weight-700 pb-3">Silver</p>
                        <p className="light-text-2">XAG/USD is based on the price of silver and is traded against the US dollar. Silver's price is quoted per ounce, in US dollars. View XAG/USD's live charts, quotes, and leverage.</p>
                      </div>
                    </div>

                    <div className="pt-5">
                      <Link className="site-inverse-btn width-100 text-center"> Learn More</Link>
                    </div>
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
                <p className="site-header pb-4 font-weight-700">What If I Have Questions About Precious Metal Trading?</p>
                <p className="light-text2">If you have any questions or second thoughts about trading precious metals, feel free to check out our FAQ to get most of your questions and doubts answered. If at the end of the day you still have questions, feel free to contact our customer support team that will answer any questions you may have.</p>
              </div>
            </div>

            <div className="pt-5">
              <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep1}>
                <div className="d-flex justify-content-between font-weight-700  cursor-pointer">
                  <p className="ps-5">How to Start Trading precious metal commodities?  </p>
                  <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                </div>
                
                <div className={` dropdown-content  ${step1Dropdown ? "slide-in" : "slide-out"}`}>
                  <p className="ps-5 pt-4">All you have to do is register and pass the registration process with AmaniLightEquity. Once that is done, you can start trading. If you are in need of some guidance as to how to invest properly, one of our trading professionals will reach out to you to answer any of your questions.</p>
                </div>
              </div>

              <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep2}>
                <div className="d-flex justify-content-between font-weight-700  cursor-pointer">
                  <p className="ps-5">  Which platform is best for precious metal trading?   </p>
                  <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                </div>
                
                <div className={` dropdown-content  ${step2Dropdown ? "slide-in" : "slide-out"}`}>
                  <p className="ps-5 pt-4">When trading with AmaniLightEquity, you will notice that the platform that is mostly used and highly recommended is Meta trader 5. This is a platform that has been battle tested for over a decade and has helped millions of people make a fortune.</p>
                </div>
              </div>

              <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep3}>
                <div className="d-flex justify-content-between font-weight-700  cursor-pointer">
                  <p className="ps-5">What hours does gold trade?  </p>
                  <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                </div>
                
                <div className={` dropdown-content  ${step3Dropdown ? "slide-in" : "slide-out"}`}>
                  <p className="ps-5 pt-4">old trades happen through business days 23 hours a day.</p>
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