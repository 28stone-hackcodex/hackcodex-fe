import SchoolImage from '../assets/Placeholder_view_vector.png';
import { SchoolItem } from '../components/SchoolItem';
import { fetchAllSchoolsData } from '../services/fetchRequest';

const AllSchools = () => {
  const data = fetchAllSchoolsData()

  console.log('data',data)

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
