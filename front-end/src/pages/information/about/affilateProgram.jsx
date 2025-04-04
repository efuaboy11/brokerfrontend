import { useContext, useEffect, useState } from "react"
import '../../../css/informationCss/about.css'
import { Navbar } from "../../../component/navbar"
import AuthContext from "../../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import AllDataContext from "../../../context/Alldata"
import { Footer } from "../../../component/footer"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import indexes from '../../../img/indexes.jpg'
import affiliate1 from '../../../img/affiliate-icon1.svg'
import affiliate2 from '../../../img/affiliate-icon2.svg'
import affiliate3 from '../../../img/affiliate-icon3.svg'
import payPal from '../../../img/paypal.svg'
import banktransfer from '../../../img/bank-transfer.svg'
import skrill from '../../../img/skrills.svg'
import neteller from '../../../img/neteller.svg'
import webmoney from '../../../img/webmoney.svg'
import btc from '../../../img/btcc.png'
import affiliatestep1 from '../../../img/affiliate-step-icon1.svg'
import affiliatestep2 from '../../../img/affiliate-step-icon2.svg'
import affiliatestep3 from '../../../img/affiliate-step-icon3.svg'
import affiliatestep4 from '../../../img/affiliate-step-icon4.svg'
import { Bitcoin } from "../markets/bitcoin"
export const Affilate = () =>{
  const { authTokens, 
    overlay,
    formatCurrency,
    formatName,
    roundUp,
    disablebutton, 

  } = useContext(AuthContext)


  const [isDashboardActive, setIsDashboardActive] = useState(false)
  const [dashLink, setDashLink] = useState(false)

  const [isFixed, setIsFixed] = useState(true);

  

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer"); // Select Footer
      const sidebar = document.querySelector(".sidebar");

      if (!footer || !sidebar) return;

      const footerTop = footer.getBoundingClientRect().top; // Footer position
      const sidebarHeight = sidebar.offsetHeight; // Sidebar height

      if (footerTop <= sidebarHeight + 450) {
        setIsFixed(false); // Switch to absolute
      } else {
        setIsFixed(true); // Keep fixed
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




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
        <div className="light-background2  py-2 mb-4">
          <div className="container-lg">
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / About Company  / Affiliate Program</p>
          </div>
        </div>


        <div className="site-section-container">
          <div className="container-lg ">
            <div className="row g-4">
              <div className="col-xl-9 col-md-8">
                <div className="row">
                  <div className="col-lg-11">
                    <div>
                      <div className="d-flex">
                        <div className="affiliate-title-block-header site-primary-bg">
                          <p>Joining AmaniLightEquity Affiliate Partner  Program Gives You</p>
                        </div>
                      </div>

                      <div className="py-5 row g-4">
                        <div className="col-md-4 col-sm-6">
                          <div className="d-flex">
                            <div className="pe-4">
                              <img src={affiliate1} alt="" />
                            </div>

                            <p className="affiliate-icon-text">Up To 50% <br /> Rev Share</p>

                          </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                          <div className="d-flex">
                            <div className="pe-4">
                              <img src={affiliate2} alt="" />
                            </div>

                            <p className="affiliate-icon-text">Profitable <br /> CPA Offers</p>

                          </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                          <div className="d-flex">
                            <div className="pe-4">
                              <img src={affiliate3} alt="" />
                            </div>
                            
                            <p className="affiliate-icon-text">Superior NetDeposit  Options</p>

                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="pb-4 font-weight-700">Why should you pay attention to our program?</h4>
                        <p className="light-text-2 pb-4">Star Extreme Markets has an individual approach to each of its forex affiliate partners. If you have any questions as to how to start working with us, feel free to contact our support team. Star Extreme Markets provides the best financial affiliate program on the market that will have you making more money than you could ever potentially make with any other broker.</p>

                        <h4 className="py-4 font-weight-700">We Will Pay You Via</h4>
                        <div className="affiliate-payment-method-container">
                          <div className="affiliate-payment-method-sub-container">
                            <img src={payPal} alt="" />

                          </div>

                          <div className="affiliate-payment-method-sub-container">
                            <img src={banktransfer} alt="" />

                          </div>

                          <div className="affiliate-payment-method-sub-container">
                            <img src={skrill} alt="" />

                          </div>

                          <div className="affiliate-payment-method-sub-container">
                            <img src={neteller} alt="" />

                          </div>

                          <div className="affiliate-payment-method-sub-container">
                            <img src={webmoney} alt="" />

                          </div>

                          <div className="affiliate-payment-method-sub-container">
                            <img width='35px' src={btc} alt="" />

                          </div>
                        </div>

                        <h4 className="py-4 font-weight-700">For our partners</h4>
                        <p className="pb-4 light-text-2">When working with us you will enjoy the benefits of large commissions, great tracking technologies of your leads and deposits, as well as simple and very friendly working conditions.</p>
                        <p className="pb-4 light-text-2">Have some doubts if you and Star Extreme Markets are a good fit? Simply reach out to one of our team members and they will gladly prove you wrong.</p>

                        <h4 className="py-4 font-weight-700">How To Start Working With</h4>
                        <p className="pb-4 light-text-2">Becoming an Star Extreme Markets affiliate can’t get any easier than it already is.</p>
                        <div className="affiliate-payment-method-container">
                          <div className="affiliate-payment-method-sub-container">
                            <div className="d-flex">
                              <img src={affiliatestep1} alt="" />
                              <p className="ps-3 light-text font-weight-700">Register</p>
                            </div>

                          </div>

                          <div className="affiliate-payment-method-sub-container">
                            <div className="d-flex">
                              <img src={affiliatestep2} alt="" />
                              <p className="ps-3 light-text font-weight-700">Get a link</p>
                            </div>
                          </div>

                          <div className="affiliate-payment-method-sub-container">
                            <div className="d-flex">
                              <img src={affiliatestep3} alt="" />
                              <p className="ps-3 light-text font-weight-700">Promote</p>
                            </div>
                          </div>

                          <div className="affiliate-payment-method-sub-container">
                            <div className="d-flex">
                              <img src={affiliatestep4} alt="" />
                              <p className="ps-3 light-text font-weight-700">Get paid</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
                <aside className="sidebar  position-relative1">
                  <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} market-sidebar`}>
                    <div className="me-5">
                      <Link className="market-sidebar-link " to='/about-us/'>About us</Link>
                      <Link to='/contact-us/' className="market-sidebar-link " >Contact Us</Link>
                      <Link to='/affiliate-program/' className="market-sidebar-link market-sidebar-active-link">Affiliate program</Link>
                      
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        


        <div className="footer">
          <Footer />
        </div>
      </div>

    </div>
  )
}