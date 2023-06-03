import { SchoolItem } from '../components/SchoolItem';
import SchoolImage from '../assets/Placeholder_view_vector.png';

const AllSchools = () => {
  return (
    <section>
      <h1>All-Schools Page</h1>
      <SchoolItem src={SchoolImage} />
      <SchoolItem src={SchoolImage} />
      <SchoolItem src={SchoolImage} />
    </section>
  );
};

export default AllSchools;
