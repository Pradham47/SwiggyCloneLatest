const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*v5SYqjYEdQMPIwNduRrnCw.png" className="logo"></img>
      </div>
      <ul className="nav-list">
        <a href="#">
          <li className="nav-list-item">Home</li>
        </a>
        <li className="nav-list-item">About us </li>
        <li className="nav-list-item">Cart</li>
        <li className="nav-list-item">Contact us</li>
      </ul>
    </nav>
  );
};
export default Navbar;