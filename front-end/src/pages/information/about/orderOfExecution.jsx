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
export const OrderOfExecution = () =>{
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

      if (footerTop <= sidebarHeight + 300) {
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / About Company  / Trading Conditions / Order of Execution</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                  <div>
                    <p className="pb-4 site-header font-weight-700">Execution of orders</p>
                    <div className="light-text-2">
                      <p className="pb-3">AmaniLightEquity endeavors to give merchants quick execution of requests with costs that are not in a general sense, not quite the same as those expressed. Execution of requests is completed in two different ways:</p>
                       <p><span className="font-weight-700 sm-text">1. </span> Promptly – the exchange opens right when the financial specialist has formalized his application.</p>
                       <p><span className="font-weight-700 sm-text">2. </span> When the right conditions arrive – the investor indicates the conditions (for instance, achieving a cost of a specific dimension) at the beginning of which execution happens.</p>
                       <p className="pt-3 pb-4">Clients can oversee orders, indicating every one of their parameters, and making changes to them during the time spent work.</p>
                       <p>It will be ideal if you note that the request execution costs might be somewhat not the same as those expressed. This is because of the unpredictability and liquidity of the market. We endeavor to guarantee the best execution of the exchange, picking the best cost available on the market!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
              <aside className="sidebar  position-relative1">
                <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} market-sidebar`}>
                  <div className="me-5">
                    <Link className="market-sidebar-link market-sidebar-active-link" to='/order-execution/'>Order Execution</Link>
                    <Link to='/margin-requirement/' className="market-sidebar-link " >Margin Requirements</Link>
                    
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