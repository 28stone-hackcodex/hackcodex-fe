import { AllSchoolData } from '../types/AllSchoolType';

export const fetchAllSchoolsData = () => {
  let result: AllSchoolData[] = [];

  fetch('http://34.247.136.187/schools', { mode: 'no-cors' })
    .then((response) => response.json())
    .then((data) => {
      result = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  return result;
};
