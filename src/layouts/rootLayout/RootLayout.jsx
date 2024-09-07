import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RootLayout = () => {
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      // signInUrl="/sign-in"
    >
      <div className="rootLayout">
        <header>
          <Link to="/" className="logo">
            <img src="/logo.png" alt="" />
            <span>Inquiro BOT</span>
          </Link>
          <div className="user">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;
