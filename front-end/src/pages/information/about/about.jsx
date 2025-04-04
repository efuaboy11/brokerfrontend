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
export const About = () =>{
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
            <p><Link Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link>  / About Company  / About</p>
          </div>
        </div>
        <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                <div>
                  <p className="site-header font-weight-700 pt-3 pb-4">About us</p>
                  <div className="light-text-2">
                    <p><span className="font-weight-700 pb-4">AmaniLightEquity is brand owned by AmaniLightEquity</span></p>
                    <p className="pb-2">AmaniLightEquity is a globally recognized online brokerage firm dedicated to delivering innovative, transparent, and efficient trading solutions to investors worldwide. Founded by a team of financial experts with a deep understanding of global markets, our platform is designed to cater to both individual traders and institutional investors, providing them with the necessary tools, insights, and support to navigate the complexities of modern financial trading.</p>
                    <p className="pb-2">At AmaniLightEquity, we have built our foundation on three core pillars: Cutting-Edge Trading Technology, Advanced Risk Management, and a Customer-Centric Approach. Our robust technological infrastructure is designed to meet the evolving needs of traders by integrating state-of-the-art trading platforms, real-time market analytics, and high-speed order execution. We have partnered with top-tier financial institutions and liquidity providers to ensure our clients enjoy competitive pricing, tight spreads, and seamless trade execution.</p>
                    <p className="pb-2">We proudly offer access to the industry-leading MetaTrader 5 (MT5) platform, a globally trusted trading solution that provides advanced charting tools, automated trading capabilities, multi-asset trading support, and lightning-fast execution speeds. Our traders benefit from a user-friendly interface that supports mobile, web, and desktop trading, allowing for a flexible and efficient trading experience across multiple asset classes, including Forex, Commodities, Indices, Stocks, and Cryptocurrencies.</p>
                    <p className="pb-2">AmaniLightEquity is not just about technology—it’s about trust, security, and transparency. We operate under strict regulatory standards, ensuring full compliance with global financial authorities. Our client funds are fully segregated in Tier-1 international banks, and we provide negative balance protection to safeguard traders from unforeseen market volatility.</p>
                    <p className="pb-2">Beyond trading, we believe in empowering our clients with education and market insights. We offer a comprehensive range of webinars, trading tutorials, market analysis reports, and real-time financial news updates, ensuring that traders at all levels—whether beginners or professionals—are equipped with the knowledge to make informed decisions.</p>
                    <p className="pb-2">At AmaniLightEquity, we are redefining the trading experience by combining cutting-edge technology, top-tier liquidity, and unparalleled customer support. Our mission is to create a seamless and secure trading environment where investors can grow, thrive, and succeed in the financial markets. Whether you are an active day trader, a long-term investor, or a financial institution looking for reliable market access, AmaniLightEquity provides the tools and resources needed to excel in the global trading arena.</p>
                    <p className="pb-2">Trade smarter, trade with confidence—trade with AmaniLightEquity.</p>
                  </div>
                  <p className="site-header font-weight-700 pt-4 pb-2">Our Vision</p>
                  <div className="light-text-2">
                    <p>Our vision is to become a global leader in online trading by providing an innovative, transparent, and client-focused trading ecosystem. We aim to bridge the gap between traditional and modern financial markets, offering traders and investors a platform that is both technologically advanced and easy to use. We believe that financial empowerment comes through education, accessibility, and cutting-edge technology, which is why we continuously refine our platform to meet the highest industry standards.</p>
                  </div>

                  <p className="site-header font-weight-700  pt-4 pb-2">Our Mission</p>
                  <div className="light-text-2">
                    <p>Our mission is to provide a secure, regulated, and seamless trading experience that caters to traders of all levels. We are committed to equipping our clients with the necessary tools, resources, and market insights to make informed trading decisions. At AmaniLightEquity, we foster a trading environment that prioritizes security, efficiency, and customer satisfaction while upholding the highest levels of integrity and professionalism.</p>
                  </div>


                  <p className="site-header font-weight-700  pt-4 pb-2">Core Values</p>
                  <div className="light-text-2">
                    <div className="d-flex py-2">
                      <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                      <p className="ps-3"><span className="font-weight-700">Transparency & Trust –</span> We believe in fostering long-term relationships with our clients through honest communication, transparent pricing, and ethical business practices.</p>
                    </div>

                    <div className="d-flex py-2">
                      <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                      <p className="ps-3"><span className="font-weight-700">Innovation & Technology –</span> We invest in the latest financial technology to ensure our traders have access to the most powerful trading tools and data-driven insights.</p>
                    </div>

                    <div className="d-flex py-2">
                      <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                      <p className="ps-3"><span className="font-weight-700">Security & Regulationy –</span> We adhere to strict financial regulations and implement robust security measures to safeguard our clients' funds and personal information.</p>
                    </div>

                    <div className="d-flex py-2">
                      <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                      <p className="ps-3"><span className="font-weight-700">Customer-Centric Approach –</span>Our clients are at the heart of everything we do. We provide 24/5 professional customer support, personalized account management, and educational resources to help traders succeed.</p>
                    </div>

                    <div className="d-flex py-2">
                      <i class="bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                      <p className="ps-3"><span className="font-weight-700">Global Accessibility–</span> With traders from over 20+ countries, we offer localized services, multilingual support, and flexible trading conditions tailored to different markets.</p>
                    </div>
                  </div>

                  <p className="site-header font-weight-700  pt-4 pb-2">Our Commitment to Traders</p>
                  <div className="light-text-2">
                    <p className="pb-2">At AmaniLightEquity, we are more than just a brokerage—we are a trusted partner in your trading journey. We are committed to fostering a trading environment that promotes growth, innovation, and success. Whether you are a beginner looking to learn the fundamentals of trading or a professional seeking advanced tools and strategies, we have tailored solutions to meet your needs.</p>
                    <p className="pb-2">As financial markets continue to evolve, we remain dedicated to staying ahead of industry trends, enhancing our trading infrastructure, and providing world-class services that empower traders worldwide. Our goal is to help traders navigate the complexities of global markets while offering the highest levels of security, transparency, and efficiency.</p>
                  </div>

                  <p className="site-header font-weight-700  pt-4 pb-2">Join AmaniLightEquity Today</p>
                  <div className="light-text-2">
                    <p className="pb-2">Trade with confidence on a platform built for success. Join AmaniLightEquity today and experience a new era of smart, secure, and efficient online trading. Whether you are trading forex, commodities, indices, stocks, or cryptocurrencies, we provide the tools, resources, and support you need to succeed in global financial markets.</p>
                    <p className="pb-2 site-primary-text font-weight-700">Your success is our priority. Welcome to AmaniLightEquity – Where Innovation Meets Opportunity..</p>
                  </div>

                  </div>
                  </div>
              </div>
            </div>

            <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
              <aside className="sidebar  position-relative1">
                <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} market-sidebar`}>
                  <div className="me-5">
                    <Link className="market-sidebar-link market-sidebar-active-link" to='/about-us/'>About us</Link>
                    <Link to='/contact-us/' className="market-sidebar-link " >Contact Us</Link>
                    <Link to='/affiliate-program/' className="market-sidebar-link ">Affiliate program</Link>
                    
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