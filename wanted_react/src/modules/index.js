import { combineReducers } from 'redux';
import bookmark from './Bookmark';
import loginout from './Login';

// combineReducers(): 여러개의 리듀서를 합치기 위해 사용
// 여러 개의 독립적인 리듀서를 각각 관리하는 대신에 단일 리듀서로 합쳐진 상태 트리를 관리
const rootReducer = combineReducers({
  bookmark,
  loginout,
});

export default rootReducer;