export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="logo">Wander<span>lust</span></a>
          <p>Making travel accessible, memorable, and magical for everyone. Since 2015.</p>
        </div>
        <div className="footer-column">
          <h4>Discover</h4>
          <ul>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#hotels">Hotels</a></li>
            <li><a href="#">Flights</a></li>
            <li><a href="#">Trains</a></li>
            <li><a href="#">Travel Guides</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Cancellation</a></li>
            <li><a href="#">Travel Insurance</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Partnerships</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Traversea. All rights reserved.</p>
        <div className="footer-social">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Twitter">Twitter</a>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="YouTube">YouTube</a>
        </div>
      </div>
    </footer>
  )
}
