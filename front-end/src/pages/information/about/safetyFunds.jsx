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
export const SafetyFunds = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / About Company / Transparency / Safety of Funds</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                  <div>
                    <p className="site-header font-weight-700">Safety of Funds</p>
                    
                    <div>
                      <h4 className="pt-4 pb-3">Safety of Funds</h4>
                      <div className="light-text-2">
                        <p className="pb-3">As a directed merchant, it is of central significance to AmaniLightEquity that customers' cash is secured properly. Guidelines forced upon AmaniLightEquity. guarantee that AmaniLightEquity is dependably in consistency with guidelines so customers can trade with certainty safe in the information that their assets remain their funds consistently.</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="pt-5 pb-3">Regulated by MFSA</h4>
                      <div className="light-text-2">
                        <p className="pb-3">AmaniLightEquity. is controlled by the MFSA, a standout amongst the most regarded administrative bodies built up inside the steadiest economies in Europe. As a directed broker, AmaniLightEquity. is authorized to work a Forex Brokerage. To keep up its permit, AmaniLightEquity. is liable to stringent controls and trial of monetary and accounting transparency.</p>
                      </div>
                    </div>


                    <div>
                      <h4 className="pt-5 pb-3">Segregation of Client Funds</h4>
                      <p className="pb-3 light-text-2">All customer funds saved with AmaniLightEquity. are 100% isolated from the organization's funds, and, as required by MFSA, are saved into independent bank balances. This isolation of funds guarantees customers deposits cannot be utilized for any reason other than customer account trading. Our universal auditor, PwC (Price Waterhouse Coopers) is there to autonomously confirm that AmaniLightEquity's business tasks meet and surpass the highest industry norms.</p>
                    </div>

                    <div>
                      <h4 className="pb-3 pt-5">Partnership with Investment Grade Banks</h4>
                      <p className="pb-3 light-text-2">AmaniLightEquity. accomplices with Tier 1 venture evaluation European and universal banks that appreciate probably the most astounding appraisals by Moody's, Fitch and S&P. AmaniLightEquity. has joined forces with Barclays, CitiFX Pro, UBS and Deutsche Bank empowering AmaniLightEquity to use stable banking facilities with limited exposure to credit hazard and guarantee our customers approach profound liquidity when they trade.</p>

                      <h4 className="pb-3 pt-5">Negative Balance Protection</h4>
                      <p className="light-text-2">A vital piece of our exclusive innovation is centered around hazard management for our customers. At AmaniLightEquity. we've created both the systems and techniques to robotize observing of each transaction and risk-management procedure. This is done so as to ensure that customer account balance dependably stay in credit, while open positions are shielded from misfortunes past the original investment.</p>
                    </div>
                    <p className="pt-4 font-weight-700 light-text-2 italic-text">Utilization of logos of any financial regulator or expert does not connote endorsement or endorsement by such authority of the items or services offered by AmaniLightEquity.</p>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
              <aside className="sidebar  position-relative1">
                <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} market-sidebar`}>
                  <div className="me-5">
                    <Link className="market-sidebar-link" to='/privacy-policy/'>Privacy Policy</Link>
                    <Link to='/safety-funds/' className="market-sidebar-link  market-sidebar-active-link" >Safety of Funds</Link>
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