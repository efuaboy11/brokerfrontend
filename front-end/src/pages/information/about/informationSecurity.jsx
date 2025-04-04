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
export const InformationSecurity = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / About Company  / Transparency / Information Security</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                  <div>
                    <p className="pb-4 site-header font-weight-700">Information Security</p>
                    <p className="font-weight-700 pb-3 sm-text">The Importance of Information Security</p>
										<p className="light-text-2 pb-5">Data security is of fundamental significance to AmaniLightEquity. AmaniLightEquity deals with the security of its customers' information by guaranteeing there is no loss of Confidentiality (unapproved exposure), Integrity (unapproved changes and alteration) and Availability (assurance from conscious or coincidental misfortune, obliteration or intrusion of administrations) of any data having a place with the customer stored on our servers. As a state of its permitting commitments as a directed agent, NSbroker must guarantee that it is agreeable with guidelines and enactment relating to adherence to data security best practices.</p>
                    <p className="font-weight-700 pb-3 sm-text">How Does AmaniLightEquity Protect Customer Data?</p>
										<p className="light-text-2 pb-5">Data Security arrangements are defined dependent on industry security best practices, for example, ISO 27001 and actualized by the board. Best benchmarks manage the controls which are received by AmaniLightEquity workers and partners and control shield customers’ information from dangers and vulnerabilities.</p>

                  </div>
                </div>
              </div>
            </div>

            <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
              <aside className="sidebar  position-relative1">
                <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} market-sidebar`}>
                  <div className="me-5">
                    <Link className="market-sidebar-link" to='/privacy-policy/'>Privacy Policy</Link>
                    <Link to='/safety-funds/' className="market-sidebar-link " >Safety of Funds</Link>
                    <Link to='/risk-disclosure/' className="market-sidebar-link " >Risk Disclosure</Link>
                    <Link to='/terms-and-conditions/' className="market-sidebar-link " >Terms and Condition</Link>
                    <Link to='/information-security/' className="market-sidebar-link market-sidebar-active-link" >Information Securtiy</Link>
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