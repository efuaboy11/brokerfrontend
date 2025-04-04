import { useContext, useEffect, useState } from "react"
import '../../../css/informationCss/market.css'
import { Navbar } from "../../../component/navbar"
import AuthContext from "../../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import AllDataContext from "../../../context/Alldata"
import { Footer } from "../../../component/footer"
import { faAngleDown, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import indexes from '../../../img/indexes.jpg'
import { useForm } from "react-hook-form"
import FloatingAlert from "../../../component/alert"
export const Contact = () =>{
  const { authTokens, 
    messages,
    alertVisible,
    setAlertVisible,
    isSuccess,
    showAlert,
    setMessage,
    setIsSuccess,


    overlay,
    formatCurrency,
    formatName,
    roundUp,
    disablebutton,
    setDisablebutton 

  } = useContext(AuthContext)


  const [isDashboardActive, setIsDashboardActive] = useState(false)
  const [dashLink, setDashLink] = useState(false)

  const [isFixed, setIsFixed] = useState(true);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [loader, setLoader] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();


  const onSubmit = (data, e) =>{
    if (isValid){
      console.log(data)
      sendEmail(e)
    }else{
      console.log('error')
      setDisablebutton(false)
    }
  }

  const sendEmail = async(e) =>{
    e.preventDefault()
    setLoader(true)

    const formData = new FormData()

    formData.append('email', email)
    formData.append('name', name)
    formData.append('message', emailMessage)

    try{
      const response = await fetch('http://127.0.0.1:8000/api/contact-us/', {
        method: 'POST',
        body: formData,
      })



      if(response.ok){
        showAlert()
        setMessage('Email Sent')
        setIsSuccess(true)
        setLoader(false)
        setDisablebutton(false)
        setName('')
        setEmailMessage('')
        setEmail('')

      }else{
        const errorData = await response.json()
        const errorMessages = Object.values(errorData)
        .flat()
        .join(', ');
        setMessage(errorMessages)
        setDisablebutton(false)
        setIsSuccess(false)
        setLoader(false)
        showAlert()
      }

      
    }catch(error){
      console.log(error)
      showAlert()
      setMessage('An unexpected error occurred.');
      setDisablebutton(false)
      setIsSuccess(false)
      setLoader(false)
    }  
  }



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
        <FloatingAlert
          message={messages}
          isVisible={alertVisible}
          onClose={() => setAlertVisible(false)}
          successs={isSuccess}
        />
          </div>


      <div>
        <div className="light-background2  py-2 mb-4">
          <div className="container-lg">
          <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / About Company  / Contact Us</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row gx-4">
            <div className="col-md-6">
              <div className="box-shadow-2 border-radius-10px p-4 mb-4">
                <p className="site-header font-weight-700 pb-3">Head Office</p>
                <div>
                  <div className="d-flex align-center pb-3">
                    <FontAwesomeIcon className="site-primary-text pe-2" icon={faLocationDot}/>
                    <p className="light-text-2">27 Division St, 1100. E Denver, CO 80237, USA</p>
                  </div>

                  <div className="d-flex align-center pb-3">
                    <FontAwesomeIcon className="site-primary-text pe-2" icon={faPhone}/>
                    <p className="light-text-2">+1 (983) 458-3459</p>
                  </div>

                  <div className="d-flex align-center pb-3">
                    <FontAwesomeIcon className="site-primary-text pe-2" icon={faEnvelope}/>
                    <p className="light-text-2">support@amanilightequity.com</p>
                  </div>
                </div>

              </div>

              <div className="box-shadow-2 border-radius-10px p-4 mb-4">
                <p className="site-header font-weight-700 pb-3">Opening Hours</p>
                <div>
                  <p className="pb-2"><span className="font-weight-700">Mondays:</span> 08:00 - 20:00 (GMT+3)</p>
                  <p className="pb-2"><span className="font-weight-700">Tuesdays:</span> 08:00 - 20:00 (GMT+3)</p>
                  <p className="pb-2"><span className="font-weight-700">Wednesdays:</span> 08:00 - 20:00 (GMT+3)</p>
                  <p className="pb-2"><span className="font-weight-700">Thursdays:</span> 08:00 - 20:00 (GMT+3)</p>
                  <p className="pb-2"><span className="font-weight-700">Fridays:</span> 08:00 - 20:00 (GMT+3)</p>
                  <p className="pb-2"><span className="font-weight-700">Saturdays:</span> 12:00 - 18:00 (GMT+3)</p>
                </div>

              </div>
            </div>
            
            <div className="col-md-6">
              <div className="box-shadow-2 border-radius-10px p-4">
                <div>
                  <p className="site-header pb-3 font-weight-700">Send Us a Message</p>
                  <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row g-3">
                          <div className="col-12">
                            <label className="form-label">Email</label>
                            <input type="email" className={` ${errors.email ? 'error-input' : ''} styled-input`} {...register('email', {required: true})}  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g johnDoe23@gmail.com" />
                            {errors.email && <span style={{color: 'red'}}>This Feild is required</span>}
                          </div>

                          <div className="col-12">
                            <label className="form-label">Your Name</label>
                            <input type="text" className={` ${errors.name ? 'error-input' : ''} styled-input`} {...register('name', {required: true})}  value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g john doe" />
                            {errors.name && <span style={{color: 'red'}}>This Feild is required</span>}
                          </div>

                          <div className="col-12">
                            <label className="form-label">Message</label>
                            <textarea rows='6' type="email" className={` ${errors.emailMessage ? 'error-input' : ''} styled-input`} {...register('emailMessage', {required: true})}  value={emailMessage} onChange={(e) => setEmailMessage(e.target.value)} placeholder="e.g john doe" />
                            {errors.emailMessage && <span style={{color: 'red'}}>This Feild is required</span>}
                          </div>

                        </div>
                        <div className="col-12 mt-4">
                        <button  className="dashboard-btn py-2 px-5" type="submit" disabled={disablebutton}>    
                            <span class={`${loader ? 'dashboard-submit-spinner': ''}`}></span>
                            <span class={`${loader ? 'dashboard-submit-btn-visiblity': ''}`}>Send</span>
                          </button> 
                         
                          
                        </div>


                    </form>
                  </div>
                </div>
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