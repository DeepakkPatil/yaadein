import { combineReducers } from 'redux';

import posts from './posts';
import auth from './Auth';

export const reducers = combineReducers({ posts,auth });
