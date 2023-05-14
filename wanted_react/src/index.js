import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 리덕스
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";
// rootReducer를 기반으로 Redux 스토어를 생성
const store = createStore(rootReducer);

// 최초의 렌더
// 이후에는 가상돔을 이용해 업데이트 된 부분만 수정
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Provider 컴포넌트의 store prop으로 전달하여 애플리케이션 전체에서 Redux 상태를 사용 가능 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
