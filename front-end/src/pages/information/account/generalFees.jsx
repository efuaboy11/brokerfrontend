import { useContext, useEffect, useState } from "react"
import '../../../css/informationCss/account.css'
import { Navbar } from "../../../component/navbar"
import AuthContext from "../../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import AllDataContext from "../../../context/Alldata"
import { Footer } from "../../../component/footer"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import id from '../../../img/id.png'
import btc from '../../../img/btcc.png'
import card from '../../../img/cart.png'
import neteller from '../../../img/neteller (1).svg'
import bank from '../../../img/bank_trns.png'
export const GeneralFees = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / Accounts / General Fees</p>
          </div>
        </div>
        
        <section className="site-section-container">
          <div className="container-lg">
            <p className="lg-text font-weight-700">Withdrawal Information and General Fees</p>
            <p className="py-3 light-text-2">Deposit funds to your AmaniLightEquity Trading account using one of our convenient options below. All deposit activity is secure and trackable. Please contact your Client Services Representative for further assistance or clarification.</p>

            <div className="light-background4">
              <div>
                <p className="text-center site-text font-weight-700 sm-text py-4">Available Funding Methods at AmaniLightEquity</p>
              </div>
             
              <div className="dash-scroll-bar">
                <table className="account-table">
                    <thead>
                      <tr className="text-center">
                        <th className="py-4"></th>
                        <th></th>
                        <th>Process Time</th>
                        <th>Fees</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="text-center">
                        <td className=" py-2"><img className="account-table-image" src={card} alt="" /></td>
                        <td className="light-text-2 px-2 account-table-text">Credit Card</td>
                        <td className="light-text-2 px-2 account-table-text">Instant</td>
                        <td className="light-text-2 px-2 account-table-text">$0</td>
                        <td><Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn px-4">Fund <span className="d-none d-sm-inline">Your Account</span></Link></td>
                      </tr>

                      <tr className="text-center">
                        <td className=" py-2"><img className="account-table-image" src={btc} alt="" /></td>
                        <td className="light-text-2 px-2 account-table-text">Bitcoin</td>
                        <td className="light-text-2 px-2 account-table-text">Instant</td>
                        <td className="light-text-2 px-2 account-table-text">$0</td>
                        <td><Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn px-4">Fund <span className="d-none d-sm-inline">Your Account</span></Link></td>
                      </tr>


                      <tr className="text-center">
                        <td className=" py-2"><img className="account-table-image" src={neteller} alt="" /></td>
                        <td className="light-text-2 px-2 account-table-text">Neteller</td>
                        <td className="light-text-2 px-2 account-table-text">Instant</td>
                        <td className="light-text-2 px-2 account-table-text">$0</td>
                        <td><Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn px-4">Fund <span className="d-none d-sm-inline">Your Account</span></Link></td>
                      </tr>

                      <tr className="text-center">
                        <td className=" py-2"><img className="account-table-image" src={bank} alt="" /></td>
                        <td className="light-text-2 px-2 account-table-text">Bank Transfer</td>
                        <td className="light-text-2 px-2 account-table-text">Between 2-3 Days</td>
                        <td className="light-text-2 px-2 account-table-text">$0</td>
                        <td><Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn px-4">Fund <span className="d-none d-sm-inline">Your Account</span></Link></td>
                      </tr>

                    </tbody>
                </table>
              </div>
            </div>
            <p className="light-text-2 font-weight-700 pt-3">Please note that all deposit activity is secure and trackable.</p>


          </div>

        </section>


        <section className="site-section-container">
          <div className="container-lg">
            <p className="light-text-2 font-weight-700">Withdrawal Request Fees</p>
            <p className="py-3 light-text-2">To withdraw funds, click Withdrawal Request on the dashboard and type the amount you wish to withdraw. Once the request has been made, AmaniLightEquity will process the withdrawal within one business day.</p>

            <div className="light-background4">
              <div>
                <p className="text-center site-text font-weight-700 sm-text py-4">Withdrawal Request Fees</p>
              </div>
             
              <div className="dash-scroll-bar">
                <table className="account-table">
                    <thead>
                      <tr className="text-center">
                        <th className="py-4"></th>
                        <th></th>
                        <th>Process Time</th>
                        <th>Fees</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="text-center">
                        <td className=" py-2"><img className="account-table-image" src={card} alt="" /></td>
                        <td className="light-text-2 px-2 account-table-text">Credit Card</td>
                        <td className="light-text-2 px-2 account-table-text">Up to 1 Business day</td>
                        <td className="light-text-2 px-2 account-table-text">To be Specified</td>
                        <td><Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn px-4">Fund <span className="d-none d-sm-inline">Your Account</span></Link></td>
                      </tr>

                      <tr className="text-center">
                        <td className=" py-2"><img className="account-table-image" src={btc} alt="" /></td>
                        <td className="light-text-2 px-2 account-table-text">Bitcoin</td>
                        <td className="light-text-2 px-2 account-table-text">Up to 1 Business Day</td>
                        <td className="light-text-2 px-2 account-table-text">To be Specified</td>
                        <td><Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn px-4">Fund <span className="d-none d-sm-inline">Your Account</span></Link></td>
                      </tr>


                      <tr className="text-center">
                        <td className=" py-2"><img className="account-table-image" src={neteller} alt="" /></td>
                        <td className="light-text-2 px-2 account-table-text">Neteller</td>
                        <td className="light-text-2 px-2 account-table-text">Up to 1 Business Day</td>
                        <td className="light-text-2 px-2 account-table-text">To be Specified</td>
                        <td><Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn px-4">Fund <span className="d-none d-sm-inline">Your Account</span></Link></td>
                      </tr>

                      <tr className="text-center">
                        <td className=" py-2"><img className="account-table-image" src={bank} alt="" /></td>
                        <td className="light-text-2 px-2 account-table-text">Bank Transfer</td>
                        <td className="light-text-2 px-2 account-table-text">Up to 2 Business Days</td>
                        <td className="light-text-2 px-2 account-table-text">To be Specified</td>
                        <td><Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn px-4">Fund <span className="d-none d-sm-inline">Your Account</span></Link></td>
                      </tr>

                    </tbody>
                </table>
              </div>
            </div>


          </div>

        </section>



        <Footer />
      </div>

    </div>
  )
}