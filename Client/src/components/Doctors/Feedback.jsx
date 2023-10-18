import { useState } from 'react';
import avator from '../../assets/images/avatar-icon.png';
import { formatDate } from '../../utils/Date';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm';

const Feedback = () => {
  const [feedBackForm, showFeedBackForm] = useState(false);
  return (
    <div className="mb-[50px]">
      <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-30px">
        All reviews (272){' '}
      </h4>
      <div className="flex justify-between gap-10 mt-[20px]">
        <div className="flex gap-3  ">
          <figure className="w-10 h-10 rounded-full">
            <img src={avator} alt="avator" className="w-full" />
          </figure>
          <div>
            <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
              Frank Osoro
            </h5>
            <p className="text-[14px] leading-6 text-textColor">
              {formatDate('02-14-2023')}
            </p>
            <p className="text_para mt-3 font-medium text-[15px]">
              Good Services, Highly recommend 👍
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5).keys()].map((_, index) => (
            <AiFillStar key={index} color="#0067FF" />
          ))}
        </div>
      </div>

      <div className="mt-[30px]">
        {!feedBackForm && (
          <div className="text-center ">
            <button
              className="btn"
              onClick={() => {
                showFeedBackForm(true);
              }}
            >
              Give Feedback
            </button>
          </div>
        )}

        {feedBackForm && <FeedbackForm />}
      </div>
    </div>
  );
};

export default Feedback;
