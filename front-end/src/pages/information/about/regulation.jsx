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
export const Regulation = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / About Company  /  Regulations / Regulation Explained/</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                  <div>
                    <p className="pb-4 site-header font-weight-700">Regulation Explained</p>
                    <h3 className="pb-4">AmaniLghtEquity Regulation & License</h3>
                    <div className="light-text-2">
                      <div className="pb-5">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">Regulated by UFSA</p>
                            <p className="italic-text"> US Financial Services Authority </p>
                          </div>
                        </div>

                        <p className="pt-3">The US Financial Services Authority UFSA is the single regulator for financial administrations in US. It was set up by exceptional Act of Parliament, the US Financial Services Authority Act, 1988 as revised in 1994 and 2002 taking over supervisory capacities recently completed by the Central Bank of US, the US Stock Exchange, and the US Financial Services Center. The Authority is a completely self-governing open foundation and reports to Parliament on a yearly premise.</p>
                      </div>


                      <div className="pb-3">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">MIFID Compliant</p>
                            <p className="italic-text"> Markets in Financial Instruments Directive </p>
                          </div>
                        </div>

                        <p className="pt-3">AmaniLightEquity. complies with the European Markets in Financial Instruments Directive (MiFID). MiFID provides a harmonized regulatory environment for investment services across the European Economic Area (EEA). The main objectives of the MiFID Directive are to enhance financial transparency, increase competition, and offer greater consumer protection in investment services.</p>
                      </div>
                      
                    </div>
                    
                    <strong className="italic-text"> Use of logos of any financial regulator or authority does not signify endorsement or approval by such authority of the products or services offered by EM. </strong>
                    <p className="py-4 light-text-2">AmaniLightEquity. is approved to work inside the EEA and the accompanying administrative bodies have given their endorsement for AmaniLightEquity to give cross outskirt investments benefits in their country:</p>

                    <div className="light-text-2">
                      <div className="pb-5">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">FCA</p>
                            <p className="italic-text">  Financial Conduct Authority </p>
                          </div>
                        </div>

                        <p className="pt-3">United Kingdom – Registration Number: 595195 The Financial Conduct Authority (FCA) is an independent non-governmental body, given statutory powers by the Financial Services and Markets Act 2000. It is a company limited by guarantee and financed by the financial services industry.</p>
                      </div>


                      <div className="pb-3">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">BaFin</p>
                            <p className="italic-text">  Federal Financial Supervisory Authority</p>
                          </div>
                        </div>

                        <p className="pt-3">Germany – Registration Number: 131055 The Federal Financial Supervisory Authority (Bundesanstalt für Finanzdienstleistungsaufsicht – BaFin) administers banks, financial administrations suppliers, protection endeavors and securities exchanging. The goal of financial supervision is to guarantee the best possible working, steadiness and honesty of the German budgetary market.</p>
                      </div>

                      <div className="pb-3">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">ACP</p>
                            <p className="italic-text">   French Prudential Supervisory Authority </p>
                          </div>
                        </div>

                        <p className="pt-3">France – Registration Number: 74397 The French Prudential Supervisory Authority (Autorité de Contrôle Prudentiel – ACP) is an autonomous managerial specialist, which screens the exercises of banks and insurance agencies in France. It works under the sponsorship of the French national bank, Banque de France.</p>
                      </div>


                      <div className="pb-3">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">CNMV</p>
                            <p className="italic-text">  National Securities Market Commission </p>
                          </div>
                        </div>

                        <p className="pt-3">Spain – Registration Number: 3354 The Comisión Nacional del Mercado de Valores (CNMV) is the office responsible for overseeing and reviewing the Spanish Stock Markets and the exercises of the considerable number of members in those business sectors. It was made by the Securities Market Law, which founded the top to bottom changes of this section of the Spanish money related framework.</p>
                      </div>


                      <div className="pb-3">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">FINANSTILSYNET</p>
                          </div>
                        </div>

                        <p className="pt-3">Denmark – Registration Number: 9221 The Danish FSA is a piece of the Ministry of Business and Growth and goes about as secretariat for the Financial Business Council, the Danish Securities Council and the Money and Pension Panel.</p>
                      </div>


                      <div className="pb-3">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">Consob</p>
                            <p className="italic-text">   Italy – Registration Number: 3597 </p>
                          </div>
                        </div>

                        <p className="pt-3">The supervisory authority for the Italian financial products market; its aims are to protect investors and the efficiency, transparency and development of the market.</p>
                      </div>


                      <div className="pb-3">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">BaFin</p>
                            <p className="italic-text">  Federal Financial Supervisory Authority</p>
                          </div>
                        </div>

                        <p className="pt-3">Germany – Registration Number: 131055 The Federal Financial Supervisory Authority (Bundesanstalt für Finanzdienstleistungsaufsicht – BaFin) administers banks, financial administrations suppliers, protection endeavors and securities exchanging. The goal of financial supervision is to guarantee the best possible working, steadiness and honesty of the German budgetary market.</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
              <aside className="sidebar  position-relative1">
                <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} market-sidebar`}>
                  <div className="me-5">
                    <Link className="market-sidebar-link market-sidebar-active-link" to='/regulations/'>Regulation Explained</Link>
                    
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