export type CourseType = {
  id: string;
  name: string;
  slug: string;
};

export type BranchType = {
  id: string;
  name: string;
  slug: string;
};

export type SchoolType = {
  id: string;
  name: string;
  slug: string;
};

export type DeliveryModeTypes = {
  id: string;
  name: string;
  slug: string;
};

export type Course = {
  id: string;
  slug: string;
  tag?: string;
  image?: string;
  featuredImage?: {
    node?: {
      mediaItemUrl?: string;
    };
  };
  title: string;
  school?: string;
  type?: string;
  duration?: string;
  courses: {
    courseId: string;
    studentsCount?: number;
    lecturePanelDescription: string | null;
    entryRequirements: string | null;
    documents: string | null;
    overview: string | null;
    description: string | null;
    yearTitle: {
      fieldGroupName: string;
      modules: string;
    } | null;
    hideCount: boolean;
    partnerUniversity: {
      node: {
        id: string;
      };
    } | null;
    title: string | null;
    subTitle: string | null;
    courseCode: string | null;
  };
  partner?: string;
  courseTypes?: { nodes: { slug: string; name: string }[] };
  schoolTypes?: {
    nodes: {
      slug: string;
      name: string;
      schoolTypesColorFontFields?: {
        color?: string;
        courseFontFamily?: string;
      };
    }[];
  };
};
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

