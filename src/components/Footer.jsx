import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import pngx from '../assets/pngs/X.png'
import pngtube from '../assets/pngs/Youtube.png'
import pnglink from '../assets/pngs/linked.png'
import pnginsta from '../assets/pngs/Instagram.png'
import facebook from '../assets/pngs/Facebook.png'



function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 1000 });


  return (
    <footer className={`${isMobile ? 'pt-10' : 'pt-20'} px-5 md:px-15`}>
      <div className="foot rounded-t-4xl">

        <div className={`${isMobile ? 'flex-col' : 'flex-row'} flex  border border-green-500  w-full p-8 gap-10 justify-between`}>
          <div className={`${isMobile ? 'w-full' : 'w-1/2'} sections flex flex-col w-1/2" id="fir`}>
            <h1 className="head mb-5">WALLETBITS</h1>
            <p className="mb-5 text-gray-50 text-[14px]">Join our newsletter to get notified about all new releases and features.</p>
            <form className="mb-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit" id="btn">Subscribe</button>

            </form>
            <p className="text-[14px]">
              By subscribing, you agree to our <Link tp="#"><u>Privacy Policy</u></Link> and
              provide consent to receive updates from our company.
            </p>
          </div>
          <div className={`${isMobile ? 'w-full' : 'w-2/5'} sections justify-between w-2/5" id="sec`}>
            <div>
              <h2 className="head mb-4">Company</h2>
              <ul className="flex flex-col gap-3">
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/csr">CSR</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="head mb-4">Support</h2>
              <ul className="flex flex-col gap-3">
                <li><Link to="/faqs">FAQs</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="head mb-4">Follow Us</h2>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2"><img src={facebook} /> Facebook</li>
                <li className="flex items-center gap-2"><img src={pnginsta} /> Instagram</li>
                <li className="flex items-center gap-2"><img src={pngx} /> X (Twitter)</li>
                <li className="flex items-center gap-2"><img src={pnglink} /> LinkedIn</li>
                <li className="flex items-center gap-2"><img src={pngtube} /> YouTube</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${isMobile ? 'flex-col items-center' : 'flex-row'} flex gap-2.5 justify-between w-full`}>
          <p>&copy; {new Date().getFullYear()} Jodna Technologies. All rights reserved.</p>
          <p> <a href="">privacy policy</a> <a href="">terms of service</a> <a href="">cookies setting</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
