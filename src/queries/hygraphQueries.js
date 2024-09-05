import { gql } from "@apollo/client";

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
          duration
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
      duration
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

export const GET_WORKOUT_BY_DAY = gql`
  query GetWorkoutByDay($programId: ID!, $day: Int!) {
    program(where: { id: $programId }) {
      id
      workoutsWithDay(where: { day: $day }) {
        id
        day
        workout {
          id
          name
          category
          duration
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
