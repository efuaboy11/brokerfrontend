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
export const MarginCalls = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / About Company  / Transparency / Margin Calls</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                  <div>
                    <p className="pb-4 site-header font-weight-700">AmaniLightEquity Margin Requirements</p>
										<p className="light-text-2 pb-3">In a poll that was conducted, when traders were asked what do they think would help them improve their trading or increase their profits? The vast majority of people actually mentioned increased margins. Trading forex or CFDs on a margin actually enables traders to increase the size of their trading position. Margin allows traders to open positions that are leveraged, meaning it gives them more exposure to the financial markets with less capital. Now, although trading on margin can be extremely beneficial, it also has its downside as you will find out. Not only does it have the potential to substantially increase profits 10 fold, and sometimes even 100 fold, it also has the potential to take capital away from you as these are based on the full value of the trade, not just the amount required to open it.</p>
										<p className="light-text-2 pb-3">There are a lot of trading platforms and brokers out there like AmaniLightEquity that give traders the ability to alter and change the margin requirements to create a more suitable trading experience. Having a good understanding of margin works is a very important part of trading, because when you’re starting out in the leveraged foreign exchange market, it’s crucial to know that trading on margin can result in large profits, but also larger losses. So although AmaniLightEquity gives traders the chance to increase margins, you need to consider the risk involved if the trade doesn’t go your way.</p>
										<p className="light-text-2 pb-3">To understand margin a bit more, let us look at how margin is calculated using the calculation below:</p>
										<p className="light-text-2 pb-3">Margin = (equity/used margin) x 100</p>
                    <p className="font-weight-700 light-text-2 pb-3">To understand margin even more lets include an example:</p>
										<p className="light-text-2 pb-3">Let’s say that a trader deposits $10,000 in a trading account on the AmaniLightEquity trading platform, and opens two forex trades. The broker, which in this case is AmaniLightEquity requires a margin of $2,500 to keep both of those positions open, so the used margin is $2,500. In the scenario outlined above, the margin is calculated as follows ($10,000/$2,500) x 100 = 400%. So, the higher the margin, the more cash is readily available to use for additional trades in the future. However, when the margin level reaches 100% that means all available margin is currently being used which will result in no further trades.</p>
                    <p className="light-text-2 pb-3">We recommend that traders remain active on the platform when you have any open positions, to make sure you don’t miss the margin call alerts. Furthermore, there are certain procedures that can be put in place to alert traders who aren’t able to be at their trading desk all the time. Traders will also be notified when their margin level reaches 50% which gives the platform enough time to find the best opportunities to liquidate positions at the best closing prices.</p>
                    <p className="light-text-2 pb-3">This is done without the consent of the client, since the contract is approaching the threshold of violation of the rules of trade. So when the margin level is reached, the platform will begin to look for the best prices in order to close any positions. Traders are entirely held responsible for any stop losses that they have whilst they have any open positions and are not liable by AmaniLightEquity.</p>
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
                    <Link to='/complaints-procedure/' className="market-sidebar-link " >Complaint Procedure</Link>
                    <Link to='/margin-calls/' className="market-sidebar-link market-sidebar-active-link" >Margin Calls</Link>

                    
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