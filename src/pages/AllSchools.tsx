import React, { useEffect, useState } from 'react';
import { SchoolItem } from '../components/SchoolItem';
import { fetchAllSchoolsData } from '../services/fetchRequest';
import { AllSchoolData } from '@/types/AllSchoolType';

const AllSchools = () => {
  const [data, setData] = useState<AllSchoolData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = fetchAllSchoolsData();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <section>
      <h1>All-Schools Page</h1>
      {data.map((item, index) => (
        <SchoolItem key={index} schoolData={item} />
      ))}
    </section>
  );
};

export default AllSchools;
