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
export const Risk = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / About Company  / Transparency / Risk Disclosure</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                  <div>
                    <p className="site-header font-weight-700">Risk Disclosure</p>
                    
                    <div>
                      <h4 className="pt-4 pb-4">RISK DISCLOSURE STATEMENT</h4>
                      <div className="light-text-2">
                        <p className="pb-3 font-weight-700">For Transactions in Foreign Exchange and Derivatives (Including Contracts for Differences)</p>
                        <p>In light of AmaniLightEquity (hereinafter alluded to as "EM", "we" or "us") consenting to go into over-the-counter ("OTC") contracts for differences ("CFD's") and spot foreign exchange contracts ("Spot FX Contracts") with the undersigned (hereinafter alluded to as the "Client", "you", or "your"), Customer recognizes, comprehends and concurs that:</p>
                      </div>
                    </div>

                    <div>
                      <div className="py-4 light-text-2">
                        <div className="d-flex  py-2">
                          <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3">
                            <p className="pb-3">AmaniLightEquity, a Private Limited Liability Company Registered as per the Laws of US and having its enrolled office at 168, St. Christopher Street, Valletta VLT 1467, US, EU, bearing Corporate Registration Number C/56519, is authorized by the US Financial Services Authority ("UFSA") as a Category 3 Investment Services Provider May be/56519.</p>
                            <p className="pb-3">This statement, which comprises an expansion to the Retail Client Agreement and the General Terms and Conditions, cannot and does not reveal or clarify the majority of the dangers and other huge perspectives engaged with exchanging outside trade and subsidiaries. Participating in these kinds of exchanges can convey a high hazard to your capital, possibly bringing about the all-out loss of such capital. Should you require an increasingly exhaustive comprehension of the dangers included, if you don't mind contact EM for additional data.</p>
                          
                          </div>
                          
                        </div>

                        <div className="d-flex  py-2">
                          <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <p className="ps-3">In light of the risks, you ought not to participate in exchanging the previously mentioned items except if you comprehend the idea of the agreements and the authoritative legitimate relationship into which you are entering. Exchanges in foreign trade subordinates are not reasonable for many members of the public. You ought to deliberately think about in the case of transacting in remote trade is fitting for you in light of your experience, destinations, financial position, and other applicable conditions.</p>
                        </div>

                        <div className="d-flex  py-2">
                          <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <p className="ps-3">If all else fails, it is fitting to look for independent financial exhortation.</p>
                        </div>


                        
                      </div>
                    </div>

                    <div>
                      <h5>Foreign Exchange and Derivatives Trading Is Very Speculative and Risky.</h5>
                      <div className="light-text-2">
                        <p className="py-3">Exchanging CFD's and Spot FX Contracts is very theoretical, and includes an exceptional risk of misfortune; it may not be reasonable for all investors but rather just for those clients who:</p>
                        <div>
                          <div className="d-flex  py-2">
                            <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                            <p className="ps-3">comprehend and expect the financial, legitimate and different risks included;</p>
                          </div>

                          <div className="d-flex  py-2">
                            <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                            <p className="ps-3">are experienced and learned about exchanging subsidiaries and in hidden resource types; and</p>
                          </div>

                          <div className="d-flex  py-2">
                            <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                            <p className="ps-3">are financially ready to accept misfortunes essentially in abundance of margin or deposits since investors may lose the complete estimation of the agreement, not simply the margin or the deposit.</p>
                          </div>
                        </div>
                        <p className="pt-3">Nor CFD's nor Spot FX Contracts are proper investments for retirement reserves. CFD and FX transactions are among the most dangerous kinds of investments and can result in vast misfortunes. Client represents, warrants and concurs that Customer comprehends these dangers, and is ready and capable, financially or otherwise, to expect the dangers of exchanging CFD's and Spot FX Contracts; and that the loss of Customer's whole Account equalization will not change Customer's way of life.</p>
                      </div>
                    </div>


                    <div>
                      <h5 className="pt-5 pb-3">Risks related to Long CFD positions, i.e. for purchasers of CFD’s</h5>
                      <p className="pb-4 light-text-2">Being Long in a CFD implies you are purchasing the CFD's available by speculating that the market cost of the fundamental resource will ascend between the season of the purchase and sale. As proprietor of a long position, you will make a profit if the market cost of the fundamental resource rises while your CFD long position is open. Despite what might be expected, you will generally suffer a loss, if the market cost of the basic resource falls while your CFD long position is open. Your potential misfortune may in this way be greater than the underlying margin saved. Also, you may endure a loss because of shutting your position, in conditions which you do not have enough liquidity for the margin for you so as to keep up a vacant position.</p>
                    </div>

                    <div>
                      <h5 className="pb-3">Risks related to Short CFD positions, i.e. for sellers of CFD’s</h5>
                      <p className="pb-4 light-text-2">Being Short in a CFD implies you are selling the CFD's available by estimating that the market cost of the basic resource will fall between the season of the purchase and sale. As proprietor of a short position, you will make a benefit if the market cost of the hidden resource falls while your CFD short position is open. Unexpectedly, you will mostly endure a loss, if the market cost of the hidden resource rises while your CFD short position is open. Your potential misfortune may be greater than the underlying margin kept. What's more, you may endure a misfortune because of shutting your position, in conditions which you do not have enough liquidity for the margin on your account to keep up a vacant position.</p>

                      <h5 className="pb-3">High Leverage And Low Margin Can Lead To Quick Losses</h5>
                      <p className="pb-4 light-text-2">The high level “Gearing” or “Leverage” is a specific component of CFD and Spot FX contracts. The influence of leverage makes investing resources in CFD less secure than investing in the main asset. This is related to the margin structure and CFD material, which usually includes a small margin in relation to the degree of the transaction, therefore, as a rule, a small increase in the value of the underlying resource may have an overly dramatic impact on your exchange. This can be beneficial and disadvantageous. A small price movement in your favor can provide a high return on the deposit, but a slight development of value against you can lead to significant misfortunes that can exceed the money invested in the deposit. Such losses can happen quickly. The more noticeable the effect, the greater the danger. Consequently, the measure of influence does not fully solve the consequences of investment.</p>

                      <h5 className="pb-3">Effect of “Leverage” or “Gearing”</h5>
                      <p className="pb-4 light-text-2">Exchanges in foreign trade and subsidiaries represent a high level of risk. A high level of “Leverage” or “Gearing”, which is often realistic in foreign trade and the exchange of subordinates, can neutralize you, as well as you, due to the changing economic situation. If you do not have a chance that the market will turn against you, you cannot just continue with the absolute loss of your underlying border shop, as well as any additional assets held by the EM, to maintain your position, but you have additional obligations in the EM. You may be asked to hold additional assets without prior notice in order to maintain your position. Neglecting the acceptance of a petition to own additional assets may result in EM determining your position regarding your profits; You will be indebted for any subsequent misfortune or failure.</p>


                      <h5 className="pb-3">Risk-reducing Orders or Strategies</h5>
                      <p className="pb-4 light-text-2">The submitting of specific requests (for example "stop-loss" requests or "stop-limit" orders), which are expected to constrain misfortunes to specific sums, may not be satisfactory given that economic situations or technical constraints that may make it difficult to execute such requests, for example, because of illiquidity in the market. It ought to be noticed that systems utilizing combinations of positions, for example, "Spread" and "Straddle" positions might be as hazardous as taking basic "long" or "short" positions.</p>

                      <h5 className="pb-3">Margin Requirements</h5>
                      <p className="pb-4 light-text-2">The client must keep up the base margin necessity on their open positions consistently. It is the Customer's obligation to screen his/her Account balance. The client may get a margin call to deposit extra trade if the margin out the record concerned is excessively low. EM has the privilege to sell any or every single vacant position at whatever point the base margin necessity is not kept up. This may result in Customer's CFD's or Spot FX Contracts being shut at a misfortune for which you will be at risk.</p>

                      <h5 className="pb-3">Spread</h5>
                      <p className="pb-4 light-text-2">The contrast between Our Bid Price and Our Ask Price is "Our Spread". Our Spreads are set in our outright watchfulness, since we are going about as market creator, and any progressions are taking effect right now. Data in connection to Our Spread, Leverage, Rollover Fees and Trading Hours for each Market is expressed in CFD Trading Conditions and FX Trading Conditions pages of EM's site.</p>

                      <h5 className="pb-3">Cash Settlement</h5>
                      <p className="pb-4 light-text-2">Client comprehends that CFD and Spot FX Contracts must be settled in real money, and the contrast between the purchasing and selling cost somewhat decides the consequence of the venture.</p>

                      <h5 className="pb-3">Conflicts of Interest</h5>
                      <p className="pb-4 light-text-2">EM is the counterparty to all Transactions went into under the Customer Agreement and, all things considered, EM's interests might be in a struggle with yours. Our irreconcilable circumstances arrangement is accessible at EM's site.</p>


                      <h5 className="pb-3">OTC Transactions</h5>
                      <p className="pb-4 light-text-2">When trading CFD's or Spot FX Contracts with us, such Transactions will not be executed on a perceived or assigned speculation trade and are known as OTC (Over The Counter) transactions. All positions went into with us must be shut with us and cannot be close with some other element. OTC exchanges may include more serious hazard than putting resources into on-trade contracts in light of the fact that there is no trade showcase on which to finish off a vacant position. It might be difficult to exchange a current position, to evaluate the estimation of the position emerging from an OTC exchange, to assess the exposure to risk. Bid Prices and Ask Prices may not be cited by us, in view of best execution policies in the market and if when they are, EM may think that it is hard to set up a reasonable cost especially when the applicable trade or market for the hidden resource is shut or suspended. There is no focal clearing and no assurance by some other gathering of EM's installment commitments to the Customer. Subsequently, the Customer is presented to acknowledge the chance for EM. The client must look just to EM for execution of all agreements in the Customer's Account and for the return of any Margin or Collateral.</p>


                      <h5 className="pb-3">Suspension of Trading</h5>
                      <p className="pb-4 light-text-2">Under certain economic situations, it might be troublesome or difficult to sell a position, expanding the danger of misfortune. This may happen, for instance, on occasion of fast value development if the cost for the fundamental resource rises or falls in a single exchanging session to such a degree, that exchanging the hidden resource is limited or suspended.</p>


                      <h5 className="pb-3">Prices, Margin And Valuations Are Set By EM And May Be Different From Prices Reported Elsewhere</h5>
                      <p className="pb-3 light-text-2">EM will give costs to be utilized in exchanging, valuation of Customer positions and assurance of Margin Requirements as per its Trading Policies and Procedures and Market Information Sheets. The execution of your CFD or Spot FX Contract will rely upon the costs set by EM and market changes in the fundamental advantage for which your agreement relates. Each basic resource in this manner conveys explicit dangers that influence the consequence of the CFD concerned.</p>
                      <p className="pb-4 light-text-2">Our costs for a given market are determined by reference to the cost of the important fundamental resource which we get from outsider outer reference source\s or exchange\s. For our CFD and Spot FX Contracts, we get valuable information from discount showcase members. In spite of the fact that EM expects that these costs will be sensibly identified with costs accessible in the market, EM's costs may change from costs accessible to banks and other market members. EM has extensive tact in setting and gathering Margin. EM is approved to change over assets in Customer's Account for Margin into and from such outside cash at a rate of trade dictated by EM in its sole prudence based on then-winning currency showcase rates.</p>

                      <h5 className="pb-3">Rights to Underlying Assets</h5>
                      <p className="pb-4 light-text-2">You have no rights or obligations in regard to the basic instruments or resources identifying with your CFD's or Spot FX Contracts. The Customer comprehends that CFD's can have diverse fundamental resources, for example, stocks, lists, currencies, and wares, as determined in CFD Trading Conditions and FX Trading Conditions pages of EM's site.</p>

                      <h5 className="pb-3">Currency Risk</h5>
                      <p className="pb-4 light-text-2">Investing into Spot FX Contracts and CFD's with a basic resource recorded in a money other than your base cash involves a cash chance, because of the way that when the CFD or Spot FX Contract is settled in a money other than your base currency, the estimation of your arrival might be influenced by its change into the base cash.</p>

                      <h5 className="pb-3">EM Is Not An Adviser Or A Fiduciary To Customer</h5>
                      <p className="pb-4 light-text-2">Where EM gives conventional market suggestions, such nonexclusive proposals don't comprise an individual suggestion or speculation guidance and have not thought about any of your own conditions or your venture destinations, nor is it an idea to purchase or sell, or the solicitation of an offer to buy or sell, any Foreign Exchange Contracts or Cross Currency Contracts. Every choice by Customer to go into a CFD or Spot FX Contract with EM and every choice about whether an exchange is fitting or appropriate for Customer is a free choice made by the Customer. EM isn't going about as a consultant or filling in as a guardian to Customer. Client concurs that EM has no trustee obligation to Customer and no risk regarding and isn't in charge of any liabilities, claims, harms, expenses and costs, including lawyers' expenses, brought about regarding Customer following EM's conventional exchanging suggestions or making or not taking any move dependent on any nonexclusive proposal or data given by EM.</p>

                      <h5 className="pb-3">Recommendations Are Not Guaranteed</h5>
                      <p className="pb-3 light-text-2">The generic market proposals given by EM depend exclusively on the judgment of EM's staff and ought to be considered accordingly. Client recognizes that he/she goes into any Transactions depending individually judgment. Any market suggestions gave are generic only and could conceivably be steady with the market positions or expectations of EM or potentially its offshoots.</p>
                      <p className="pb-4 light-text-2">The generic market proposals of EM depend on data accepted to be solid, however, EM cannot and does not ensure its precision or fulfillment. Along these lines, following such conventional proposals won't decrease or wipe out the hazard characteristic in exchanging CFD's or potentially Spot FX Contracts.</p>

                      <h5 className="pb-3">No Guarantees Of Profit</h5>
                      <p className="pb-4 light-text-2">There are no assurances of benefit nor of dodging misfortunes when exchanging CFD's and Spot FX Contracts. The client has gotten no such certifications from EM or from any of its agents. The client knows about the dangers inherent in exchanging CFD's and Spot FX Contracts and is financially ready to endure such dangers and withstand any misfortunes acquired.</p>

                      <h5 className="pb-3">Customer May Not Be Able To Close Open Positions</h5>
                      <p className="pb-4 light-text-2">Because of economic situations which may cause any surprising and fast market value vacillations or different conditions, EM might be unfit to finish off Customer's situation at the cost indicated by Customer and the hazard controls forced by EM probably will not work. Client concurs that EM will bear no risk for an inability to do as such.</p>

                      <h5 className="pb-3">Internet/Electronic Trading</h5>
                      <p className="pb-3 light-text-2">Exchanging through EM's trading system may vary from exchanging on other electronic exchanging frameworks just as from exchanging a customary or open market. Exchanging on an electronic trading system will open you to dangers related with the framework including the disappointment of equipment and programming, framework downtime, in connection to either EM's exchanging system or the individual client's framework and the interchanges foundation (for example the web) interfacing EM's stage with EM's clients. The consequence of any framework disappointment might be that your request is either not executed by your directions or is not executed at all and an absence of capacity to keep you educated constantly about your positions and satisfaction of the edge prerequisites.</p>
                      <p className="pb-4 light-text-2">At the point when Customer exchanges on the web, EM will not be at risk for any cases, misfortunes, harms, expenses or costs, caused, straightforwardly or by implication, by any glitch, interruption or disappointment of any transmission, correspondence system, PC office or exchanging programming, in the case of having a place with EM, Customer, any trade or any settlement or clearing system.</p>

                      <h5 className="pb-3">Quoting Errors</h5>
                      <p className="pb-3 light-text-2">Should citing errors (counting reactions to Customer demands), EM is not at risk for any subsequent mistakes in Account adjusts and maintains whatever authority is needed to make fundamental rectifications or acclimations to the important Account. Any debate emerging from such citing errors will be settled based on the honest market value, as controlled by EM in its sole circumspection and acting in accordance with some basic honesty, from the pertinent market at the time such a mistake happened.</p>
                      <p className="pb-4 light-text-2">In situations where the overall market represents to costs, not the same as the costs EM has posted on our screen, EM will endeavor, on a best endeavors premise, to execute Transactions on or near the common market costs. These predominant market costs will be the costs, which are eventually thought about Customer proclamations. This might possibly unfavorably influence the Customer's acknowledged and undiscovered additions and loses.</p>

                      <h5 className="pb-3">Terms and Conditions of Contracts</h5>
                      <p className="pb-4 light-text-2">You have the duty to completely comprehend the exchanging rules as well as terms and states of the exchanges to be attempted and additionally, the Retail Customer Agreement, including, yet without impediment any terms portraying hazard factors, for example, instability, liquidity, etc.</p>

                      <h5 className="pb-3">Weekend Risk</h5>
                      <p className="pb-4 light-text-2">Different circumstances may emerge over an end of the week (Friday 22:00 CET – Sunday 23:30 CET), or amid a vacation when the financial markets commonly close to exchange, that may make the business sectors open at a fundamentally unique cost from where they shut. EM clients will not most likely utilize the EM exchanging system to put in or change requests throughout the end of the week, on market occasions or and at different occasions when the business sectors are commonly shut. There is a considerable hazard that stop-loss arranges left to ensure open positions held amid these periods will be executed at levels fundamentally more awful than their predetermined cost.</p>

                      <h5 className="pb-3">Charges and Commissions</h5>
                      <p className="pb-4 light-text-2">Before you start to trade, you ought to acquire from us subtleties all things considered and different charges for which you will be at risk. These charges will influence your net benefit or shortfall.</p>

                      <h5 className="pb-3">Money and Collateral</h5>
                      <p className="pb-4 light-text-2">You recognize that you can afford to lose the totals that you transmit to EM as a deposit. When you store cash with us, this will by and large be held in an isolated customer's record holder with at least one approved credit as well as banking foundation/s arranged in US and additionally in an EEA member state as will be shown on the EM site every once in a while. The UFSA's tenets relating to customer cash and Safeguarding of Client Assets will apply. You recognize that the holding of cash in an isolated customer's record may not give total security, especially in case of the bankruptcy of any outsider organization/s depended by EM to hold customer resources.</p>

                      <h5 className="pb-3">Specific risks to Asset Management and Advisory Services</h5>
                      <p className="pb-4 light-text-2">AmaniLightEquity. has no commitment to stop going into exchanges when the advantages of the Account decline, even generously. In this manner, the customer embraces to control the advancement of his/her record in order to have the capacity to end the benefit the executive's administration if s/he is of the opinion that the outcomes do not adjust to his/her desires or needs.</p>

                      <h5 className="pb-3">Compensation</h5>
                      <p className="pb-4 light-text-2">EM takes an interest in the Investor Compensation Fund for customers of Investment Firms managed by the UFSA. Clients will be qualified for pay under the Investor Compensation Fund where we are unfit to meet our obligations and commitments emerging from your case. Any remuneration gave to you by the Investor Compensation Fund will not surpass twenty thousand Euro (€20.000). This applies to your total cases against us.</p>
                      
                      <h4 className="pb-3"> Leveraged Trading Example</h4>
                      <h5 className="pb-3">Leverage Basics</h5>
                      <p className="pb-4 light-text-2">Utilizing a position is an expression in Forex exchanging; whereby guarantee (frequently alluded to margin) is put down to cover a position essentially bigger than the subsidized esteem. Usually for dealers to offer customers 100:1 adequately permitting the exchange an incentive to be increased multiple times of the parity in the record.</p>

                      <h5 className="pb-3">Lots Basics</h5>
                      <p className="pb-4 light-text-2">In Forex, exchanges currency sets are normally exchanged parts where each parcel comprises of 100,000 units. Over the span of exchange, this implies a 1 parcel purchase of base cash will occur in a state of harmony with a 1-part sell of the counter money. For instance, selling 1 part of EUR/USD at $1.2500 implies 100,000 Euros are purchased and 125,000 Dollars are sold.</p>

                      <h5 className="pb-3">A Leveraged Trade Example</h5>
                      <p className="pb-3 light-text-2">A trader stores $2,000 into his record which is then referred to as his complete parity or value. The dealer at that point purchases 1 Lot of USD/JPY at a cost of 97.50 (1 US Dollar purchases 97.50 Yen) and uses the 100:1 influence on offer by his intermediary (in this way giving him 100x the exchanging intensity of his value). The broker's used margin is $1000 and he has $1000 of skimming value or unused edge.</p>
                      <p className="pb-4 light-text-2">Throughout the exchange, the position moves in the dealer's support and all things considered, the increases are added to the skimming value in the merchant's record. The equivalent happens the other way around should the position conflict with the dealer. Imperatively, the floating additions or misfortunes are not understood until the position is shut and reserves come back to the merchant's account balance.</p>
                      
                      <h5 className="pb-3">The Result</h5>
                      <p className="pb-3 light-text-2">In our precedent exchange, we will assume the position moves 100 pips in the broker's support (in return terms, it moves upwards one Yen to 98.50), In this situation, the merchant makes addition of $1,000 ($10 per pip × 100 pips). Because of the exchange, we see a half profit for his $2,000 supported record, or a 100% addition on the $1000 margin.</p>
                      <p className="pb-5 light-text-2">On the off chance that the position had moved against the broker by 100 pips, the opposite would have occurred. The position would have been shut consequently because of a margin call since the floating value had come to $0 from $1000. The margin call initiates to shield the trader from the intersection into a negative account balance.</p>

                      <p className="sm-text-2 light-text-2 pb-4">* The Leveraged Trade Examples are for illustrative purposes just and are not to be understood at all to comprise venture guidance.</p>
                      <p className="sm-text-2 light-text-2 pb-4">** The execution figures cited are gauges and may not be a solid marker of future execution of this venture. </p>
                      
                    </div>
                    <p className="pt-4 font-weight-700 light-text-2 italic-text">I/WE HAVE READ, UNDERSTOOD AND AGREE TO THE RISK DISCLOSURE STATEMENT AND THE TRADING POLICIES AND PROCEDURES SET OUT ABOVE</p>
                    
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
                    <Link to='/risk-disclosure/' className="market-sidebar-link market-sidebar-active-link" >Risk Disclosure</Link>
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