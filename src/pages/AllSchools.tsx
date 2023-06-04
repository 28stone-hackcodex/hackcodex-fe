import SchoolImage from '../assets/Placeholder_view_vector.png';
import { SchoolItem } from '../components/SchoolItem';

const AllSchools = () => {
  fetch('http://34.247.136.187/schools')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

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
