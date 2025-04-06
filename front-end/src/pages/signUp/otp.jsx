
import "../../css/signUp/signUp.css"
import "../../css/signUp/otp.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLock,} from "@fortawesome/free-solid-svg-icons"
import {useContext, useEffect} from "react";
import { useForm } from 'react-hook-form';
import FloatingAlert from "../../component/alert";
import AuthContext from "../../context/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";
import otpPic from '../../img/otp.png'

export const OTP = () =>{
  const { 
    setEmail,
    setPassword,
    messages,
    alertVisible,
    setAlertVisible,
    showAmimaton, 
    setShowAnimation,
    disablebutton, 
    setDisablebutton,
    otp,
    setOtp,
    LoginUser,
    isSuccess,
    setActivateCaptcha,
    onCaptchaChange,
    errorMessages,


  }= useContext(AuthContext)



  setPassword(sessionStorage.getItem('password'))
  setEmail(sessionStorage.getItem('email'))




  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data, e) =>{
    if (isValid){
      console.log(data)
      LoginUser(e)
    }else{
      console.log('error')
      setDisablebutton(false)
    }
  }
  useEffect(() =>{
    setActivateCaptcha(true)
  }, [])
  


  return(
    <div className="sign-up-bg">
      <section className="container-lg">
        <div>
          <FloatingAlert
            message={messages}
            isVisible={alertVisible}
            onClose={() => setAlertVisible(false)}
            successs={isSuccess}
          />
        </div>
        <div className=''>
          <div>
            <div className="row">
            <div className="col-xl-1"></div>
              <div className="col-xl-10">
                <div className="otp-page">
                  <div className="otp-box">
                    {showAmimaton &&
                      <div className="sign-up-animation"></div>            
                    }

                    <div className="otp-box-margin">
                      <div className="row">
                        <div className="col-md-4 ">
                          <div className="sign-up-texts">
                            <div class="d-none d-md-block ">
                              <img src={otpPic} alt="" width='140%'/>
                            </div>
                          </div>


                        </div>

                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-10">
                              <div>
                                <div className="mb-5 pt-3  text-center">
                                  <h1><span className="primary-txt">OTP</span></h1>
                                  <p>An otp was sent to your mail.</p>
                                </div>
                                {errorMessages &&
                                  <div className="alert-danger p-3 mb-3">
                                    <p><i class="bi bi-exclamation-circle pe-3"></i> {errorMessages}</p>
                                  </div>
                                }
                                <div>
                                  <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row g-3">
                                      <div className="col-12">
                                        <div class="otp-group">
                                          <span class="otp-input-text"><FontAwesomeIcon icon={faLock}/></span>
                                        <input type="text"  className={`otp-input styled-input ${errors.otp ? 'error-input' : ''}`} {...register('otp', {required: true})}  value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="OTP code"/>
                                        </div>
                                        {errors.otp && <span style={{color: 'red'}}>This Feild is required</span>}
                                      </div>

                                      <div className="col-12">
                                        <div>
                                          <ReCAPTCHA sitekey="6LdtdQUrAAAAAFVowoPJ2WME7eepwmJ91VApnOE-" onChange={onCaptchaChange}/>
                                        </div>                      
                                      </div>
                                    </div>
                                    <div className="col-12 mt-4">
                                      <button disabled={disablebutton} type="submit " className={`${disablebutton ? 'disable-btn' : ''}sign-up-btn width-100`}>SUBMIT</button>
                                      
                                    </div>


                                  </form>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div className="col-xl-1"></div>
            </div>

          </div>

        </div>
      </section>
    
    </div> 
  )
}