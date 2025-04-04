import { useContext, useEffect, useState } from "react"
import '../../../css/informationCss/assets.css'
import { Navbar } from "../../../component/navbar"
import AuthContext from "../../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import AllDataContext from "../../../context/Alldata"
import { Footer } from "../../../component/footer"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import card from '../../../img/card.png'
import id from '../../../img/id.png'
export const ClientVerifiaction = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / Accounts / Verification Details</p>
          </div>
        </div>
        
        <section className="site-section-container">
          <div className="container-lg">
            <div>
              <p className="lg-text font-weight-700 pb-3">LIST OF DOCUMENTS FOR THE VERIFICATION</p>
              <p className="light-text-2">To make the first step with us, you need to verify your account. Below you can find a list of the documents required for the verification process</p>
              <p className="site-header font-weight-700 py-3">PROOF OF ID</p>
              <p className="light-text-2">Take a photo of your passport. Please make sure that ALL 4 corners of the document and the applicant’s full name are visible.</p>
              <p className="light-text-2 py-3">You can also take a photo of your ID, national identity card.</p>
            </div>

            <div className="row">
              <div className="col-md-6">
                <img width='100%' src={id} alt="" />

              </div>
            </div>


            <div>
              <p className="site-header font-weight-700 py-3">PROOF OF RESIDENCE</p>
              <p className="light-text-2">Any utility bill (electricity, gas, water, or a landline phone) - (issued within the last three months), bank statement (issued within the previous six months), or certificate of residence (issued within the last six months). Full name, address, and date must be unmistakable, and the archive must be dated inside three months. Kindly ensure that ALL 4 corners of the report are noticeable.</p>
            </div>

            <div>
              <p className="site-header font-weight-700 py-3">CREDIT CARD</p>
              <p className="light-text-2">Photo of both sides of the credit/debit card used for the payment. The first four digits of your card number, the last four digits and your name on the front side, the expiry date on both sides of the card and your signature on the backside should be visible. The CVV and eight digits in the middle of the card number should be hidden. In the example below, you’ll see the card's areas that should be opened for us.</p>
            </div>



            <div className="row">
              <div className="col-md-6">
                <img width='100%' src={card} alt="" />

              </div>
            </div>

            <div className="light-text-2">
              <p className="pt-3">Documents can be emailed to: support@amaniLghtEquity.com</p>
              <p className="pb-3">Documents may also be uploaded in the Upload tab on Settings section of the account dashboard.</p>
              <p>Please note that AmaniLightEquity may require additional forms and documentation to complete the application process.</p>
              <p className="font-weight-700 py-3">Please, make sure that 4 corners of each document are fully visible, documents are full-color and clear.</p>
              <p className="pt-3">Login and Visit the Verify section of your dashboard, you only do this once.</p>
            </div>
          </div>

        </section>



        <Footer />
      </div>

    </div>
  )
}