const Contact = () => {
  return (
    <section className="mt-[70px]">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form_label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form_input mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form_label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="form_input mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="mesage" className="message">
              Your Message
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              placeholder="Leave your comment"
              className="form_input mt-1"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
