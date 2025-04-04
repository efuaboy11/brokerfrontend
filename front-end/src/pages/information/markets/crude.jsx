import { useContext, useEffect, useState } from "react"
import '../../../css/informationCss/market.css'
import { Navbar } from "../../../component/navbar"
import AuthContext from "../../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import AllDataContext from "../../../context/Alldata"
import { Footer } from "../../../component/footer"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import crude from '../../../img/crude.jpg'
import crude2 from '../../../img/crude2.jpg'
import crude3 from '../../../img/crude3.jpg'
export const CrudeOil = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / Markets / Crude Oil</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                  <p className="site-header font-weight-700">Crude Oil</p>
                  <p className="light-text-2 py-4">Crude oil has long been regarded as one of the most valuable commodities in the world, serving as the backbone of industrial development, transportation, and energy production. As a key driver of global economic activity, investing in crude oil presents a unique opportunity for traders, investors, and institutions looking to capitalize on market fluctuations, geopolitical events, and supply-demand dynamics. Crude oil investment can take various forms, including futures contracts, exchange-traded funds (ETFs), stocks of oil companies, and direct commodity trading, each offering different levels of exposure and risk. </p>
                  <div className="py-4">
                    <img width='100%' src={crude} alt="" />
                  </div>
                  <p className="light-text-2 py-3">Due to its high liquidity and volatility, crude oil trading is a preferred choice for investors seeking both short-term gains and long-term wealth accumulation. Prices of crude oil are influenced by multiple factors such as OPEC production quotas, geopolitical tensions in oil-rich regions, technological advancements in energy production, and macroeconomic trends affecting global demand. Additionally, the rise of alternative energy sources and climate policies continue to shape the long-term outlook of the oil market, making it crucial for investors to stay informed about industry developments.</p>
                  <div className="py-4">
                    <img width='100%' src={crude2} alt="" />
                  </div>
                  <p className="light-text-2 py-3">With crude oil being traded on major commodity exchanges like the New York Mercantile Exchange (NYMEX) and Intercontinental Exchange (ICE), investors have access to a wide range of trading instruments and hedging strategies to manage risk effectively. One of the key benefits of investing in crude oil is its ability to act as a hedge against inflation, as rising energy costs often correlate with broader economic price increases. Moreover, crude oil investments can provide significant portfolio diversification, reducing exposure to traditional stock and bond markets. However, it is essential for investors to understand the risks associated with crude oil trading, including price volatility, regulatory changes, and potential supply disruptions caused by natural disasters or political instability.Utilizing fundamental and technical analysis, as well as staying updated with market reports and economic indicators, can enhance decision-making and improve investment outcomes. </p>
                  <div className="py-4">
                    <img width='100%' src={crude3} alt="" />
                  </div>
                  <p className="light-text-2 py-3">At AmanilightEquity, we provide traders with the necessary tools, insights, and secure platforms to participate in the crude oil market efficiently. Our cutting-edge trading technology, expert market analysis, and competitive trading conditions empower investors to navigate the complexities of the crude oil sector with confidence. Whether you are a seasoned investor or a newcomer to the commodities market, crude oil investment offers exciting prospects for financial growth and strategic portfolio expansion. With the right knowledge, risk management approach, and access to a reliable trading platform like AmanilightEquity, investors can unlock the full potential of crude oil trading and take advantage of the numerous opportunities available in this dynamic global market. </p>
                  <div className="pt-4">
                    <Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn text-center width-100 ">Invest in Crude</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
              <aside className="sidebar  position-relative1">
                <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} market-sidebar`}>
                  <div className="me-5">
                    <Link className="market-sidebar-link" to='/bitcoin/'>Bitcoin</Link>
                    <Link to='/crude-oil/' className="market-sidebar-link market-sidebar-active-link" >Crude Oil</Link>
                    <Link to='/stock-indices/' className="market-sidebar-link">Stock Indices</Link>
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