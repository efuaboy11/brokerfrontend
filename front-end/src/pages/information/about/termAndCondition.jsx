import { useContext, useEffect, useState } from "react"
import '../../../css/informationCss/market.css'
import { Navbar } from "../../../component/navbar"
import AuthContext from "../../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import AllDataContext from "../../../context/Alldata"
import { Footer } from "../../../component/footer"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import indexes from '../../../img/indexes.jpg'
export const TermsAndCondition = () =>{
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

      if (footerTop <= sidebarHeight + 600) {
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / About Company / Transparency / Terms & Conditions</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                  <div>
                    <p className="site-header font-weight-700">Terms & Conditions</p>
                    
                    <div className="pt-4 light-text-2 font-weight-700">
                      <p>Note: The English version of this agreement is the governing version and shall prevail whenever there is any discrepancy between the English version and the other versions.</p>
                      <p className="pt-3"> This client agreement, together with any Schedule(s), and accompanying documents, as amended from time to time, (this “Agreement”) sets out the terms of the contract between you and us. Please read it carefully and let us know as soon as possible if there is anything which you do not understand.</p>
                    </div>

                    <section className="py-3">
                      <div>
                        <h4 className="pb-4">1. INTERPRETATION</h4>
                        <h5 className="pb-2">“APPLICABLE REGULATIONS” means:</h5>
                        <div className="light-text-2">
                          <p className="pb-4">UFSA Rules or any other rules of a relevant regulatory authority; and all other applicable laws, rules and regulations as in force from time to time.</p>
                          <p className="pb-4">“ASSOCIATE” means an undertaking in the same group as us, a representative whom we or an undertaking in the same group as us appoint, or any other person with whom we have a relationship that might reasonably be expected to give rise to a community of interest between us and them</p>
                          <p className="pb-4">“BASE CURRENCY” means US Dollars.</p>
                          <p className="pb-4">“BUSINESS DAY” means a day which is not a Saturday or a Sunday and upon which banks are open for business in US.</p>
                          <p className="pb-4">“CLIENT MONEY RULES” means the rules specified in Standard License Conditions 2.86-2.93 of the Investment Services Rules issued by UFSA and the Investment Services Act (Control of Assets) Regulations – Legal Notice 24 of 1998 as amended and the Directives and Circulars issued pursuant these Rules and Regulations, as amended from time to time by UFSA.</p>
                          <p className="pb-4">“CONTRACT FOR DIFFERENCES” or “CFD” means the financial instrument specified in paragraph of the Second Schedule of the Investment Services Act.</p>
                          <p className="pb-4">“CREDIT SUPPORT PROVIDER” means any person who has entered into any guarantee, pledge, hypothecation, agreement, margin or security agreement in our favor in respect of your obligations under this Agreement.</p>
                          <p className="pb-4">“ELECTRONIC SERVICES” means a service provided by us, for example an Internet trading service offering clients access to information and trading facilities, via an internet service, a WAP service and/or an electronic order routing system.</p>
                          <p className="pb-4">“EVENT OF DEFAULT” means any of the events of default as listed in Clause 14.1 to Clause 14.9 of Clause 14 (Events of Default)” of this Agreement.</p>
                          <p className="pb-4">“EXECUTION” means the completion of clients’ orders on the company’s trading platform, where the company acts as a Principal to clients’ transactions.</p>
                          <p className="pb-4">“UFSA” is an abbreviation for “US Financial Services Authority”.</p>
                          <p className="pb-4">“UFSA RULES” means the Investment Services Act (Chapter 370 of the Laws of US), the Prevention of Money Laundering Act (Chapter 373 of the Laws of US), the US Financial Services Act (Chapter 330 of the Laws of US), the Prevention of Financial Markets Abuse Act (Chapter 476 of the Laws of US), the Directives, Circulars and all other regulations issued pursuant to these Laws and all guidance notes, administrative notices, newsletters and rules published by the US Financial Services Authority.</p>
                          <p className="pb-4">“EM ONLINE TRADING SYSTEM” means the internet-based trading system available at our Website that allows you to provide us with instructions.</p>
                          <p className="pb-4">“EM TRADING DESK” means the trading desk operated by us at our premises the Headquarters of AmaniLightEquity in US.</p>
                          <p className="pb-4">“OTC” means ‘over the counter’ and refers to transactions conducted otherwise than on an exchange. “SECURED OBLIGATIONS” means the net obligation owed by you to us after the application of set-off under clause 12 (Margining Arrangements) in the paragraph entitled (Set-off on default).</p>
                          <p className="pb-4">“SYSTEM” means all computer hardware and software, equipment, network facilities and other resources and facilities needed to enable you to use an Electronic Service.</p>
                          <p className="pb-4">“TRANSACTION” means any transaction subject to this Agreement and includes a CFD, spot or forward contract of any kind, or other derivative contract in relation to any commodity, financial instrument (including any security), currency, interest rate, index or any combination thereof and any other transaction or financial instrument for which we are authorized under our Investment Services license from time to time which we both agree shall be a Transaction.</p>
                          <p className="pb-4"></p>
                          
                        </div>
                      </div>
                    </section>

                    
                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">2. INTRODUCTION</h4>
                        <h5 className="pb-2">“APPLICABLE REGULATIONS” means:</h5>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">SCOPE OF THIS AGREEMENT</p>
                              <p>This Agreement sets out the basis on which we will provide services to you. This Agreement governs each Transaction entered into or outstanding between us on or after the execution of this Agreement.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">COMMENCEMENT</p>
                              <p>This Agreement supersedes any previous agreement between you and us on the same subject matter and takes effect when you indicate your acceptance via our website. This Agreement shall apply to all Transactions contemplated under this Agreement.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">3. GENERAL</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">INFORMATION ABOUT US</p>
                              <p className="pb-3">We, AmaniLIghtEquity, are authorized and regulated by the US Financial Services Authority (“UFSA”). Our registered office is in 168, St. Christopher Street, Valletta, US.</p>
                              <p className="pb-3">UFSA’s office is situated at Notabile Road, Attard, BKR3000, US.</p>
                              <p className="pb-3">AmaniLightEquity is a market maker for CFD and Spot FX Contracts. AmaniLightEquity owns and operates websites, trading platforms and brand names as indicated in its website (http://www.nsbroker.com). AmaniLightEquity operates through these websites which allow online trading.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">LANGUAGE</p>
                              <p>This Agreement is supplied to you in English and we will continue to communicate with you in English for the duration of this Agreement. However, where possible, we will communicate with you in other languages in addition to English.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">COMMUNICATION WITH US</p>
                              <p>You may communicate with us in writing (including fax), by email or other electronic means, or orally (including by telephone). The language of communication shall be English, and you will receive documents and other information from us in English. However, where appropriate and for your convenience, we will endeavor to communicate with you in other languages. Our website contains further details about us and our services, and other information relevant to this Agreement. In the event of any conflict between the terms of this Agreement and our website this Agreement will prevail.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">CAPACITY</p>
                              <p>We act as principal and not as agent on your behalf and you enter this Agreement as principal and not as agent (or trustee) on behalf of someone else. We shall treat you as a retail client for the purposes of the UFSA Rules and the Applicable Regulations. You have the right to request a different client categorization. However, if you do request such different categorization and we agree to such categorization, you will lose the protection afforded by certain UFSA Rules and the Applicable Regulations. This may include, but is not limited to:</p>
                              <div className="pt-3">
                                <p className="pb-3"><span className="site-primary-text font-weight-700">i. </span>  The requirement for us to act in accordance with your best interests;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">ii. </span>  our obligation to provide appropriate information to you before providing the services;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iii. </span>  the restriction on the payment or receipt by us of any inducements;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iv. </span> our obligation to achieve best execution in respect of your orders;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">v. </span>  the requirement to implement procedures and arrangements which provide for the prompt, fair and expeditious execution of your orders;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">vi. </span>  our obligation to ensure that all information we provide to you is fair, clear and not misleading; and the requirement that you receive from us adequate reports on the services provided to you.</p>
                              </div>
                             
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">GENERAL INTERPRETATION</p>
                              <p className="pb-2">A reference in this Agreement to a “clause” or “Schedule” shall be construed as a reference to, respectively, a clause or Schedule of this Agreement, unless the context requires otherwise.</p>
                              <p>References in this Agreement to any statute or statutory instrument or Applicable Regulations include any modification, amendment, extension or re-enactment thereof. A reference in this Agreement to “document” shall be construed to include any electronic document. The masculine includes the feminine and the neuter and the singular includes the plural and vice versa as the context admits or requires. Words and phrases defined in the UFSA’s Rules and the Applicable Regulations have the same meaning in this Agreement unless expressly defined in this Agreement.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">6</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">SCHEDULES</p>
                              <p className="pb-2">The clauses contained in the attached Schedule (as amended from time to time) shall apply. We may from time to time send to you further Schedules in respect of Transactions. In the event of any conflict between the clauses of any Schedule and this Agreement, the clauses of the Schedule shall prevail. The fact that a clause is specifically included in a Schedule in respect of one Transaction shall not preclude a similar clause being expressed or implied in relation to any other Transaction. You acknowledge having read, understood and agreed to the Schedules to this Agreement.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">6</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">HEADINGS</p>
                              <p className="pb-2">Headings are for ease of reference only and do not form part of this Agreement.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">4. REGULATION</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">SUBJECT TO APPLICABLE REGULATIONS</p>
                              <p>This Agreement and all Transactions are subject to Applicable Regulations so that: nothing in this Agreement shall exclude or restrict any obligation which we have to you under Applicable Regulations;</p>
                              <p>we may take or omit to take any action we consider necessary to ensure compliance with any Applicable Regulations;</p>
                              <p>all Applicable Regulations and whatever we do or fail to do in order to comply with them will be binding on you; and such actions that we take or fail to take for the purpose of compliance with any Applicable Regulations shall not render us or any of our directors, officers, employees or agents liable.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">ACTION BY REGULATORY BODY</p>
                              <p>If a regulatory body takes any action which affects a Transaction, then we may take any action which we, in our reasonable discretion, consider desirable to correspond with such action or to mitigate any loss incurred as a result of such action. Any such action shall be binding on you. If a regulatory body makes an enquiry in respect of any of your Transactions, you agree to co-operate with us and to promptly supply information requested in connection with the enquiry.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">5. COSTS, PAYMENTS, CHARGES and COMMISSIONS</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">CHARGES AND/OR COMMISSIONS</p>
                              <p>You shall pay our charges and/or commissions as agreed with you from time to time, any fees or other charges imposed by a clearing organization and interest on any amount due to us at the rates then charged by us (and which are available on request). Any alteration to charges and/or commissions will be notified to you before the time of the change.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">ADDITIONAL COSTS</p>
                              <p>You should be aware of the possibility that other taxes or costs may exist that are not paid through or imposed by us.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">PAYMENTS</p>
                              <p>All payments to us under this Agreement shall be made in such currency as we may from time to time specify to the bank account designated by us for such purposes. All such payments shall be made by you without any deduction or withholding.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">REMUNERATION AND SHARING OF CHARGES</p>
                              <p>We may share charges and/or commissions with an Associate or other third party in connection with Transactions carried out on your behalf. Details of such remuneration or sharing arrangements are available to you upon request. We may also pay fees and commissions to persons who introduce business to us. If you require more information on the fees and commissions that we pay to business introducers, let us know and we will provide you with further information.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>


                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">6. RIGHT TO CANCEL</h4>
                        <div className="light-text-2">
                          <p className="pb-4">You have a right to cancel this Agreement for a period of fourteen days commencing on the date on which this Agreement is concluded or the date on which you receive this Agreement (whichever is later) (the “Cancellation Period”). Should you wish to cancel this Agreement within the Cancellation Period, you should send notice in writing to the following address: AmaniLightEquity, 27 Division St, 1100. E Denver, CO 80237, USA or electronically to the following email address: [support@amanilightequity.com].</p>
                          <p className="pb-4">Cancelling this Agreement within the Cancellation Period will not cancel any Transaction entered into by you during the Cancellation Period. If you fail to cancel this Agreement within the Cancellation Period you will be bound by its terms but you may terminate this Agreement in accordance with clause 17 (Termination without Default).</p>
                          
                          
                        </div>
                      </div>
                    </section>


                    
                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">7. NON ADVISED</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">EXECUTION ONLY</p>
                              <p>We deal on an execution-only basis and do not advise on the merits of particular Transactions, or their taxation consequences.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">OWN JUDGEMENT AND SUITABILITY</p>
                              <p>In asking us to enter into any Transaction, you represent that you have been solely responsible for making your own independent appraisal and investigations into the risks of the Transaction. You represent that you have sufficient knowledge, market sophistication, professional advice and experience to make your own evaluation of the merits and risks of any Transaction and that you have read and accepted the Risk Disclosure Statement for Transactions in Foreign Exchange and Derivatives (including Contracts for Differences) and guidelines in relation to the financial instruments and the markets which are available in our websites. We give you no warranty as to the suitability of the products traded under this Agreement and assume no fiduciary duty in our relations with you.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">INCIDENTAL INFORMATION AND INVESTMENT RESEARCH</p>
                              <p>Where we do provide generic trading recommendations, market commentary or other information:</p>
                              <div className="pt-3">
                                <p className="pb-3"><span className="site-primary-text font-weight-700">i. </span>  this is incidental to your dealing relationship with us. It is provided solely to enable you to make your own investment decisions and does not amount to advice;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">ii. </span>  if the document contains a restriction on the person or category of persons for whom that document is intended or to whom it is distributed, you agree that you will not pass it on to any such person or category of persons;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iii. </span>  we give no representation, warranty or guarantee as to the accuracy or completeness of such information or as to the tax consequences of any Transaction;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iv. </span> where information is in the form of a document containing a restriction on the person or category of persons for whom that document is intended or to whom it is distributed, you agree that you will not pass it on contrary to that restriction;</p>
                              </div>
                             
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3">you accept that prior to dispatch, we may have acted upon it ourselves or made use of the information on which it is based. We do not make representations as to the time of receipt by you and cannot guarantee that you will receive such information at the same time as other clients. Any published research reports or recommendations may appear in one or more screen information service.</p>
                              <p>Please refer to our Conflicts of Interest Policy for further information on how we manage conflicts which would affect the impartiality of investment research we provide to you.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>


                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">8. CUSTOMER ACCOUNTS AND INITIAL DEPOSITS</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">DOCUMENTS</p>
                              <p>Before you can place an Order with AmaniLightEquity, you must read and accept this Agreement, including the Risk Disclosure Statement for Transactions in Foreign Exchange and Derivatives (including Contracts for Differences), the Trading Policies and Procedures as listed in the next succeeeding clause entitled ‘Trading Policies and Procedures’, and all applicable addenda, you must deposit sufficient clear funds in your Account and your Customer Registration Form and all accompanying documents must be approved by AmaniLightEquity. Upon the approval of your registration, you will be notified by e-mail. AmaniLightEquity may, in its sole discretion, request that in addition to online acceptance of this Agreement, Customer must complete and submit any signed documents so required by AmaniLightEquity, including but not limited to this Agreement and Risk Disclosure Statement for Transactions in Foreign Exchange and Derivatives (including Contracts for Differences).</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">CURRENCY OF ACCOUNTS</p>
                              <p>You will be able to open your trading Account(s) in USD/EUR/GBP or any currency that may be offered by AmaniLightEquity. Account(s) balances will be calculated and reported to you in the currency in which Account(s) are maintained.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">ACCOUNT OPENING</p>
                              <p className="pb-2">The minimum initial account opening amount is USD500 or currency equivalent in EUR or GBP.</p>
                              <p>A first demand bank guarantee from an approved bank will also be accepted. AmaniLightEquity will activate the account upon receipt of the funds and vetting of the appropriate account opening and due diligence documentation. AmaniLightEquity will not pay interest on account balances.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">JOINT ACCOUNTS</p>
                              <p className="pb-3">In addition to the conditions listed in the next succeeding clause in the paragraph entitled ‘Authority’ with regards to joint Account holders, the following additional conditions apply.</p>
                              <p>Where your trading Account held with AmaniLightEquity, is jointly owned by two or more beneficiaries:</p>
                              <div className="pt-3">
                                <p className="pb-3"><span className="site-primary-text font-weight-700">i. </span>  Each joint Account holder will be jointly and severally liable for all obligations to AmaniLightEquity arising in respect of your joint trading Account.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">ii. </span>  Each of you is separately responsible for complying with the terms of this Agreement.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iii. </span>  If there is a dispute between you which we know about, we may insist that both or all of you authorize written instructions to us.</p>
                              </div>
                             
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <div className="light-text-2">
                                <p className="pb-4">Where you provide personal and financial information relating to other joint Account holders for the purpose of opening or administering your trading Account you confirm that you have their consent or are otherwise entitled to provide this information to us and for us to use it in accordance with this Agreement.</p>
                                <p className="pb-4">Any of you may request closure and the redirection of balances, unless there are circumstances that require us to obtain authorization from all of you.</p>
                                <p className="pb-4">Each of you will be given sole access to the funds initially deposited by you in your joint trading Account. Should you wish to withdraw these funds from your trading Account, you will be required to complete and sign a withdrawal form, upon receipt of the completed and signed withdrawal form you will be granted permission by AmaniLightEquity to withdraw funds up to the amount you initially deposited, provided that the conditions for withdrawals stipulated in clause 9 are satisfied. AmaniLightEquity will credit the amount withdrawn in the same bank account from where it was originally debited.</p>
                                <p className="pb-4">In the case of withdrawal of profits, if any of you wish to withdraw profits from the joint trading Account, you will be required to complete and sign a withdrawal form, provided that the conditions for withdrawals stipulated in clause 9 are satisfied. Upon receipt of the completed and signed withdrawal form you will be granted permission by AmaniLightEquity to withdraw any profits from the joint trading Account. EM will credit the amount of profits withdrawn in the same bank account from where it was originally debited.</p>
                                <p className="pb-4">In order for this Agreement to be valid and binding it is required that all joint Account holders sign the Agreement and in case you and/or any of the Account holders wish to terminate this Agreement and close the joint trading Account held with the Company, the written consent of all Account holders shall be obtained in accordance with the provisions of clause 17 of this Agreement.</p>
                                
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">9. TRADING POLICIES AND PROCEDURES</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">PLACING OF INSTRUCTIONS</p>
                              <p>You may give us instructions in electronic form through the AmaniLightEquity Online Trading System or orally by telephone to the AmaniLightEquity Trading Desk; unless we tell you that instructions can only be given in a particular way. If you give instructions by telephone, your conversation will be recorded. If any instructions are received by us by telephone, computer or other medium we may ask you to confirm such instructions in writing. We shall be authorized to follow instructions notwithstanding your failure to confirm them in writing. In this Agreement “instructions” and “orders” have the same meaning.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">TYPES OF ORDERS ACCEPTED</p>
                              <p className="pb-3">Some of the types of Orders AmaniLightEquity accepts include, but are not limited to:</p>
                              <div className="pt-3">
                                <p className="pb-3"><span className="site-primary-text font-weight-700">i. </span>  Good till Cancelled (“GTC”) – An Order (other than a Market Order), that by its terms is effective until filled or cancelled by Customer. GTC Orders do not automatically cancel at the end of the Business Day on which they are placed.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">ii. </span>  Limit – An Order (other than a Market Order) to buy or sell the identified market at a specified price. A Limit Order to buy generally will be executed when the Ask Price equals or falls below the Bid Price that you specify in the Limit Order. A Limit Order to sell generally will be executed when the Bid Price equals or exceeds the Ask Price that you specify in the Limit Order.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iii. </span> Market – An Order to buy or sell the identified market at the current market price that AmaniLightEquity provides either via the Online Trading System or over the telephone through one of the dealers. An Order to buy is executed at the current market Ask Price and an Order to sell is executed at the current market Bid Price.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iv. </span>One Cancels the Other (“OCO”) – An Order that is linked to another Order. If one of the Orders is executed, the other will be automatically cancelled.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">v. </span>Stop Loss – A Stop Loss Order is an instruction to buy or sell a market at a price which is worse than the opening price of an open position (or worse than the prevailing price when applying the Stop Loss Order to an already open position). It can be used to help protect against losses. Please note that because of market gapping, the best available price that may be achieved could be materially different to the price set on the Stop Loss Order and as such, Stop Loss Orders are not guaranteed to take effect at the price for which they are set.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">vi. </span>Trailing Stop – A Trailing Stop is the same as a Stop Loss Order with the only difference being that, instead of setting a price at which the Order is activated, the Trailing Stop Order is activated at a fixed distance from the market price. For example, if Customer has purchased a long open position and the market Ask Price increases, the Trailing Stop price will also increase and will trail behind the market Ask Price at the fixed distance set by Customer. If the market Ask Price then decreases, the Trailing Stop price will remain fixed at its last position and if the market Ask Price reaches the Trailing Stop price, the Order will be executed. Please note that because of market gapping, the best available price that may be achieved could be materially different to the price set on the Trailing Stop Order and as such, Trailing Stop Orders are not guaranteed to take effect at the fixed distance for which they are set.</p>


                              </div>
                             
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <div className="light-text-2">
                                <p className="pb-4">Where you provide personal and financial information relating to other joint Account holders for the purpose of opening or administering your trading Account you confirm that you have their consent or are otherwise entitled to provide this information to us and for us to use it in accordance with this Agreement.</p>
                                <p className="pb-4">Any of you may request closure and the redirection of balances, unless there are circumstances that require us to obtain authorization from all of you.</p>
                                <p className="pb-4">Each of you will be given sole access to the funds initially deposited by you in your joint trading Account. Should you wish to withdraw these funds from your trading Account, you will be required to complete and sign a withdrawal form, upon receipt of the completed and signed withdrawal form you will be granted permission by AmaniLightEquity to withdraw funds up to the amount you initially deposited, provided that the conditions for withdrawals stipulated in clause 9 are satisfied. AmaniLightEquity will credit the amount withdrawn in the same bank account from where it was originally debited.</p>
                                <p className="pb-4">In the case of withdrawal of profits, if any of you wish to withdraw profits from the joint trading Account, you will be required to complete and sign a withdrawal form, provided that the conditions for withdrawals stipulated in clause 9 are satisfied. Upon receipt of the completed and signed withdrawal form you will be granted permission by AmaniLightEquity to withdraw any profits from the joint trading Account. EM will credit the amount of profits withdrawn in the same bank account from where it was originally debited.</p>
                                <p className="pb-4">In order for this Agreement to be valid and binding it is required that all joint Account holders sign the Agreement and in case you and/or any of the Account holders wish to terminate this Agreement and close the joint trading Account held with the Company, the written consent of all Account holders shall be obtained in accordance with the provisions of clause 17 of this Agreement.</p>
                                
                              </div>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">TERMS OF ACCEPTANCE FOR ORDERS</p>
                              <p>It is your sole responsibility to clearly indicate the terms of an Order when entered, whether it is a Market Order, Limit Order, Stop Loss Order or any other type of Order, including the relevant price and lot size. You acknowledge and agree that, despite our best efforts, the price at which execution occurs may be materially different to the price specified in your Order. This may result from sudden price movements in the underlying assets that are beyond our control. AmaniLightEquity shall have no liability for failure to execute Orders. AmaniLightEquity shall have the right, but not the obligation, to reject any Order in whole or in part prior to execution, or to cancel any Order, where your Account contains Margin that is insufficient to support the entire Order or where such Order is illegal or otherwise improper.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">EXECUTION POLICY</p>
                              <p>Please refer to our Best Execution Policy for full details of AmaniLightEquity’s order execution and allocation policies. Clients shall be notified by email of any material change to AmaniLightEquity’s order execution arrangements or execution policy.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">6</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">AUTHORITY</p>
                              <p>We shall be entitled to act for you upon instructions given or purporting to be given by you or any person authorized on your behalf without further enquiry as to the genuineness, authority or identity of the person giving or purporting to give such instructions provided such instruction is accompanied by your correct Account number and password. If your Account is a joint account, you agree that we are authorized to act on the instructions of any one person in whose name the Account is held, without further inquiry. We shall have no responsibility for further inquiry into such apparent authority and no liability for the consequences of any actions taken or failed to be taken by us in reliance on any such instructions or on the apparent authority of any such persons.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">7</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">CANCELLATION/WITHDRAWAL OF INSTRUCTIONS</p>
                              <p>Non-Market Orders may be cancelled via the AmaniLightEquity Online Trading System but we can only cancel your instructions if you explicitly request so, provided that we have not acted up to the time of your request upon those instructions. Executed instructions may only be withdrawn or amended by you with our consent. AmaniLightEquity shall have no liability for any claims, losses, damages, costs or expenses, including legal fees, arising directly or indirectly out of the failure of such Order to be cancelled.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">8</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">RIGHT NOT TO ACCEPT ORDERS</p>
                              <p>Non-Market Orders may be cancelled via the AmaniLightEquity Online Trading System but we can only cancel your instructions if you explicitly request so, provided that we have not acted up to the time of your request upon those instructions. Executed instructions may only be withdrawn or amended by you with our consent. AmaniLightEquity shall have no liability for any claims, losses, damages, costs or expenses, including legal fees, arising directly or indirectly out of the failure of such Order to be cancelled.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">9</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">CONTROL OF ORDERS PRIOR TO EXECUTION</p>
                              <p className="pb-3">We have the right (but not the obligation) to set limits and/or parameters to control your ability to place orders at our absolute discretion. Such limits and/or parameters may be amended, increased, decreased, removed or added to by us at our absolute discretion and may include (without limitation):</p>
                              <div className="pt-3">
                                <p className="pb-3"><span className="site-primary-text font-weight-700">i. </span>  controls over maximum order amounts and maximum order sizes;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">ii. </span>  controls over our total exposure to you;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iii. </span> controls over prices at which orders may be submitted (to include (without limitation) controls over orders which are at a price which differs greatly from the market price at the time the order is submitted to the order book)</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iv. </span>controls over the Electronic Services (to include (without limitation) any verification procedures to ensure that any particular order or orders has come from you);</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">v. </span>or any other limits, parameters or controls which we may be required to implement in accordance with Applicable Regulations.</p>


                              </div>
                             
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">10</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">EXECUTION OF ORDERS</p>
                              <p>We shall use our reasonable endeavors to execute any order promptly, but in accepting your orders we do not represent or warrant that it will be possible to execute such order or that execution will be possible according to your instructions. If we encounter any material difficulty relevant to the proper carrying out of an order on your behalf we shall notify you promptly.</p>
                            </div>
                          </div>


                          
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">11</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">CONFIRMATIONS</p>
                              <p className="pb-2">At the end of each trading day, confirmations for all Transactions that we have executed on your behalf on that trading day will be available via your online Account on our Website in the Open Positions window and Deal Blotter in the dealing console, which is updated online as each Transaction is executed. Confirmation of execution and statements of your Account(s), in the absence of manifest error, shall be deemed correct, conclusive and binding upon you if not objected to immediately by email if Orders were placed through AmaniLightEquity’s Online Trading System or by telephone to the AmaniLightEquity Trading Desk, within five Business Days of making such confirmations available to you via our Website or we notify you of an error in the confirmation within the same period.</p>
                              <p className="pb-2">In cases where the prevailing market represents prices different from the prices posted by AmaniLightEquity, AmaniLightEquity will attempt, on a best efforts basis and in good faith, to execute Market Orders on or close to the prevailing market prices. This may or may not adversely affect Customer’s Realized and Unrealized Gains and Losses.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">12</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">CANCELLATION OF TRADES</p>
                              <p className="pb-3">We have the right to reject an order or to cancel a trade if we have evidence on:</p>
                              <div className="pt-3">
                                <p className="pb-3"><span className="site-primary-text font-weight-700">i. </span>  fraud/illegal actions that led to the transaction;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">ii. </span>  orders placed based on manipulated prices as a result of system errors or system malfunctions;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iii. </span>arbitrage trading on prices offered by our platforms as a result of systems errors;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iv. </span>and coordinated transactions by related parties in order to take advantage of systems errors and delays on systems updates.</p>


                              </div>
                             
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">13</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">DISABLING AND CANCELLING DEPOSITS</p>
                              <p className="pb-3">We have the right not to accept funds deposited by you and/or to cancel your deposits in the following circumstances:</p>
                              <div className="pt-3">
                                <p className="pb-3"><span className="site-primary-text font-weight-700">i. </span>  If you fail to provide AmaniLightEquity with any documents it requests from you either for client identification purposes or for any other reason;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">ii. </span>  If AmaniLightEquity suspects or has concerns that the submitted documents may be false or fake</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iii. </span>If AmaniLightEquity suspects you are involved in illegal or fraudulent activity;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iv. </span>if AmaniLightEquity is informed that your credit or debit card (or any other payment method used) has been lost or stolen;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iv. </span>Where AmaniLightEquity considers that there is a chargeback risk; and when you deposit $15.000 or more or if you make over 10 separate deposits to your trading Accounts and AmaniLightEquity is unable to verify your credit or debit card details or is unable to verify any other payment method used.</p>


                              </div>
                             
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">14</p>
                            <div className="ps-3">
                              <p className="pb-2">In case of cancelled deposits, and if there is not a confiscation of your funds by a supervisory authority on the grounds of money laundering suspicion or for any other legal infringement, your funds will be returned to your bank account.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">15</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">PERFORMANCE AND SETTLEMENT</p>
                              <p className="pb-2">You will promptly deliver any instructions, money, or documents deliverable by you under a Transaction in accordance with that Transaction as modified by any instructions given by us.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">16</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">POSITION LIMITS</p>
                              <p className="pb-2">We may require you to limit the number of open positions which you may have with us at any time and we may in our sole discretion close out any one or more Transactions in order to ensure that such position limits are maintained.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">17</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">TRAILING STOP FUNCTIONALITY IN CASE THAT MT5 TERMINAL IS CLOSED</p>
                              <p className="pb-2">In the event that the MetaTrader5 or DXTrade client terminal is closed, Trailing Stop will not work. This happens as the Trailing Stop works on the client terminal side and in this respect, if the client terminal is closed, only Stop Loss that was placed by Trailing Stop before the closing of the terminal can trigger.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">18</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">WITHDRAWALS</p>
                              <p className="pb-2">Without prejudice and subject to the terms of this Agreement, all Applicable Regulations and all conditions attaching to any relevant payments made to you under a bonus or rebate scheme operated by us, monies may be withdrawn by you from your Account on 24 hours written notice to us, provided that such monies are not being utilized for margin purposes or have otherwise become owing to us.</p>
                              <p className="pb-2">Payments from your Account require a withdrawal request form signed by all required Account holders and submitted in writing to us. If you request a withdrawal of monies from your Account and we cannot comply with it without closing some part of your open positions, we will not comply with the request until you have closed sufficient positions to allow you to make the withdrawal. Withdrawals will only be made on request by you, by bank transfer to an account in your name or by bankers draft payable to you personally or such other method as we, in our absolute discretion, may determine.</p>
                            </div>
                          </div>

                          
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">19</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">ACCOUNT CLOSING</p>
                              <p className="pb-2">You may close your account at any time by sending a written request to AmaniLightEquity. Subject to what is provided in the previous paragraph in regard to Withdrawals, funds will be transferred, in most cases, within 48 hours or receiving the request. Funds will be only transferred to a bank account in your name. No third party transfers will be made</p>
                            </div>
                          </div>


                                                    
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">20</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">SWAP FREE ACCOUNTS</p>
                              <p className="pb-2">Any activity which is deemed as likely to cause AmaniLightEquity or which has caused AmaniLightEquity to suffer any unreasonable cost, expense, loss or prejudice, such as but not limited to a swap free account holder (“Islamic Account”) opening of positions and keeping such positions open for a prolonged period of time (resulting in AmaniLightEquity incurring costs with its counter-parties or internally), may result in account closure or the customer being charged for such costs, expenses or loss, as the case may be. In such latter case, AmaniLightEquity shall be entitled to deduct such amounts from the customer’s balance subject to prior notification</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">21</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">NEGATIVE BALANCE PROTECTION MECHANISM ON CFD TRADING ACCOUNTS</p>
                              <p className="pb-3">In cases of market movements which result in a negative balance in a client’s CFD Trading Account, AmaniLightEquity Limited will execute one of the following mechanisms:</p>
                              <div className="pt-3">
                                <p className="pb-3"><span className="site-primary-text font-weight-700">i. </span>  It will adjust the account balance to zero, thereby ensuring that the Client will not have to fund any negative balance and/or lose more money beyond the amount that the Client had allocated initially for CFD trading;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">ii. </span>  It will open a new trading account with a zero balance and close off the old account, without the client having to fund any negative balance and/or lose more money beyond the amount that the Client had allocated initially for CFD trading</p>

                              </div>
                             
                            </div>
                          </div>



                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">23</p>
                            <div className="ps-3">
                              <p className="pb-2">The negative balance protection outlined above is designed to counteract the occurrence of exceptional circumstances with the aim of providing client protection in case of AmaniLightEquity events.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">10. ELECTRONIC TRADING TERMS</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">SCOPE</p>
                              <p>These clauses apply to your use of any Electronic Services.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">ACCESS AND TRADING HOURS</p>
                              <p className="pb-2">Once you have gone through the security procedures associated with an Electronic Service provided by us, you will get access to such service, unless agreed otherwise or stated on our Website. All references to AmaniLightEquity’s hours of trading are in Greenwich Mean Time (“GMT”) using 24-hour format. Our Electronic Services will normally be available continuously from 21:00 GMT Sunday until 21:00 GMT Friday (winter time), every week, excluding public holidays where the Forex market does not operate and cases where the market is closed due to illiquidity in the financial instruments. Please consult our Website for more details on operating times for each financial instrument. We reserve the right to suspend or modify the operating hours, on our own discretion, and on such event our Website will be updated without delay in order to inform you accordingly. In this respect, the operating hours as indicated on our Website and to which you have trading rights are the applicable.</p>
                              <p>We may change our security procedures at any time and we will inform you of any new procedures that apply to you as soon as possible.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">ELECTRONIC ORDER ENTRY FOR MARKET ORDERS EQUALS ORDER EXECUTION</p>
                              <p className="pb-2">To enter an online Order, you must access the Markets window, then click on “BUY/SELL” for the relevant market. A new window will appear in which you enter the price and lot size. The Order is filled shortly after you hit the OK button provided you have sufficient funds in your Account.</p>
                              <p>Orders may fail for several reasons including changing dealer prices, insufficient margin, unspecified lot size or unanticipated technical difficulties.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">RESTRICTIONS ON SERVICES PROVIDED</p>
                              <p className="pb-2">There may be restrictions on the number of Transactions that you can enter into on any one day and also in terms of the total value of those Transactions when using an Electronic Service. Please refer to our Website for details of the limits imposed upon Transactions carried out through our Electronic Services.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">ACCESS REQUIREMENTS</p>
                              <p className="pb-2">You will be responsible for providing the System to enable you to use an Electronic Service</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">6</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">VIRUS DETECTION</p>
                              <p className="pb-2">You will be responsible for the installation and proper use of any virus detection/scanning program we require from time to time.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">7</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">USE OF INFORMATION, DATA AND SOFTWARE</p>
                              <p className="pb-2">In the event that you receive any data, information or software via an Electronic Service other than that which you are entitled to receive pursuant to this Agreement, you will immediately notify us and will not use, in any way whatsoever, such data, information or software</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">8</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">MAINTAINING STANDARDS</p>
                              <p className="pb-3">Some of the types of Orders AmaniLightEquity accepts include, but are not limited to:</p>
                              <div className="pt-3">
                                <p className="pb-3"><span className="site-primary-text font-weight-700">i. </span>  ensure that the System is maintained in good order and is suitable for use with such Electronic Service</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">ii. </span> run such tests and provide such information to us as we shall reasonably consider necessary to establish that the System satisfies the requirements notified by us to you from time to time;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iii. </span> carry out virus checks on a regular basis;</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iv. </span>inform us immediately of any unauthorized access to an Electronic Service or any unauthorized Transaction or instruction which you know of or suspect and, if within your control, cause such unauthorized use to cease; <br /> and not at any time leave the terminal from which you have accessed such Electronic Service or let anyone else use the terminal until you have logged off such Electronic Service.</p>
                              

                              </div>
                             
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">9</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">SYSTEM DEFECTS</p>
                              <p className="pb-2">In the event you become aware of a material defect, malfunction or virus in the System or in an Electronic Service, you will immediately notify us of such defect, malfunction or virus and cease all use of such Electronic Service until you have received permission from us to resume use.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">10</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">INTELLECTUAL PROPERTY</p>
                              <p className="pb-2">All rights in patents, copyrights, design rights, trademarks and any other intellectual property rights (whether registered or unregistered) relating to the Electronic Services remain vested in us or our licensors. You will not copy, interfere with, tamper with, alter, amend or modify the Electronic Services or any part or parts thereof unless expressly permitted by us in writing, reverse compile or disassemble the Electronic Services, nor purport to do any of the same or permit any of the same to be done, except in so far as such acts are expressly permitted by law. Any copies of the Electronic Services made in accordance with law are subject to the terms and conditions of this Agreement. You shall ensure that all the licensors trademarks and copyright and restricted rights notices are reproduced on these copies. You shall maintain an up-to-date written record of the number of copies of the Electronic Services made by you. If we so request, you shall as soon as reasonably practical, provide to us a statement of the number and whereabouts of copies of the Electronic Services.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">11</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">LIABILITY AND INDEMNITY</p>
                              <p className="pb-3">Without prejudice to any other terms of this Agreement, relating to the limitation of liability and provision of indemnities, the following clauses shall apply to our Electronic Services.</p>
                              <div className="pt-3">
                                <p className="pb-3"><span className="site-primary-text font-weight-700">i. </span><span className="font-weight-700">SYSTEM ERRORS</span> <br /> We shall have no liability to you for damage which you may suffer as a result of transmission errors, technical faults, malfunctions, illegal intervention in network equipment, network overloads, malicious blocking of access by third parties, internet malfunctions, interruptions or other deficiencies on the part of internet service providers. You acknowledge that access to Electronic Services may be limited or unavailable due to such system errors, and that we reserve the right upon notice to suspend access to Electronic Services for this reason.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">ii. </span><span className="font-weight-700">DELAYS</span> <br /> Neither we nor any third party software provider accepts any liability in respect of any delays, inaccuracies, errors or omissions in any data provided to you in connection with an Electronic Service. <br /> <br /> We do not accept any liability in respect of any delays, inaccuracies or errors in prices quoted to you if these delays, inaccuracies or errors are caused by third party service providers with which we may collaborate. <br /> <br />We shall not be obliged to execute any instruction which has been identified that is based on errors caused by delays of the system to update prices provided by the system price feeder or the third party service providers. We do not accept any liability towards executed trades that have been based and have been the result of delays as described above</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iii. </span><span className="font-weight-700">VIRUSES FROM AN ELECTRONIC SERVICE</span> <br /> We shall have no liability to you (whether in contract or in tort, including negligence) in the event that any viruses, worms, software bombs or similar items are introduced into the System via an Electronic Service or any software provided by us to you in order to enable you to use the Electronic Service, provided that we have taken reasonable steps to prevent any such introduction.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iv. </span><span className="font-weight-700">VIRUSES FROM YOUR SYSTEM</span> <br /> You will ensure that no computer viruses, worms, software bombs, or similar items are introduced into our computer system or network and will indemnify us on demand for any loss that we suffer arising as a result of any such introduction.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">v. </span><span className="font-weight-700">UNAUTHORISED USE</span> <br /> We shall not be liable for any loss, liability or cost whatsoever arising from any unauthorized use of the Electronic Service. You shall on demand indemnify, protect and hold us harmless from and against all losses, liabilities, judgments, suits, actions, proceedings, claims, damages and costs resulting from or arising out of any act or omission by any person using an Electronic Service by using your designated passwords, whether or not you authorized such use</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">vi. </span><span className="font-weight-700">MARKETS</span> <br /> We shall not be liable for any act taken by or on the instruction of an exchange, clearing house or regulatory body.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">vii. </span><span className="font-weight-700">SUSPENSION OR PERMANENT WITHDRAWAL WITH NOTICE</span> <br /> We may suspend or permanently withdraw an Electronic Service, by giving you 24 hours written notice.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">viii. </span><span className="font-weight-700">IMMEDIATE SUSPENSION OR PERMANENT WITHDRAWAL</span> <br /> We have the right, unilaterally and with immediate effect, to suspend or withdraw permanently your ability to use any Electronic Service, or any part thereof, without notice, where we consider it necessary or advisable to do so, for example due to your non-compliance with the Applicable Regulations, breach of any provisions of this Agreement, on the occurrence of an Event of Default, network problems, failure of power supply, for maintenance, or to protect you when there has been a breach of security. In addition, the use of an Electronic Service may be terminated automatically, upon the termination (for whatever reason) of: any license granted to us which relates to the Electronic Service; or this Agreement.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">ix. </span><span className="font-weight-700">EFFECTS OF TERMINATION</span> <br /> In the event of a termination of the use of an Electronic Service for any reason, upon request by us, you shall, at our option, return to us or destroy all hardware, software and documentation we have provided you in connection with such Electronic Service and any copies thereof</p>


                              </div>
                             
                            </div>
                          </div>


                        </div>
                      </div>
                    </section>


                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">11. CLIENT MONEY</h4>
                        <p className="pb-3 light-text-2">We treat money received from you or held by us on your behalf in accordance with the requirements of the Client Money Rules</p>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">INTEREST</p>
                              <p>You, the client, acknowledge and confirm that no interest will be received on the balance of your account.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">OVERSEAS BANKS, INTERMEDIATE BROKER, SETTLEMENT AGENT OR OTC COUNTERPARTY</p>
                              <p>We may hold client money on your behalf outside the European Union. The legal and regulatory regime applying to any such bank or person will be different from the legal and regulatory regime in US and the European Union and in the event of the insolvency or any other analogous proceedings in relation to that bank or person, your money may be treated differently from the treatment which would apply if the money was held with a bank in an account in US and the European Union. We will not be liable for the insolvency, acts or omissions of any third party referred to in this clause</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">UNCLAIMED CLIENT MONEY</p>
                              <p className="pb-2">You agree that we may cease to treat your money as client money if there has been no movement on your balance for six years. We shall write to you at your last known address informing you of our intention of no longer treating your balance as client money and giving you 28 days to make a claim.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">LIABILITY AND INDEMNITY</p>
                              <p className="pb-2">You agree that we shall not be liable for any default of any counterparty, bank, custodian or other entity which holds money on your behalf or with or through whom transactions are conducted. You therefore take on the credit risk of the counterparty, bank, custodian or other entity. If the counterparty becomes insolvent, the counterparty may be unable to pay what it owes you on a CFD. In addition, you may not be able to recover any margin deposit which you placed with us and which we in turn place with the counterparty. We will of course do our best to help you recover any money which the counterparty owes you, but we are not personally liable to you for such amounts.</p>
                              <p>EM will not be liable for loss suffered by you in connection to your funds held by us, unless such loss directly arises from our gross negligence, willful default or fraud.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">12. MARGINING ARRANGEMENTS</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">MARGIN REQUIREMENT</p>
                              <p>A maximum leverage, defined per instrument, is calculated at the opening of a new position, as per EM Trading Conditions table below.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">CONTINGENT LIABILITY</p>
                              <p>Where we effect or arrange a Transaction, you should note that, depending upon the nature of the Transaction, you may be liable to make further payments when the Transaction fails to be completed or upon the earlier settlement or closing out of your position. You may be required to make further variable payments by way of margin against the purchase price of the investment, instead of paying (or receiving) the whole purchase (or sale) price immediately. The movement in the market price of your investment will affect the amount of margin payment you will be required to make. We will monitor your margin requirements on a daily basis and we will inform you as soon as it is reasonably practicable of the amount of any margin payment required under this clause.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">MARGIN CALL</p>
                              <p className="pb-2">You agree to pay us on demand such sums by way of margin as are required from time to time as we may in our discretion reasonably require for the purpose of protecting ourselves against loss or risk of loss on present, future or contemplated Transactions under this Agreement.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">WARNING CALL</p>
                              <p className="pb-2">AmaniLightEquity’s Trading Department sends a Warning Call to the Client when its margin falls under the “Warning Threshold” level. However, AmaniLightEquity will not take any action on the Client’s account until the margin reaches or falls under the “Last Threshold” level.</p>
                              <p className="pb-2">“Warning Threshold” is referring to the situation when the equity of the account reaches the level of the “Used Margin”.</p>
                              <p className="pb-2">“Last Threshold” is referring to the situation when the equity of the account reached the level of twenty percent (20%) of the “Used Margin”.</p>
                              <p className="pb-2">“Used Margin” refers to the amount of money required in order to open a leveraged position</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">FAILURE TO MEET MARGIN CALL – POSITION CLOSE OUT</p>
                              <p className="pb-2">Please note that in the event that you fail to meet a margin call or your margin reaches or falls under the “Last Threshold”, we may immediately at our full discretion and without further notification close out the position</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">6</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">FORM OF MARGIN</p>
                              <p className="pb-2">Margin must be paid in cash in currency acceptable by us, as requested from time to time by EM</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">7</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">SET-OFF ON DEFAULT</p>
                              <p className="pb-2">If there is an Event of Default or this Agreement terminates, we shall set-off the balance of cash margin owed by us to you against your obligations (as reasonably valued by us). The net amount, if any, payable between us following such set-off, shall take into account the Liquidation Amount payable under Clause 15 (Netting).</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">8</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">FURTHER ASSURANCE</p>
                              <p className="pb-2">You agree to execute such further documents and to take such further steps as we may reasonably require perfecting our security interest over and obtaining legal title to the Secured Obligations.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">9</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">NEGATIVE PLEDGE</p>
                              <p className="pb-2">You undertake neither to create nor to have outstanding any security interest whatsoever over, nor to agree to assign or transfer, any of the cash margin transferred to us, except a lien or pledge routinely imposed on all securities in a clearing system in which such securities may be held</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">10</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">GENERAL PLEDGE or LIEN</p>
                              <p className="pb-2">In addition and without prejudice to any rights to which we may be entitled under this Agreement or any Applicable Regulations, we shall have a general pledge or lien on all cash held by us or our Associates or our nominees on your behalf until the satisfaction of the Secured Obligations</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">13. REPRESENTATIONS, WARRANTIES AND COVENANTS</h4>
                        <div className="light-text-2">
                          <div>
                            <p className="pb-3">You represent and warrant to us on the date this Agreement comes into effect and as of the date of each Transaction that:</p>
                            <p className="pb-3">if you are a natural person, you are of legal age and you have full legal capacity to enter into this Agreement;</p>
                            <p className="pb-3">if you are not a natural person:</p>
                            <p className="pb-3">you are duly organized, constituted and validly existing under the applicable laws of the jurisdiction in which you are constituted</p>
                            <p className="pb-3">execution and delivery of this Agreement, all Transactions and the performance of all obligations contemplated under this Agreement have been duly authorized by you; and each natural person executing and delivering this Agreement on your behalf, entering Transactions and the performance of all obligations contemplated under this Agreement have been duly authorized by you and have been disclosed to us providing all the necessary information and/or documentation,</p>
                            <p className="pb-3">you have all necessary authority, powers, consents, licenses and authorizations and have taken all necessary action to enable you lawfully to enter into and perform this Agreement and such Transaction and to grant the security interests and powers referred to in this Agreement</p>
                            <p className="pb-3">the persons entering into this Agreement and each Transaction on your behalf have been duly authorized to do so and are disclosed to us giving details of the relationship with you by providing all necessary information and/or documentation;</p>
                            <p className="pb-3">this Agreement, each Transaction and the obligations created under them both are binding upon you and enforceable against you in accordance with their terms and do not and will not violate the terms of any regulation, order, charge or agreement by which you are bound</p>
                            <p className="pb-3">no Event of Default or any event which may become (with the passage of time, the giving of notice, the making of any determination or any combination of the above) an Event of Default (a “Potential Event of Default”) has occurred and is continuing with respect to you or any Credit Support Provider</p>
                            <p className="pb-3">you act as principal and sole beneficial owner (but not as trustee) in entering into this Agreement and each Transaction and in case you wish to open, either in the present time or in the future, more than one account with EM either as individual client (natural person) or as the beneficial owner of a corporate client (legal person) it is required to immediately disclose to us that you are the beneficial owner of the account(s) during the account opening procedure and to provide us with the necessary information and/or documentation regarding the relationship between the natural and/or legal person(s);</p>
                            <p className="pb-3">any information which you provide or have provided to us in respect of your financial position, domicile or other matters is accurate and not misleading in any material respect;</p>
                            <p className="pb-3">you are willing and financially able to sustain a total loss of funds resulting from Transactions and trading in such Transactions is a suitable investment for you; and except as otherwise agreed by us, you are the sole beneficial owner of all margin you transfer under this Agreement, free and clear of any security interest whatsoever other than a lien routinely imposed on all securities in a clearing system in which such securities may be held.</p>
                          </div>

                          <div>
                            <div className="d-flex pb-5">
                              <p className="site-primary-bg border-radius-50 site-number white-text">8</p>
                              <div className="ps-3">
                                <p className="pb-3 font-weight-700">COVENANTS</p>
                                <p className="pb-3">You covenant to us</p>
                                <div className="pt-3">
                                  <p className="pb-3"><span className="site-primary-text font-weight-700">i. </span> you will at all times obtain and comply, and do all that is necessary to maintain in full force and effect, all authority, powers, consents, licenses and authorizations referred to in this clause;</p>
                                  <p className="pb-3"><span className="site-primary-text font-weight-700">ii. </span> you will promptly notify us of the occurrence of any Event of Default or Potential Event of Default with respect to yourself or any Credit Support Provider;</p>
                                  <p className="pb-3"><span className="site-primary-text font-weight-700">iii. </span>you will use all reasonable steps to comply with all Applicable Regulations in relation to this Agreement and any Transaction, so far as they are applicable to you or us;</p>
                                  <p className="pb-3"><span className="site-primary-text font-weight-700">iv. </span>you will not send orders or otherwise take any action that could create a false impression of the demand or value for a financial instrument. Nor will you send orders which we have reason to believe are in breach of Applicable Regulations or by taking advantage of the account(s) you may maintain with AmaniLightEquity could be considered as system abusive orders, including but not limited to one’s intention to benefit from delays in the prices, to trade at off-market prices and/or outside trading hours and to abuse the system for trading at manipulated prices; <br />and upon demand, you will provide us with such information as we may reasonably require to evidence the matters referred to in this clause or to comply with any Applicable Regulations</p>
                                

                                </div>
                              
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>
                    </section>
                    

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">14. EVENTS OF DEFAULT</h4>
                        <div className="light-text-2">
                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3">you fail to make any payment when due under this Agreement or to observe or perform any other provision of this Agreement and such failure continues for one Business Day after notice of non-performance has been given by us to you;</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3">you commence a voluntary case or other procedure seeking or proposing bankruptcy, dissolution, liquidation, reorganization, winding up an arrangement or composition, a freeze or moratorium, or other similar relief with respect to you or your debts under any bankruptcy, insolvency, regulatory, supervisory or similar law (including any corporate or other law with potential application to you, if insolvent), or seeking the appointment of a trustee, receiver, liquidator, conservator, administrator, custodian or other similar official (each a “Liquidator”) of you or any substantial part of your assets, or if you take any corporate action to authorize any of the foregoing, and in the case of a reorganization, arrangement or composition, we do not consent to the proposals;</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3">an involuntary case or other procedure is commenced against you seeking or proposing bankruptcy, dissolution, liquidation, reorganization, winding up an arrangement or composition, a freeze or moratorium, or other similar relief with respect to you or your debts under any bankruptcy, insolvency, regulatory, supervisory or similar law (including any corporate or other law with potential application to you, if insolvent) or seeking the appointment of a Liquidator of you or any substantial part of your assets and such involuntary case or other procedure either: a. has not been dismissed within five days of its institution or presentation; or b. has been dismissed within such period but solely on the grounds of an insufficiency of assets to cover the costs of such case or other procedure.</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3">die, become of unsound mind, are unable to pay your debts as they fall due or are bankrupt or insolvent, as defined under any bankruptcy or insolvency law applicable to you: or any indebtedness of yours is not paid on the due date therefore, or becomes capable at any time of being declared, due and payable under agreements or instruments evidencing such indebtedness before it would otherwise have been due and payable, or any suit, action or other proceedings relating to this Agreement are commenced for any execution, any attachment or garnishment, or distress against, or an encumbrancer takes possession of, the whole or any part of your property, undertaking or assets (tangible and intangible);</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3">you or any Credit Support Provider (or any Liquidator acting on behalf of either of you or a Credit Support Provider) disaffirms, disclaims or repudiates any obligation under this Agreement or any guarantee, pledge, hypothecation agreement, margin or security agreement or document, or any other document containing an obligation of a third party (“Credit Support Provider”), or of you, in favor of us supporting any of your obligations under this Agreement (each a “Credit Support Document”);</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">6</p>
                            <div className="ps-3">
                              <p className="pb-3">any representation or warranty made or given or deemed made or given by you under this Agreement or any Credit Support Document proves to have been false or misleading in any material respect as at the time it was made or given or deemed made or given;</p>
                            </div>
                          </div>


                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">7</p>
                            <div className="ps-3">
                              <p className="pb-3">any Credit Support Provider fails, or you yourself fail to comply with or perform any agreement or obligation to be complied with or performed by you or it in accordance with the applicable Credit Support Document;</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">8</p>
                            <div className="ps-3">
                              <p className="pb-3">any Credit Support Document expires or ceases to be in full force and effect prior to the satisfaction of all your obligations under this Agreement, unless we have agreed in writing that this shall not be an Event of Default;</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">9</p>
                            <div className="ps-3">
                              <p className="pb-3">any representation or warranty made or given or deemed made or given by any Credit Support Provider pursuant to any Credit Support Document proves to have been false or misleading in any material respect as at the time it was made or given or deemed made or given;</p>
                            </div>
                          </div>


                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">10</p>
                            <div className="ps-3">
                              <p className="pb-3">any event referred to in Clauses 14.2 to Clause 14.4 of this Clause 14 (Events of Default ) occurs in respect of any Credit Support Provider;</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">11</p>
                            <div className="ps-3">
                              <p className="pb-3">we consider it necessary or desirable for our own protection, or any action is taken or event occurs which we consider might have a material adverse effect upon, your ability to perform any of your obligations under this Agreement</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">12</p>
                            <div className="ps-3">
                              <p className="pb-3">you fail or omit to disclose to us your capacity as the beneficial owner of more than one accounts you may maintain with us and/or your capacity to act as a money manager on behalf of any other client of us;</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">13</p>
                            <div className="ps-3">
                              <p className="pb-3">you take advantage of delays occurred in the prices and you place orders at outdated prices, you trade at off-market prices and/or outside trading hours, you manipulate the system to trade at prices not quoted to you by us and you perform any other action that constitutes improper trading;</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">14</p>
                            <div className="ps-3">
                              <p className="pb-3">any event of default (however described) occurs in relation to you under any other agreement between us</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">15. NETTING</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">RIGHTS ON DEFAULT</p>
                              <p>On the occurrence of an Event of Default, we may exercise our rights under this clause, except that in the case of the occurrence of any Event of Default specified in Clause 14.2 or Clause 14.3 of the definition of Events of Default (each a “Bankruptcy Default”), the automatic termination provision of this clause shall apply.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">LIQUIDATION DATE</p>
                              <p>Subject to the following sub-clause, at any time following the occurrence of an Event of Default, we may, by notice to you, specify a date (the “Liquidation Date”) for the termination and liquidation of Transactions in accordance with this clause.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">AUTOMATIC TERMINATION</p>
                              <p className="pb-2">The date of the occurrence of any Bankruptcy Default shall automatically constitute a Liquidation Date, without the need for any notice by us and the provisions of the following sub-clause shall then apply.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">CALCULATION OF LIQUIDATION AMOUNT</p>
                              <p className="pb-2">Upon the occurrence of a Liquidation Date:</p>
                              <p className="pb-2">neither of us shall be obliged to make any further payments or deliveries under any Transactions which would, but for this clause, have fallen due for performance on or after the Liquidation Date and such obligations shall be satisfied by settlement (whether by payment, set-off or otherwise) of the Liquidation Amount;</p>
                              <p className="pb-2">we shall (on, or as soon as reasonably practicable after, the Liquidation Date) determine (discounting if appropriate), in respect of each Transaction the total cost, loss or, as the case may be, gain, in each case expressed in the Base Currency specified by us in writing or, failing any such specification, the lawful currency of the United States (and, if appropriate, including any loss of bargain, cost of funding or, without duplication, cost, loss or, as the case may be, gain as a result of the termination, liquidation, obtaining, performing or re-establishing of any hedge or related trading position) as a result of the termination, pursuant to this Agreement, of each payment or delivery which would otherwise have been required to be made under such Transaction (assuming satisfaction of each applicable condition precedent and having due regard, if appropriate, to such market quotations published on, or official settlement prices set by the relevant exchange as may be available on, or immediately preceding, the date of calculation);</p>
                              <p className="pb-2">we shall treat each cost or loss to us, determined as above, as a positive amount and each gain by us, so determined, as a negative amount and aggregate all of such amounts to produce a single, net positive or negative amount, denominated in the Base Currency (the “Liquidation Amount”).</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">PAYER</p>
                              <p className="pb-2">If the Liquidation Amount determined pursuant to this clause is a positive amount, you shall pay it to us and if it is a negative amount, we shall pay it to you. We shall notify you of the Liquidation Amount, and by whom it is payable, immediately after the calculation of such amount</p>

                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">6</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">ADDITIONAL RIGHTS</p>
                              <p className="pb-2">Our rights under this clause shall be in addition to, and not in limitation or exclusion of, any other rights which we may have (whether by agreement, operation of law or otherwise)</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">7</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">OTHER TRANSACTIONS</p>
                              <p className="pb-2">Where termination and liquidation occurs in accordance with this clause, we shall also be entitled, at our discretion, to terminate and liquidate, in accordance with the provisions of this clause, any other transactions entered into between us which are then outstanding</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">8</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">PAYMENT</p>
                              <p className="pb-2">The Liquidation Amount shall be paid in the Base Currency by the close of business on the Business Day following the completion of the termination and liquidation under this clause (converted as required by applicable law into any other currency, any costs of such conversion to be borne by you, and (if applicable) deducted from any payment to you). Any Liquidation Amount not paid on the due date shall be treated as an unpaid such amount and bear interest, at the average rate at which overnight deposits in the currency of such payment are offered by major banks in the London interbank market as of 11.00 am (London time) (or, if no such rate is available, at such reasonable rate as we may select) plus one 1% per annum for each day for which such amount remains unpaid.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">9</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">BASE CURRENCY</p>
                              <p className="pb-2">For the purposes of any calculation hereunder, we may convert amounts denominated in any other currency into the Base Currency at such rate prevailing at the time of the calculation as we shall reasonably select</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">10</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">PAYMENTS</p>
                              <p className="pb-2">Unless a Liquidation Date has occurred or has been effectively set, we shall not be obliged to make any payment or delivery scheduled to be made by us under a Transaction for as long as an Event of Default or any event which may become (with the passage of time, the giving of notice, the making of any determination hereunder, or any combination thereof) an Event of Default with respect to you has occurred and is continuing</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">11</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">APPLICATION OF NETTING TO TRANSACTIONS</p>
                              <p className="pb-2">This clause applies to each Transaction entered into or outstanding between us on or after the date this Agreement takes effect.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">12</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">SINGLE AGREEMENT</p>
                              <p className="pb-2">This Agreement, the particular terms applicable to each Transaction entered into under this Agreement, and all amendments to any of them shall together constitute a single agreement between us. We both acknowledge that all Transactions entered into on or after the date this Agreement takes effect are entered into in reliance upon the fact that the Agreement and all such terms constitute a single agreement between us.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">16. Processing, Handling and Storage of Data.</h4>
                        <div className="light-text-2">
                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3">Personal data, whether sensitive or otherwise, disclosed to AmaniLightEquity from time to time will be recorded in a database and processed according to the requirements of AmaniLightEquity for the purposes of providing the Services, for consultancy and advisory services, direct marketing (such as informing you by mail, telephone, fax, e-mail or other means, about other products and services supplied by AmaniLightEquity and any subsidiaries, associates, agents or clients thereof and by other carefully selected third parties) and/or any other purpose that may be necessary for the execution of your instructions to AmaniLightEquity from time to time. Should you not wish to have your data processed for direct marketing purposes, you are requested to advise AmaniLightEquity accordingly in writing.</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3">In the course of providing you with the Services, AmaniLightEquity may need to disclose some or all of your personal data to its employees, associate/s, agent/s, partner/s, sub-contractor/s, product provider/s, and/or investment institution/s, (all of which shall be made subject to such confidentiality and data protection obligations as shall be considered necessary by AmaniLightEquity, in-keeping with its obligations in fulfilment of these Terms and Conditions) for the purpose of providing the said Services and/or to any regulatory or public authorities to comply with its regulatory or other obligations in terms of law, and for these purposes you consent to the transfer of your personal data to any country and/or jurisdiction where such person/s may be situated.</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3">In terms of the Data Protection Act, you are entitled to request AmaniLightEquity to inform you in respect of the personal data held about you that is processed and to request its correction updating or amendment, where necessary. Whilst AmaniLightEquity may request you to reconfirm your personal data from time to time, you must notify AmaniLightEquity immediately in writing if such data has changed.</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3">You acknowledge and expressly accept that AmaniLightEquity may record all telephone conversations between you and AmaniLightEquity’s employees, representatives, partners and /or sub-contractors. Such recording shall remain the property of AmaniLightEquity and you agree to the use thereof or transcript therefrom as evidence in any dispute or anticipated dispute between the parties under the Agreement.</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3">Any such recordings or transcripts made by AmaniLightEquity may be destroyed by AmaniLightEquity at its own discretion and in accordance with its own practise and procedures.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">17. RIGHTS ON DEFAULT</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">DEFAULT</p>
                              <p className="pb-3">On an Event of Default or at any time after we have determined, in our absolute discretion, that you have not performed (or we reasonably believe that you will not be able or willing in the future to perform) any of your obligations to us, in addition to any rights under the clause 15 (Netting) we shall be entitled, without prior notice to you:</p>
                              <p className="pb-3">instead of returning to you investments equivalent to those credited to your account, to pay to you the fair market value of such investments at the time we exercise such right; and/or</p>
                              <p className="pb-3">to sell such of your investments as are in our possession or in the possession of any nominee or third party appointed under or pursuant to this Agreement, in each case as we may in our absolute discretion select or and upon such terms as we may in our absolute discretion think fit (without being responsible for any loss or diminution in price) in order to realize funds sufficient to cover any amount due by you hereunder; and/or</p>
                              <p className="pb-3">to close out, replace or reverse any Transaction, buy, sell, borrow or lend or enter into any other Transaction or take, or refrain from taking, such other action at such time or times and in such manner as, at our sole discretion, we consider necessary or appropriate to cover, reduce or eliminate our loss or liability under or in respect of any of your contracts, positions or commitments; and/or</p>
                              <p className="pb-3">to cancel and/or consider void any Transactions and profits or losses either realized or unrealized and/or to close out the account(s) you maintain with us pursuant to this Agreement, immediately and without prior notice.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>


                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">18. TERMINATION WITHOUT DEFAULT</h4>
                        <div className="light-text-2">
                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">TERMINATION</p>
                              <p>Unless required by Applicable Regulations, either party may terminate this Agreement (and the relationship between us) by giving ten days written notice of termination to the other. We may terminate this Agreement immediately if you fail to observe or perform any provision of this Agreement or in the event of your insolvency.</p>
                            </div>
                          </div>
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">UPON TERMINATING THIS AGREEMENT</p>
                              <p className="pb-3">all amounts payable by you to us will become immediately due and payable including (but without limitation)</p>
                              <p className="pb-3">all outstanding fees, charges and commissions; and</p>
                              <p className="pb-3">any dealing expenses incurred by terminating this Agreement; and</p>
                              <p className="pb-3">losses and expenses realized in closing out any Transactions or settling or concluding outstanding obligations incurred by us on your behalf.</p>
                              <p className="pb-3">EM shall apply best execution rules in cases where you have not provided EM with specific instructions regarding the closing of your positions</p>
                              <p className="pb-2">Return any funds remaining in your trading account to your bank account, specifically the account from which the funds were debited. Your funds may be returned to another bank account to which you are the beneficiary as long as you provide us with the required documents to verify that the account belongs to you</p>
                            </div>
                          </div>

                          <div className="d-flex">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">EXISTING RIGHTS</p>
                              <p>Termination shall not affect then outstanding rights and obligations and Transactions which shall continue to be governed by this Agreement and the particular clauses agreed between us in relation to such Transactions until all obligations have been fully performed</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">19. EXCLUSIONS, LIMITATIONS AND INDEMNITY</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">GENERAL EXCLUSION</p>
                              <p>Neither we nor our directors, officers, employees, or agents shall be liable for any losses, damages, costs or expenses, whether arising out of negligence, breach of contract, misrepresentation or otherwise, incurred or suffered by you under this Agreement (including any Transaction or where we have declined to enter into a proposed Transaction) unless such loss arises directly from our or their respective gross negligence, willful default or fraud. In no circumstance, shall we have liability for losses suffered by you or any third party for any special or consequential damage, loss of profits, loss of goodwill or loss of business opportunity arising under or in connection with this Agreement, whether arising out of negligence, breach of contract, misrepresentation or otherwise.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">TAX IMPLICATIONS</p>
                              <p>Without limitation, we do not accept liability for any adverse tax implications of any Transaction whatsoever.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">CHANGES IN THE MARKET</p>
                              <p className="pb-2">Market orders are executed at the BID/ASK prices offered through us. Pending orders (Stop Loss, Limit (take profit), Entry Limit (to buy or to sell), Entry Stop (to buy or to sell) are executed at the then market price requested by you and offered through us. We reserve the right, at our full discretion, not to execute the order, or to change the quoted price of the Transaction, or to offer you a new quote, in case of technical failure of the trading platform or in case of extraordinary or abnormal fluctuations of the price of the financial instrument as offered in the market. In the event we offer you a new quote you have the right to either accept it or refuse it and thus cancel the execution of the Transaction.</p>
                              <p>Without limitation, we do not accept any liability by reason of any delay or change in market conditions before any particular Transaction is affected.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">LIMITATION OF LIABILITY</p>
                              <p>We shall not be liable to you for any partial or non-performance of our obligations hereunder by reason of any cause beyond our reasonable control, including without limitation any breakdown, delay, malfunction or failure of transmission, communication or computer facilities, industrial action, act of terrorism, act of God, acts and regulations of any governmental or supra national bodies or authorities or the failure by the relevant intermediate broker or agent, agent or principal of our custodian, sub-custodian, dealer, exchange, clearing house or regulatory or self-regulatory organization, for any reason, to perform its obligations. Nothing in this Agreement will exclude or restrict any duty or liability we may have to you under Applicable Regulations, which may not be excluded or restricted thereunder.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">RESPONSIBILITY FOR ORDERS</p>
                              <p>You will be responsible for all orders entered on your behalf via an Electronic Service and you will be fully liable to us for the settlement of any Transaction arising from it.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">6</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">ENTIRE AGREEMENT</p>
                              <p>You acknowledge that you have not relied on or been induced to enter into this Agreement by a representation other than those expressly set out in this Agreement. We will not be liable to you (in contract, tort or under the principles of good faith in commercial transactions) for a representation that is not set out in this Agreement and that is not fraudulent</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">7</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">INDEMNITY</p>
                              <p>You shall pay to us such sums as we may from time to time require in or towards satisfaction of any debit balance on any of your accounts with us and, on a full indemnity basis, any losses, liabilities, costs or expenses (including legal fees), taxes, imposts and levies which we may incur or be subjected to with respect to any of your accounts or any Transaction or as a result of any misrepresentation by you or any violation by you of your obligations under this Agreement (including any Transaction) or by the enforcement of our rights</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>


                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">20. MISCELLANEOUS</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">AMENDMENTS</p>
                              <p>We have the right to amend the terms of this Agreement. If we make any material change to this Agreement, we will give at least ten business days written notice to you. Such amendment will become effective on the date specified in the notice. Unless otherwise agreed, an amendment will not affect any outstanding order or Transaction or any legal rights or obligations which may already have arisen</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">NOTICES</p>
                              <p>Unless otherwise agreed, all notices, instructions and other communications to be given by us under this Agreement shall be given to the address or fax number provided by you to us. Likewise, all notices, instructions and other communications to be given by you under this Agreement shall be given to us in writing at the address below:</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-2">You will notify us of any change of your address for the receipt of notices, instructions and other communications immediately.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">ELECTRONIC COMMUNICATIONS</p>
                              <p>Subject to Applicable Regulations, any communication between us using electronic signatures and any communications via our Website and/or Electronic Services shall be binding as if they were in writing. Orders or instructions given to you via e-mail or other electronic means will constitute evidence of the orders or instructions given.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">RECORDING OF CALLS</p>
                              <p>We may record telephone conversations without use of a warning tone to ensure that the material terms of the Transaction, and any other material information relating to the Transaction is promptly and accurately recorded. Such records will be our sole property and accepted by you as evidence of the orders or instructions given.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">6</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">OUR RECORDS</p>
                              <p>Our records, unless shown to be wrong, will be evidence of your dealings with us in connection with our services. You will not object to the admission of our records as evidence in any legal proceedings because such records are not originals, are not in writing nor are they documents produced by a computer. You will not rely on us to comply with your record keeping obligations, although records may be made available to you on request at our absolute discretion.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">7</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">YOUR RECORDS</p>
                              <p>You agree to keep adequate records in accordance with Applicable Regulations to demonstrate the nature of orders submitted and the time at which such orders are submitted. You can access your statements online at any time via our trading platform. You may request to receive your statement monthly or quarterly via email, by providing such a request to the support department.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">8</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">INVESTOR COMPENSATION FUND</p>
                              <p className="pb-2">We participate in the Investor Compensation Fund for clients of Investment Firms regulated in the Republic of US. You will be entitled to compensation under the Investor Compensation Fund where we are unable to meet our duties and obligations arising from your claim.</p>
                              <p className="pb-2">Any compensation provided to you by the Investor Compensation Fund shall not exceed twenty thousand Euros (€20.000), applies to your aggregate claims against us.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">9</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">COMPLAINTS PROCEDURE</p>
                              <p>We are obliged to put in place internal procedures for handling complaints fairly and promptly. You may submit a complaint to us, for example by letter, telephone, email, or in person. We will send you a written acknowledgement of your complaint promptly following receipt, enclosing details of our complaints procedures, including when and how you may be able to refer your complaint to the US Financial Services Authority (UFSA) which is the relevant regulatory body. Please refer to our Complaints Procedure for further information on how we deal with complaints.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">10</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">THIRD PARTY RIGHTS</p>
                              <p>This Agreement shall be for the benefit of and binding upon us both and our respective successors and assigns. You shall not assign, charge or otherwise transfer or purport to assign, charge or otherwise transfer your rights or obligations under this Agreement or any interest in this Agreement, without our prior written consent, and any purported assignment, charge or transfer in violation of this clause shall be void. You agree that we may without further notice to you and subject to Applicable Regulations, transfer by whatever means we consider appropriate all or any of our rights, benefits, obligations, risks and/or interests under this Agreement to any person who may enter into a contract with us in connection with such transfer and you agree that we may transfer to such person all information which we hold about you.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">11</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">TIME OF ESSENCE</p>
                              <p>Time shall be of the essence in respect of all obligations of yours under this Agreement (including any Transaction)</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">12</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">RIGHTS AND REMEDIES</p>
                              <p>The rights and remedies provided under this Agreement are cumulative and not exclusive of those provided by law. We shall be under no obligation to exercise any right or remedy either at all or in a manner or at a time beneficial to you. No failure by us to exercise or delay by us in exercising any of our rights under this Agreement (including any Transaction) or otherwise shall operate as a waiver of those or any other rights or remedies. No single or partial exercise of a right or remedy shall prevent further exercise of that right or remedy or the exercise of another right or remedy.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">13</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">SET-OFF</p>
                              <p>Without prejudice to any other rights to which we may be entitled, we may at any time and without notice to you set off any amount (whether actual or contingent, present or future) owed by you to us against any amount (whether actual or contingent, present or future) owed by us to you. For these purposes, we may ascribe a commercially reasonable value to any amount which is contingent or which for any other reason is unascertained.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">13</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">PARTIAL INVALIDITY</p>
                              <p>If, at any time, any provision of this Agreement is or becomes illegal, invalid or unenforceable in any respect under the law of any jurisdiction, neither the legality, validity or enforceability of the remaining provisions of this Agreement nor the legality, validity or enforceability of such provision under the law of any other jurisdiction shall in any way be affected or impaired.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">21. GOVERNING LAW AND JURISDICTION</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">GOVERNING LAW</p>
                              <p>This Agreement shall be governed by and construed in accordance with Maltese law</p>
                            </div>
                          </div>
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">JURISDICTION</p>
                              <p className="pb-2">Each of the parties irrevocably:</p>
                              <p className="pb-2">agrees that the courts of US shall have jurisdiction to settle any suit, action or other proceedings relating to this Agreement (“Proceedings”) and irrevocably submits to the jurisdiction of such courts regardless of whether or not you are resident and/or domiciled outside US (provided that this shall not prevent us from bringing an action in the courts of any other jurisdiction); and</p>
                              <p>waives any objection which it may have at any time to the laying of venue of any Proceedings brought in any such court and agrees not to claim that such Proceedings have been brought in an inconvenient forum or that such court does not have jurisdiction over it. CypherBlockSage reserves the right to take legal action before the court/s of your domicile or before any other competent court in any other jurisdiction in which case Maltese law will still apply.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">WAIVER OF IMMUNITY AND CONSENT TO ENFORCEMENT</p>
                              <p>You irrevocably waive to the fullest extent permitted by applicable law, with respect to yourself and your revenue and assets (irrespective of their use or intended use) all immunity on the grounds of sovereignty or other similar grounds from suit; jurisdiction of any courts; relief by way of injunction, order for specific performance or for recovery of property; attachment of assets (whether before or after judgment); and execution or enforcement of any judgment to which you or your revenues or assets might otherwise be entitled in any Proceedings in the courts of any jurisdiction and irrevocably agree that you will not claim any immunity in any Proceedings. You consent generally in respect of any Proceedings to the giving of any relief or the issue of any process in connection with such Proceedings, including, without limitation, the making, enforcement or execution against any property whatsoever (irrespective of its use or intended use) of any order or judgment which may be made or given in such Proceedings.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">ELECTRONIC COMMUNICATIONS</p>
                              <p>Subject to Applicable Regulations, any communication between us using electronic signatures and any communications via our Website and/or Electronic Services shall be binding as if they were in writing. Orders or instructions given to you via e-mail or other electronic means will constitute evidence of the orders or instructions given</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">22. CONFIRMATION REGARDING INTEREST POLICY</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">INTEREST POLICY</p>
                              <p>I acknowledge and confirm that no interest will be received on the balance of my account.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">23. EXPERT ADVISORSY</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p>EM permits the use of Expert Advisors on its trading platform. Please refer to our Expert Advisor Policy for full details of EM’s policy when it comes to the use of Expert Advisors.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>
                    
                    
                  </div>
                </div>
              </div>
            </div>

            <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
              <aside className="sidebar  position-relative1">
                <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} market-sidebar`}>
                  <div className="me-5">
                    <Link className="market-sidebar-link" to='/privacy-policy/'>Privacy Policy</Link>
                    <Link to='/safety-funds/' className="market-sidebar-link  " >Safety of Funds</Link>
                    <Link to='/risk-disclosure/' className="market-sidebar-link " >Risk Disclosure</Link>
                    <Link to='/terms-and-conditions/' className="market-sidebar-link market-sidebar-active-link" >Terms and Condition</Link>
                    <Link to='/information-security/' className="market-sidebar-link " >Information Securtiy</Link>
                    <Link to='/interest-conflict/' className="market-sidebar-link " >Conflict of Interest</Link>
                    <Link to='/complaints-procedure/' className="market-sidebar-link " >Complaint Procedure</Link>
                    <Link to='/margin-calls/' className="market-sidebar-link " >Margin Calls</Link>

                    
                  </div>
                </div>
              </aside>
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