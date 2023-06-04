import React, { useEffect, useState } from 'react';
import SchoolImage from '../assets/Placeholder_view_vector.png';
import { SchoolItem } from '../components/SchoolItem';
import { fetchAllSchoolsData } from '../services/fetchRequest';

const AllSchools = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchAllSchoolsData();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  console.log('data', data);

  return (
    <section>
      <h1>All-Schools Page</h1>
      {data.map((item, index) => (
        <SchoolItem key={index} src={SchoolImage} />
      ))}
    </section>
  );
};

export default AllSchools;
