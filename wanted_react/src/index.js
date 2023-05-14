import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 리덕스
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";

const store = createStore(rootReducer);

// 최초의 렌더
// 이후에는 가상돔을 이용해 업데이트 된 부분만 수정
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
