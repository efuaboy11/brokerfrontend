import { Link, useLocation } from 'react-router-dom'
import '../css/componentCss/footer.css'
import '../css/style.css'
import '../css/informationCss/site.css'
import { useContext, useState } from 'react'
import { use } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faBarsStaggered, faEnvelope, faHandHoldingDollar, faLocation, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import AuthContext from '../context/AuthContext'
import mfsa from '../img/mfsa.svg'
import acpr from '../img/acpr.svg'
import bafin from '../img/bafin.svg'
import cnmv from '../img/cnmv.svg'
import mfid from '../img/mfid.svg'
import bank from '../img/bank-transfer.svg'
import neteller from '../img/neteller.svg'
import mastercard from '../img/mastercard.svg'
import visa from '../img/visa.svg'
import finanstilsynet from '../img/finanstilsynet.svg'
import barclays from '../img/barclays.svg'
import citi from '../img/citi.svg'
import credit from '../img/credit-suisse.svg'
import currenex from '../img/currenex.svg'
import lmax from '../img/lmax.svg'
import primexm from '../img/primexm.svg'
import ubs from '../img/ubs.svg'
import bankCyprus from '../img/bank-of-cyprus.svg'
import bov from '../img/bov.svg'
import pwc from '../img/pwc.svg'
import logoDark from '../img/amani-dark.png'
import marm from '../img/provider-icon12.svg'
export const Footer = () =>{

  return(
    <div>
      <div className="footer-bg py-5">
        <div className="container-lg">
          <div>
            <div className="row border-bottom1 pt-5 pb-4">
              <div className="col-lg-3">
                <Link className='Link' to='/'>
                  <img src={logoDark} width='250px' alt="" />
                
                </Link>
              </div>

              <div className="col-lg-9">
                <div className='footer-d-flex'>
                  <div className="d-flex pe-5 pb-3">
                    <FontAwesomeIcon className='site-primary-text md-text me-3' icon={faPhoneVolume}/>
                    <p className="light-text">+1 (983) 458-3459</p>
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <FontAwesomeIcon className='site-primary-text md-text me-3' icon={faEnvelope}/>
                    <p className="light-text">support@AmanilightEquity.com</p>
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <FontAwesomeIcon className='site-primary-text md-text me-3' icon={faLocation}/>
                    <p className="light-text">27 Division St, 1100. E Denver, CO 80237, USA</p>
                  </div>

                </div>
              </div>
            </div>


            <div className="row border-bottom1 pt-5 pb-4">
              <div className="col-lg-3">
                <div className="align-center d-flex">
                  <p className="light-text-2 sm-text font-weight-700 pb-3">REGULATION:</p>
                </div>
              </div>

              <div className="col-lg-9">
                <div className='footer-d-flex'>
                  <div className="d-flex pe-5 pb-3">
                    <img src={mfsa} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={acpr} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={bafin} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={cnmv} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={mfid} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={finanstilsynet} alt="" />
                  </div>

                </div>
              </div>
            </div>

            <div className="row border-bottom1 pt-5 pb-4">
              <div className="col-lg-3">
                <div className="align-center d-flex">
                  <p className="light-text-2 sm-text font-weight-700 pb-3">PAYMENT METHOD:</p>
                </div>
              </div>

              <div className="col-lg-9">
                <div className='footer-d-flex'>
                  <div className="d-flex pe-5 pb-3">
                    <img src={bank} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={neteller} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={mastercard} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={visa} alt="" />
                  </div>

                </div>
              </div>
            </div>

            <div className="row border-bottom1 pt-5 pb-4">
              <div className="col-lg-3">
                <div className="align-center d-flex">
                  <p className="light-text-2 sm-text font-weight-700 uppercase non-wrap-text pb-3">Liquidity Provider:</p>
                </div>
              </div>

              <div className="col-lg-9">
                <div className='footer-d-flex'>
                  <div className="d-flex pe-5 pb-3">
                    <img src={barclays} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={citi} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={credit} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={currenex} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={lmax} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={primexm} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={ubs} alt="" />
                  </div>


                  

                </div>
              </div>
            </div>

            <div className="row border-bottom1 pt-5 pb-4">
              <div className="col-lg-3">
                <div className="align-center d-flex">
                  <p className="light-text-2 sm-text font-weight-700 uppercase non-wrap-text pb-3">Corporate Governance:</p>
                </div>
              </div>

              <div className="col-lg-9">
                <div className='footer-d-flex'>
                  <div className="d-flex pe-5 pb-3">
                    <img src={bankCyprus} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={bov} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={pwc} alt="" />
                  </div>


                  

                </div>
              </div>
            </div>

            <div className="row border-bottom1 pt-5 pb-4">
              <div className="col-lg-3">
                <div className="align-center d-flex">
                  <p className="light-text-2 sm-text font-weight-700 uppercase non-wrap-text pb-3">ASSOCIATIONS:</p>
                </div>
              </div>

              <div className="col-lg-9">
                <div className='footer-d-flex'>
                  <div className="d-flex pe-5 pb-3">
                    <img src={marm} alt="" />
                  </div>                  

                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-links-container mt-5">
            <div className="footer-links-sub-container mt-4">
              <div>
                <p className="sm-text light-text-2 font-weight-700 pb-3">MARKETS</p>
                <div className='my-2'>
                  <Link to='/forex/' className="footer-links">Forex</Link>
                </div>

                <div className='my-2'>
                  <Link to='/metals/' className="footer-links">Precious Metals</Link>
                </div>

                <div className='my-2'>
                  <Link to='/indexes/' className="footer-links">Shared Indexes</Link>
                </div>

                <div className='my-2'>
                  <Link to='/energy/' className="footer-links">Energy Carriers</Link>
                </div>

                <div className='my-2'>
                  <Link to='/crypto/' className="footer-links">Cryptocurrencies</Link>
                </div>
              </div>
            </div>
            
            <div className="footer-links-sub-container mt-4">
              <div>
                <p className="sm-text light-text-2 font-weight-700 pb-3 uppercase">Trading Platforms</p>
                <div className='my-2'>
                  <Link to='/login' className="footer-links">Sign In</Link>
                </div>

                <div className='my-2'>
                  <Link to='/register' className="footer-links">Create Account</Link>
                </div>

                <div className='my-2'>
                  <Link to='/deposit-method/' className="footer-links">Deposit Method</Link>
                </div>

                <div className='my-2'>
                  <Link to='/general-fees/' className="footer-links">General Fees</Link>
                </div>
              </div>
            </div>

            <div className="footer-links-sub-container mt-4">
              <div>
                <p className="sm-text light-text-2 font-weight-700 pb-3 uppercase">Learn To Trade</p>
                <div className='my-2'>
                  <Link to='/risk-disclosure/' className="footer-links">Risk Disclosure</Link>
                </div>

                <div className='my-2'>
                  <Link className="footer-links">Margin Calls</Link>
                </div>

                <div className='my-2'>
                  <Link className="footer-links">Complaints Procedure</Link>
                </div>

                <div className='my-2'>
                  <Link className="footer-links">Information Security</Link>
                </div>
              </div>
            </div>

            <div className="footer-links-sub-container mt-4">
              <div>
                <p className="sm-text light-text-2 font-weight-700 pb-3 uppercase">Buy Bitcoin</p>
                <div className='my-2'>
                  <Link  to='https://www.coinbase.com/' target="_blank" className="footer-links">Coinbase</Link>
                </div>

                <div className='my-2'>
                  <Link to='https://www.gemini.com/' target="_blank" className="footer-links">Gemini</Link>
                </div>

                <div className='my-2'>
                  <Link to='https://blockfi.com/'  target="_blank" className="footer-links">BlockFi</Link>
                </div>



                <div className='my-2'>
                  <Link to='https://www.etoro.com/' target="_blank" className="footer-links">eToro</Link>
                </div>

                <div className='my-2'>
                  <Link to='https://kraken.com/' className="footer-links">Kraken</Link>
                </div>
              </div>
            </div>

            <div className="footer-links-sub-container mt-4">
              <div>
                <p className="sm-text light-text-2 font-weight-700 pb-3 uppercase">About Company</p>
                <div className='my-2'>
                  <Link to='/about-us/' className="footer-links">About us</Link>
                </div>

                <div className='my-2'>
                  <Link to='/contact-us/' className="footer-links">Contact us</Link>
                </div>

                <div className='my-2'>
                  <Link to='/affiliate-program/' className="footer-links">Affiliate Program</Link>
                </div>

                <div className='my-2'>
                  <Link to='/privacy-policy/' className="footer-links">Privacy Policy</Link>
                </div>

                <div className='my-2'>
                  <Link to='/terms-and-conditions/' className="footer-links">Terms and Conditions</Link>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-5'>
            <p className="sm-text light-text">AmanilightEquity is regulated by the International Financial Services Commission of Belize, as well as the Cyprus Securities and Exchange Commission, licensed by the Financial Services Board (FSB) of Switzerland. The company is also registered with the Financial Conduct Authority of the UK.</p>
            <p className="sm-text-2 light-text pt-2 italic-text"><span className="font-weight-700">NOTE: </span>Trading in Forex and Contracts for Difference (CFDs), which are leveraged products, is highly speculative and involves substantial risk of loss. It is possible to lose all your capital. Therefore AmaniLightEquity is guaranteed to give you your capital when the market may go down as well as up.
              AmaniLightEquity Limited provides it's services to global citizens. Copyright © 2025 AmaniLightEquity. All Rights Reserved. Terms and Conditions | Risk Disclosure.
              Understand that prices displayed on the website may be affected by changes in currency exchange rate and price movements thereby affecting your investment return.
            </p>
          </div>
        </div>

      </div>
    </div>

  )
}