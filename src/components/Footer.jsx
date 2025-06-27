import pngx from '../assets/pngs/X.png'
import pngtube from '../assets/pngs/Youtube.png'
import pnglink from '../assets/pngs/Linked.png'
import pnginsta from '../assets/pngs/Instagram.png'
import facebook from '../assets/pngs/Facebook.png'



function Footer() {
  return (
    <footer className="foot">
      <div className="container" >
        <div className="setions" id="fir">
        <h1 className="head">WalletBits</h1>
        <p>
          Join our newsletter to get notified about all new releases and features.
        </p>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit" id="btn">Subscribe</button>
          
        </form>
        <p>
          By subscribing, you agree to our <a href="#">Privacy Policy</a> <br /> and
          provide consent to receive updates from our company.
        </p>
        </div>
        <div className="sections" id="sec">
            <div>
          <h2 className="head">Company</h2>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>CSR</li>
          </ul>
        </div>

        <div>
          <h2 className="head">Support</h2>
          <ul>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="head">Follow Us</h2>
          <ul>
            <li><img src={facebook} /> Facebook</li>
            <li><img src={pnginsta} /> Instagram</li>
            <li><img src={pngx} /> X (Twitter)</li>
            <li><img src={pnglink} /> LinkedIn</li>
            <li><img src={pngtube}/> YouTube</li>
          </ul>
        </div>
     </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Jodna Technologies. All rights reserved.</p>
      <p> <a href="">privacy policy</a> <a href="">terms of service</a> <a href="">cookies setting</a></p>
    </footer>
  );
}

export default Footer;
