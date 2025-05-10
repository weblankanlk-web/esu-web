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
        }
      }
      courseTypes {
        nodes {
          slug
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
}`;

export const COURSE_TYPES_QUERY = `
query {
    courseTypes  {
      nodes {
        id
        name
        slug
      }
    }
}`;

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
}`;

export const ACADEMIC_STAFF = `
query($slug: ID!){
  staff(idType: SLUG, id: $slug) {
     title
    staffAcf {
      academicQualifications
      careerSummary
      designation
      myPublications
      qualifications
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
            academicQualifications
            careerSummary
            designation
            message
            myPublications
            qualifications
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