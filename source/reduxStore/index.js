import reducers from '../reducers'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

// const mappers = new Mappers();
const middleware = [ thunk ];

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger())
}

// middleware.push((store)=>(next)=>(action)=>{
//   const prevState = store.getState();
//   // next(mappers.bindToModel(action));
//   const nextState = store.getState();
//   push(action.type, nextState, prevState);
// })

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

export default store;