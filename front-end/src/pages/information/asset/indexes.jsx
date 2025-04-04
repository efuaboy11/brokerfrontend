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
import laptopChart from '../../../img/laptop-chart.jpg'
export const Indexes = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / Assest / Shared Indexes</p>
          </div>
        </div>

        <section className="site-section-container">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="text-center">
                  <p className="lg-text font-weight-700 pb-3">Trading Index CFDs Just Got Much Easier</p>
                  <p className="light-text-2">Trade CFDs Across Europe, The Americas, and Asia. Nothing But The Most Popular Indices On Star Extreme. Start Trading</p>
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
               <p className="site-header font-weight-700 text-center pb-5">Our top index CFDs</p>
               <div className="dash-scroll-bar box-shadow-2 border-radius-5px">
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
                        <td className="site-primary-text ps-5 font-weight-700 py-2">AUS200</td>
                        <td className="light-text-2">Floating from 2.5 AUD</td>
                        <td className="light-text-2">0.05%</td>
                        <td className="light-text-2">20</td>
                      </tr>

                      <tr>
                        <td className="site-primary-text ps-5 font-weight-700 py-2">FRA40</td>
                        <td className="light-text-2">Floating from 1.4 EUR</td>
                        <td className="light-text-2">0.05%</td>
                        <td className="light-text-2">20</td>
                      </tr>

                      <tr>
                        <td className="site-primary-text ps-5 font-weight-700 py-2">JPN225</td>
                        <td className="light-text-2">Floating from 7 JPY</td>
                        <td className="light-text-2">0.05%</td>
                        <td className="light-text-2">20</td>
                      </tr>

                      <tr>
                        <td className="site-primary-text ps-5 font-weight-700 py-2">UK100</td>
                        <td className="light-text-2">Floating from 0.7 GBP</td>
                        <td className="light-text-2">0.05%/</td>
                        <td className="light-text-2">20</td>
                      </tr>

                      <tr>
                        <td className="site-primary-text ps-5 font-weight-700 py-2">GER30m</td>
                        <td className="light-text-2">Floating from 3 EUR</td>
                        <td className="light-text-2">0.05%</td>
                        <td className="light-text-2">20</td>
                      </tr>


                      <tr>
                        <td className="site-primary-text ps-5 font-weight-700 py-2">USA500m</td>
                        <td className="light-text-2">Floating from 1.2$</td>
                        <td className="light-text-2">0.05%</td>
                        <td className="light-text-2">20</td>
                      </tr>
                      <tr>
                        <td className="site-primary-text ps-5 font-weight-700 py-2">WS30m</td>
                        <td className="light-text-2">Floating from 5$</td>
                        <td className="light-text-2">0.05%</td>
                        <td className="light-text-2">20</td>
                      </tr>

                      <tr>
                        <td className="site-primary-text ps-5 font-weight-700 py-2">US100m</td>
                        <td className="light-text-2">Floating from 1.6$</td>
                        <td className="light-text-2">0.05%</td>
                        <td className="light-text-2">20</td>
                      </tr>

                    </tbody>
                  </table>
               </div>
              </div>
            </div>
           
          </div>
        </section>

        <section className="site-section-container">
          <div className="container-lg">
            <div className="light-background4 border-radius-10px p-4">
              <div className="row gy-4">
                <div className="col-lg-8 col-md-6 ">
                  <div>
                    <img width='80px' src={icon} alt="" />
                    <p className="sm-text font-weight-700 py-4">Indices are the most popular form of CFDs. IC Markets Global has a large range of Indices from around the world to choose from, including the Australian S&P 200 Index, UK FTSE 100 Index, US E-mini S&P 500 and US DJIA Index.</p>
                    <p className="light-text-2">A stock index is a good indicative measure of market performance. Indices such as the FTSE 100 and DJIA Index are baskets of blue chip stocks listed on the exchange and are generally a good measure of the current market sentiment. A change in the performance of any constituent stock in an index is reflected in a change in the overall value of that index. Indices have the advantage of allowing traders to take a wider view of a basket of stocks rather than taking a view on one individual stock alone. Online CFD and futures based indices are offered on all platforms.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="p-3 white-background border-radius-10px">
                    <p className="light-text-2">Indicies</p>
                    <p className="md-text font-weight-700">Facts</p>

                    <div className="pt-3">
                      <div className="d-flex border-bottom2 py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 px-1 white-text"></i>
                        <p className="ps-3 font-weight-700">25 Indices to trade from</p>
                      </div>

                      <div className="d-flex border-bottom2 py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 px-1 white-text"></i>
                        <p className="ps-3 font-weight-700">Leverage up to 1:200</p>
                      </div>

                      <div className="d-flex border-bottom2 py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 px-1 white-text"></i>
                        <p className="ps-3 font-weight-700">Spreads as low as 0.4 pips</p>
                      </div>

                      <div className="d-flex border-bottom2 py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 px-1 white-text"></i>
                        <p className="ps-3 font-weight-700">Deep Liquidity</p>
                      </div>
                      <div className="d-flex border-bottom2 py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 px-1 white-text"></i>
                        <p className="ps-3 font-weight-700">No commissions</p>
                      </div>

                      <div className="d-flex border-bottom2 py-2">
                        <i class="bi bi-check site-primary-bg border-radius-50 px-1 white-text"></i>
                        <p className="ps-3 font-weight-700">All platforms</p>
                      </div>
                      

                      
                    </div>


                    <div className=" pt-5">
                      <Link to='/register' className="width-100 text-center site-inverse-btn">Open Live Account</Link>
                    </div>

                  </div>
                </div>


              </div>
            </div>

          </div>

        </section>

        <section className="site-section-container">
          <div className="container-lg">
            <div className="row g-4">
              <div className="col-md-6">
                <div>
                  <img width='100%' height='500px' src={laptopChart} alt="" />
                </div>
              </div>

              <div className="col-md-6 responsive-centralized-text">
                <div>
                  <p className="site-header font-weight-700 pb-4">How to determine if a client is entitled dividend from Index AUS200?</p>
                  <p className="light-text-2">Let us assume that the ex-dividend date for Index AUS200 is on the of 18th August 2016. Therefore, a client must have an open position for Index AUS200 before the 18th of August 2016 and it must remain open until the 18th August 2016, in order to have the dividend adjustment of $2.44 per lot. To determine if the dividend adjustment is added or deducted to the client’s account, will depend on whether it is a SELL or BUY on AUS200. If the client has 1 lot of BUY for AUS200, the client will be entitled $2.44 per lot. However, if it is a SELL of AUS200, the client will be deducted $2.44 per lot. The amount $2.44 per lot will be converted to the client’s base currency, before it is being deducted. Since this is from index AUS200, the dividend adjustment will be AUD$2.44 per lot. Alternatively, if the index is US500, the dividend adjustment would be USD$2.44 per lot. IC Markets Global EX- Dividends Excel sheet shows the expected Indices that will have their index points adjusted for the given week and the actual ex-dividend adjustment amount for each indices will be updated regularly on our blog, Ex- Dividends Adjustments.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section-container">
            <div className="light-background4 py-5">
              <div className="container-lg">
                <div className="d-sm-flex justify-content-between pb-5">
                  <p className="site-header font-weight-700 mb-3">Indices example</p>
                  <div>
                   <p className="d-inline-block  site-primary-bg sm-text py-1 px-3 border-radius-5px">Buying: Australia 200 Indes</p>
                  </div>
                  
                </div>

                <div className="row g-3">
                  <div className="col-lg-4 col-md-6">
                    <div className="white-background p-4 border-radius-10px">
                      <p className="font-weight-700 sm-text">The gross profit on your trade is calculated as follows:</p>


                      <div className="pt-2">
                        <div className="border-bottom2 py-2">
                          <h6>Opening Price</h6>
                          <p>4951</p>
                        </div>


                        <div className="border-bottom2 py-2">
                          <h6>Closing Price</h6>
                          <p>4970</p>
                        </div>

                        <div className="border-bottom2 py-2">
                          <h6>Difference</h6>
                          <p>19</p>
                        </div>

                        <div className="border-bottom2 py-2">
                          <h6>Gross Profit on Trade</h6>
                          <p>19.00 points x 2 contracts ($2 per point) = AUD $38.00</p>
                        </div>

                      </div>
                    </div>


                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="white-background p-5 border-radius-10px responsive-centralized-text">
                      <div>
                        <p className="font-weight-700 sm-text">Opening the Position</p>
                        <p>The price of the Australia 200 Index is 4950.00/4951.00. You are of the view that blue-chip stocks are undervalued so you decide to buy 2 contracts at 4951.00. (One contract is equal to $1 per index point). No commission is charged on Indices.</p>
                      </div>
                    </div>


                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="white-background p-5 border-radius-10px responsive-centralized-text">
                      <div>
                        <p className="font-weight-700 sm-text">Closing the Position</p>
                        <p>Four days later, the Australia 200 Index has risen to 4970.00/4971.00 and you decide to take your profit. You close your position by selling 2 contracts at 4970.00</p>
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
              <p className="font-weight-700 site-header text-center pb-5 uppercase">Our featured products</p>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="box-shadow-2 px-4 py-5">
                    <div className="d-flex align-center">
                      <img width='70px' src={icon} alt="" />
                      <div className="ps-3">
                        <p className="font-weight-700 pb-3">UK100</p>
                        <p className="light-text-2">The UK100 is a market-capitalization weighted and float-adjusted stock market index of 100 United Kingdom top-performing companies listed on the London Stock Exchange.</p>
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
                      <img width='70px' src={icon} alt="" />
                      <div className="ps-3">
                        <p className="font-weight-700 pb-3">JPN225</p>
                        <p className="light-text-2">The JPN225 (NIKKEI 225 INDEX) index is a market-capitalization-weighted and float-adjusted stock market index of 225 Japanese companies listed on the Tokyo Stock Exchange.</p>
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
                <p className="site-header pb-4 font-weight-700">Still Have Questions About Index CFD Trading?</p>
                <p className="light-text2">If you have questions in regards to Index CFD trading then we have all the answers! Feel free to check out our FAQ or contact our customer support team that will gladly answer any questions you have.</p>
              </div>
            </div>

            <div className="pt-5">
              <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep1}>
                <div className="d-flex justify-content-between font-weight-700  cursor-pointer">
                  <p className="ps-5"> How to trade index CFDs?</p>
                  <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                </div>
                
                <div className={` dropdown-content  ${step1Dropdown ? "slide-in" : "slide-out"}`}>
                  <p className="ps-5 pt-4">All you have to do is register and pass the registration process with NSBroker. Once that is done, you can start trading. If you are in need of some guidance as to how to invest properly, one of our trading professionals will reach out to you to answer any of your questions.</p>
                </div>
              </div>

              <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep2}>
                <div className="d-flex justify-content-between font-weight-700  cursor-pointer">
                  <p className="ps-5">  What time does index CFDs index start trading?</p>
                  <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                </div>
                
                <div className={` dropdown-content  ${step2Dropdown ? "slide-in" : "slide-out"}`}>
                  <p className="ps-5 pt-4">When trading with NSBroker, you will notice that the platform that is mostly used and highly recommended is MetaTrader 5. This is a platform that has been battle tested for over a decade and has helped millions of people make a fortune.</p>
                </div>
              </div>

              <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep3}>
                <div className="d-flex justify-content-between font-weight-700  cursor-pointer">
                  <p className="ps-5"> Which platform is best for index CFDs trading?  </p>
                  <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                </div>
                
                <div className={` dropdown-content  ${step3Dropdown ? "slide-in" : "slide-out"}`}>
                  <p className="ps-5 pt-4">You can trade Index CFDs throughout normal business days.</p>
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