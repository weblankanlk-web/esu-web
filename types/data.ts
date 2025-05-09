export type StaffMember = {
  title: string;
  slug: string;
  staffAcf?: {
    academicQualifications: string;
    careerSummary: string;
    designation: string;
    message: string;
    myPublications: string;
    qualifications: string;
  };
  featuredImage?: {
    node?: {
      sourceUrl?: string;
      altText?: string;
    };
  };
};

