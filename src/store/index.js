import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { articlesApi } from './articlesApi';
import { homeworksApi } from './homeworksApi';
import { lessonsApi } from './lessonsApi';


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articlesApi.middleware, homeworksApi.middleware, lessonsApi.middleware)
});

export default store;