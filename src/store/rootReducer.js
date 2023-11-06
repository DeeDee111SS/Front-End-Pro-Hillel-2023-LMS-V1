import { combineReducers } from 'redux';
import authReducer from './slices/authorization';
import artReducer from './slices/articles';
import lessonsReducer from './slices/lessons';
import hwReducer from './slices/homeworks';
import { articlesApi } from './articlesApi';
import { homeworksApi } from './homeworksApi';
import { lessonsApi } from './lessonsApi';

const rootReducer = combineReducers({
    [articlesApi.reducerPath]: articlesApi.reducer,
    [homeworksApi.reducerPath]: homeworksApi.reducer,
    [lessonsApi.reducerPath]: lessonsApi.reducer,   
    authorization: authReducer,
    articles: artReducer,
    lessons: lessonsReducer,
    homeworks: hwReducer,
});

export default rootReducer;
