import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai'; // Assuming you are using React Icons

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');

  const handleRating = (value) => {
    setRating(value);
    setHover(0);
  };

  const submitFeedback = (e) => {
    e.preventDefault();
    console.log(rating, review);
  };

  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          How would you rate the overall experience?*
        </h3>
        <div>
          {[1, 2, 3, 4, 5].map((index) => (
            <button
              key={index}
              type="button"
              className={`${
                index <= rating || index <= hover
                  ? 'text-yellowColor'
                  : 'text-gray-400'
              } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
              onClick={() => handleRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(0)}
            >
              <span>
                <AiFillStar />
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold  mb-4 mt-0">
          Share your feedback or suggestions
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md    "
          rows="5"
          placeholder="Write your Message"
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      <button className="btn mt-[10px]" type="submit" onClick={submitFeedback}>
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
