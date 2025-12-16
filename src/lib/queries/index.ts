// GraphQL queries and mutations

import { gql } from '@apollo/client';

export const GET_COURSES = gql`
  query GetCourses {
    courses {
      id
      title
      description
      hours
      lessonCount
      features
      level {
        slug
        title
      }
    }
  }
`;

// export const GET_COURSE_BY_LEVEL = gql`
//   query GetCourseByLevel($slug: String!) {
//     courseByLevel(slug: $slug) {
//       id
//       title
//       level {
//         slug
//         title
//       }
//       lessons {
//         id
//         title
//         content
//         order
//       }
//     }
//   }
// `;

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        name
        email
        currentLevel
      }
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
      name
      currentLevel
    }
  }
`;


export const GET_COURSE_BY_LEVEL = gql`
  query GetCourseByLevel($slug: String!) {
    courseByLevel(slug: $slug) {
      id
      title
      level {
        title
        slug
        description
      }
      lessons {
        id
        title
        order
        content
        audioFiles {
          id
          title
          fileName
          url
          s3Key
          duration
          order
          description
        }
      }
    }
  }
`;

// Add this query for audio files
export const GET_AUDIO_FILES = gql`
  query GetAudioFiles($lessonId: Int!) {
    audioFiles(lessonId: $lessonId) {
      id
      title
      fileName
      url
      s3Key
      duration
      order
      description
    }
  }
`;

export const GET_SIGNED_URL = gql`
  query GetSignedUrl($audioId: ID!) {
    getSignedUrl(id: $audioId)
  }
`;

export const GET_AUDIO_LESSONS_BY_LEVEL = gql`
  query GetAudioLessonsByLevel($level: String!) {
    audioLessonsByLevel(levelSlug: $level) {
      id
      title
      audioUrl
      duration
    }
  }
`;
