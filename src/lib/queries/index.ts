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

export const GET_COURSE_BY_LEVEL = gql`
  query GetCourseByLevel($slug: String!) {
    courseByLevel(slug: $slug) {
      id
      title
      level {
        slug
        title
      }
      lessons {
        id
        title
        content
        order
      }
    }
  }
`;

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

