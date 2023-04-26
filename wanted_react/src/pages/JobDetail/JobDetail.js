import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import JobDetailMain from './JobDetailMain';
import '../../styles/style.css';

const JobDetail = () => {
  return (
    <div className="root">
      <Header />
      <JobDetailMain/>
      <Footer />
    </div>
  );
};

export default JobDetail;
