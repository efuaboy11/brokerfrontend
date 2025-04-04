import '../../../css/dashboardCss/dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthContext from "../../../context/AuthContext";
import { useContext, useEffect, useRef, useState } from 'react';
import ReactPaginate  from "react-paginate"
import { Link, useNavigate } from 'react-router-dom';
import { faChevronLeft, faChevronRight, faX } from '@fortawesome/free-solid-svg-icons';
import FloatingAlert from '../../../component/alert';
import spin from '../../../img/Spin.gif'
import AllDataContext from '../../../context/Alldata';
import { useForm } from 'react-hook-form';
import { ClientDashFrame } from '../../../component/ClientDashFrame';
import { DashboardFooter } from '../../../component/dashbaordFooter';

export const ClientUserProfile = () =>{
  const { authTokens, 
    messages,
    alertVisible,
    setAlertVisible,
    isSuccess,
    showAlert,
    setMessage,
    setIsSuccess,


    OnbodyClick,
    formatDateTime,
    formatCurrency,
    formatName,
    disablebutton, 
    setDisablebutton,
    userProfile,


  } = useContext(AuthContext)


  const {
    interestData,
    interestLoader,
    InterestFunction,
    totalInterest,

  } = useContext(AllDataContext)
  const [isAnyModalOPen, setIsAnyModalOpen] = useState(false)


  const [fullNamebtnLoader, setFullNamebtnLoader] = useState(false)
  const [fullNameModal, setFullNameModal] = useState(false)

  const [firstNameValue, setFirstNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')


  const [userNamebtnLoader, setUserNamebtnLoader] = useState(false)
  const [userNameModal, setUserNameModal] = useState(false)
  const [userNameValue, setUserNameValue] = useState('')


  const [emailbtnLoader, setEmailbtnLoader] = useState(false)
  const [emailModal, setEmailModal] = useState(false)
  const [emailValue, setEmailValue] = useState('')


  const [phoneNumberbtnLoader, setPhoneNumberbtnLoader] = useState(false)
  const [phoneNumberModal, setPhoneNumberModal] = useState(false)
  const [phoneNumberValue, setPhoneNumberValue] = useState('')

  const [sexbtnLoader, setSexbtnLoader] = useState(false)
  const [sexModal, setSexModal] = useState(false)
  const [sexValue, setSexValue] = useState('')

  const [addressbtnLoader, setAddressbtnLoader] = useState(false)
  const [addressModal, setAddressModal] = useState(false)

  const [addressValue, setAddressValue] = useState('')
  const [countryValue, setCountryValue] = useState('')
  const [stateValue, setStateValue] = useState('')
  const [cityValue, setCityValue] = useState('')
  const [zipCodeValue, setZipCodeValue] = useState('')




  const hideFullNameModal = () => {
    setFullNameModal(false)
    setIsAnyModalOpen(false)

  }

  const showFullNameModal = () => {
    setFullNameModal(true)
    setIsAnyModalOpen(true)
  }


  const hideUserNameModal = () => {
    setUserNameModal(false)

  }

  const showUserNameModal = () => {
    setUserNameModal(true)
  }

  const hideEmailModal = () => {
    setEmailModal(false)

  }

  const showEmailModal = () => {
    setEmailModal(true)
  }

  const hidePhoneNumberModal = () => {
    setPhoneNumberModal(false)

  }

  const showPhoneNumberModal = () => {
    setPhoneNumberModal(true)
  }

  const hideSexModal = () => {
    setSexModal(false)

  }

  const showSexModal = () => {
    setSexModal(true)
  }

  const hideAddressModal = () => {
    setAddressModal(false)

  }

  const showAddressModal = () => {
    setAddressModal(true)
  }


  const onUserNameSubmit = (data, e) =>{
    setDisablebutton(true)
    setUserNamebtnLoader(true)
    if(isValidUserName){
      editUserName(e)
      
    }else{
      setDisablebutton(false)
    }

  }

  const onFullNameSubmit = (data, e) =>{
    setDisablebutton(true)
    setFullNamebtnLoader(true)
    if(isValidFullName){
      editFullName(e)
      
    }else{
      setDisablebutton(false)
    }

  }

  const onEmailSubmit = (data, e) =>{
    setDisablebutton(true)
    setEmailbtnLoader(true)
    if(isValidEmail){
      editEmail(e)
      
    }else{
      setDisablebutton(false)
    }

  }

  const onPhoneNumberSubmit = (data, e) =>{
    setDisablebutton(true)
    setPhoneNumberbtnLoader(true)
    if(isValidPhoneNumber){
      editPhoneNumber(e)
      
    }else{
      setDisablebutton(false)
    }

  }

  const onAddressSubmit = (data, e) =>{
    setDisablebutton(true)
    setAddressbtnLoader(true)
    if(isValidAddress){
      editAddress(e)
      
    }else{
      setDisablebutton(false)
    }

  }

  const onSexSubmit = (data, e) =>{
    setDisablebutton(true)
    setSexbtnLoader(true)
    if(isValidSex){
      editSex(e)
      
    }else{
      setDisablebutton(false)
    }

  }


  const editFullName = async(e) =>{
    e.preventDefault()
    setFullNamebtnLoader(true)

    const formData = new FormData()
    formData.append('first_name', firstNameValue)
    formData.append('last_name', lastNameValue)

    try{
      const response = await fetch(`https://api.amanilightequity.com/api/user/verification/${userProfile.user_verification[0].id}/`, {
        method: 'PATCH',
        body: formData,
        headers:{
          Authorization: `Bearer ${authTokens.access}`
        }
      })


      if(response.ok){
        showAlert()
        setMessage('Name successfully edited')
        setIsSuccess(true)
        setFullNamebtnLoader(false)
        setDisablebutton(false)
        setFullNameModal(false)
      }else{
        const errorData = await response.json()
        const errorMessages = Object.values(errorData)
        .flat()
        .join(', ');
        setMessage(errorMessages)
        setDisablebutton(false)
        setIsSuccess(false)
        setFullNamebtnLoader(false)
        showAlert()
      }

      
    }catch(error){
      
      console.log(error)
      showAlert()
      setMessage('An unexpected error occurred.');
      setDisablebutton(false)
      setIsSuccess(false)
      setFullNamebtnLoader(false)

    }  
  }

  const editUserName = async(e) =>{
    e.preventDefault()
    setUserNamebtnLoader(true)

    const formData = new FormData()
    formData.append('user_name', userNameValue)

    try{
      const response = await fetch(`https://api.amanilightequity.com/api/users/${userProfile.user}/`, {
        method: 'PATCH',
        body: formData,
        headers:{
          Authorization: `Bearer ${authTokens.access}`
        }
      })


      if(response.ok){
        showAlert()
        setMessage('Username successfully edited')
        setIsSuccess(true)
        setUserNamebtnLoader(false)
        setDisablebutton(false)
        setUserNameModal(false)
      }else{
        const errorData = await response.json()
        const errorMessages = Object.values(errorData)
        .flat()
        .join(', ');
        setMessage(errorMessages)
        setDisablebutton(false)
        setIsSuccess(false)
        showAlert()
      }

      
    }catch(error){
      
      console.log(error)
      showAlert()
      setMessage('An unexpected error occurred.');
      setDisablebutton(false)
      setIsSuccess(false)
      setUserNamebtnLoader(false)

    }  
  }


  const editEmail = async(e) =>{
    e.preventDefault()
    setEmailbtnLoader(true)

    const formData = new FormData()
    formData.append('email', emailValue)

    try{
      const response = await fetch(`https://api.amanilightequity.com/api/users/${userProfile.user}/`, {
        method: 'PATCH',
        body: formData,
        headers:{
          Authorization: `Bearer ${authTokens.access}`
        }
      })


      if(response.ok){
        showAlert()
        setMessage('Email successfully edited')
        setIsSuccess(true)
        setEmailbtnLoader(false)
        setDisablebutton(false)
        setEmailModal(false)
      }else{
        const errorData = await response.json()
        const errorMessages = Object.values(errorData)
        .flat()
        .join(', ');
        setMessage(errorMessages)
        setDisablebutton(false)
        setIsSuccess(false)
        showAlert()
      }

      
    }catch(error){
      
      console.log(error)
      showAlert()
      setMessage('An unexpected error occurred.');
      setDisablebutton(false)
      setIsSuccess(false)
      setEmailbtnLoader(false)

    }  
  }

  const editPhoneNumber = async(e) =>{
    e.preventDefault()
    setPhoneNumberbtnLoader(true)

    const formData = new FormData()
    formData.append('phone_number', phoneNumberValue)

    try{
      const response = await fetch(`https://api.amanilightequity.com/api/user/verification/${userProfile.user_verification[0].id}/`, {
        method: 'PATCH',
        body: formData,
        headers:{
          Authorization: `Bearer ${authTokens.access}`
        }
      })


      if(response.ok){
        showAlert()
        setMessage('Phone number successfully edited')
        setIsSuccess(true)
        setPhoneNumberbtnLoader(false)
        setDisablebutton(false)
        setPhoneNumberModal(false)
      }else{
        const errorData = await response.json()
        const errorMessages = Object.values(errorData)
        .flat()
        .join(', ');
        setMessage(errorMessages)
        setDisablebutton(false)
        setIsSuccess(false)
        showAlert()
      }

      
    }catch(error){
      
      console.log(error)
      showAlert()
      setMessage('An unexpected error occurred.');
      setDisablebutton(false)
      setIsSuccess(false)
      setPhoneNumberbtnLoader(false)

    }  
  }

  const editSex = async(e) =>{
    e.preventDefault()
    setSexbtnLoader(true)

    const formData = new FormData()
    formData.append('gender', sexValue)

    try{
      const response = await fetch(`https://api.amanilightequity.com/api/user/verification/${userProfile.user_verification[0].id}/`, {
        method: 'PATCH',
        body: formData,
        headers:{
          Authorization: `Bearer ${authTokens.access}`
        }
      })


      if(response.ok){
        showAlert()
        setMessage('Sex successfully edited')
        setIsSuccess(true)
        setSexbtnLoader(false)
        setDisablebutton(false)
        setSexModal(false)
      }else{
        const errorData = await response.json()
        const errorMessages = Object.values(errorData)
        .flat()
        .join(', ');
        setMessage(errorMessages)
        setDisablebutton(false)
        setIsSuccess(false)
        showAlert()
      }

      
    }catch(error){
      
      console.log(error)
      showAlert()
      setMessage('An unexpected error occurred.');
      setDisablebutton(false)
      setIsSuccess(false)
      setSexbtnLoader(false)

    }  
  }

  const editAddress = async(e) =>{
    e.preventDefault()
    setAddressbtnLoader(true)

    const formData = new FormData()
    formData.append('address', addressValue)
    formData.append('city_town', cityValue)
    formData.append('state', stateValue)  
    formData.append('country', countryValue)
    formData.append('zip_code', zipCodeValue)    

    try{
      const response = await fetch(`https://api.amanilightequity.com/api/user/verification/${userProfile.user_verification[0].id}/`, {
        method: 'PATCH',
        body: formData,
        headers:{
          Authorization: `Bearer ${authTokens.access}`
        }
      })


      if(response.ok){
        showAlert()
        setMessage('Address successfully edited')
        setIsSuccess(true)
        setAddressbtnLoader(false)
        setDisablebutton(false)
        setAddressModal(false)
      }else{
        const errorData = await response.json()
        const errorMessages = Object.values(errorData)
        .flat()
        .join(', ');
        setMessage(errorMessages)
        setDisablebutton(false)
        setIsSuccess(false)
        showAlert()
      }

      
    }catch(error){
      
      console.log(error)
      showAlert()
      setMessage('An unexpected error occurred.');
      setDisablebutton(false)
      setIsSuccess(false)
      setAddressbtnLoader(false)

    }  
  }

  const {
    register: registerFullName,
    handleSubmit: handleSubmitFullName,
    formState: { errors: errorsFullName, isValid: isValidFullName},
  } = useForm();


  const {
    register: registerUserName,
    handleSubmit: handleSubmitUserName,
    formState: { errors: errorsUserName, isValid: isValidUserName},
  } = useForm();


  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: errorsEmail, isValid: isValidEmail},
  } = useForm();

  const {
    register: registerPhoneNumber,
    handleSubmit: handleSubmitPhoneNumber,
    formState: { errors: errorsPhoneNumber, isValid: isValidPhoneNumber},
  } = useForm();

  const {
    register: registerSex,
    handleSubmit: handleSubmitSex,
    formState: { errors: errorsSex, isValid: isValidSex},
  } = useForm();

  const {
    register: registerAddress,
    handleSubmit: handleSubmitAddress,
    formState: { errors: errorsAddress, isValid: isValidAddress},
  } = useForm();


  useEffect(() =>{
    setFirstNameValue(userProfile?.user_verification[0].first_name || '')
    setLastNameValue(userProfile?.user_verification[0].last_name || '')
    setUserNameValue(userProfile?.user_details.user_name || '')
    setEmailValue(userProfile?.user_details.email || '')
    setPhoneNumberValue(userProfile?.user_verification[0].phone_number || '')
    setSexValue(userProfile?.user_verification[0].gender || '')
    setAddressValue(userProfile?.user_verification[0].address || '')
    setCityValue(userProfile?.user_verification[0].city_town || '')
    setStateValue(userProfile?.user_verification[0].state || '')
    setCountryValue(userProfile?.user_verification[0].country || '')
    setZipCodeValue(userProfile?.user_verification[0].zip_code || '')
  }, [userProfile])


  
  return(
    <div>
    <div>
      <FloatingAlert
        message={messages}
        isVisible={alertVisible}
        onClose={() => setAlertVisible(false)}
        successs={isSuccess}
      />
    </div>
      {userProfile && 
        <div>
          <div className="position-sticky1">
            <ClientDashFrame />
          </div>

          

          <div className="main-content" onClick={OnbodyClick}>

            {fullNameModal &&
              <section className="overlay-background">
                <div className="dashboard-modal-container">
                  <div className="dashboard-modal-content-2">
                    <div className="d-flex justify-content-between pb-4">
                      <div>
                        <p className="dashboard-header">Update Name</p>
                        <p className="light-text">Make changes to your name </p>
                      </div>
                      <div className='cursor-pointer' onClick={hideFullNameModal}>
                        <FontAwesomeIcon className='sm-text' icon={faX}/>
                      </div>
                    </div>

                    <form onSubmit={handleSubmitFullName(onFullNameSubmit)}>
                      <div>
                        <label htmlFor="" className="p-2 d-block">First Name</label>
                        <input  className={`${errorsFullName.firstNameValue ? 'error-input' : ''} d-block dashboard-input dashboard-update-status-input`} {...registerFullName('firstNameValue', {required: true})} type="text"   value={firstNameValue} onChange={(e) => setFirstNameValue(e.target.value)}/>
                        {errorsFullName.firstNameValue && <span style={{color: 'red'}}>This Feild is required</span>} 
                      </div>

                      <div>
                        <label htmlFor="" className="p-2 d-block">Last Name</label>
                        <input  className={`${errorsFullName.lastNameValue ? 'error-input' : ''} d-block dashboard-input dashboard-update-status-input`} {...registerFullName('lastNameValue', {required: true})} type="text"   value={lastNameValue} onChange={(e) => setLastNameValue(e.target.value)}/>
                        {errorsFullName.lastNameValue && <span style={{color: 'red'}}>This Feild is required</span>} 
                      </div>

                      <div className="d-flex justify-content-end">
                        <div className='pt-3'>
                          <button  className="dashboard-submit-btn  dashboard-btn py-2 px-4" type="submit" disabled={disablebutton}>    
                            <span class={`${fullNamebtnLoader ? 'dashboard-submit-spinner': ''}`}></span>
                            <span class={`${fullNamebtnLoader ? 'dashboard-submit-btn-visiblity': ''}`}>Submit</span>
                          </button> 
                        </div>
                      </div>


                    </form>
                  </div>
                </div>
              </section>
            }

            {userNameModal &&
              <section className="overlay-background">
                <div className="dashboard-modal-container">
                  <div className="dashboard-modal-content-2">
                    <div className="d-flex justify-content-between pb-4">
                      <div>
                        <p className="dashboard-header">Update Username</p>
                        <p className="light-text">Make changes to your username </p>
                      </div>
                      <div className='cursor-pointer' onClick={hideUserNameModal}>
                        <FontAwesomeIcon className='sm-text' icon={faX}/>
                      </div>
                    </div>

                    <form onSubmit={handleSubmitUserName(onUserNameSubmit)}>
                      <div>
                        <label htmlFor="" className="p-2 d-block">User Name</label>
                        <input  className={`${errorsUserName.userNameValue ? 'error-input' : ''} d-block dashboard-input dashboard-update-status-input`} {...registerUserName('userNameValue', {required: true})} type="text"   value={userNameValue} onChange={(e) => setUserNameValue(e.target.value)}/>
                        {errorsUserName.userNameValue && <span style={{color: 'red'}}>This Feild is required</span>} 
                      </div>

                      <div className="d-flex justify-content-end">
                        <div className='pt-3'>
                          <button  className="dashboard-submit-btn  dashboard-btn py-2 px-4" type="submit" disabled={disablebutton}>    
                            <span class={`${userNamebtnLoader ? 'dashboard-submit-spinner': ''}`}></span>
                            <span class={`${userNamebtnLoader ? 'dashboard-submit-btn-visiblity': ''}`}>Submit</span>
                          </button> 
                        </div>
                      </div>


                    </form>
                  </div>
                </div>
              </section>
            }
            
            {emailModal &&
              <section className="overlay-background">
                <div className="dashboard-modal-container">
                  <div className="dashboard-modal-content-2">
                    <div className="d-flex justify-content-between pb-4">
                      <div>
                        <p className="dashboard-header">Update Email</p>
                        <p className="light-text">Make changes to your username </p>
                        <p className="light-text italic-text">Note: The updated email address will now be used as your login credential.</p>
                      </div>
                      <div className='cursor-pointer' onClick={hideEmailModal}>
                        <FontAwesomeIcon className='sm-text' icon={faX}/>
                      </div>
                    </div>

                    <form onSubmit={handleSubmitEmail(onEmailSubmit)}>
                      <div>
                        <label htmlFor="" className="p-2 d-block">Email</label>
                        <input  className={`${errorsEmail.emailValue ? 'error-input' : ''} d-block dashboard-input dashboard-update-status-input`} {...registerEmail('emailValue', {required: true})} type="text"   value={emailValue} onChange={(e) => setEmailValue(e.target.value)}/>
                        {errorsEmail.emailValue && <span style={{color: 'red'}}>This Feild is required</span>} 
                      </div>

                      <div className="d-flex justify-content-end">
                        <div className='pt-3'>
                          <button  className="dashboard-submit-btn  dashboard-btn py-2 px-4" type="submit" disabled={disablebutton}>    
                            <span class={`${emailbtnLoader ? 'dashboard-submit-spinner': ''}`}></span>
                            <span class={`${emailbtnLoader ? 'dashboard-submit-btn-visiblity': ''}`}>Submit</span>
                          </button> 
                        </div>
                      </div>


                    </form>
                  </div>
                </div>
              </section>
            }

            {phoneNumberModal &&
              <section className="overlay-background">
                <div className="dashboard-modal-container">
                  <div className="dashboard-modal-content-2">
                    <div className="d-flex justify-content-between pb-4">
                      <div>
                        <p className="dashboard-header">Update Phone Number</p>
                        <p className="light-text">Make changes to your phone number </p>
                      </div>
                      <div className='cursor-pointer' onClick={hidePhoneNumberModal}>
                        <FontAwesomeIcon className='sm-text' icon={faX}/>
                      </div>
                    </div>

                    <form onSubmit={handleSubmitPhoneNumber(onPhoneNumberSubmit)}>
                      <div>
                        <label htmlFor="" className="p-2 d-block">Phone Number</label>
                        <input  className={`${errorsPhoneNumber.phoneNumberValue ? 'error-input' : ''} d-block dashboard-input dashboard-update-status-input`} {...registerPhoneNumber('phoneNumberValue', {required: true})} type="text"   value={phoneNumberValue} onChange={(e) => setPhoneNumberValue(e.target.value)}/>
                        {errorsPhoneNumber.phoneNumberValue && <span style={{color: 'red'}}>This Feild is required</span>} 
                      </div>

                      <div className="d-flex justify-content-end">
                        <div className='pt-3'>
                          <button  className="dashboard-submit-btn  dashboard-btn py-2 px-4" type="submit" disabled={disablebutton}>    
                            <span class={`${phoneNumberbtnLoader ? 'dashboard-submit-spinner': ''}`}></span>
                            <span class={`${phoneNumberbtnLoader ? 'dashboard-submit-btn-visiblity': ''}`}>Submit</span>
                          </button> 
                        </div>
                      </div>


                    </form>
                  </div>
                </div>
              </section>
            }

            {sexModal &&
              <section className="overlay-background">
                <div className="dashboard-modal-container">
                  <div className="dashboard-modal-content-2">
                    <div className="d-flex justify-content-between pb-4">
                      <div>
                        <p className="dashboard-header">Update Sex</p>
                        <p className="light-text">Make changes to your Sex </p>
                      </div>
                      <div className='cursor-pointer' onClick={hideSexModal}>
                        <FontAwesomeIcon className='sm-text' icon={faX}/>
                      </div>
                    </div>

                    <form onSubmit={handleSubmitSex(onSexSubmit)}>
                      <div>
                        <label htmlFor="" className="p-2 d-block">Sex</label>
                          <select className={`${errorsSex.sexValue ? 'error-input' : ''} dashboard-input cursor-pointer`} {...registerSex('sexValue', {required: true})} type="text"   value={sexValue} onChange={(e) => setSexValue(e.target.value)}>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="others">Others</option>
                            </select>
                            {errorsSex.sexValue && <span style={{color: 'red'}}>This Feild is required</span>} 
                      </div>

                      <div className="d-flex justify-content-end">
                        <div className='pt-3'>
                          <button  className="dashboard-submit-btn  dashboard-btn py-2 px-4" type="submit" disabled={disablebutton}>    
                            <span class={`${sexbtnLoader ? 'dashboard-submit-spinner': ''}`}></span>
                            <span class={`${sexbtnLoader ? 'dashboard-submit-btn-visiblity': ''}`}>Submit</span>
                          </button> 
                        </div>
                      </div>


                    </form>
                  </div>
                </div>
              </section>
            }

            {addressModal &&
              <section className="overlay-background">
                <div className="dashboard-modal-container">
                  <div className="dashboard-modal-content-2">
                    <div className="d-flex justify-content-between pb-4">
                      <div>
                        <p className="dashboard-header">Update Address</p>
                        <p className="light-text">Make changes to your Address </p>
                      </div>
                      <div className='cursor-pointer' onClick={hideAddressModal}>
                        <FontAwesomeIcon className='sm-text' icon={faX}/>
                      </div>
                    </div>

                    <form onSubmit={handleSubmitAddress(onAddressSubmit)}>
                      <div>
                        <label htmlFor="" className="p-2 d-block">Residental Address</label>
                        <input  className={`${errorsAddress.addressValue ? 'error-input' : ''} d-block dashboard-input dashboard-update-status-input`} {...registerAddress('addressValue', {required: true})} type="text"   value={addressValue} onChange={(e) => setAddressValue(e.target.value)}/>
                        {errorsAddress.sexValue && <span style={{color: 'red'}}>This Feild is required</span>} 
                      </div>

                      <div>
                        <label htmlFor="" className="p-2 d-block">City/Town</label>
                        <input  className={`${errorsAddress.cityValue ? 'error-input' : ''} d-block dashboard-input dashboard-update-status-input`} {...registerAddress('cityValue', {required: true})} type="text"   value={cityValue} onChange={(e) => setCityValue(e.target.value)}/>
                        {errorsAddress.cityValue && <span style={{color: 'red'}}>This Feild is required</span>} 
                      </div>

                      <div>
                        <label htmlFor="" className="p-2 d-block">State/Province</label>
                        <input  className={`${errorsAddress.stateValue ? 'error-input' : ''} d-block dashboard-input dashboard-update-status-input`} {...registerAddress('stateValue', {required: true})} type="text"   value={stateValue} onChange={(e) => setStateValue(e.target.value)}/>
                        {errorsAddress.stateValue && <span style={{color: 'red'}}>This Feild is required</span>} 
                      </div>

                      <div>
                        <label htmlFor="" className="p-2 d-block">Country/Region</label>
                        <select className={`${errorsAddress.countryValue ? 'error-input' : ''} dashboard-input cursor-pointer`} {...registerAddress('countryValue', {required: true})} type="text"   value={countryValue} onChange={(e) => setCountryValue(e.target.value)}>
                              <option value="">Select a country</option>
                              <option value="australia">Australia</option>
                              <option value="brazil">Brazil</option>
                              <option value="canada">Canada</option>
                              <option value="china">China</option>
                              <option value="egypt">Egypt</option>
                              <option value="france">France</option>
                              <option value="germany">Germany</option>
                              <option value="india">India</option>
                              <option value="indonesia">Indonesia</option>
                              <option value="italy">Italy</option>
                              <option value="japan">Japan</option>
                              <option value="kenya">Kenya</option>
                              <option value="mexico">Mexico</option>
                              <option value="netherlands">Netherlands</option>
                              <option value="nigeria">Nigeria</option>
                              <option value="pakistan">Pakistan</option>
                              <option value="philippines">Philippines</option>
                              <option value="russia">Russia</option>
                              <option value="saudi-arabia">Saudi Arabia</option>
                              <option value="singapore">Singapore</option>
                              <option value="south-africa">South Africa</option>
                              <option value="south-korea">South Korea</option>
                              <option value="spain">Spain</option>
                              <option value="sweden">Sweden</option>
                              <option value="switzerland">Switzerland</option>
                              <option value="turkey">Turkey</option>
                              <option value="uae">United Arab Emirates</option>
                              <option value="uk">United Kingdom</option>
                              <option value="usa">United States</option>
                              <option value="vietnam">Vietnam</option>
                            </select>
                            {errorsAddress.countryValue && <span style={{color: 'red'}}>This Feild is required</span>} 
                      </div>

                      <div>
                        <label htmlFor="" className="p-2 d-block">ZIP/Postal Code</label>
                        <input  className={`${errorsAddress.stateValue ? 'error-input' : ''} d-block dashboard-input dashboard-update-status-input`} {...registerAddress('stateValue', {required: true})} type="text"   value={stateValue} onChange={(e) => setStateValue(e.target.value)}/>
                        {errorsAddress.stateValue && <span style={{color: 'red'}}>This Feild is required</span>} 
                      </div>

                      <div className="d-flex justify-content-end">
                        <div className='pt-3'>
                          <button  className="dashboard-submit-btn  dashboard-btn py-2 px-4" type="submit" disabled={disablebutton}>    
                            <span class={`${addressbtnLoader ? 'dashboard-submit-spinner': ''}`}></span>
                            <span class={`${addressbtnLoader ? 'dashboard-submit-btn-visiblity': ''}`}>Submit</span>
                          </button> 
                        </div>
                      </div>


                    </form>
                  </div>
                </div>
              </section>
            }

          

            <div className="container-xl">
              <div className='py-4'>
                <div className="d-flex justify-content-between">
                  <div>
                    <p className='light-text'>Account</p>
                    <p className="dashboard-header pb-2">My Profile</p>
                    <p className="light-text">You have full control to manage your own account setting.</p>
                  </div>

                  <div className='d-none d-md-block'>
                    <div className="d-flex justify-content-end me-4 mt-3">
                      <div className={`dashboard-boxes user-details-img-container ${userProfile?.user_details.profile_photo === null ? 'user-details-no-img': ''}`}>
                        {userProfile?.user_details?.profile_photo !== null ? (
                          <img className='user-details-img' src={userProfile?.user_details.profile_photo} alt="" />
                        ) : (
                          <div className='sm-text text-center '>
                            <p>No</p>
                            <p>Image</p>
                          </div>
                        )
                        
                        }

                      </div>
                      </div>
                  </div>
                </div>
                
              </div>

              <hr />

              <div>
                <div>
                  <p className="sm-text">Login Details</p>
                  <p>Your login information. <span className='italic-text light-text'>Note: Details cannot be edited</span></p>   
                </div>

                <div className="row pt-3">
                  <div className="col-xl-5 col-lg-7 col-md-9">
                    <div className="dashboard-boxes p-3 border-radius-5px">
                      <div className="d-sm-flex justify-content-between pb-2">
                        <p>FullName:</p>
                        <p>{formatName(userProfile.user_details.full_name)}</p>
                      </div>

                      <div className="d-sm-flex justify-content-between pb-2">
                        <p>UserName:</p>
                        <p>{userProfile.user_details.user_name}</p>
                      </div>

                      <div className="d-sm-flex justify-content-between">
                        <p>Email:</p>
                        <p>{userProfile.user_details.email}</p>
                      </div>
                    </div>
                  
                  </div>
                
                </div>
              
              </div>

              <div className='py-5'>
                <div>
                  <p className="sm-text">Personal Information</p>
                  <p>Basic info, like your name and address, that you use on your account.</p>   
                  <p> <span className='italic-text light-text'>Note: You must do account verification for details to reflect here </span></p>
                </div>



                {userProfile?.user_verification.length !== 0 ? (
                  <div className="mt-4 dashboard-boxes border-radius-5px">
                    <div className="border-bottom1 p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="row align-center justify-content-between">
                            <p className='col-sm-6 light-text'>User ID</p>
                            <p  className='col-sm-6'>{userProfile.user}</p>
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="d-flex align-center justify-content-end">
                            <i class="bi bi-lock pe-3 py-2"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom1 p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="row align-center justify-content-between">
                            <p className='col-sm-6 light-text'>Full Name</p>
                            <p  className='col-sm-6'>{formatName(userProfile.user_verification[0].first_name)} {formatName(userProfile.user_verification[0].last_name)}</p>
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="d-flex align-center justify-content-end">
                            <button disabled={disablebutton} className='Button' onClick={showFullNameModal}>
                              <p className='dashboard-table-arrow'><i class=" bi bi-chevron-right"></i></p>
                            </button>  
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-bottom1 p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="row align-center justify-content-between">
                            <p className='col-sm-6 light-text'>Username</p>
                            <p  className='col-sm-6'>{userProfile.user_details.user_name}</p>
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="d-flex align-center justify-content-end">
                            <button disabled={disablebutton} className='Button' onClick={showUserNameModal}>
                              <p className='dashboard-table-arrow'><i class=" bi bi-chevron-right"></i></p>
                            </button>  
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-bottom1 p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="row align-center justify-content-between">
                            <p className='col-sm-6 light-text'>Email</p>
                            <p  className='col-sm-6'>
                            {userProfile.user_details.email}</p>
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="d-flex align-center justify-content-end">
                            <button disabled={disablebutton} className='Button' onClick={showEmailModal}>
                              <p className='dashboard-table-arrow'><i class=" bi bi-chevron-right"></i></p>
                            </button>  
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-bottom1 p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="row align-center justify-content-between">
                            <p className='col-sm-6 light-text'>Phone Number</p>
                            <p  className='col-sm-6'>{userProfile.user_verification[0].phone_number}</p>
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="d-flex align-center justify-content-end">
                            <button disabled={disablebutton} className='Button' onClick={showPhoneNumberModal}>
                              <p className='dashboard-table-arrow'><i class=" bi bi-chevron-right"></i></p>
                            </button>  
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-bottom1 p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="row align-center justify-content-between">
                            <p className='col-sm-6 light-text'>Sex</p>
                            <p  className='col-sm-6'>{formatName(userProfile.user_verification[0].gender)}</p>
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="d-flex align-center justify-content-end">
                            <button disabled={disablebutton} className='Button' onClick={showSexModal}>
                              <p className='dashboard-table-arrow'><i class=" bi bi-chevron-right"></i></p>
                            </button>  
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-bottom1 p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="row align-center justify-content-between">
                            <p className='col-sm-6 light-text'>Address</p>
                            <p  className='col-sm-6'>{formatName(userProfile.user_verification[0].address)} {formatName(userProfile.user_verification[0].city_town)} {formatName(userProfile.user_verification[0].state)} {formatName(userProfile.user_verification[0].country)},  {(userProfile.user_verification[0].zip_code)}.</p>
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="d-flex align-center justify-content-end">
                            <button disabled={disablebutton} className='Button' onClick={showAddressModal}>
                              <p className='dashboard-table-arrow'><i class=" bi bi-chevron-right"></i></p>
                            </button>  
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-bottom1 p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="row align-center justify-content-between">
                            <p className='col-sm-6 light-text'>User Verification</p>
                            <p className={`col-sm-6 ${userProfile.user_verification[0].status === 'verified' && 'sucessfull-text'} ${userProfile.user_verification[0].status === 'pending' && 'pending-text'} ${userProfile.user_verification[0].status === 'canceled' && 'failed-text'}`}>{formatName(userProfile.user_verification[0].status)}</p>
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="d-flex align-center justify-content-end">
                            <i class="bi bi-lock pe-3 py-2"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="row align-center justify-content-between">
                            <p className='col-sm-6 light-text'>KYC's Verificatiion</p>
                            <p className={`col-sm-6 ${userProfile.kyc_verification.status === 'verified' && 'sucessfull-text'} ${userProfile.kyc_verification.status === 'pending' && 'pending-text'} ${userProfile.kyc_verification.status === 'canceled' && 'failed-text'}`}>{formatName(userProfile.kyc_verification.status)}</p>
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="d-flex align-center justify-content-end">
                            <i class="bi bi-lock pe-3 py-2"></i> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) :(
                  <div className='user-details-No-details dashboard-boxes border-radius-5px mt-4'>
                    <div className=''>
                      <p className='dashboard-header light-text'>No Details Yet</p>
                      <p>User have not submited Verification form </p>
                    </div>

                  </div>
                )}

              </div>

            </div>
            
          </div>

          <div className='mt-5 py-3'>
            <DashboardFooter />
          </div>
        </div>
      }
    </div>
  )
}