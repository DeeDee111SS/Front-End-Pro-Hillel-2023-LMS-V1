import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ARTICLES_BASE_URL } from '../../utils/API_CONFIG';


export const articlesApi = createApi({
    reducerPath: 'articlesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_ARTICLES_BASE_URL,
    }),

    endpoints: (build) => ({
        getPosts: build.query({
            query: (limit) => `posts?_limit=${limit}`
        }),

        getPostById: build.query({
            query: (postId) => `posts/${postId}`
        }),
    })
});


export const { useGetPostsQuery, useGetPostByIdQuery } = articlesApi;