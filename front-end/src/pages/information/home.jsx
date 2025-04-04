import { useContext, useEffect, useState } from "react"
import '../../css/informationCss/home.css'
import { Navbar } from "../../component/navbar"
import AuthContext from "../../context/AuthContext"
import { HomeCoverCarousel } from "../../swiperContainer/HomeCoverSwiper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuildingColumns, faMinus, faPlus, faQuoteLeft, faScaleBalanced, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import featuresIcon1 from '../../img/f.svg'
import featuresIcon2 from '../../img/features-icon1.svg'
import featuresIcon3 from '../../img/features-icon3.svg'
import featuresIcon4 from '../../img/features-icon4-updated.svg'
import visaPic from '../../img/visa.png'
import masterCardPic from '../../img/mastercard.png'
import coinPic from "../../img/moneyIcon.png"
import groupPeople1 from "../../img/GroupPeople1.jpg"
import manComputer from "../../img/manComputer.jpg"
import phoneChart from "../../img/phone.mp4"
import tradeMetal from '../../img/trade-metals.png'
import tradeForex from '../../img/trade-forex.png'
import trdaeSharedIndex from '../../img/trade-pie.png'
import tradeStocks from '../../img/trade-stocks.png'
import tradeEnergy from '../../img/trade-oil-barrel.png'
import tradeCrypto from  '../../img/trade-cryptocurrencies.png'
import commodites from '../../img/trade-commondities.png'
import spin from '../../img/Spin.gif'
import meta5 from '../../img/meta5.png'
import reg1 from '../../img/reg1.png'
import reg2 from '../../img/reg2.png'
import reg3 from '../../img/reg3.png'
import reg4 from '../../img/reg4.png'
import clientProtection1 from '../../img/client-protection-1.png'
import clientProtection2 from '../../img/client-protection-2.png'
import clientProtection3 from '../../img/client-protection-3.png'
import faq from '../../img/help-desk.jpg'
import customer1 from '../../img/customer1.jpg'
import customer2 from '../../img/customer-2.jpg'
import customer3 from '../../img/customer3.jpg'






import { Link } from "react-router-dom"
import AllDataContext from "../../context/Alldata"
import Carousel from "../../component/carousel"
import { Footer } from "../../component/footer"


export const Home = () =>{
  const { authTokens, 
    overlay,
    formatCurrency,
    formatName,
    roundUp,
    disablebutton, 

  } = useContext(AuthContext)


  const {
    recentInvementPlanData,
    InvestmentPlanFunction,
    investemmentPlanLoder,

  } = useContext(AllDataContext)

  const [step1Dropdown, setStep1Dropdown] = useState(false)
  const [step2Dropdown, setStep2Dropdown] = useState(false)
  const [step3Dropdown, setStep3Dropdown] = useState(false)
  const [step4Dropdown, setStep4Dropdown] = useState(false)
  const toggleStep1 = () =>{
    setStep1Dropdown(!step1Dropdown)
    setStep2Dropdown(false)
    setStep3Dropdown(false)
    setStep4Dropdown(false)
    // setStep5Dropdown(false)
    // setStep6Dropdown(false)
    // setStep7Dropdown(false)
    
  }

  const toggleStep2 = () =>{
    setStep2Dropdown(!step2Dropdown)
    setStep1Dropdown(false)
    setStep3Dropdown(false)
    setStep4Dropdown(false)
    // setStep5Dropdown(false)
    // setStep6Dropdown(false)
    // setStep7Dropdown(false)

  }

  const toggleStep3 = () =>{
    setStep3Dropdown(!step3Dropdown)
    setStep1Dropdown(false)
    setStep2Dropdown(false)
    setStep4Dropdown(false)
    // setStep5Dropdown(false)
    // setStep6Dropdown(false)
    // setStep7Dropdown(false)

  }

  const toggleStep4 = () =>{
    setStep4Dropdown(!step4Dropdown)
    setStep1Dropdown(false)
    setStep2Dropdown(false)
    setStep3Dropdown(false)
    // setStep5Dropdown(false)
    // setStep6Dropdown(false)
    // setStep7Dropdown(false)

  }

  const checkTimeDuration = (duration) =>{
    if (duration === "hourly"){
      return "hours"

    }else if(duration === 'daily'){
      return 'days'

    }else if(duration === 'weekly'){
      return 'weeks'

    }else if(duration === 'monthly'){
      return 'months'
    }else if(duration === 'yearly'){
      return 'years'

    }

  }
  

 const [isDashboardActive, setIsDashboardActive] = useState(false)
 const [dashLink, setDashLink] = useState(false)
  useEffect(() =>{
    InvestmentPlanFunction()
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
        <HomeCoverCarousel />

        <div>
          <section className="py-5">
            <div className="container-lg">
              <div className="row g-4">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div>
                    <div className="home-features-img">
                      <img width='150px'  src={featuresIcon1} alt="" />
                    </div>
                    <div className="pt-4 home-features-text">
                      <div>
                        <p className="font-weight-700 uppercase pb-3">Constant Innovation</p>
                        <p>AmanlightEquity is always evolving, consistently enhancing the trading experience to make it seamless, intuitive, and user-friendly.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div>
                    <div className="home-features-img">
                      <img width='90px' src={featuresIcon2} alt="" />
                    </div>
                    <div className="pt-4 home-features-text">
                      <div>
                        <p className="font-weight-700 uppercase pb-3">Trustworthy & Transparent</p>
                        <p>Our platform is built on a foundation of trust, offering transparent processes and clear communication to ensure you always know where your investments stand.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div>
                    <div className="home-features-img">
                      <img width='70px' src={featuresIcon3} alt="" />
                    </div>
                    <div className="pt-4 home-features-text">
                      <div>
                        <p className="font-weight-700 uppercase pb-3">Advanced Security Measures</p>
                        <p>We employ industry-leading security protocols, including two-factor authentication and encryption, to safeguard your funds and personal data from any threats.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div>
                    <div className="home-features-img">
                      <img width='80px' src={featuresIcon4} alt="" />
                    </div>
                    <div className="pt-4 home-features-text">
                      <div>
                        <p className="font-weight-700 uppercase pb-3">PURE ECN</p>
                        <p>AmaniLightEquity offers Electronic Communication Network technology, which seeks to guarantee that traders always trade under the best trading conditions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div className="row gy-5 gx-3">
                <div className="col-md-6 text-md-start text-center">
                  <div className='who-we-are-text'>
                    <div>
                      <h2 className='grey-text pb-4' data-aos="fade-right" data-aos-duration="1000">Company Overview</h2>
                      <p data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="300">At AmaniLightEquity, we are dedicated to empowering individuals and businesses to achieve financial success through smart investments and expert guidance. Founded on the principles of transparency, integrity, and innovation, our platform provides a comprehensive suite of trading and investment solutions tailored to meet the diverse needs of our clients. <br />As a trusted broker, we specialize in Forex, cryptocurrency, stocks, and commodities, offering competitive spreads, cutting-edge trading technology, and unparalleled customer support. Our team of seasoned financial experts and analysts work tirelessly to ensure a seamless trading experience while equipping our clients with the tools and knowledge needed to thrive in dynamic markets.</p>
                      <div className="pt-5" data-aos="fade-right" data-aos-duration="1000">
                      <Link to='/about' className='site-btn px-5'>Learn More</Link>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-none d-md-block">
                    <img  className='width-100 border-radius-5px' src={groupPeople1} alt="" />
                  </div>

                </div>


                <div className="col-md-6">
                <div className="d-none d-md-block">
                  <img  className='width-100 border-radius-5px' src={manComputer} alt="" />
                </div>

              </div>


              <div className="col-md-6 text-md-start text-center">
                <div className='who-we-are-text'>
                  <div>
                    <h2 className='grey-text pb-4' data-aos="fade-left" data-aos-duration="1000">Company Profile</h2>
                    <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">At AmanilightEquity, we specialize in providing secure, innovative, and client-focused brokerage services in Forex, cryptocurrencies, commodities, and equities. Our mission is to empower traders and investors with the tools, knowledge, and support to succeed in global financial markets.Regulated by [Regulatory Body], we adhere to the highest standards of transparency, integrity, and compliance. Our advanced trading platforms, competitive spreads, and robust security protocols ensure a seamless and trusted trading experience.</p>
                    <div data-aos="fade-left" data-aos-duration="1000"  className="pt-5 pb-5">
                    <Link to="/about" className='site-btn px-5'>Learn More</Link>
                    </div>

                  </div>
                </div>
              </div>
              </div>
            </div>
          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div className="text-center">
                <p className="font-weight-700 site-primary-text uppercase">Live Chart</p>
                <p className="site-header font-weight-700">Leveraging Live Charts For Advanced <br />Analysis</p>
              </div>
 

              <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22NASDAQ%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22BTC%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22ETH%2FUSD%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A44%2C%22utm_source%22%3A%22cypherblocksage.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22cypherblocksage.com%2F%22%7D"
               title="ticker tape TradingView widget" lang="en"
               style={{
                userSelect: "none",
                boxSizing: "border-box",
                display: "block",
                height: "46px",
                width: "100%",
              }}></iframe>

              <div className="row pt-5 gy-5 gx-3">
                <div className="col-md-6">
                  <div>
                    <iframe
                    scrolling="no" 
                    allowtransparency="true" 
                    frameborder="0" 
                    src="https://www.tradingview-widget.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22%22%2C%22dateRange%22%3A%2212M%22%2C%22showChart%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A610%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Afalse%2C%22showSymbolLogo%22%3Atrue%2C%22plotLineColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(240%2C%20243%2C%20250%2C%200)%22%2C%22scaleFontColor%22%3A%22rgba(120%2C%20123%2C%20134%2C%201)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorGrowingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22belowLineFillColorFallingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22symbolActiveColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Indices%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22d%22%3A%22Nasdaq%20100%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ADJI%22%2C%22d%22%3A%22Dow%2030%22%7D%2C%7B%22s%22%3A%22INDEX%3ANKY%22%2C%22d%22%3A%22Nikkei%20225%22%7D%2C%7B%22s%22%3A%22INDEX%3ADEU30%22%2C%22d%22%3A%22DAX%20Index%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3AUKXGBP%22%2C%22d%22%3A%22UK%20100%22%7D%5D%2C%22originalTitle%22%3A%22Indices%22%7D%2C%7B%22title%22%3A%22Commodities%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CME_MINI%3AES1!%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22CME%3A6E1!%22%2C%22d%22%3A%22Euro%22%7D%2C%7B%22s%22%3A%22COMEX%3AGC1!%22%2C%22d%22%3A%22Gold%22%7D%2C%7B%22s%22%3A%22NYMEX%3ACL1!%22%2C%22d%22%3A%22Crude%20Oil%22%7D%2C%7B%22s%22%3A%22NYMEX%3ANG1!%22%2C%22d%22%3A%22Natural%20Gas%22%7D%2C%7B%22s%22%3A%22CBOT%3AZC1!%22%2C%22d%22%3A%22Corn%22%7D%5D%2C%22originalTitle%22%3A%22Commodities%22%7D%2C%7B%22title%22%3A%22Bonds%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CME%3AGE1!%22%2C%22d%22%3A%22Eurodollar%22%7D%2C%7B%22s%22%3A%22CBOT%3AZB1!%22%2C%22d%22%3A%22T-Bond%22%7D%2C%7B%22s%22%3A%22CBOT%3AUB1!%22%2C%22d%22%3A%22Ultra%20T-Bond%22%7D%2C%7B%22s%22%3A%22EUREX%3AFGBL1!%22%2C%22d%22%3A%22Euro%20Bund%22%7D%2C%7B%22s%22%3A%22EUREX%3AFBTP1!%22%2C%22d%22%3A%22Euro%20BTP%22%7D%2C%7B%22s%22%3A%22EUREX%3AFGBM1!%22%2C%22d%22%3A%22Euro%20BOBL%22%7D%5D%2C%22originalTitle%22%3A%22Bonds%22%7D%2C%7B%22title%22%3A%22Currencies%20%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FX%3AEURUSD%22%7D%2C%7B%22s%22%3A%22FX%3AGBPUSD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDJPY%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCHF%22%7D%2C%7B%22s%22%3A%22FX%3AAUDUSD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCAD%22%7D%5D%2C%22originalTitle%22%3A%22Forex%22%7D%5D%2C%22utm_source%22%3A%22cypherblocksage.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22market-overview%22%2C%22page-uri%22%3A%22cypherblocksage.com%2Fuser%2Fmarket-charts%22%7D" title="market overview TradingView widget" lang="en" 
                    style={{
                      userSelect: "none",
                      boxSizing: "border-box",
                      display: "block",
                      height: "500px",
                      width: "100%",
                    }}
                    ></iframe>
                  </div>

                </div>

                <div className="col-md-6">
                  <div className="home-live-chart-text">
                    <p className="site-header pb-2">Using Live Chat to Enhance Your Investment</p>
                    <p className="">AmaniLightEquity is dedicated to providing excellent communication and personalized support to investors throughout the investment process. As part of this commitment, we have introduced a live chat feature that makes it easier for investors to connect with us <br /> This tool has proven to be incredibly successful, providing numerous benefits to our clients. With live chat, investors can get their questions answered quickly and easily, making the investment process much smoother.</p>
                    <div className="d-flex py-3 home-live-chart-icon">
                      <div className='blue-text d-flex pt-2 pb-4 pe-2'>
                        < FontAwesomeIcon className='md-text' icon={faBuildingColumns}/>

                      </div>

                      <div className="pt-2 pe-2">
                        <img src={visaPic} alt="" width="40px" />
                      </div>

                      <div className="pt-2 pe-2">
                        <img src={masterCardPic} alt="" width="40px" />
                      </div>

                      <div className="pt-2 pe-2">
                        <img src={coinPic} alt="" width="30px" />
                      </div>

                    </div>
                    <Link to='/register' className='site-inverse-btn px-5'>Open Live Account</Link>
                  </div>
                </div>

                <div className="col-md-6">
                  <video className="home-phone-chart-video"  autoPlay loop muted playsInline>
                    <source src={phoneChart} type="video/mp4" />
                  </video>
                </div>

                <div className="col-md-6">
                  <div>
                  <iframe 
                    scrolling="no" 
                    allowtransparency="true" 
                    frameborder="0" 
                    src="https://www.tradingview-widget.com/embed-widget/hotlists/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22dateRange%22%3A%2212M%22%2C%22exchange%22%3A%22US%22%2C%22showChart%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Afalse%2C%22showSymbolLogo%22%3Afalse%2C%22showFloatingTooltip%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A600%2C%22plotLineColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(42%2C%2046%2C%2057%2C%200)%22%2C%22scaleFontColor%22%3A%22rgba(120%2C%20123%2C%20134%2C%201)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorGrowingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22belowLineFillColorFallingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22symbolActiveColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22utm_source%22%3A%22cypherblocksage.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22hotlists%22%2C%22page-uri%22%3A%22cypherblocksage.com%2Fuser%2Fmarket-charts%22%7D" title="hotlists TradingView widget" lang="en" 
                    style={{
                      userSelect: "none",
                      boxSizing: "border-box",
                      display: "block",
                      height: "600px",
                      width: "100%",
                    }}>

                  </iframe>
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

          <section className="site-section-container">
            <div className="container-lg">
              <div className="home-crypto-banner">
                <div className="row">
                  <div className="col-md-5 ps-5">
                    <div className="home-crypto-banner-text-container">
                      <div>
                        <p className="home-crypto-banner-header font-bold">Crypto's Making A Move</p>
                        <p className="light-text sm-text pb-4">Bitcoin Ripping Higher – How much further can it kick? What can stop this momentum juggernaut? The Crypto market is gaining momentum and is worth watching closely.</p>
                        <div className="pb-4">
                          <Link to='/register' className="site-inverse-btn px-5">Open Live Account</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section  className="site-section-container">
            <div className="container-lg">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="text-center">
                    <p className="site-header font-weight-700 pb-3">Trading Subscriptions</p>
                    <p className="light-text-2">### **"Achieve Your Financial Goals with Tailored Investment Plans"**  
                    Explore our range of expertly designed investment plans, crafted to suit every financial goal and risk preference. Whether you're just starting your investment journey or looking to grow your portfolio, our flexible options, competitive returns, and professional guidance ensure your success every step of the way.</p>
                  </div>
                </div>
              </div>



              {recentInvementPlanData.length > 0 ? (
                  <div className="row g-3 pt-5 mt-3">
                    {recentInvementPlanData.map((data) => (
                      <div className="col-xl-4  col-lg-6">
                        <div className='home-investment-plan-boxes pt-5'>
                          <div className="">
                            <div className='p-4'>
                              <div className="text-center">
                                <h1 className="site-primary-text home-investment-plan-sub-headers">{formatName(data.plan_name)}</h1>
                                <h3 className="home-investment-plan-dark-text">{formatName(data.time_rate)} {roundUp(data.percentage_return)}% for {data.duration} {formatName(checkTimeDuration(data.time_rate))}(s) </h3>
                              </div>

                              
                              
                            </div>
                            <hr />
                            <div className="p-3 mx-4">
                              <div className="row g-2 justify-content-between">
                                <div className="col-5">
                                  <div className="d-flex justify-content-start">
                                    <p className="home-investment-plan-dark-text font-weight-700">Min Amount</p>
                                  </div>

                                </div>

                                <div className="col-2">
                                  <div className="d-flex justify-content-center">
                                    <p>-</p>
                                  </div>

                                </div>

                                <div className="col-5">
                                  <div className="d-flex justify-content-end">
                                    <p className="font-weight-500">{formatCurrency(data.min_amount)} USD</p>
                                  </div>
                                </div>


                                <div className="col-5">
                                  <div className="d-flex justify-content-start">
                                    <p className="home-investment-plan-dark-text font-weight-700">Max Amount</p>
                                  </div>
                                </div>

                                <div className="col-2">
                                  <div className="d-flex justify-content-center">
                                    <p>-</p>
                                  </div>
                                </div>

                                <div className="col-5">
                                  <div className="d-flex justify-content-end">
                                    <p className="font-weight-500">{formatCurrency(data.max_amount)} USD</p>
                                  </div>
                                </div>


                                <div className="col-5">
                                  <div className="d-flex justify-content-start">
                                    <p className="home-investment-plan-dark-text font-weight-700">Plan Type</p>
                                  </div>
                                </div>

                                <div className="col-2">
                                  <div className="d-flex justify-content-center">
                                    <p>-</p>
                                  </div>
                                </div>

                                <div className="col-5">
                                  <div className="d-flex justify-content-end">
                                    <p className="font-weight-500">{formatName(data.time_rate)}</p>
                                  </div>
                                </div>

                                <div className="col-5">
                                  <div className="d-flex justify-content-start">
                                    <p className="home-investment-plan-dark-text font-weight-700">Capital Incl.</p>
                                  </div>
                                </div>

                                <div className="col-2">
                                  <div className="d-flex justify-content-center">
                                    <p>-</p>
                                  </div>
                                </div>

                                <div className="col-5">
                                  <div className="d-flex justify-content-end">
                                    <p className="font-weight-500">Yes</p>
                                  </div>
                                </div>



                                
                              </div>

                              <div className='pt-4 pb-2 my-5'>

                                <Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn width-100 text-center">Start Trading Now</Link>
                              </div>
                            </div>


                          </div>
                        </div>

                      </div>
                    ))} 
                  </div>

                ) : (
                  <div className=' mt-4'>
                    {investemmentPlanLoder ? (
                      <div className="d-flex justify-content-center py-5 my-5">
                        <img src={spin} alt="" width='60px'/>
                      </div>  
                    ) : (
                      <div className="row justify-content-center py-5">
                        <div className="col-11 col-md-6">
                          <div className='text-center'>
                            <div className="d-inline-block border-radius-50 red-background p-3 mb-4">
                              <FontAwesomeIcon className='xl-text' icon={faTriangleExclamation}/>   
                            </div>                 
                            <h2>No Avaliable Plan </h2>
                            <p className='light-text sm-text'>There is no plan avaliable at the moment. Thanks for choosing AmaniLightEquity</p>
                          </div>
                        </div>
                      </div>
                    )}
      
                    
                  </div>
              )}

              <div className="d-flex justify-content-center pt-5">
                <Link to='/our-packages/' className="site-inverse-btn px-5">View All</Link>
              </div>
            </div>

          </section>


          <section className="site-section-container">
            <div className="light-background1 py-5">
              <div className="container-lg">
                <div className="row gx-3 gy-5">
                  <div className="col-sm-6">
                    <img width='100%' src={meta5} alt="" />
                  </div>

                  <div className="col-sm-6">
                    <div className="home-meta5-text">
                      <div>
                        <p className="site-header pb-4 font-weight-700">MetaTrader 5</p>
                        <p className="light-text-2">Developed in 2000 by MetaQuotes Software Corporation, the MetaTrader 5 trading platform fast became one of the most popular trading platforms in the world. The MT5 platform is dynamic and user-friendly, providing traders with a powerful range of features and tools.</p>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <p className="uppercase text-center font-weight-700 site-header">Four Step to start trading</p>


              <div className="row g-3 pt-5">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="box-shadow-hover p-3 responsive-centralized-text">
                    <div>
                      <img width='80px' src={reg1} alt="" />
                      <div>
                        <p className="py-3 uppercase font-weight-700 sm-text">1. Register</p>
                        <p className="light-text-2">Go to create account fill out the fields click submit and open your own live trading account</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="box-shadow-hover p-3 responsive-centralized-text">
                    <div>
                      <img width='80px' src={reg2} alt="" />
                      <div>
                        <p className="py-3 uppercase font-weight-700 sm-text">2. Verify</p>
                        <p className="light-text-2">Upload your valid documents and PII information in other to activate your account else you cannot trade</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="box-shadow-hover p-3 responsive-centralized-text">
                    <div>
                      <img width='80px' src={reg3} alt="" />
                      <div>
                        <p className="py-3 uppercase font-weight-700 sm-text">3. Fund</p>
                        <p className="light-text-2">Sign In to your account and make a deposit in other to start trading</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="box-shadow-hover p-3 responsive-centralized-text">
                    <div>
                      <img width='80px' src={reg4} alt="" />
                      <div>
                        <p className="py-3 uppercase font-weight-700 sm-text">4. Trade</p>
                        <p className="light-text-2">Start trading over 100 basic trading tools with the most reliable forex trading broker</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 d-flex justify-content-center">
                <Link to='/register' className="site-btn px-5">Open Live Account</Link>
              </div>
            </div>


          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <div style={{ width: "100%", height: "auto", position: "relative", paddingBottom: "56.25%" }}>
                    <iframe
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                      src="https://www.youtube.com/embed/xSomPDhOAu4?autoplay=0&mute=1&loop=1"
                      title="YouTube Video"
                      frameBorder="0"
                      allow="encrypted-media; fullscreen"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="site-section-container">
            <div className="container-lg">
            <p className="uppercase text-center font-weight-700 site-header">Client Protection</p>
              <div className="row g-3 pt-5">
                <div className="col-md-4 col-sm-6">
                  <div className="box-shadow-hover p-3 responsive-centralized-text">
                    <div>
                      <img width='80px' src={clientProtection1} alt="" />
                      <div>
                        <p className="py-3 uppercase font-weight-700 sm-text">Investor Compensation Scheme</p>
                        <p className="light-text-2">At AmanlightEquity, we prioritize the security of your investments. Through our Investor Compensation Scheme, we provide an additional layer of protection for clients, ensuring coverage in the unlikely event of insolvency or other unforeseen circumstances.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6">
                  <div className="box-shadow-hover p-3 responsive-centralized-text">
                    <div>
                      <img width='80px' src={clientProtection2} alt="" />
                      <div>
                        <p className="py-3 uppercase font-weight-700 sm-text">Regulation</p>
                        <p className="light-text-2">AmanlightEquity operates under strict regulatory compliance, adhering to the highest standards set by global authorities. Our commitment to transparency and accountability ensures a safe and trustworthy trading environment for all clients.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6">
                  <div className="box-shadow-hover p-3 responsive-centralized-text">
                    <div>
                      <img width='80px' src={clientProtection3} alt="" />
                      <div>
                        <p className="py-3 uppercase font-weight-700 sm-text">Negative Balance Protection</p>
                        <p className="light-text-2">With AmanlightEquity’s Negative Balance Protection, your losses are limited to your account balance. This feature ensures that you’ll never owe more than you invest, providing peace of mind even in volatile market conditions.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </section>


          <section className="site-section-container">
            <div className="container-lg">
      
              <div className="row g-3 pt-5">
                <div className="col-md-6">
                  <div className="d-none d-md-block">
                    <img width='100%' className="width-100 box-shadow border-radius-5px" src={faq} alt="" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="ms-3">
                    <div>
                      <div className="pb-4 responsive-centralized-text">
                        <div>
                          <p className="site-primary-text font-weight-700">FAQ</p>
                          <p className="site-header font-weight-700 pb-2 ">Frequently Asked Questions</p>
                        </div>
                      </div>
                      <div>
                        <div className="mb-4">
                          <div className="d-flex  align-center cursor-pointer " onClick={toggleStep1}>
                            <div className="home-faq-plus me-4">
                              <FontAwesomeIcon icon={ step1Dropdown ? faMinus : faPlus } className="site-primary-text"/>
                            </div>
                            <div>
                              <p className="sm-text font-weight-700">What Is Our Wire Transfer Charge?</p>
                            </div>
                          </div>
                          <div className={` dropdown-content  ${step1Dropdown ? "slide-in" : "slide-out"}`}>
                          <p className='p-3 ms-5'>We take a percentage as low as .2 percentage during any form of transfer you make with us.</p>
                        </div>
                        </div>

                        <div className="mb-4">
                          <div className="d-flex  align-center cursor-pointer " onClick={toggleStep2}>
                            <div className="home-faq-plus me-4">
                              <FontAwesomeIcon icon={ step2Dropdown ? faMinus : faPlus } className="site-primary-text"/>
                            </div>
                            <div>
                              <p className="sm-text font-weight-700">What Are The Objectives Of This Service?</p>
                            </div>
                          </div>
                          <div className={` dropdown-content  ${step2Dropdown ? "slide-in" : "slide-out"}`}>
                          <p className='p-3 ms-5'>Our goal is to empower individuals to grow their wealth through secure and transparent crypto investment opportunities. We aim to provide tailored investment plans, high returns, and excellent support while ensuring simplicity and safety in the crypto market</p>
                        </div>
                        </div>

                        <div className="mb-4">
                          <div className="d-flex  align-center cursor-pointer " onClick={toggleStep3}>
                            <div className="home-faq-plus me-4">
                              <FontAwesomeIcon icon={ step3Dropdown ? faMinus : faPlus } className="site-primary-text"/>
                            </div>
                            <div>
                              <p className="sm-text font-weight-700">What Is The Best Features And Services We Deliver?</p>
                            </div>
                          </div>
                          <div className={` dropdown-content  ${step3Dropdown ? "slide-in" : "slide-out"}`}>
                            <ul className='p-3 ms-5'>
                              <li className='li-disc ms-3'><span className='font-bold'> Flexible Investment Plans:</span>  Ranging from beginner to advanced levels.</li>
                              <li className='li-disc ms-3'><span className='font-bold'>High Returns:</span>   Competitive ROI tailored to your investment plan.</li>
                              <li className='li-disc ms-3'><span className='font-bold'>Real-Time Tracking:</span>   Monitor your investments anytime.</li>
                              <li className='li-disc ms-3'><span className='font-bold'>Secure Transactions:</span>   Industry-standard encryption for safety.</li>
                              <li className='li-disc ms-3'><span className='font-bold'>24/7 Support:</span>   Dedicated assistance whenever you need it.</li>
                              <li className='li-disc ms-3'><span className='font-bold'>Transparency:</span>   Clear terms and no hidden fees.</li>
                            </ul>
                          </div>
                        </div>


                        <div className="mb-4">
                          <div className="d-flex  align-center cursor-pointer " onClick={toggleStep4}>
                            <div className="home-faq-plus me-4">
                              <FontAwesomeIcon icon={ step4Dropdown ? faMinus : faPlus } className="site-primary-text"/>
                            </div>
                            <div>
                              <p className="sm-text font-weight-700">What Happened To The Borderless Account?</p>
                            </div>
                          </div>
                          <div className={` dropdown-content  ${step4Dropdown ? "slide-in" : "slide-out"}`}>
                          <p className='p-3 ms-5'>The Borderless Account has been transitioned to better align with evolving financial services. Existing users can still manage their accounts seamlessly, while new features and services now cater to a more streamlined and advanced investment experience. For further details, feel free to contact our support team.</p>
                        </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div className="text-center">
                <p className="site-primary-text font-weight-700">OUR REVIEWS</p>
                <p className="site-header font-weight-700">More Than 20,000+ Happy Customers Trust <br /> Our Services</p>
              </div>

              <div className="row gx-3 gy-4 pt-5">
                <div className="col-lg-4 col-md-6">
                  <div className="box-shadow p-4 border-radius-5px">
                    <div className="row pb-4">
                      <div className="col-10">
                        <div className="d-flex">
                          <div className="d-flex font-weight-700">
                            <img width='70px' height='70px' className="border-radius-50" src={customer2} alt="" />
                            <div className="ps-4">
                              <p className="sm-text font-weight-700">Jay Mark</p>
                              <p className="light-text-2 font-weight-700">Director, BAT</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-2">
                        <FontAwesomeIcon className="lg-text site-primary-text" icon={faQuoteLeft}/>
                      </div>
                    </div>
                    <p className="light-text-2 italic-text">AmanlightEquity has completely transformed how I manage my investments. Their platform is intuitive, and the customer support is always there to guide me. I’ve seen consistent returns and feel confident in their secure trading environment.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="box-shadow p-4 border-radius-5px">
                    <div className="row pb-4">
                      <div className="col-10">
                        <div className="d-flex">
                          <div className="d-flex font-weight-700">
                            <img width='70px' height='70px' className="border-radius-50" src={customer1} alt="" />
                            <div className="ps-4">
                              <p className="sm-text font-weight-700">Sophia Taylor</p>
                              <p className="light-text-2 font-weight-700">Financial Analyst</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-2">
                        <FontAwesomeIcon className="lg-text site-primary-text" icon={faQuoteLeft}/>
                      </div>
                    </div>
                    <p className="light-text-2 italic-text">As a financial analyst, I’ve worked with several brokers, but AmanlightEquity stands out. Their transparent processes, innovative tools, and reliable support make them my top choice for all my trading and investment needs.</p>
                  </div>
                </div>


                <div className="col-lg-4 col-md-6">
                  <div className="box-shadow p-4 border-radius-5px">
                    <div className="row pb-4">
                      <div className="col-10">
                        <div className="d-flex">
                          <div className="d-flex font-weight-700">
                            <img width='70px' height='70px' className="border-radius-50" src={customer3} alt="" />
                            <div className="ps-4">
                              <p className="sm-text font-weight-700">James Carter</p>
                              <p className="light-text-2 font-weight-700">Entrepreneur</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-2">
                        <FontAwesomeIcon className="lg-text site-primary-text" icon={faQuoteLeft}/>
                      </div>
                    </div>
                    <p className="light-text-2 italic-text">I’ve been with AmanlightEquity for over a year, and it’s been an incredible journey. Their investment plans are well-structured, and the Negative Balance Protection gives me peace of mind when trading in volatile markets. Highly recommend!</p>
                  </div>
                </div>
              </div>
            </div>
        
          </section>



          


        </div>

        <Footer />
      </div>

    </div>
  )
}