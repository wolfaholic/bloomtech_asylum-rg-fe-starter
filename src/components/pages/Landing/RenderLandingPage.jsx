import React from 'react';
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import useHandleDownload from './../../../data/useHandleDownload';

// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();
  const handleDownload = useHandleDownload();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>{' '}
      {/* End of Header*/}
      {/* Graphs Section */}
      <div className="graphs-section">
        <>
          <div className="graph-image-card">
            <img
              src={GrantRatesByOfficeImg}
              className="grant-office-image graph-image"
              alt="Grants Rate by Office Bar Chart img"
            />
            <span className="graph-title">Grant Rates by Office</span>
          </div>
          <div className="graph-image-card">
            <img
              src={GrantRatesByNationalityImg}
              className="grants-nationality-image graph-image"
              alt="Grants Rate by Nationality Pie Chart img"
            />
            <span className="graph-title">Grant Rates by Office</span>
          </div>
          <div className="graph-image-card">
            <img
              src={GrantRatesOverTimeImg}
              className="grant-overtime-image graph-image"
              alt="Grants Rate Over Time Line Graph Chart img"
            />
            <span className="graph-title">Grant Rates by Office</span>
          </div>
        </>
      </div>
      {/* Buttons */}
      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={handleDownload}
        >
          Download Data
        </Button>
      </div>
      {/* End Graphs*/}
      {/* Middle Section */}
      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>{' '}
      {/* End of Middle Section */}
      {/* Bottom Section */}
      <div>
        <div className="bottom-section">
          <h2>Systemic Disparity Insights</h2>
          <div className="bottom-info-row">
            <div className="info-column-section">
              <h2>36%</h2>
              <p>
                By the end of the Trump administration, the average asylum
                office grant rate had fallen 36 percent from an average of 44
                percent in fiscal year 2016 to 28 percent in fiscal year 2020.
              </p>
            </div>
            <div className="info-column-section">
              <h2>5%</h2>
              <p>
                The New York asylum office grant rate dropped to 5 percent in
                fiscal year 2020.
              </p>
            </div>
            <div className="info-column-section">
              <h2>6x Lower</h2>
              <p>
                Between fiscal year 2017 and 202, the New York asylum office's
                average grant was six times lower than the San Francisco asylum
                office.
              </p>
            </div>
          </div>
          <Button
            className="bottom-button"
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          >
            Read More
          </Button>
          <p onClick={scrollToTop} className="back-to-top">
            Back To Top ^
          </p>
        </div>
      </div>
    </div> // End of Main
  );
}

export default RenderLandingPage;
