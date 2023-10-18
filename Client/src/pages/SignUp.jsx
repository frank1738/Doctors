import signUp from '../assets/images/signup.gif';
import { useForm } from 'react-hook-form';
import avatar from '../assets/images/doctor-img01.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    const { name, email, password, confirmPassword, gender, role, picture } =
      data;

    console.log({
      name,
      email,
      password,
      confirmPassword,
      gender,
      role,
      picture,
    });
  };
  return (
    <section className="px-5 xl:px-0 mt-[70px]">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signUp} alt="signup" className="w-full rounded-l-lg" />
            </figure>
          </div>
          <div className="rounded-l-lg lg:pl-[70px] py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">Account</span>
            </h3>
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  name="name"
                  {...register('name', {
                    required: 'Full Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be atleast two characters',
                    },
                  })}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                />
                {errors.name && (
                  <p className="mt-2 text-[16px] text-red-500">{`${errors.name.message} 🙁`}</p>
                )}
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  name="email"
                  {...register('email', {
                    required: 'Email Address is required',
                  })}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                />
                {errors.email && (
                  <p className="mt-2 text-[16px] text-red-500">{`${errors.email.message} 🙁`}</p>
                )}
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be atleast 6 characters',
                    },
                  })}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                />
                {errors.password && (
                  <p className="mt-2 text-[16px] text-red-500">{`${errors.password.message} 🙁`}</p>
                )}
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Confirm Your Password"
                  name="confirmPassword"
                  {...register('confirmPassword', {
                    required: 'Confirm your Password',
                  })}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                />
                {errors.confirmPassword && (
                  <p className="mt-2 text-[16px] text-red-500">{`${errors.confirmPassword.message} 🙁`}</p>
                )}
              </div>
              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                    {...register('role')}
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="role"
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                    {...register('gender')}
                  >
                    <option value="select">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img
                    src={avatar}
                    alt="doctor"
                    className="w-full rounded-full"
                  />
                </figure>
                <div className="relative w-[160px] h-[50px] ">
                  <input
                    type="file"
                    name="picture"
                    id="profilePicture"
                    {...register('picture')}
                    accept=".jpg,.png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="profilePicture"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>
              <div className="mt-[30px]">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                  Sign Up
                </button>
              </div>
              <p className="mt-5 text-textColor text-center">
                Already Have an account?
                <Link to="/login" className="text-primaryColor ml-1">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
