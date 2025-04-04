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
export const CompliantProcedure = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / About Company  / Transparency /  Complaints Procedure</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                  <div>
                    <p className="pb-3 lg-text font-weight-700">Complaints Procedures</p>
                    <h4 className="pb-3">HOW AMANILIGHTEQUITY HANDLES COMPLAINTS</h4>
										<p className="light-text-2 pb-4">At AmaniLightEquity. we are focused on giving customers the most astounding standard of administration. On the off chance that a customer is disappointed with the services to provide, AmaniLightEquity will do all that we can to accomplish neighborly goals to the circumstance. However, if this is absurd, AmaniLightEquity has a committed Consumer Complaints Manager whose essential obligation is to manage objections from retail customers emerging from exchanges including people directed by the US Financial Services Authority (UFSA). AmaniLightEquity's Consumer Complaints Manager deals protests decently, reliably and in a timely manner.</p>
                    <p className="font-weight-700 pb-3 sm-text">WHEN WE RECEIVE YOUR COMPLAINT</p>
										<p className="light-text-2 pb-5">An endless supply of a customer complaint, AmaniLightEquity will instantly keep in touch with the customer or their delegate to tell them the grievance has been gotten. AmaniLightEquity will likewise disclose how it plans to manage it. If a complaint was made to AmaniLightEquity by telephone, this letter explains our comprehension of the customer's worries, allowing them the chance to correct any misconceptions that AmaniLightEquity may have.</p>
                    <p className="font-weight-700 pb-3 sm-text">RESOLVING YOUR COMPLAINT</p>
										<p className="light-text-2 pb-5">AmaniLightEquity will evaluate customer complaints and if additional data is required will write to or telephone the customer to clarify what is required. It is basic that customers comprehend that all complaints are considered unbiasedly and on their individual after sufficient dialog with the customers and all gatherings concerned. Once AmaniLightEquity has finished a careful examination, a letter will be sent to the customer instructing them concerning the discoveries. The reaction will cover the result of the examination together with AmaniLightEquity's evaluation of the issues brought up in the objection, and, where applicable, subtleties of any change that offered by AmaniLightEquity.</p>
                    <p className="font-weight-700 pb-3 sm-text">IF THERE IS A DELAY IN RESOLVING YOUR COMPLAINT</p>
										<p className="light-text-2 pb-3">AmaniLightEquity's regulator, the US Financial Services Authority (UFSA), expects AmaniLightEquity to determine most objections inside a reasonable time. AmaniLightEquity is focused on accomplishing this and to determine all complaints in an as opportune way as could be expected under the circumstances. On the off chance that AmaniLightEquity does not have all the data required to determine the issue and needs to gather extra data, or if there is a deferral for some other reason, AmaniLightEquity will keep in touch with the customer with a notice. If the objection takes longer than two months to determine, AmaniLightEquity will keep in touch with the customer around then to clarify why. AmaniLightEquity's Complaints Manager will not research objections where over a year have gone since the customer ended up mindful of the conditions offering cause to the protest or if over a half year have gone since the customer was told recorded as a hard copy that their complaint was not maintained.</p>
                    <p className="ligh-text-2">In the case of customer is not satisfied with any administration given by AmaniLightEquity, kindly do not dither to get in touch with us.</p>
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
                    <Link to='/interest-conflict/' className="market-sidebar-link " >Conflict of Interest</Link>
                    <Link to='/complaints-procedure/' className="market-sidebar-link market-sidebar-active-link" >Complaint Procedure</Link>
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