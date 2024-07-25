import Logo from './Logo';
import Navigation from './Navigation';
import UserDropDown from './UserDropDown';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#002244] to-[#4682B4] px-6  text-slate-300 py-4 shadow-md">
    <div className="container mx-auto flex items-center justify-between">
      <Logo />
      <nav className="flex items-center justify-center space-x-6"> {/* Updated to justify-center */}
        <Navigation />
      </nav>
        <UserDropDown />
    </div>
  
  </header>
  );
}