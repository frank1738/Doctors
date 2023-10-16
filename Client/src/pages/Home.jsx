import heroImage01 from '../assets/images/hero-img01.png';
import heroImage02 from '../assets/images/hero-img02.png';
import heroImage03 from '../assets/images/hero-img02.png';
import icon1 from '../assets/images/icon01.png';
import icon2 from '../assets/images/icon02.png';
import icon3 from '../assets/images/icon03.png';
import featureImg from '../assets/images/feature-img.png';
import DoctorList from '../components/Doctors/DoctorList';
import About from '../components/About/About';
import videoIcon from '../assets/images/video-icon.png';
import avatorIcon from '../assets/images/avatar-icon.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import ServiceList from '../components/Services/ServiceList';
import faqImage from '../assets/images/faq-img.png';
import FaqList from '../components/Faq/FaqList';
import Testimonial from '../components/Testimonials/Testimonial';

const Home = () => {
  return (
    <>
      <section className="hero-section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a long, healthy life.
                </h1>
                <p className="text_para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{' '}
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[36px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[36px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[36px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satsification</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImage01} alt="doctor" />
              </div>
              <div className="mt-[30px]">
                <img
                  className="w-full mb-[30px]"
                  src={heroImage02}
                  alt="doctor"
                />
                <img className="w-full" src={heroImage03} alt="doctor" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container sm:px-[70px]">
          <div className="lg:w-[470px] mx-auto mt-[70px]">
            <h2 className="heading text-center">
              Providing the Best Medical Services
            </h2>
            <p className="text_para text-center">
              providing world-class services to everyone. Our health system
              provides unmatched expert health care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon1} alt="icon" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-center text-headingColor font-[700]">
                  Find a doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  providing world-class services to everyone. Our health system
                  provides unmatched expert health care
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px]  rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none hover:text-white "
                >
                  <BsArrowRight className=" w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon2} alt="icon" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-center text-headingColor font-[700]">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  providing world-class services to everyone. Our health system
                  provides unmatched expert health care
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px]  rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none hover:text-white "
                >
                  <BsArrowRight className=" w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon3} alt="icon" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-center text-headingColor font-[700]">
                  Book an Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  providing world-class services to everyone. Our health system
                  provides unmatched expert health care
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px]  rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none hover:text-white "
                >
                  <BsArrowRight className=" w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center mt-[70px]">
              Our medical services
            </h2>
            <p className="text_para text-center ">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      <section className="mt-[70px] sm:px-[50px]">
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px">
              <h2 className="heading ">Get Virtual Treatment anytime</h2>
              <ul className="pl-4">
                <li className="text_para">
                  1. Schedule the appointment directly
                </li>
                <li className="text_para">
                  2. Schedule the appointment directly
                </li>
                <li className="text_para">
                  3. Schedule the appointment directly
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt="feature" className="w-3/4" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center  gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24,
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00 AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="video" />
                  </span>
                </div>
                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] rounded-full px-2  text-[8px] leading-[8px] lg:text-[12px] lg:leading-9 text-irisBlueColor font-[500] mt-2">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-[2] lg:mt-[18px]">
                  <img src={avatorIcon} alt="doctor" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Steve Bruce
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[100px] sm:px-[50px]">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center mt-[70px]">Our Great Doctors</h2>
            <p className="text_para text-center ">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      <section className="mt-[70px] sm:px-[50px]">
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImage} />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Most questions asked by our patients</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center mt-[70px]">
              What our Patients Say
            </h2>
            <p className="text_para text-center ">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
