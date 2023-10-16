import { faqs } from '../../assets/data/faqs';
import Faq from './Faq';

const FaqList = () => {
  return (
    <ul className="mt-[38px]">
      {faqs.map((faq, index) => (
        <Faq key={index} faq={faq} />
      ))}
    </ul>
  );
};

export default FaqList;
