import { AllSchoolData } from '../types/AllSchoolType';

export const fetchAllSchoolsData = async (): Promise<AllSchoolData[]> => {
  try {
    const response = await fetch('https://skolvedis-api.zheltishev.pro/schools');

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

export const fetchSchoolData = async (id: number): Promise<AllSchoolData> => {
  try {
    const response = await fetch(`https://skolvedis-api.zheltishev.pro/schools/${id}`);

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
