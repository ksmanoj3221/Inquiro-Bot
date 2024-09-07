import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";

const RootLayout = () => (
  <div className="rootLayout">
    <header>
      <Link to="/">
        <img src="/logo.png" alt="Logo" />
        <span>Inquiro AI</span>
      </Link>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default RootLayout;
