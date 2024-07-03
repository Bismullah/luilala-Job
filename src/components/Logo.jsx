import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="company-logo flex items-center justify-center">
      <Link to="/" className="block">
        <img src="../src/assets/logo.png" alt="Company Logo" className="w-16 scale-1 h-auto" />
      </Link>
    </div>
  );
}
