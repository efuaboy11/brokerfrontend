import { useContext, useEffect, useState } from "react"
import '../../../css/informationCss/market.css'
import { Navbar } from "../../../component/navbar"
import AuthContext from "../../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import AllDataContext from "../../../context/Alldata"
import { Footer } from "../../../component/footer"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import btc from '../../../img/bitcoin-img.jpg'
export const Bitcoin = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / Markets / Bitcoin</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div>
                <p className="site-header font-weight-700">Bitcoin Spreads: A Better Way</p>
                <p className="light-text-2 py-4">Our Bitcoin Spreads let you trade the price of Bitcoin (based on the trusted TeraBit IndexSM) without having to own bitcoins. There's no need for wallets or conversion, since the contracts are settled in US dollars. Best of all, it's as easy to trade price drops as it is to trade rallies. Short-selling Bitcoin is as easy as buying when you use Bitcoin Spreads. As the price of Bitcoin varies up and down, the spread's value moves as well, but with limits. Above the ceiling or below the floor, the value of the spread stops moving and remains at its upper or lower limit (depending on whether you are a buyer or seller). In this way, your risk-reward remains within a defined range. One limit is your profit target. The other is your guaranteed protection against unlimited losses.</p>
                <div className="py-4 row">
                  <div className="col-md-10">
                    <img width='100%' src={btc} alt="" />
                  </div>
                </div>
                <p className="site-header font-weight-700">Bitcoin opportunity without the hassle</p>
                <p className="light-text-2 py-3">Since its "hacker" beginnings, Bitcoin and cryptocurrency have gone mainstream and soared in value. More traders than ever want to add cryptocurrencies to their portfolios. However, the volatility makes the Bitcoin market good for short-term trades, not just "buy and hold." Our Bitcoin Spreads allow you to take short-term positions on the price of Bitcoin, with risk-reward protections built in. Selling is as easy as buying, meaning you have profit opportunities no matter which direction the Bitcoin market is trending. Trade the price of Bitcoin without buying and selling the bitcoins themselves. No "mining," no risk exposure outside your comfort level—you can just trade with all the benefits of our platform: limited risk, transparent price, and CFTC regulation.</p>
                <div className="pt-4">
                  <Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn text-center width-100 ">Trade Bitcoin</Link>
                </div>
              </div>
            </div>

            <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
              <aside className="sidebar  position-relative1">
                <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} market-sidebar`}>
                  <div className="me-5">
                    <Link to='/bitcoin/' className="market-sidebar-link market-sidebar-active-link">Bitcoin</Link>
                    <Link to='/crude-oil/' className="market-sidebar-link">Crude Oil</Link>
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