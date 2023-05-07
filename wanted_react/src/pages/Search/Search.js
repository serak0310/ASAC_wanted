import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import JobDetailCompany from '../JobDetail/JobDetailCompany';
import dummyForRecruitment from '../../datasource/JobList/recruitmentCompany.json';
import CategorySelections from '../JobList/CategorySelections';
import CategoryButtonSlider from '../JobList/CategoryButtonSlider';
import Recruit from '../JobList/Recruit';
import SearchMoreInfo from './SearchMoreInfo';
import SearchNoMore from './SearchNoMore';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchKeyword = searchParams.get('query');

  const companyList = dummyForRecruitment.companies.filter(
    (company) =>
      company.companyName.includes(searchKeyword) ||
      company.position.includes(searchKeyword)
  );

  console.log(companyList);

  const companyNameList = companyList.map((company) => company.companyName);

  const companyNameSet = [...new Set(companyNameList)];

  return (
    <>
      <div className="search-header">
        <h1 className="search-header__title">{searchKeyword}</h1>
      </div>
      <section className="search-body">
        <div className="search-content">
          {companyList.length ? (
            <div className="search-content__companies">
              <h2 className="search-content__title">
                회사 {companyNameSet.length}
              </h2>
              <div className="search-content__company-list">
                {companyNameSet.map((name) => (
                  <JobDetailCompany pageId={name} page="search" />
                ))}
              </div>
            </div>
          ) : null}
          <div className="search-content__positions">
            <h2 className="search-content__title">
              포지션 {companyList.length}
            </h2>
            <div className="search-content__categories">
              <CategorySelections />
              <hr />
              <div className="category-buttons">
                <CategoryButtonSlider />
              </div>
              {companyList.length ? (
                <ul className="recruitments">
                  {companyList.map((searchedCompany) => (
                    <Link
                      to={`/wd/${searchedCompany.id}`}
                      key={searchedCompany.id}
                    >
                      <Recruit
                        imgSrc={searchedCompany.imgSrc}
                        position={searchedCompany.position}
                        companyName={searchedCompany.companyName}
                        responseRate={searchedCompany.responseRate}
                        location={searchedCompany.responseRate}
                        incentive={searchedCompany.incentive}
                        key={searchedCompany.id}
                      />
                    </Link>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
          {companyList.length ? <SearchMoreInfo /> : <SearchNoMore />}
        </div>
      </section>
    </>
  );
};

export default Search;