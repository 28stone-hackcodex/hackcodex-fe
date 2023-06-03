import locationIcon from '../../public/images/icons/location-icon.png';
import logoOne from '../../public/images/klase.png';
import logoTwo from '../../public/images/mykoob.png';
import { Tabs } from '../components/Tabs/Tabs';

const Suggestion = () => {
  return (
    <section>
      <h1>TITLE</h1>
      <p>Add info about child’s grades</p>
      <p>Connect to:</p>
      <div>
        <img src={logoOne} alt="Company logo" />
        <img src={logoTwo} alt="Company logo" />
      </div>
      <p>Select child’s future field for development</p>
      <Tabs />
      <p>Select child’s extracurricular activities</p>
      <div>123</div>
      <p>State area you are located in</p>
      <div>
        <img src={locationIcon} alt="Location icon" />
        <input type="text" />
      </div>
      <button>Generate Suggestions</button>
    </section>
  );
};

export default Suggestion;
