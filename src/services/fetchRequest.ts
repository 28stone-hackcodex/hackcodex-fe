import { AllSchoolData } from '../types/AllSchoolType';

export const fetchAllSchoolsData = async (): Promise<AllSchoolData[]> => {
  try {
    const response = await fetch('http://34.247.136.187/schools');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
