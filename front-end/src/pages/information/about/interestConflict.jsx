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
export const InterestConflict = () =>{
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
                    <p className="pb-4 site-header font-weight-700">Conflict of interest</p>
                    <p className="font-weight-700 pb-3">Conflicts of Interests</p>
										<p className="light-text-2 pb-4">The AmaniLightEquity site is possessed by AmaniLightEquity. ("the Company") a venture firm controlled by the US Financial Services Authority with permit number 019/192. The Company is required, according to the European Union's Markets in Financial Instruments Directive (MiFID) and as per the Investment Services Act 2004 (Chapter 370 of the Laws of US), to give data on the Company's arrangement in regards to irreconcilable circumstances and its way with dealing with any irreconcilable circumstances genuinely: both between AmaniLightEquity, our executives, representatives and our customers, and between your interests and those of different customers.</p>
                    <p className="font-weight-700 pb-3 sm-text">DEFINITION OF CONFLICT OF INTEREST</p>
										<p className="light-text-2 pb-5">The Company characterizes an irreconcilable situation as any circumstance where either the Company or an individual is in a situation to abuse an expert or authority limit somehow or another for either corporate or individual advantage.</p>
                    <p className="font-weight-700 pb-3 sm-text">CONFLICT OF INTEREST MEASURES</p>
										<p className="light-text-2 pb-5">Broad measures have been embraced by the Company to Prevent, Control and Manage the trading of data between applicable people occupied with exercises that may include a Risk of Conflict of Interest</p>
                    <p className="font-weight-700 pb-3 sm-text">DISCLOSURE OF CONFLICT OF INTEREST</p>
										<p className="light-text-2 pb-5">At the point when the measures taken by the Company to oversee irreconcilable situations are not sufficient to ensure, with reasonable certainty, that the danger of harm to customer's advantage will be kept, the Company will reveal the Conflicts of Interest to the customer so as to keep a Risk of Damage to Client's Interest. Preceding completing an exchange or giving speculation or subordinate support of a customer, the Company must unveil any Actual or Potential Conflict of Interest. The revelation will be in sufficient time, in a sturdy style.</p>
                    <p className="font-weight-700 pb-3 sm-text">RECORD KEEPING</p>
										<p className="light-text-2 pb-5">For record staying with purposes, the Company keeps up a precise log which will be refreshed regularly of a wide range of ventures and auxiliary administrations or speculation exercises did by the Company or for its benefit; in which an irreconcilable circumstance involving a material danger of harm to the interests of at least one customers has arisen.</p>
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
                    <Link to='/information-security/' className="market-sidebar-link" >Information Securtiy</Link>
                    <Link to='/interest-conflict/' className="market-sidebar-link market-sidebar-active-link" >Conflict of Interest</Link>
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