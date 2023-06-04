import { AllSchoolData } from '@/types/AllSchoolType';
import { Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { SchoolItem } from '../components/SchoolItem';
import { fetchAllSchoolsData } from '../services/fetchRequest';
import { Loader } from '../components/Loader/Loader';

const AllSchools = () => {
  const [data, setData] = useState<AllSchoolData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationItemCount, setPaginationItemCount] = useState(5);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // This is the secret formula. Stop being a nerd don't look in the code!
  const loadingTime = Math.random() * 69 * 50;

  setTimeout(() => {
    setIsLoading(false);
  }, loadingTime);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchAllSchoolsData();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (current: number, size: number) => {
    setCurrentPage(1); // Reset current page to 1
    setPaginationItemCount(size);
    console.log('current', current);
    console.log('size', size);
  };

  const startIndex = (currentPage - 1) * paginationItemCount;
  const endIndex = startIndex + paginationItemCount;
  const paginatedData = data.slice(startIndex, endIndex);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      <h1>We've found 20+ schools that match your criteria</h1>
      {paginatedData.map((item, index) => (
        <SchoolItem key={index} schoolData={item} />
      ))}
      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        onShowSizeChange={handlePageSizeChange}
        total={data.length}
        pageSize={paginationItemCount}
        showSizeChanger
        pageSizeOptions={['5', '10', '20', '50', '100']}
      />
    </section>
  );
};

export default AllSchools;
