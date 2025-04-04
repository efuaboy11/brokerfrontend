import { useContext, useEffect, useState } from "react"
import '../../../css/informationCss/market.css'
import { Navbar } from "../../../component/navbar"
import AuthContext from "../../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import AllDataContext from "../../../context/Alldata"
import { Footer } from "../../../component/footer"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import marijuana from '../../../img/marijuana.jpg'
export const Marijuana = () =>{
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

      if (footerTop <= sidebarHeight + 450) {
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / Markets / Marijuana</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                  <p className="site-header font-weight-700">As States Legalize Marijuana, Investors See an Opportunity</p>
                  <p className="light-text-2 py-4">Marijuana s the world's most commonly cultivated, trafficked, and used illicit drug, and as the push for legalization at home and abroad grows, marijuana is garnering significant attention from investors, manufacturers, and researchers. Despite the plant being illegal under federal law as a Schedule I drug, the U.S. legal marijuana industry was estimated at $10.4 billion in 2018 with 250,000 jobs devoted to the handling of plants, according to New Frontier Data. A total of 33 states have legalized marijuana for medical use, 10 of which allow adults to legally use the drug for recreational use. And that number may continue to rise, as more people are accepting the idea of legalizing marijuana across the United States. This article looks at some of the uses of marijuana as well as the overall market for the drug.</p>
                  <div className="py-4">
                    <img width='100%' src={marijuana} alt="" />
                  </div>

                  <div className="row py-4">
                    <div className="col-6">
                      <div>
                        <p className="font-weight-700">$8k to $500k</p>
                        <p className="py-3">Minimum Investment</p>
                        <p className="font-weight-700">60 sec — 5 min</p>
                        <p className="py-3">Expiration Time</p>
                      </div>
                    </div>


                    <div className="col-6">
                      <div>
                        <p className="font-weight-700">700%</p>
                        <p className="py-3">Return Over</p>
                        <p className="font-weight-700"> Trade Marijuana</p>
                        <p className="py-3">Marijuana Time</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn text-center width-100 ">Invest in Marijuana</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
              <aside className="sidebar  position-relative1">
                <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} market-sidebar`}>
                  <div className="me-5">
                    <Link className="market-sidebar-link" to='/bitcoin/'>Bitcoin</Link>
                    <Link to='/crude-oil/' className="market-sidebar-link " >Crude Oil</Link>
                    <Link to='/stock-indices/' className="market-sidebar-link">Stock Indices</Link>
                    <Link to='//commodities/' className="market-sidebar-link">Commodities</Link>
                    <Link to='/marijuana/' className="market-sidebar-link  market-sidebar-active-link">Marijuana</Link>
                    
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