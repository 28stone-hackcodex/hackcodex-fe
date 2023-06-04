export type AllSchoolData = {
    id: number;
    city: string;
    description: string;
    imageUrl: string;
    schoolName: string;
    totalNumberOfStudents: number;
    contactPerson: ContactPerson;
  }

export type ContactPerson = {
    fullName: string;
    imageUrl: string;
    phone: string;
}