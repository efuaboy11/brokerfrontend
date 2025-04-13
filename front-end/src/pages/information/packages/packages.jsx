import { useContext, useEffect, useState } from "react"
import '../../../css/informationCss/market.css'
import { Navbar } from "../../../component/navbar"
import AuthContext from "../../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import AllDataContext from "../../../context/Alldata"
import { Footer } from "../../../component/footer"
import { faAngleDown, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import indexes from '../../../img/indexes.jpg'
import spin from '../../../img/Spin.gif'
export const Packages = () =>{
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

  const {
    investmentPlanData,
    InvestmentPlanFunction,
    investemmentPlanLoder,

  } = useContext(AllDataContext)

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
    InvestmentPlanFunction()

  }, [])

  


  return(
    <div>
      <div className="position-sticky1">
        <Navbar/>
      </div>


      <div>
        <div className="light-background2  py-2 mb-4">
          <div className="container-lg">
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / Our Packages</p>
          </div>
        </div>


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



              {investmentPlanData.length > 0 ? (
                  <div className="row g-3 pt-5 mt-3">
                    {investmentPlanData.map((data) => (
                      <div className="col-xl-4  col-lg-6">
                        <div className='home-investment-plan-boxes pt-5'>
                          <div className="">
                            <div className='p-4'>
                              <div className="text-center">
                                <h1 className="site-primary-text home-investment-plan-sub-headers">{formatName(data.plan_name)}</h1>
                                <h3 className="home-investment-plan-dark-text">{formatName(data.time_rate)} {roundUp(data.percentage_return)}% for {data.duration} {formatName(data.duration_span)}</h3>
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
            </div>

          </section>

        


        <div className="footer">
          <Footer />
        </div>
      </div>

    </div>
  )
}