import { services } from '../assets/data/services';
import ServiceCard from '../components/Services/ServiceCard';
const Sevices = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] ">
          {services.map((card, index) => (
            <ServiceCard data={card} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sevices;
