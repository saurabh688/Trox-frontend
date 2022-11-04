import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import saga from './saga';

const sagaMiddleWare = createSagaMiddleware ();
const store = configureStore ({
  reducer,
  middleware : getDefaultMiddleware => getDefaultMiddleware({ thunk: false,  serializableCheck : false }).concat(sagaMiddleWare)
});
sagaMiddleWare.run (saga);

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
