import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    const { email, password } = data;
    console.log(email, password);
  };
  return (
    <section className="px-5 lg:px-0 mt-[70px]">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 p-3 ">
          Hello <span className="text-primaryColor">Welcome </span>Back 🎉
        </h3>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="md:py-0 px-2 md:px-0"
        >
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              {...register('email', {
                required: 'email is required',
              })}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
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
                required: 'password is required',
              })}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
            />
            {errors.password && (
              <p className="mt-2 text-red-500">{`${errors.password.message} 🙁`}</p>
            )}
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
              Login
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Don&apos;t Have an account?{' '}
            <Link to="/register" className="text-primaryColor ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
