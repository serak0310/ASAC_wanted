import React, { useEffect, useState, useRef } from "react";
import dummyForRecruitment from "../../datasource/JobList/recruitmentCompany.json";
import RecruitCompanyContent from "./RecruitCompanyContent";
import { Link } from "react-router-dom";

const ShowScroll = () => {
  const [data, setData] = useState([]);
  const [dataLen, setDataLen] = useState(0);

  const handelScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setDataLen((prev) => prev + 4);
    }
  };

  useEffect(() => {
    const list = dummyForRecruitment.companies.filter((company, i) => i < dataLen + 4);
    setData((prev) => [...list]);
    console.log("hello");
  }, [dataLen]);

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <>
      {data.map((company, idx) => (
            <Link to={`/joblist/${company.id}`} key={idx}>
              <RecruitCompanyContent
                imgSrc={company.imgSrc}
                recruitTitle={company.recruitTitle}
                companyName={company.companyName}
                responseRate={company.responseRate}
                region={company.region}
                pay={company.pay}
                key={company.id}
              />
            </Link>
      ))}
    </>
  );
};

export default ShowScroll;
