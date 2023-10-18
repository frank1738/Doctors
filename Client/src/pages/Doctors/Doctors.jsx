import { doctors } from '../../assets/data/doctors';
import DoctorCard from '../../components/Doctors/DoctorCard';
import Testimonial from '../../components/Testimonials/Testimonial';

const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea] py-[70px]">
        <div className=" container text-center ">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px]  mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
            />
            <button className="btn mt-0 rounded-[0] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container lg:px-[50px]">
          <div className="grid  grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 ">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
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

export default Doctors;
