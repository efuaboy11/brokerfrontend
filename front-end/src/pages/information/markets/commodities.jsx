import { useContext, useEffect, useState } from "react"
import '../../../css/informationCss/market.css'
import { Navbar } from "../../../component/navbar"
import AuthContext from "../../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import AllDataContext from "../../../context/Alldata"
import { Footer } from "../../../component/footer"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import gold from '../../../img/gold.jpg'
import commodities1 from '../../../img/commodities1.jpg'
import commodities2 from '../../../img/commodities2.jpg'
export const Commodities = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / Markets / Commodities</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                  <p className="site-header font-weight-700">
                  Trade the Basic Commodities of Life: Unlocking Opportunities in Essential Markets</p>
                  <p className="light-text-2 py-4">Commodities are the foundation of global trade, representing essential goods that power economies, sustain industries, and fulfill everyday human needs. From energy resources like crude oil and natural gas to agricultural staples such as wheat, corn, and coffee, commodities play a vital role in economic development, making them a lucrative and strategic investment opportunity. At AmanilightEquity, we provide traders with access to a broad range of basic commodities, enabling them to capitalize on price fluctuations, supply and demand imbalances, and macroeconomic trends. Commodity trading offers a unique advantage over traditional stock and bond markets, as these essential assets tend to maintain their value over time, serving as an effective hedge against inflation and economic uncertainty. With global factors such as weather patterns, geopolitical events, and technological advancements constantly impacting commodity prices, traders have numerous opportunities to engage in both short-term speculation and long-term investment strategies.</p>
                  <div className="py-4">
                    <img width='100%' src={gold} alt="" />
                  </div>
                  <p className="light-text-2 py-3">Energy commodities, including crude oil, natural gas, and gasoline, are among the most actively traded assets due to their critical role in powering industries, transportation, and homes. Oil prices, for instance, are influenced by production policies of major suppliers like OPEC, geopolitical tensions in key producing regions, and fluctuations in global demand. Trading these energy commodities allows investors to benefit from market movements while diversifying their portfolios beyond traditional asset classes. Meanwhile, agricultural commodities such as wheat, corn, soybeans, and coffee are essential to global food supply chains, and their prices are heavily impacted by factors such as climate conditions, farming yields, government policies, and consumer demand. Traders who understand these market dynamics can take advantage of seasonal trends and disruptions in supply to generate substantial returns.</p>
                  <div className="py-4">
                    <img width='100%' src={commodities2} alt="" />
                  </div>
                  <p className="light-text-2 py-3">Precious metals, including gold, silver, and platinum, are another key category of commodities that serve as safe-haven assets during economic instability. Gold, in particular, has long been used as a store of value and a hedge against currency devaluation, making it a preferred choice for investors seeking long-term security. Industrial metals like copper, aluminum, and nickel also play a crucial role in construction, manufacturing, and technological innovation, providing additional opportunities for those looking to trade assets tied to industrial growth and infrastructure development.</p>
                  <div className="py-4">
                    <img width='100%' src={commodities1} alt="" />
                  </div>
                  <p className="light-text-2 py-3">At AmanilightEquity, our state-of-the-art trading platform ensures seamless access to global commodity markets with real-time data, competitive spreads, and advanced risk management tools. We offer flexible investment options, allowing traders to buy and sell commodities through futures</p>
                  <div className="pt-4">
                    <Link to={`${isDashboardActive ? dashLink : '/register'}`} className="site-btn text-center width-100 ">Invest in Commodities</Link>
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
                    <Link to='/commodities/' className="market-sidebar-link market-sidebar-active-link">Commodities</Link>
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