import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { PageIDs } from '../utilities/ids';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <div id={PageIDs.landingPage}>
    <div style={{ borderTop: '1px solid var(--tanly)' }} className="landing-green-background">
      <Container className="text-lg-start">
        <h1 className="ekomomai" style={{ fontSize: '50pt' }}>
          Rainbow Notes
        </h1>
        <h3 style={{ paddingBottom: '20px', color: '#DADED4', marginBottom: 0, textAlign: 'center' }}>
          <strong>Kōkua your fellow students</strong>
        </h3>
      </Container>
    </div>
    <div className="landing-green-background pt-0">
      <Container fluid className="container-xxl landing-photo-background">
        <div className="landing-photo-bg">
          <Container className="landing-message">
            <h1 style={{ fontSize: '50pt' }}>
              University wide note sharing
            </h1>
            <h2>
              at the click of a button.
            </h2>
          </Container>
        </div>
      </Container>
    </div>
    <div className="landing-grey-background">
      <Container className="justify-content-center text-center pt-3">
        <h2>HOW TO GET STARTED</h2>
        <Row>
          <Col className="pb-4">
            <h3>STEP 1: Search for your course</h3>
            <Image style={{ border: '10px solid var(--green-leaf)', padding: 0 }} src="/images/list-courses-page.png" className="w-100" />
          </Col>
          <Col className="pb-4">
            <h3>STEP 2: Click on a note</h3>
            <Image style={{ border: '10px solid var(--green-leaf)', padding: 0 }} src="/images/list-notes-page.png" className="w-100" />
          </Col>
        </Row>
        <Row className="pb-4">
          <Col>
            <h3>STEP 3: Review Notes</h3>
            <Image style={{ border: '10px solid var(--green-leaf)', padding: 0 }} src="/images/sample-note.jpg" width={400} />
          </Col>
        </Row>
      </Container>
    </div>

  </div>
);

export default Landing;
