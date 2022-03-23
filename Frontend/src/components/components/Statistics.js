import React from 'react';
import Reveal from 'react-awesome-reveal';
import { Col, Container, Row } from "react-bootstrap";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const Statistics = () => (
  <>
    <div className="dashboard_wrapper d-flex p-3 p-lg-4">
      <div className="dashboard_content mt-1 mb-1 px-3 pb-3">
        <Container fluid className="statistics_block">
          <Row>
            <Col className="statistics_item_col mb-4">
              <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                <div className="statistics_item p-3 text-center">
                  <div className="statistics_icon orange mx-auto mt-5 mb-4 d-flex justify-content-center align-items-center">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      viewBox="0 0 512 512">
                      <g fill="white">
                        <path d="M76.8,140.8v25.6h358.4c14.1,0,25.6,11.5,25.6,25.6v230.4c0,14.1-11.5,25.6-25.6,25.6H76.8c-14.1,0-25.6-11.5-25.6-25.6
		V192c0-14.1,11.5-25.6,25.6-25.6V140.8v-25.6C34.4,115.2,0,149.6,0,192v230.4c0,42.4,34.4,76.8,76.8,76.8h358.4
		c42.4,0,76.8-34.4,76.8-76.8V192c0-42.4-34.4-76.8-76.8-76.8H76.8V140.8z"/>
                        <path d="M179.2,140.8V89.6c0-14.1,11.5-25.6,25.6-25.6l102.4,0c14.1,0,25.6,11.5,25.6,25.6v51.2c0,14.1,11.5,25.6,25.6,25.6
		c14.1,0,25.6-11.5,25.6-25.6V89.6c0-42.4-34.4-76.8-76.8-76.8H204.8c-42.4,0-76.8,34.4-76.8,76.8v51.2c0,14.1,11.5,25.6,25.6,25.6
		C167.7,166.4,179.2,154.9,179.2,140.8z"/>
                        <path d="M230.4,268.8v0.2c0,14.1,11.5,25.6,25.6,25.6c14.1,0,25.6-11.5,25.6-25.6v-0.2c0-14.1-11.5-25.6-25.6-25.6
		C241.9,243.2,230.4,254.7,230.4,268.8"/>
                        <path d="M14.1,317.3c76.1,38.3,159,57.5,241.9,57.5c82.9,0,165.8-19.2,241.9-57.5c12.6-6.4,17.7-21.8,11.3-34.4
		c-6.4-12.6-21.8-17.7-34.4-11.3c-68.8,34.7-143.9,52-218.9,52c-75,0-150-17.3-218.9-52c-12.6-6.4-28-1.3-34.4,11.3
		C-3.6,295.5,1.5,310.9,14.1,317.3L14.1,317.3z"/>
                      </g>
                    </svg>
                  </div>
                  <div className="statistics_title mb-2 mt-2">
                    Market Cap
                  </div>
                  <h3 className="statistics_num mb-4">$15,12,15,112.151</h3>
                </div>
              </Reveal>
            </Col>
            <Col className="statistics_item_col mb-4">
              <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
              <div className="statistics_item p-3 text-center">
                <div className="statistics_icon yellow mx-auto mt-5 mb-4 d-flex justify-content-center align-items-center">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 512 512">
                    <g fill="white">
                      <path d="M76.8,140.8v25.6h358.4c14.1,0,25.6,11.5,25.6,25.6v230.4c0,14.1-11.5,25.6-25.6,25.6H76.8c-14.1,0-25.6-11.5-25.6-25.6
		V192c0-14.1,11.5-25.6,25.6-25.6V140.8v-25.6C34.4,115.2,0,149.6,0,192v230.4c0,42.4,34.4,76.8,76.8,76.8h358.4
		c42.4,0,76.8-34.4,76.8-76.8V192c0-42.4-34.4-76.8-76.8-76.8H76.8V140.8z"/>
                      <path d="M179.2,140.8V89.6c0-14.1,11.5-25.6,25.6-25.6l102.4,0c14.1,0,25.6,11.5,25.6,25.6v51.2c0,14.1,11.5,25.6,25.6,25.6
		c14.1,0,25.6-11.5,25.6-25.6V89.6c0-42.4-34.4-76.8-76.8-76.8H204.8c-42.4,0-76.8,34.4-76.8,76.8v51.2c0,14.1,11.5,25.6,25.6,25.6
		C167.7,166.4,179.2,154.9,179.2,140.8z"/>
                      <path d="M230.4,268.8v0.2c0,14.1,11.5,25.6,25.6,25.6c14.1,0,25.6-11.5,25.6-25.6v-0.2c0-14.1-11.5-25.6-25.6-25.6
		C241.9,243.2,230.4,254.7,230.4,268.8"/>
                      <path d="M14.1,317.3c76.1,38.3,159,57.5,241.9,57.5c82.9,0,165.8-19.2,241.9-57.5c12.6-6.4,17.7-21.8,11.3-34.4
		c-6.4-12.6-21.8-17.7-34.4-11.3c-68.8,34.7-143.9,52-218.9,52c-75,0-150-17.3-218.9-52c-12.6-6.4-28-1.3-34.4,11.3
		C-3.6,295.5,1.5,310.9,14.1,317.3L14.1,317.3z"/>
                    </g>
                  </svg>
                </div>
                <div className="statistics_title mb-2 mt-2">
                  Total Payout
                </div>
                <h3 className="statistics_num mb-4">$55,12,112.151</h3>
              </div>
              </Reveal>
            </Col>
            <Col className="statistics_item_col mb-4">
              <Reveal className='onStep' keyframes={fadeInUp} delay={400} duration={600} triggerOnce>
              <div className="statistics_item p-3 text-center">
                <div className="statistics_icon cyan mx-auto mt-5 mb-4 d-flex justify-content-center align-items-center">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 512 512">
                    <g fill="white">
                      <path d="M76.8,140.8v25.6h358.4c14.1,0,25.6,11.5,25.6,25.6v230.4c0,14.1-11.5,25.6-25.6,25.6H76.8c-14.1,0-25.6-11.5-25.6-25.6
		V192c0-14.1,11.5-25.6,25.6-25.6V140.8v-25.6C34.4,115.2,0,149.6,0,192v230.4c0,42.4,34.4,76.8,76.8,76.8h358.4
		c42.4,0,76.8-34.4,76.8-76.8V192c0-42.4-34.4-76.8-76.8-76.8H76.8V140.8z"/>
                      <path d="M179.2,140.8V89.6c0-14.1,11.5-25.6,25.6-25.6l102.4,0c14.1,0,25.6,11.5,25.6,25.6v51.2c0,14.1,11.5,25.6,25.6,25.6
		c14.1,0,25.6-11.5,25.6-25.6V89.6c0-42.4-34.4-76.8-76.8-76.8H204.8c-42.4,0-76.8,34.4-76.8,76.8v51.2c0,14.1,11.5,25.6,25.6,25.6
		C167.7,166.4,179.2,154.9,179.2,140.8z"/>
                      <path d="M230.4,268.8v0.2c0,14.1,11.5,25.6,25.6,25.6c14.1,0,25.6-11.5,25.6-25.6v-0.2c0-14.1-11.5-25.6-25.6-25.6
		C241.9,243.2,230.4,254.7,230.4,268.8"/>
                      <path d="M14.1,317.3c76.1,38.3,159,57.5,241.9,57.5c82.9,0,165.8-19.2,241.9-57.5c12.6-6.4,17.7-21.8,11.3-34.4
		c-6.4-12.6-21.8-17.7-34.4-11.3c-68.8,34.7-143.9,52-218.9,52c-75,0-150-17.3-218.9-52c-12.6-6.4-28-1.3-34.4,11.3
		C-3.6,295.5,1.5,310.9,14.1,317.3L14.1,317.3z"/>
                    </g>
                  </svg>
                </div>
                <div className="statistics_title mb-2 mt-2">
                  Total Holders
                </div>
                <h3 className="statistics_num mb-4">$112.151</h3>
              </div>
              </Reveal>
            </Col>
            <Col className="statistics_item_col mb-4">
              <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
              <div className="statistics_item p-3 text-center">
                <div className="statistics_icon lightblue mx-auto mt-5 mb-4 d-flex justify-content-center align-items-center">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 512 512">
                    <g fill="white">
                      <path d="M76.8,140.8v25.6h358.4c14.1,0,25.6,11.5,25.6,25.6v230.4c0,14.1-11.5,25.6-25.6,25.6H76.8c-14.1,0-25.6-11.5-25.6-25.6
		V192c0-14.1,11.5-25.6,25.6-25.6V140.8v-25.6C34.4,115.2,0,149.6,0,192v230.4c0,42.4,34.4,76.8,76.8,76.8h358.4
		c42.4,0,76.8-34.4,76.8-76.8V192c0-42.4-34.4-76.8-76.8-76.8H76.8V140.8z"/>
                      <path d="M179.2,140.8V89.6c0-14.1,11.5-25.6,25.6-25.6l102.4,0c14.1,0,25.6,11.5,25.6,25.6v51.2c0,14.1,11.5,25.6,25.6,25.6
		c14.1,0,25.6-11.5,25.6-25.6V89.6c0-42.4-34.4-76.8-76.8-76.8H204.8c-42.4,0-76.8,34.4-76.8,76.8v51.2c0,14.1,11.5,25.6,25.6,25.6
		C167.7,166.4,179.2,154.9,179.2,140.8z"/>
                      <path d="M230.4,268.8v0.2c0,14.1,11.5,25.6,25.6,25.6c14.1,0,25.6-11.5,25.6-25.6v-0.2c0-14.1-11.5-25.6-25.6-25.6
		C241.9,243.2,230.4,254.7,230.4,268.8"/>
                      <path d="M14.1,317.3c76.1,38.3,159,57.5,241.9,57.5c82.9,0,165.8-19.2,241.9-57.5c12.6-6.4,17.7-21.8,11.3-34.4
		c-6.4-12.6-21.8-17.7-34.4-11.3c-68.8,34.7-143.9,52-218.9,52c-75,0-150-17.3-218.9-52c-12.6-6.4-28-1.3-34.4,11.3
		C-3.6,295.5,1.5,310.9,14.1,317.3L14.1,317.3z"/>
                    </g>
                  </svg>
                </div>
                <div className="statistics_title mb-2 mt-2">
                  Circulating supply
                </div>
                <h3 className="statistics_num mb-4">$5,15,112.151</h3>
              </div>
              </Reveal>
            </Col>
            <Col className="statistics_item_col mb-4">
              <Reveal className='onStep' keyframes={fadeInUp} delay={800} duration={600} triggerOnce>
              <div className="statistics_item p-3 text-center">
                <div className="statistics_icon purple mx-auto mt-5 mb-4 d-flex justify-content-center align-items-center">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 512 512">
                    <g fill="white">
                      <path d="M76.8,140.8v25.6h358.4c14.1,0,25.6,11.5,25.6,25.6v230.4c0,14.1-11.5,25.6-25.6,25.6H76.8c-14.1,0-25.6-11.5-25.6-25.6
		V192c0-14.1,11.5-25.6,25.6-25.6V140.8v-25.6C34.4,115.2,0,149.6,0,192v230.4c0,42.4,34.4,76.8,76.8,76.8h358.4
		c42.4,0,76.8-34.4,76.8-76.8V192c0-42.4-34.4-76.8-76.8-76.8H76.8V140.8z"/>
                      <path d="M179.2,140.8V89.6c0-14.1,11.5-25.6,25.6-25.6l102.4,0c14.1,0,25.6,11.5,25.6,25.6v51.2c0,14.1,11.5,25.6,25.6,25.6
		c14.1,0,25.6-11.5,25.6-25.6V89.6c0-42.4-34.4-76.8-76.8-76.8H204.8c-42.4,0-76.8,34.4-76.8,76.8v51.2c0,14.1,11.5,25.6,25.6,25.6
		C167.7,166.4,179.2,154.9,179.2,140.8z"/>
                      <path d="M230.4,268.8v0.2c0,14.1,11.5,25.6,25.6,25.6c14.1,0,25.6-11.5,25.6-25.6v-0.2c0-14.1-11.5-25.6-25.6-25.6
		C241.9,243.2,230.4,254.7,230.4,268.8"/>
                      <path d="M14.1,317.3c76.1,38.3,159,57.5,241.9,57.5c82.9,0,165.8-19.2,241.9-57.5c12.6-6.4,17.7-21.8,11.3-34.4
		c-6.4-12.6-21.8-17.7-34.4-11.3c-68.8,34.7-143.9,52-218.9,52c-75,0-150-17.3-218.9-52c-12.6-6.4-28-1.3-34.4,11.3
		C-3.6,295.5,1.5,310.9,14.1,317.3L14.1,317.3z"/>
                    </g>
                  </svg>
                </div>
                <div className="statistics_title mb-2 mt-2">
                  Value of investments
                </div>
                <h3 className="statistics_num mb-4">$51,575</h3>
              </div>
              </Reveal>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </>
);
export default Statistics;