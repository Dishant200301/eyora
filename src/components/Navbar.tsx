import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import EyoraButton from './EyoraButton';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Apply the same behavior to all pages
  const isTransparent = !isScrolled;

  const navbarBg = isScrolled 
    ? 'bg-card shadow-lg' 
    : 'bg-transparent';

  const textColor = isTransparent ? 'text-primary-foreground' : 'text-secondary';
  const logoTextColor = isTransparent ? 'text-primary-foreground' : 'text-secondary';

  return (
    <header className="fixed top-2 xl:top-6 left-0 right-0 z-50 px-2 sm:px-2 lg:px-4 xl:px-[100px]">
      <nav 
        className={`${navbarBg} w-full mx-auto max-w-[1550px] rounded-full px-4 sm:px-4 lg:px-4 xl:px-[20px]`}
      >
        <div className="flex items-center justify-between h-[60px] lg:h-[80px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 relative z-[60]" onClick={() => setMenuOpen(false)}>
            <img src="/images/logo-icon.png" alt="Eyora" className="w-10 h-10" />
            <span className={`text-2xl font-bold ${menuOpen ? 'text-white' : logoTextColor}`}>
              Eyora<span className={menuOpen ? 'text-white' : 'text-primary'}>.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-[16px] font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname === item.to ? 'text-primary' : textColor
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:block">
              <EyoraButton to="/appointment" text="Book Appointment" hoverStyle={isTransparent ? "default" : "darkBlue"} />
            </div>
            <button
              className="xl:hidden w-[38px] h-[38px] bg-[#00ADEE] rounded-[8px] flex items-center justify-center transition-colors duration-300 z-[60]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <div className="w-[32px] h-[32px] bg-white rounded flex items-center justify-center">
                  <X size={24} className="text-[#15224D]" strokeWidth={2.5} />
                </div>
              ) : (
                <Menu size={26} className="text-white" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`xl:hidden fixed inset-0 bg-[#00ADEE] z-50 transition-transform duration-500 ease-in-out ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex flex-col h-full pt-[120px] px-6">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-white text-[22px] font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
