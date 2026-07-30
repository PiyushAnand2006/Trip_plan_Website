export default function TopNav() {
  return (
    <nav className="topnav" aria-label="Primary">
      <div className="topnav-inner">
        <a className="topnav-logo" href="#">Wander<span>lust</span></a>
        <div className="topnav-links">
          <a href="#packages">Packages</a>
          <a href="#hotels">Hotels</a>
          <a href="#">Flights</a>
          <a href="#">Trains</a>
          <a href="#">Buses</a>
          <a href="#">Cabs</a>
          <a href="#">Visa</a>
          <a href="#">Forex</a>
          <a href="#">Insurance</a>
        </div>
        <div className="topnav-actions">
          <button className="topnav-btn" aria-label="Wishlist" onClick={() => alert('Wishlist coming soon')}>♥ Wishlist</button>
          <button className="topnav-btn" aria-label="Login" onClick={() => alert('Login coming soon')}>Login</button>
        </div>
      </div>
    </nav>
  )
}
