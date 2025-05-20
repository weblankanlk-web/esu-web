export const RELATED_COURSES_QUERY = `
query {
  courses (first: 100) {
    nodes {
      id
      title
      content
      slug
      featuredImage {
        node {
          id
          slug
          uri
          mediaItemUrl
        }
      }
      courses {
        courseId
        courseCode
        hideCount
        studentsCount
        partnerUniversity {
          node {
            id
          }
        }
        title
        subTitle
        description
        overview
        yearTitle {
          fieldGroupName
          modules
        }
        entryRequirements
        documents
        lecturePanelDescription
      }
    
      schoolTypes {
        nodes {
          slug
          name
        }
      }
      courseTypes {
        nodes {
          slug
          name
        }
      }
      deliveryModeTypes {
        nodes {
          slug
          name
        }
      }
      branchTypes {
        nodes {
          slug
          name
        }
      }
    }
  }
}
`;

export const COURSE_QUERY = `
query($id: ID!) {
  course(id: $id, idType: ID) {
    id
    title
    content
    slug
    featuredImage {
      node {
        id
        slug
        uri
        mediaItemUrl
      }
    }
    courses {
      courseId
      courseCode
      hideCount
      studentsCount
      partnerUniversity {
        node {
          id
        }
      }
      title
      subTitle
      description
      overview
      yearTitle {
        fieldGroupName
        modules
      }
      entryRequirements
      documents
      lecturePanelDescription
    }
    schoolTypes {
      nodes {
        slug
        name
        schoolTypesColorFontFields {
          color
          courseFontFamily
        }
      }
    }
    courseTypes {
      nodes {
        slug
        name
      }
    }
    deliveryModeTypes {
      nodes {
        slug
      }
    }
    branchTypes {
      nodes {
        slug
      }
    }
  }
}
`;

export const COURSE_TYPES_QUERY = `
query {
    courseTypes  {
      nodes {
        id
        name
        slug
      }
    }
}
`;

export const BRANCH_TYPES_QUERY = `
query {
  branchTypes (first: 100) {
    nodes {
      id
      name
      slug
    }
  }
}
`;

export const SCHOOL_TYPES_QUERY = `
query{
  schoolTypes (first: 100) {
    nodes {
      id
      name
      slug
    }
  }
}
`;

export const DELIVERY_MODE_QUERY = `
query {
  deliveryModeTypes(first: 100) {
    nodes {
      id
      name
      slug
    }
  }
}
`;

export const ALL_COURSE_QUERY = `
query {
  courses (first: 300) {
    nodes {
      id
      title
      content
      slug
      featuredImage {
        node {
          id
          slug
          uri
          mediaItemUrl
        }
      }
      courses {
        courseId
        courseCode
        hideCount
        studentsCount
        partnerUniversity {
          node {
            id
          }
        }
        title
        subTitle
        description
        overview
        yearTitle {
          fieldGroupName
          modules
        }
        entryRequirements
        documents
        lecturePanelDescription
      }
    
      schoolTypes {
        nodes {
          slug
          name
        }
      }
      courseTypes {
        nodes {
          slug
          name
        }
      }
      deliveryModeTypes {
        nodes {
          slug
        }
      }
      branchTypes {
        nodes {
          slug
        }
      }
    }
  }
}
`;

export const HOME_BANNER_QUERY = `
{
  page(id: "home", idType: URI) {
    id
    title
    homeBanner {
      bannerImages {
        desktopImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        mobileImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        bannerText
        logo {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        button {
          nodes {
            slug
            name
            id
            description
            ... on WithAcfSchoolTypesColorFontFields {
              schoolTypesColorFontFields {
                homeBannerButtonText
                color
              }
            }
          }
        }
      }
    }
  }
}
`;

export const TESTIMONIALS_QUERY = `
query {
    testimonials(last: 10) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        testimonials {
          testimonialType
          testimonialVideo
          thumbnailImage {
            node {
              sourceUrl
            }
          }
          testimonialText
        }
      }
    }
}
`;

export const MEMBERS_QUERY = `
query($slug: ID!) {
    schoolType(id: $slug, idType: SLUG) {
      staffs {
        nodes {
          title
          slug
          staffAcf {
            designation
          }
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export const FACULTY_TYPES_QUERY = `
query {
  schoolTypes(where: { parent: null }) {
    nodes {
      id
      name
      slug
      description
      schoolTypesColorFontFields {
        color
        courseFontFamily
        facultyName
        facultyDesktop {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
}
`;

export const FACULTY_INNER_QUERY = `
  query ($slug: [String]) {
    schoolTypes(where: { slug: $slug }) {
      nodes {
        schoolTypesColorFontFields {
          schoolOverview
          schoolOverviewTitle
          color
          courseFontFamily
          facultyName
          schoolOverviewImage {
            node {
              id
              link
              altText
              title
            }
          }
          facultyDesktop {
            node {
              id
              link
              altText
              title
            }
          }
          facultyMobile {
            node {
              id
              link
              altText
              title
            }
          }
        }
      }
    }

    dean: staffType(id: "dean", idType: SLUG) {
      staffs {
        nodes {
          title
          staffAcf {
            designation
            message
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          schoolTypes {
            nodes {
              name
              slug
              schoolTypesColorFontFields {
                facultyName
                color
                courseFontFamily
                schoolOverview
                schoolOverviewTitle
              }
            }
          }
        }
      }
    }

    hod: staffType(id: "head-of-department", idType: SLUG) {
      staffs {
        nodes {
          title
          staffAcf {
            designation
            message
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          schoolTypes {
            nodes {
              name
              slug
              schoolTypesColorFontFields {
                facultyName
                color
                courseFontFamily
                schoolOverview
                schoolOverviewTitle
              }
            }
          }
        }
      }
    }
  }
`;

export const VICE_CHANCELLOR_QUERY = `
 query  {
    staffType(id: "vice-chancellor", idType: SLUG) {
      staffs {
        nodes {
          staffAcf {
            designation
            message
          }
          title
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
}
`;

export const ACADEMIC_STAFF = `
query ($slug: ID!) {
  staff(idType: SLUG, id: $slug) {
    title
    staffAcf {
      designation
      academicTitle
      message
      careerSummary
      googleScholarUrl {
        url
        title
        target
      }
      researchGateUrl {
        url
        title
        target
      }
      academicPublications {
        text
        publicationLinks
      }
      academicQualification{
        text
        publicationLinks
      }
      academicResearchInterest {
        text
      }
      academicResearch {
        research
        researchDescription
      }
      academicAwards {
        text
        publicationLinks
      }
      academicHonors {
        text
        publicationLinks
      }
      academicMembership {
        text
        publicationLinks
      }
    }
    featuredImage {
      node {
        altText
        sourceUrl
      }
    }
    schoolTypes {
      nodes {
        name
        slug
        schoolTypesColorFontFields {
          color
          courseFontFamily
        }
      }
    }
  }
}
`;

export const GET_ALL_ACADEMIC_STAFF = `
query {
  staffs(first: 100) {
    nodes {
      id
      title
      content
      slug
      staffAcf {
        careerSummary
        designation
        message
        googleScholarUrl {
          url
          title
          target
        }
        researchGateUrl {
          url
          title
          target
        }
      }
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      schoolTypes {
        nodes {
          slug
          name
          schoolTypesColorFontFields {
            color
            courseFontFamily
          }
          children {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  }
}
`;

export const COURSE_LIST_QUERY = `
query {
  courses (first: 8) {
    nodes {
      id
      title
      slug
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      courses {
        courseId
        courseCode
        studentsCount
      }
      schoolTypes {
        nodes {
          slug
          name
        }
      }
    }
  }
}
`;

export const COURSE_GET_BY_FACULTY_TYPES = `
  query CoursesByFaculty($slug: ID!) {
    schoolType(id: $slug, idType: SLUG) {
      courses(first: 8) {
        nodes {
          id
          title
          slug
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          courses {
            courseId
            courseCode
            studentsCount
          }
          schoolTypes {
            nodes {
              slug
              name
            }
          }
        }
      }
    }
  }
`;

export const GET_COURSES_FOR_INQUIRE_FORM = `
query {
  branchTypes {
    nodes {
      name
      courses(first: 100) {
        nodes {
          title
          slug
          courses {
            courseCode
          }
        }
      }
    }
  }
}
`;