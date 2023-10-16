import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import {
  AiFillYoutube,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

const socialLinks = [
  {
    path: '',
    icon: <AiFillGithub className="hover:text-white w-4 h-5" />,
  },
  {
    path: '',
    icon: <AiFillYoutube className="hover:text-white w-4 h-5" />,
  },
  {
    path: '',
    icon: <AiFillInstagram className="hover:text-white w-4 h-5" />,
  },
  {
    path: '',
    icon: <AiFillLinkedin className="hover:text-white w-4 h-5" />,
  },
];

const quickLinks = [
  {
    path: '/',
    display: 'home',
  },
  { path: '/about', display: 'About Us' },
  { path: '/services', display: 'Sevices' },
  { path: '/blog', display: 'Blog' },
];
const quickLinks2 = [
  {
    path: '/find-a-doctor',
    display: 'find a doctor',
  },
  { path: '/appointment', display: 'Request an appointment' },
  { path: '/location', display: 'find a location' },

  { path: '/opinion', display: 'Get an opinion' },
];

const quickLinks3 = [
  {
    path: '/donate',
    display: 'Donate',
  },
  { path: '/contact-us', display: 'Contact Us' },
];

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10 sm:px-[50px] mt-[70px]">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="logo" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              copyrite &copy; {date} developed by frank1738
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul className="flex flex-col">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="mb-4 text-textColor text-[16px] font-[400]"
                >
                  {link.display}
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul className="flex flex-col">
              {quickLinks2.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="mb-4 text-textColor text-[16px] font-[400]"
                >
                  {link.display}
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Services
            </h2>
            <ul className="flex flex-col">
              {quickLinks3.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="mb-4 text-textColor text-[16px] font-[400]"
                >
                  {link.display}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
