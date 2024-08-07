import { useQuery, gql } from "@apollo/client";

export const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
      id
      name
      duration
      workoutsWithDay {
        day
        workout {
          name
        }
      }
    }
  }
`;

export const GET_PROGRAM = gql`
  query GetProgram($id: ID!) {
    program(where: { id: $id }) {
      id
      name
      focus
      difficulty
      duration
      description
      workoutsWithDay {
        id
        day
        workout {
          id
          name
          category
          exercises {
            ... on ExerciseWithDuration {
              id
              duration
              stage
            }
            ... on ExerciseWithReps {
              id
              reps
              stage
            }
          }
        }
      }
    }
  }
`;

export const GET_WORKOUT = gql`
  query GetWorkout($id: ID!) {
    workout(where: { id: $id }) {
      id
      name
      category
      exercises {
        ... on ExerciseWithDuration {
          id
          duration
          exercise {
            id
            name
            description
          }
        }
        ... on ExerciseWithReps {
          id
          reps
          exercise {
            id
            name
            description
          }
        }
      }
    }
  }
`;