import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";

const RootLayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
        </Link>
        <span>Inquiro AI</span>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
