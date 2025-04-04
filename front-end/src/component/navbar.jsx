
import { Link, useLocation } from 'react-router-dom'
import '../css/componentCss/navbar.css'
import '../css/style.css'
import '../css/informationCss/site.css'
import { useContext, useEffect, useState } from 'react'
import { use } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faBarsStaggered, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import AuthContext from '../context/AuthContext'
import logoDark from '../img/amani-light.png'
export const Navbar = () =>{

  const { authTokens, 
    showSidebar, 
    setShowSidebar,
    toggleClientSidebar,

  } = useContext(AuthContext)

  const [showDashboardBtn, setShowDashboardBtn] = useState(false)
  const [dashLink, setDasLink] = useState('')
  
  const [overlay, setOverlay] = useState(false)
  const [assetDropdown, setAssetDropdown] = useState(false)
  const [accountDropdown, setAccountDropdown] = useState(false)
  const [marketDropdown, setMarketDropdown] = useState(false)
  const [tradingDropdown, setTradingDropdown] = useState(false)
  const [cryptoDropdown, setCryptoDropdown] = useState(false)
  const [aboutDropdown, setAboutDropdown] = useState(false)


  const [sidebarAssetDropdown, setSidebarAssetDropdown] = useState(false)
  const [sidebarAccountDropdown, setSidebarAccountDropdown] = useState(false)
  const [sidebarMarketDropdown, setSidebarMarketDropdown] = useState(false)
  const [sidebarTradeDropdown, setSidebarTradeDropdown] = useState(false)
  const [sidebarCryptoDropdown, setSidebarCryptoDropdown] = useState(false)
  const [sidebarAboutDropdown, setSidebarAboutDropdown] = useState(false)



  const location = useLocation();
  const isActiveDashLink = (path) =>{
    return location.pathname === path

  }

  




  const toggleAsset = () =>{
    setAssetDropdown(!assetDropdown)
    setAccountDropdown(false)
    setMarketDropdown(false)
    setCryptoDropdown(false)
    setAboutDropdown(false)
    setTradingDropdown(false)
    if(!assetDropdown){
      setOverlay(true)
    }else{
      setOverlay(false)
    }

  }

  const toggleAccount = () =>{
    setAccountDropdown(!accountDropdown)
    setAssetDropdown(false)
    setMarketDropdown(false)
    setCryptoDropdown(false)
    setAboutDropdown(false)
    setTradingDropdown(false)
    if(!accountDropdown){
      setOverlay(true)
    }else{
      setOverlay(false)
    }

  }

  
  const toggleMarket = () =>{
    setMarketDropdown(!marketDropdown)
    setAssetDropdown(false)
    setAccountDropdown(false)
    setCryptoDropdown(false)
    setAboutDropdown(false)
    setTradingDropdown(false)
    if(!marketDropdown){
      setOverlay(true)
    }else{
      setOverlay(false)
    }

  }

  const toggleTrade = () =>{
    setTradingDropdown(!tradingDropdown)
    setMarketDropdown(false)
    setAssetDropdown(false)
    setAccountDropdown(false)
    setCryptoDropdown(false)
    setAboutDropdown(false)
    if(!tradingDropdown){
      setOverlay(true)
    }else{
      setOverlay(false)
    }

  }

  const toggleCrypto = () =>{
    setCryptoDropdown(!cryptoDropdown)
    setMarketDropdown(false)
    setAssetDropdown(false)
    setAccountDropdown(false)
    setTradingDropdown(false)
    if(!cryptoDropdown){
      setOverlay(true)
    }else{
      setOverlay(false)
    }

  }

  const toggleAbout = () =>{
    setAboutDropdown(!aboutDropdown)
    setMarketDropdown(false)
    setAssetDropdown(false)
    setAccountDropdown(false)
    setTradingDropdown(false)
    setCryptoDropdown(false)
    if(!aboutDropdown){
      setOverlay(true)
    }else{
      setOverlay(false)
    }

  }






    const toggleSidebarAsset = () =>{
    setSidebarAssetDropdown(!sidebarAssetDropdown)
    setSidebarAccountDropdown(false)
    setSidebarMarketDropdown(false)
    setSidebarAboutDropdown(false)
    setSidebarTradeDropdown(false)
    setSidebarCryptoDropdown(false)
  }

  const toggleSidebarAccount = () =>{
    setSidebarAssetDropdown(false)
    setSidebarAccountDropdown(!sidebarAccountDropdown)
    setSidebarMarketDropdown(false)
    setSidebarAboutDropdown(false)
    setSidebarTradeDropdown(false)
    setSidebarCryptoDropdown(false)
  }

  const toggleSidebarMarket = () =>{
    setSidebarAssetDropdown(false)
    setSidebarAccountDropdown(false)
    setSidebarMarketDropdown(!sidebarMarketDropdown)
    setSidebarAboutDropdown(false)
    setSidebarTradeDropdown(false)
    setSidebarCryptoDropdown(false)
  }

  const toggleSidebarTrade = () =>{
    setSidebarAssetDropdown(false)
    setSidebarAccountDropdown(false)
    setSidebarMarketDropdown(false)
    setSidebarAboutDropdown(false)
    setSidebarTradeDropdown(!sidebarTradeDropdown)
    setSidebarCryptoDropdown(false)
  }

  const toggleSidebarCrypto = () =>{
    setSidebarAssetDropdown(false)
    setSidebarAccountDropdown(false)
    setSidebarMarketDropdown(false)
    setSidebarAboutDropdown(false)
    setSidebarTradeDropdown(false)
    setSidebarCryptoDropdown(!sidebarCryptoDropdown)
  }


  const toggleSidebarAbout = () =>{
    setSidebarAssetDropdown(false)
    setSidebarAccountDropdown(false)
    setSidebarMarketDropdown(false)
    setSidebarAboutDropdown(!sidebarAboutDropdown)
    setSidebarTradeDropdown(false)
    setSidebarCryptoDropdown(false)
  }

  useEffect(() =>{
    if(sessionStorage.getItem('tokenActive') === 'true'){
      setShowDashboardBtn(true)
    }
    setDasLink(sessionStorage.getItem('dashLink'))
    setShowSidebar(false)

  }, [])
  return(
    <div className={`${overlay ? 'overlay-background' : ''}`}>
      <div className="nav-shadow nav-bar">
        <div className="mx-3 width-100">
          <div className='nav-laptop-screen'>
            <div className="row justify-content-between align-center py-4">
              <div className="col-2">
                <Link className='Link' to='/'>
                  <img src={logoDark} width='95%' alt="" />
                
                </Link>

              </div>

              <div className="col-7">
                <div className="d-flex align-center">
                  <div className='nav-links'>
                    <ul className="d-flex ">
                      <li className='px-3'>
                        <div>
                          <p onClick={toggleAsset} className={`${assetDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`} >Assets</p>
                        </div>
                      </li>

                      <li className='px-3'>
                        <div>
                          <p onClick={toggleAccount} className={`${accountDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`}>Acoount</p>
                        </div>
                      </li>

                      <li className='px-3'>
                        <div>
                          <p onClick={toggleMarket} className={`${marketDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`}>Markets</p>
                        </div>
                      </li>

                      <li className='px-3'>
                        <div>
                          <p onClick={toggleTrade} className={`${tradingDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`}>Trading Platform</p>
                        </div>
                      </li>

                      <li className='px-3'>
                        <div>
                          <Link to='/our-packages/' className={` navbar-links cursor-pointer`}>Our Packages</Link>
                        </div>
                      </li>

                      <li className='px-3'>
                        <div onClick={toggleCrypto}>
                          <p className={`${cryptoDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`}>Buy Crypto</p>
                        </div>
                      </li>

                      <li className='px-3'>
                        <div onClick={toggleAbout}> 
                          <p className={`${aboutDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`}>About Company</p>
                        </div>
                      </li>

                    </ul>
                  </div>
                </div>


                
              </div>

              <div className="col-3">
                
                {showDashboardBtn ? (
                  <div>
                     <Link to={`${dashLink}`} className='site-inverse-btn font-bold'>Dashbaord</Link>
                  </div>
                ) : (
                  <div className='d-flex'>
                    <div className='me-3'>
                      <Link to='/register' className='site-btn font-bold'>Create Account</Link>
                    </div>

                    <div>
                      <Link to='/login' className='site-inverse-btn font-bold'>Sign In</Link>
                    </div>
                    
                  </div>
                )}


              </div>
            </div>
          </div>

          <div className="nav-responsive px-1">
            <div className="d-flex justify-content-between align-center">
              <div>
                <Link className='Link' to='/'>
                  <img src={logoDark} width='200px' alt="" />
                
                </Link>
              </div>

              <div onClick={toggleClientSidebar}>
                <FontAwesomeIcon className='sm-text site-primary-text font-weight-700' icon={faBarsStaggered}/>
               {/* <i class="bi bi-list-nested md-text"></i> */}
              </div>
            </div>
          </div>

          <section className='row'>
            <div className="col-2"></div>
            <div className='col-7 ps-4 '>
              <div>
                {assetDropdown &&
                  <ul className={`nav-sublink-container `}>
                    <li className='mb-3'>
                      <Link to='/forex/' className='nav-sublink'>
                        <p>Forex</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='/metals/' className='nav-sublink'>
                        <p>Precious Metal</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='/indexes/' className='nav-sublink'>
                        <p>Shared Indexes</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='/energy/' className='nav-sublink'>
                        <p >Energies Carriers</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='/crypto/' className='nav-sublink'>
                        <p>Crypto Currency</p>                
                      </Link>
                    </li>
                  </ul>
                }

                {accountDropdown &&
                  <ul className={`nav-sublink-container `}>

                    <div className="d-flex">
                      <div className='me-5 pe-5'>
                        <p className="light-text">Accounts</p>
                        <li className='mb-3'>
                          <Link to='/register' className='nav-sublink'>
                            <p>Open Live Account</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link to='/verification-documents/' className='nav-sublink'>
                            <p>Account Verification</p>                
                          </Link>
                        </li>
                      </div>


                      <div>
                        <p className="light-text">Fundings</p>
                        <li className='mb-3'>
                          <Link to='/deposit-method/' className='nav-sublink'>
                            <p>Deposit Method</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link to='/general-fees/' className='nav-sublink'>
                            <p>General Fees</p>                
                          </Link>
                        </li>

                      </div>
                    </div>
                  </ul>
                }

                {marketDropdown &&
                  <ul className={`nav-sublink-container `}>
                    <li className='mb-3'>
                      <Link to='/bitcoin/' className='nav-sublink'>
                        <p>Bitcoin</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='/crude-oil/' className='nav-sublink'>
                        <p>Crude Oil</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='/stock-indices/' className='nav-sublink'>
                        <p>Shocked Indices</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='/commodities/' className='nav-sublink'>
                        <p>Commodities</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='/marijuana/' className='nav-sublink'>
                        <p>Marijuana</p>                
                      </Link>
                    </li>
                  </ul>
                }

                {tradingDropdown &&
                  <ul className={`nav-sublink-container `}>
                    <li className='mb-3'>
                      <Link to='/meta5-desktop-platform/' className='nav-sublink'>
                        <p>MT5 Desktop</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='/meta5-mobile-platform/' className='nav-sublink'>
                        <p>MT5 Mobile</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='/meta5-web-platform/' className='nav-sublink'>
                        <p>MT5 Web Trader</p>                
                      </Link>
                    </li>
                  </ul>
                }

                {cryptoDropdown &&
                  <ul className={`nav-sublink-container `}>
                    <li className='mb-3'>
                      <Link to='https://www.coinbase.com/' target="_blank" className='nav-sublink'>
                        <p>Coinbase</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='https://www.investvoyager.com/'  target="_blank" className='nav-sublink'>
                        <p>Voyager</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='https://www.coinmama.com/' target="_blank"  className='nav-sublink'>
                        <p>Coinmama</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='https://www.gemini.com/' target="_blank" className='nav-sublink'>
                        <p>Gemini</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='https://www.etoro.com/' target="_blank" className='nav-sublink'>
                        <p>eToro</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='https://blockfi.com/'  target="_blank" className='nav-sublink'>
                        <p>BlockFi</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link to='https://kraken.com/' target="_blank" className='nav-sublink'>
                        <p>Kraken</p>                
                      </Link>
                    </li>
                  </ul>
                }

                {aboutDropdown &&
                  <ul className={`nav-sublink-container `}>

                    <div className="d-flex">
                      <div className='me-5 pe-5'>
                        <p className="light-text">About Company</p>
                        <li className='mb-3'>
                          <Link to='/about-us/' className='nav-sublink'>
                            <p>About Us</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link to='/contact-us/' className='nav-sublink'>
                            <p>Contact Us</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link to='/affiliate-program/' className='nav-sublink'>
                            <p>Affiliate Programs</p>                
                          </Link>
                        </li>

                        <p className="light-text">Trading Condition</p>
                        <li className='mb-3'>
                          <Link to='/order-execution/' className='nav-sublink'>
                            <p>Order of Execution</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link to='/margin-requirement/' className='nav-sublink'>
                            <p>Margin Requirements</p>                
                          </Link>
                        </li>

                      </div>



                      <div className='me-5 pe-5'>
                        <p className="light-text">Regulations</p>
                        <li className='mb-3'>
                          <Link to='/regulations/' className='nav-sublink'>
                            <p>Regulation Explained</p>                
                          </Link>
                        </li>
                        <p className="light-text">Transparency</p>
                        <li className='mb-3'>
                          <Link to='/privacy-policy/' className='nav-sublink'>
                            <p>Privacy Policy</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link to='/safety-funds/' className='nav-sublink'>
                            <p>Safety Funds</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link to='/risk-disclosure/' className='nav-sublink'>
                            <p>Risk Disclosure</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link to='/terms-and-conditions/' className='nav-sublink'>
                            <p>Terms and Conditions</p>                
                          </Link>
                        </li>


                      </div>

                      <div>
                        <p>...</p>
                        <li className='mb-3'>
                          <Link to='/information-security/' className='nav-sublink'>
                            <p>Information Security</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link to='/interest-conflict/' className='nav-sublink'>
                            <p>Conflit of Interest</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link to='/complaints-procedure/' className='nav-sublink'>
                            <p>Complaint Procedure</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link to='/margin-calls/' className='nav-sublink'>
                            <p>Margin Calls</p>                
                          </Link>
                        </li>
                      </div>
                    </div>
                  </ul>
                }



                
              </div>
            </div>
          </section>
        </div>
        


      </div>


      <div className={`${showSidebar ? 'client-sidebar-overlay' : ''}`}>
        <div className={` client-sidebar ${showSidebar ? 'client-show-sidebar': 'client-close-sidebar'}`}>
          <div className='scroll-bar-y client-sidebar-height pb-5'>
            <ul className='pt-3'>
              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarAsset}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>Asset</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarAssetDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarAssetDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/forex/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/forex/">
                          <div className="d-flex ms-3 py-2">
                            <p>Forex</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/metals/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/metals/">
                          <div className="d-flex ms-3 py-2">
                            <p>Precious Metals</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/indexes/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/indexes/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Shared Indexes</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/energy/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/energy/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Energy Carriers</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/crypto/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/crypto/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Cryptocurrencies</p> 
                          </div>
                        </Link>
                      </li>

                      
                    </ul>
                  </div>


      
              </li>


              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarAccount}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>Account</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarAccountDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarAccountDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>
                      <p className="light-text ps-3 pt-3">Account</p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/register") ?"client-sidebar-active-link": ""}`}>     
                        <Link className='client-sidebar-link' to="/register">
                          <div className="d-flex ms-3 py-2">
                            <p>Open Live Account</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/verification-documents/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/verification-documents/">
                          <div className="d-flex ms-3 py-2">
                            <p>Account Verification</p> 
                          </div>
                        </Link>
                      </li>

                      <p className="light-text ps-3 pt-3">Fundings</p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/deposit-method/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/deposit-method/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Deposit Method</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/general-fees/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/general-fees/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>General Fees</p> 
                          </div>
                        </Link>
                      </li>

                      
                    </ul>
                  </div>


      
              </li>

              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarMarket}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>Market</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarMarketDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarMarketDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/bitcoin/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/bitcoin/">
                          <div className="d-flex ms-3 py-2">
                            <p>Bitcoin</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/crude-oil/") ?"client-sidebar-active-link": ""}`}>
                        <Link  className='client-sidebar-link' to="/crude-oil/">
                          <div className="d-flex ms-3 py-2">
                            <p>Crude Oil</p> 
                          </div>
                        </Link>
                      </li>




                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/stock-indices/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/stock-indices/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Stock Indicies</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/commodities/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/commodities/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Commodities</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/marijuana/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/marijuana/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Marijuana</p> 
                          </div>
                        </Link>
                      </li>



                      
                    </ul>
                  </div>


      
              </li>


              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarTrade}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>Trading Platform</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarTradeDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarTradeDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/meta5-desktop-platform/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/meta5-desktop-platform/">
                          <div className="d-flex ms-3 py-2">
                            <p>MT5 Desktop</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/meta5-mobile-platform/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/meta5-mobile-platform/">
                          <div className="d-flex ms-3 py-2">
                            <p>MT5 Mobile</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/meta5-web-platform/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/meta5-web-platform/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>MT5 Web Trader</p> 
                          </div>
                        </Link>
                      </li>

                      
                    </ul>
                  </div>


      
              </li>

              <li className={`pb-3 pt-1  ${isActiveDashLink("/our-packages/") ?"client-sidebar-active-link": ""}`}>
                <Link  className='client-sidebar-link' to="/our-packages/">
                  <div className="d-flex ms-3">
                    <p className=' font-size-20px'>Our Packages</p> 
                  </div>
                </Link>
              </li>

              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarCrypto}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>Buy Crypto</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarCryptoDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarCryptoDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/investment/history/") ?"client-sidebar-active-link": ""}`}>
                        <Link  to='https://www.coinbase.com/' target="_blank" className='client-sidebar-link'>
                          <div className="d-flex ms-3 py-2">
                            <p>Coinbase</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link  to='https://www.investvoyager.com/'  target="_blank" className='client-sidebar-link' >
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Voyager</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link to='https://www.coinmama.com/' target="_blank" className='client-sidebar-link'>
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Coinmama</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link to='https://www.gemini.com/' target="_blank" className='client-sidebar-link'>
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Gemini</p> 
                          </div>
                        </Link>
                      </li>



                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link to='https://www.etoro.com/' target="_blank" className='client-sidebar-link'>
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>eToro</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link to='https://kraken.com/' target="_blank" className='client-sidebar-link'>
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>BlockFi</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Kraken</p> 
                          </div>
                        </Link>
                      </li>

                      
                    </ul>
                  </div>


      
              </li>

              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarAbout}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>About Company</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarAboutDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarAboutDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>
                      <p className="light-text ps-3 pt-3">About Company</p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/about-us/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/about-us/">
                          <div className="d-flex ms-3 py-2">
                            <p>About Us</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/contact-us/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/contact-us/">
                          <div className="d-flex ms-3 py-2">
                            <p>Contact Us</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/affiliate-program/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/affiliate-program/">
                          <div className="d-flex ms-3 py-2">
                            <p>Affilate Programs</p> 
                          </div>
                        </Link>
                      </li>

                      <p className="light-text ps-3 pt-3">Trading Conditions</p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/order-execution/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/order-execution/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Order of Execution</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/margin-requirement/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/margin-requirement/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Margin Requirement</p> 
                          </div>
                        </Link>
                      </li>

                      <p className="light-text ps-3 pt-3">Regulation</p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/regulations/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/regulations/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Regulation  Explained</p> 
                          </div>
                        </Link>
                      </li>

                      <p className="light-text ps-3 pt-3">Transparency </p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/privacy-policy/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/privacy-policy/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Privacy Policy</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/safety-funds/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/safety-funds/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Safety Funds</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/risk-disclosure/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/risk-disclosure/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Risk Disclosure</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/terms-and-conditions/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/terms-and-conditions/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Terms and Conditions</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/information-security/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/information-security/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Information Security</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/interest-conflict/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/interest-conflict/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Conflit of Interest</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/complaints-procedure/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/complaints-procedure/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Complaint Procedure</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/margin-calls/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/margin-calls/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Margin Calls</p> 
                          </div>
                        </Link>
                      </li>

                      
                    </ul>
                  </div>


      
              </li>
              
            </ul>

            {showDashboardBtn ? (
                  <div className='d-flex justify-content-center pt-4'>
                     <Link to={`${dashLink}`} className='client-sidebar-btn  font-bold'>Dashbaord</Link>
                  </div>
                ) : (
                  <div className="d-flex justify-content-center pt-4">
                    <div>
                      <div className='d-flex'>
                        <div className='me-3'>
                          <Link to='/register' className='client-sidebar-btn  font-bold'>Create Account</Link>
                        </div>
      
                        <div>
                          <Link to='/login' className='client-sidebar-btn  font-bold'>Sign In</Link>
                        </div>
                        
                      </div>
                    </div>
                </div>
                )}
          </div>
        </div>
      </div>

    </div>
  )
}