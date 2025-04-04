import { useContext, useEffect, useState } from "react"
import '../../../css/informationCss/assets.css'
import { Navbar } from "../../../component/navbar"
import AuthContext from "../../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import AllDataContext from "../../../context/Alldata"
import { Footer } from "../../../component/footer"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import btc from '../../../img/btcc.png'
import card from '../../../img/cart.png'
import neteller from '../../../img/neteller (1).svg'
import bank from '../../../img/bank_trns.png'
export const DepositMethod = () =>{
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
  const [step4Dropdown, setStep4Dropdown] = useState(false)


  const toggleStep1 = () =>{
    setStep1Dropdown(!step1Dropdown)
    setStep2Dropdown(false)
    setStep3Dropdown(false)
    setStep4Dropdown(false)
    
  }

  const toggleStep2 = () =>{
    setStep2Dropdown(!step2Dropdown)
    setStep1Dropdown(false)
    setStep3Dropdown(false)
    setStep4Dropdown(false)

  }

  const toggleStep3 = () =>{
    setStep3Dropdown(!step3Dropdown)
    setStep1Dropdown(false)
    setStep2Dropdown(false)
    setStep4Dropdown(false)

  }

  const toggleStep4 = () =>{
    setStep4Dropdown(!step4Dropdown)
    setStep3Dropdown(false)
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
        <div className="light-background2  py-2 mb-4">
          <div className="container-lg">
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / Accounts / Deposit Methods</p>
          </div>
        </div>
        
        <section className="site-section-container">
          <div className="container-lg">
            <div>
              <p className="site-header font-weight-700 pb-4">Deposit methods:</p>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className=" box-shadow-2 border-radius-5px">
                    <div className="row p-4" onClick={toggleStep1}>
                      <div className="cursor-pointer col-11">
                        <div className="d-flex align-center">
                          <div className="pe-4 border-right-dotted">
                            <img width='70px' src={card} alt="" />
                          </div>

                          <h5 className="ps-4">Credit Card</h5>
                        </div>
                        
                      </div>

                      <div className="cursor-pointer col-1">
                        <p className="d-flex align-center justify-content-end"><FontAwesomeIcon icon={faAngleDown}/></p>
                      </div>

                      <div className={`col-12 dropdown-content  ${step1Dropdown ? "slide-in" : "slide-out"}`}>
                        <p className="light-text-2 py-5">This is one more way to fund your AmanilLightEquity broker trade account. VISA, MasterCard, Maestro, Visa Electron cards are accepted. Instant deposit.</p>
                        <div className="pb-4">
                          <Link to={`${isDashboardActive ? dashLink : '/register'}`}>Get Started</Link>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-md-6">
                  <div className="box-shadow-2 border-radius-5px">
                    <div className="row  p-4" onClick={toggleStep2}>
                      <div className="cursor-pointer col-11">
                        <div className="d-flex align-center">
                          <div className="pe-4 border-right-dotted">
                            <img width='70px' src={bank} alt="" />
                          </div>

                          <h5 className="ps-4">Bank Transfer</h5>
                        </div>
                        
                      </div>

                      <div className="cursor-pointer col-1">
                        <p className="d-flex align-center justify-content-end"><FontAwesomeIcon icon={faAngleDown}/></p>
                      </div>

                      <div className={`col-12 dropdown-content  ${step2Dropdown ? "slide-in" : "slide-out"}`}>
                        <p className="light-text-2 py-5">This is one of the safest ways to transfer funds to your account provided by AmaniLightEquity broker. Check with your bank before you use it so that any extra fees are not charged for the electronic transfer—deposit time – up to three working days.</p>
                        <div className="pb-4">
                          <Link to={`${isDashboardActive ? dashLink : '/register'}`}>Get Started</Link>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box-shadow-2 border-radius-5px">
                    <div className="row p-4" onClick={toggleStep3}>
                      <div className="cursor-pointer col-11">
                        <div className="d-flex align-center">
                          <div className="pe-4 border-right-dotted">
                            <img width='70px' src={btc} alt="" />
                          </div>

                          <h5 className="ps-4">Bank Transfer</h5>
                        </div>
                        
                      </div>

                      <div className="cursor-pointer col-1">
                        <p className="d-flex align-center justify-content-end"><FontAwesomeIcon icon={faAngleDown}/></p>
                      </div>

                      <div className={`col-12 dropdown-content  ${step3Dropdown ? "slide-in" : "slide-out"}`}>
                        <p className="light-text-2 py-5">You are able to fund your AmaniLightEquity broker account via Bitcoin wallet. Instant deposit.</p>
                        <div className="pb-4">
                          <Link to={`${isDashboardActive ? dashLink : '/register'}`}>Get Started</Link>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box-shadow-2 border-radius-5px">
                    <div className="row p-4" onClick={toggleStep4}>
                      <div className="cursor-pointer col-11">
                        <div className="d-flex align-center">
                          <div className="pe-4 border-right-dotted">
                            <img width='70px' src={neteller} alt="" />
                          </div>

                          <h5 className="ps-4">Neteller</h5>
                        </div>
                        
                      </div>

                      <div className="cursor-pointer col-1">
                        <p className="d-flex align-center justify-content-end"><FontAwesomeIcon icon={faAngleDown}/></p>
                      </div>

                      <div className={`col-12 dropdown-content  ${step4Dropdown ? "slide-in" : "slide-out"}`}>
                        <p className="light-text-2 py-5">You are able to fund your AmaniLightEquity broker account via Neteller e-payment system. Instant deposit.</p>
                        <div className="pb-4">
                          <Link to={`${isDashboardActive ? dashLink : '/register'}`}>Get Started</Link>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>



        <Footer />
      </div>

    </div>
  )
}