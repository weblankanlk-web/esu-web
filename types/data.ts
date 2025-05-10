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

export type Faculty = {
  id: string;
  name: string;
  slug: string;
  description: string;
  schoolTypesColorFontFields: {
    color: string;
    courseFontFamily: string[]; // It's an array as there are 6 values in cms
    facultyName: string; // we need to get this as only the faculty should change color
    facultyDesktop?: {
      node: {
        sourceUrl: string;
        altText?: string;
      };
    } | null; // default assign null
  };
};

export type FacultyInner = {
  schoolTypesColorFontFields: {
    schoolOverview: string;
    schoolOverviewTitle: string;
    color: string;
    courseFontFamily: string;
    facultyName: string;
    schoolOverviewImage: {
      node: {
        id: string;
        link: string;
        altText: string;
        title: string;
      };
    };
    facultyDesktop: {
      node: {
        id: string;
        link: string;
        altText: string;
        title: string;
      };
    };
    facultyMobile: {
      node: {
        id: string;
        link: string;
        altText: string;
        title: string;
      };
    };
  };
};

export type DeanDetails = {
  title: string;
  staffAcf: {
    designation: string;
    message: string;
    qualifications: string;
  };
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
};