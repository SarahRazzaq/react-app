import { Outlet, Link } from "react-router-dom";
import styles from "../App.css"
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/about">About</Link>
          </li>
          <li>
            <Link className="link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer/>
    </>
  )
};

export default Layout;