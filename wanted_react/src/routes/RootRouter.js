import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/layout/Header";
import Home from "../pages/Home/Home";
import JobList from "../pages/JobList/JobList";
import JobDetail from "../pages/JobDetail/JobDetail";
import NotFound from "../pages/NotFound/NotFound";

const RootRouter = () => {
  return (
    <div className="root">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/joblist" element={<JobList/>}></Route>
          <Route path="/joblist/:id" element={<JobDetail/>}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RootRouter;
