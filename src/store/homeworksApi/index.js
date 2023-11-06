import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_LESSONS_AND_HOMEWORKS_BASE_URL } from '../../utils/API_CONFIG';

export const homeworksApi = createApi({
    reducerPath: 'homeworksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_LESSONS_AND_HOMEWORKS_BASE_URL,
    }),

    endpoints: (build) => ({
        getHomeworks: build.query({
            query: () => 'homeworks'
        }),

        getHomeworkById: build.query({
            query: (hwId) => `homeworks/${hwId}`
        }),
    })
});

export const { useGetHomeworksQuery, useGetHomeworkByIdQuery } = homeworksApi;