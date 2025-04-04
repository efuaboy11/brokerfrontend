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
export const MarginRequirement = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / About Company  / Trading Conditions / Margin Requirements</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                  <div>
                    <p className="pb-4 site-header font-weight-700">Margin Requirements – What is Margin?</p>
                    <div className="light-text-2">
                      <p className="pb-4">All foreign exchange contracts are traded on margin. This means that traders only have to place a small percentage of the value of the contact traded. The result of this is incredible leverage, providing traders the means to magnify potential trading profits much more than had they been required to invest the total face value of the contract traded.</p>
                      <p className="pb-4">The margin must be provided before any trade is executed. Also, it is prudent to deposit additional funds to cover any margin requirements, should the position not perform as expected.</p>
                      <p className="pb-4">If markets move against the trade, the margin covers the loss until that loss is realized. If markets move in favor of the trade, the margin remains in the account. If markets move against the trade and then return to profitability, the margin is returned.</p>
                      <p className="pb-4">Margin minimizes risk for both the trader and the broker, limiting the broker’s exposure and the amount the trader can lose in any given trade. It is a security buffer to ensure all market participants can honor their trading obligations.</p>
                      
                    </div>
                    <h4 className="py-4">EM Minimum Margin Requirements</h4>
                    <p className="light-text-2 pb-4">Traders must maintain Minimum Margin Requirements at all times. EM offers leverage up to 1:30. This translates to margin requirements of up to 3.33%.</p>
                    <h4 className="pb-4">Margin Calls – Marking to Market</h4>
                    <div className="light-text-2">
                      <p className="pb-4">All Forex trades are “marked to market.” This means that the positions are monitored in real-time to ensure that the margin covers losses, and that profit positions are easily ascertained.</p>
                      <p className="pb-4">Should, at any time, a Trader’s Equity equal or fall below 50% of the Used Margin for a Trader’s Account in total, EM will liquidate any part of or all Open Positions in a Customer’s Account. That is why it’s crucial always to maintain adequate margin cover and avoid receiving margin calls.</p>
                      <p className="pb-4">The closure of positions is performed based on the best effort, with the best execution always a priority. Similarly, EM will attempt to contact the trader with an Equity Notification if their equity, at any time, equals or falls below 100% of the Used Margin.</p>               
                    </div>

                    <h4 className="pb-4">Widened Spreads</h4>
                    <div className="light-text-2">
                      <p className="pb-4">There will be certain occasions when the Bid-Ask spread widens beyond the average market norm. This is usually a result of market illiquidity, such as when the market opens or during rollover at 10:00 PM GMT. For example, the spreads may widen in response to uncertainty regarding market direction or increased market volatility.</p>
                      <p className="pb-4">Trade rollover is typically a peaceful period in the market since the business day in New York has closed, and there are still a few hours before the day begins in Tokyo. Please be aware of these patterns and consider them, particularly regarding your margin and stop-out levels when trading with open orders or placing new trades.</p>
                      <p className="pb-4">This may also occur during news events, and spreads may widen substantially to compensate for the tremendous amount of volatility in the market. The widened spreads may only last a few seconds or as long as a few minutes. EM highly recommends traders use extra caution when trading around news events and always be aware of their account equity, usable margin, and market exposure as widened spreads can adversely affect all positions in an account, including hedged positions.</p>
                      
                    </div>


                    <h4 className="pb-5">Margin Requirement – Example</h4>
                    <div className="light-text-2">
                      <p className="pb-5">Following is an example of a real-life forex margin and margin call.</p>
                      <p className="pb-4">Margin requirement depends on the leverage of the instrument – 1:20 or 1:30; and the USD value of the position. For example, the USD value of a 10,000 EUR/USD (“Mini-Lot” or 0.1 Lots) position bought at the price of 1.1000 will be:</p>
                      <p><span className="font-weight-700 sm-text">1. </span> 10,000 X 1.1000 = 11,000 USD. With a margin requirement of 3.33% (1:30 leverage), it will cost 366 USD to open the position.</p>
                      <p><span className="font-weight-700 sm-text">2. </span> If the EUR strengthens from 1.10 to 1.11 against the USD, the notional profit will be: 10,000 X 1.1100 = 11,100 USD subtract 10,000 X 1.1000 = 11,000 USD, which equals to 100 USD.</p>
                      <p><span className="font-weight-700 sm-text">3. </span> If the EUR weakens from 1.10 to 1.09 against the USD, the notional loss will be: 10,000 X 1.1000 = 11,000 less USD subtract 10,000 X 1.0900 = 10,900 USD, which equals to 100 USD.</p>
                      <p className="pt-3 font-weight-700 pb-4">To keep a losing position open, traders must have sufficient funds in their account to cover the identified market loss.</p>
                      <p>Using the above example with a margin requirement of 5.0% (1:20 leverage), results in a cost of 550 USD to open the position (10,000 X 1.1000 = 11,000 USD X 5% = 550 USD).</p>
                    </div>

                    <div>
                      <table class="margin-requrement-table table-top-border">
                        <tbody>
                            <tr>
                              <td class="text-left">Standard Lot
                                  <br /><span className="font-weight-700">(units 100,000) 1.0 Lot</span>
                              </td>
                              <td class="text-left">Mini Lot
                                  <br /><span className="font-weight-700">(units 10,000) 0.1 Lots</span>
                              </td>
                              <td class="text-left">Micro Lot
                                  <br /><span className="font-weight-700">(units 1,000) 0.01 Lots</span>
                              </td>
                            </tr>
                        </tbody>
                      </table>
                      <p className="sm-text-2">* The above illustrations are mere fictitious examples and are not to be construed in any way to constitute investment advice.</p>
                    
                    </div>

                    <h4 className="pt-5 pb-4">Margin – Disclaimer</h4>
                    <p className="pb-5 light-text-2">Margin requirements may change from time to time. To prevent any confusion, Star Extreme Ltd. will always make it's best to attempt to inform traders about any projected Margin Requirements Changes via email or phone.</p>

                    <h4 className="pb-4">Hedged Margin</h4>
                    <p className="pb-4 light-text-2">“Calculate hedged margin using larger leg” enables the mode of calculating margin using the larger position. For example, if there are two hedging positions of one symbol, but with different volumes – sell 1 Standard Lot EUR/USD at 1.1268 and buy 2 Standard Lots EUR/USD at 1.1260. The total margin will be equal to the larger position (2 Standard Lots EURUSD at 1.1260).</p>
                    <p className="pb-4 light-text-2">For example, 1:30 leverage. <br /> 2 Standard Lots x 1.1260 / 30 = €7,506.7 <br /> Should your account be designated in USD or GBP, the Base <br /> Currency Margin, in this case, €7,506.7, requires a currency conversion from EUR to GBP or USD.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
              <aside className="sidebar  position-relative1">
                <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} market-sidebar`}>
                  <div className="me-5">
                    <Link className="market-sidebar-link" to='/order-execution/'>Order Execution</Link>
                    <Link to='/margin-requirement/' className="market-sidebar-link market-sidebar-active-link" >Margin Requirements</Link>
                    
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