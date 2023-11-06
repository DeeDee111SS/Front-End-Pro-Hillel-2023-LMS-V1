import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_LESSONS_AND_HOMEWORKS_BASE_URL } from '../../utils/API_CONFIG';

export const lessonsApi = createApi({
    reducerPath: 'lessonsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_LESSONS_AND_HOMEWORKS_BASE_URL,
    }),

    endpoints: (build) => ({
        getLessons: build.query({
            query: () => 'lessons'
        }),

        getLessonById: build.query({
            query: (lessonId= 1) => `lessons/${lessonId}`
        }),
    })
});


export const { useGetLessonsQuery, useGetLessonByIdQuery } = lessonsApi;