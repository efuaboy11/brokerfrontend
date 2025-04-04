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
export const PrivacyPolicy = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / About Company  / Transparency / Privacy Policy</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                  <div>
                    <p className="pb-4 site-header font-weight-700">Privacy Policy</p>
                    <div className="light-text-2">
                      <p className="pb-3">AmaniLightEquity. provides this Privacy Policy to inform users of our policies and procedures regarding the collection, use and disclosure of personally identifiable information received from users of this website, located at www.nsbroker.com (“Site”). This Privacy Policy may be updated from time to time for any reason; each version will apply to information collected while it was in place. We will notify you of any material changes to our Privacy Policy by posting the new Privacy Policy on our Site. You are advised to consult this Privacy Policy regularly for any changes.</p>
                      <p>By providing us with such information, you are giving us your consent to collect, use and store the information in the manner explained hereto.</p>
                    </div>
                    
                    <div>
                      <h4 className="pt-5 pb-3">Collected Data</h4>
                      <div className="light-text-2">
                        <p className="pb-3">Personally Identifiable Information: When browsing the non-password protected portions of AmaniLightEquity Site, it is done so anonymously; no personally identifiable information is collected. When signing up to become a registered user of AmaniLightEquity, it is requested that an email address, username and a password to access our Site is provided. The law requires clients to provide trading information (e.g., how long they have been trading, preferred trading style, etc.) and a profile description. Once a client registers with AmaniLightEquity and signs in to the Site, they are no longer anonymous to AmaniLightEquity.</p>
                        <p className="pb-3">As a registered user, the law requires clients to provide AmaniLightEquity. with the necessary credentials to access their brokerage account (i.e. user ID, password, and information necessary to access their account). AmaniLightEquity will never access your accounts for any purpose other than to retrieve client trading data and provide the services they have requested. Clients can de-activate their account for any reason at any time and AmaniLightEquity will delete all of your personally identifiable information from its servers. AmaniLightEquity will not keep a copy of personally identifiable information for any purposes upon account deactivation except as may be required by law or to otherwise protect legal rights.</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="pt-5 pb-3">Data Security</h4>
                      <div className="light-text-2">
                        <p className="pb-3">When visiting the Site, AmaniLightEquity may collect information through “cookies” or other similar Web tools to enhance the user experience. Cookies are small strings of text that are sent by our Site to your browser on your computer’s hard drive. Cookies enable AmaniLightEquity to recognize Site visitors when they return to the Site, to maintain Web sessions while browsing throughout the Site, as well as help AmaniLightEquity provide a better, more personalized experience. AmaniLightEquity’s cookies are not tied to personally identifiable information. Most Web browsers automatically accept cookies, but it is possible to change browser setup so that it does not accept cookies. However, rejecting cookies may prevent visitors taking advantage of certain portions of our Site.</p>
                        <p className="pb-3">When browsing AmaniLightEquity’s Site, AmaniLightEquity. automatically receives and records information on its server logs from the visitor’s browser including your IP address, AmaniLightEquity cookie information and the pages requested. AmaniLightEquity uses this information to improve the functionality and usability of its services. AmaniLightEquity’s log files are not tied to personally identifiable information.</p>
                        <p className="pb-3">AmaniLightEquity uses secure server software (SSL) and firewalls to protect all information from unauthorized access, disclosure, alteration, or destruction.</p>
                      </div>
                    </div>


                    <div>
                      <h4 className="pt-5 pb-3">How AmaniLightEquity Uses Collected Data</h4>
                      <div className="light-text-2">
                        <p className="pb-3"><span className="font-weight-700">Customer Service:</span> Based upon the personal identifiable information provided during the registration process, AmaniLightEquity sends a welcome email to verify the account. AmaniLightEquity will also communicate with registered users in response to their inquiries so as to provide the services requested and manage the account.</p>
                        <p className="pb-3"><span className="font-weight-700">Brokerage Information:</span> Registered users of the Site may provide AmaniLightEquity with the credentials to access their brokerage account to retrieve their trading data. This information is only used to obtain trading history for the account and this information and is not accessible anywhere on the Site.</p>
                        <p className="pb-3"><span className="font-weight-700">Information Sharing and Disclosure:</span>AmaniLightEquity Does Not Reveal Any Personally Identifiable Information. AmaniLightEquity will not publish any personal identifiable information (e.g. name, email address or contact information) on the Site for others to view without the registered user’s express permission, unless the user themselves chooses to post it on the Site.</p>
                        <p className="pb-3 font-weight-700">AmaniLightEquity:</p>
                        <div>
                          <div className="pb-3">
                            <div className="d-flex  py-2">
                              <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                              <p className="ps-3">Does not rent or share any personally identifiable information;</p>
                            </div>

                            <div className="d-flex  py-2">
                              <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                              <p className="ps-3">Does not rent or share any personally identifiable information with third parties that are not our agents or service providers;</p>
                            </div>

                            <div className="d-flex  py-2">
                              <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                              <p className="ps-3">May provide user information if legally required;</p>
                            </div>

                            <div className="d-flex  py-2">
                              <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                              <p className="ps-3">May be required to provide user information under the following circumstances: in response to subpoenas, court orders, or legal process or to establish or exercise our legal rights or defend against actual or threatened legal claims. In addition, when AmaniLightEquitybelieves it is necessary to share information in order to investigate, prevent or take action regarding illegal activities or activities which it believes give rise to legal liability to AmaniLightEquity its members or third parties, suspected fraud, situations involving potential threats to the physical safety of any person, violations of AmaniLightEquitys Terms of Use, or as otherwise required by law.</p>
                            </div>


                            
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="pb-3">Persons Under the Age of 18</h4>
                      <p className="pb-5 light-text-2">In compliance with most national legal AmaniLightEquity, we do not permit persons under age of 18 years to become users, and we will not collect information from persons under the age of 18. By using our Site, you represent that you are over the age of 18.</p>

                      <h4 className="pb-3">Final Statement</h4>
                      <p className="light-text-2">If you have any questions or comments about this Privacy Policy or our use of your personally identifiable information, please contact us.</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
              <aside className="sidebar  position-relative1">
                <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} market-sidebar`}>
                  <div className="me-5">
                    <Link className="market-sidebar-link market-sidebar-active-link" to='/privacy-policy/'>Privacy Policy</Link>
                    <Link to='/safety-funds/' className="market-sidebar-link " >Safety of Funds</Link>
                    <Link to='/risk-disclosure/' className="market-sidebar-link " >Risk Disclosure</Link>
                    <Link to='/terms-and-conditions/' className="market-sidebar-link " >Terms and Condition</Link>
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