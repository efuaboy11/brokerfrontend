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
export const StockIndicies = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / Markets / Stock Indicies</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                  <p className="site-header font-weight-700">A New Way to Trade US and Global Stock Indices</p>
                  <p className="light-text-2 py-4">Stock indices represent the performance of major financial markets worldwide, making them a popular choice for traders looking to diversify their portfolios and capitalize on market trends. At AmanilightEquity, we provide an innovative and seamless way to trade leading US and global indices, including the S&P 500, NASDAQ, Dow Jones, FTSE 100, DAX 40, and more. Our cutting-edge trading platform offers real-time market data, competitive spreads, and advanced analytical tools to help traders make informed decisions with confidence. Whether you’re an experienced investor or new to index trading, our platform allows you to speculate on market movements without the need to buy individual stocks, making it a cost-effective and efficient approach to trading. With leverage options, risk management tools, and expert market insights, AmanilightEquity ensures a smooth trading experience tailored to both short-term and long-term investment strategies. Trade stock indices with us and take advantage of a new, smarter way to access global financial markets with security, transparency, and top-tier execution.</p>
                  <div className="py-4">
                    <img width='100%' src={indexes} alt="" />
                  </div>
                  <div className="pt-4">
                    <Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn text-center width-100 ">Trade Stock Indicies</Link>
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
                    <Link to='/stock-indices/' className="market-sidebar-link market-sidebar-active-link">Stock Indices</Link>
                    <Link to='/commodities/' className="market-sidebar-link">Commodities</Link>
                    <Link to='/marijuana/' className="market-sidebar-link">Marijuana</Link>
                    
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