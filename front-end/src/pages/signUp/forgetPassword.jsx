
import "../../css/signUp/signUp.css"
import "../../css/signUp/otp.css"
import {useContext, useEffect} from "react";
import { useForm } from 'react-hook-form';
import FloatingAlert from "../../component/alert";
import AuthContext from "../../context/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import Pic from '../../img/forgot.png'

export const ForgotPasssword = () =>{
  const { 
    email,
    setEmail,
    messages,
    alertVisible,
    setAlertVisible,
    showAmimaton, 
    setShowAnimation,
    disablebutton, 
    setDisablebutton,
    RequestOTP,
    isSuccess,
    setPage,
    setActivateCaptcha,
    errorMessages,
    onCaptchaChange,
  }= useContext(AuthContext)



  setPage('forgot-password-2')
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data, e) =>{
    if (isValid){
      console.log(data)

      RequestOTP(e)
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
                              <div>
                                <img src={Pic} alt="" width='130%'/>
                              </div>
                            </div>
                          </div>


                        </div>

                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-10">
                              <div>
                                <div className="mb-5 pt-3  text-center">
                                  <h1><span className="primary-txt">Forgot</span> Your Password</h1>
                                  <p className="mt-4">Please enter the email you use to sign in to <span className="font-bold">AmaniLightEquity</span> , you will receive an <span className="font-bold">OTP</span>  for resetting your password.</p>
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
                                          <label className="form-label">Email</label>
                                          <input type="email" className={`styled-input ${errors.email ? 'error-input' : ''}`} {...register('email', {required: true})}  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g johnDoe23@gmail.com" />
                                          {errors.email && <span style={{color: 'red'}}>This Feild is required</span>}
                                        </div>

                                        <div className="col-12">
                                          <div>
                                            <ReCAPTCHA sitekey="6LdcY7kqAAAAAD-uqrX0lrpUIabQjuWpWFosd2y_" onChange={onCaptchaChange}/>
                                          </div>                      
                                        </div>
                                      </div>
                                      <div className="col-12 mt-4">
                                        <button disabled={disablebutton} type="submit " className={`${disablebutton ? 'disable-btn' : ''}sign-up-btn width-100`}>SEND OTP</button>
                                        <div className="d-block d-sm-flex justify-content-between py-2">
                                          <p className="">Remembered my password? <Link to='/login'>Sign in</Link> </p>

                                        </div>
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