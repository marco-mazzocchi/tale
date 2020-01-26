import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Form, Button } from 'react-bootstrap';
import Page from './Page/Page';
import pages, { globalPassword } from './pages.js';
import End from './End/End';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faRedo } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Route = ({ currentPage, goToPage }) => {
   const pageProps = pages[currentPage];
   return <Page {...pageProps} goToPage={goToPage} />;
};

const totalScoreDefault = {
   skill: 0,
   strength: 0,
   care: 0,
   character: 0
};

function App() {
   const [currentPage, setCurrentPage] = useState(0);
   const [totalScore, setTotalScore] = useState(totalScoreDefault);

   const getTotalScoreStored = () => {
      const totalScoreStored = JSON.parse(localStorage.getItem('totalScore'));
      if (totalScoreStored === null) return totalScoreDefault;
      return totalScoreStored;
   };

   const setTotalScoreStored = totalScoreStored => {
      localStorage.setItem('totalScore', JSON.stringify(totalScoreStored));
   };

   const storeScore = score => {
      if (!score) return;
      const totalScoreStored = getTotalScoreStored();
      score.forEach(value => {
         totalScoreStored[value.id] = totalScoreStored[value.id] + value.points;
      });
      setTotalScoreStored(totalScoreStored);
      setTotalScore(totalScoreStored);
   };

   const goToPage = (id, score) => {
      const pageIndex = pages.findIndex(page => page.id === id);
      localStorage.setItem('pageIndex', pageIndex);
      storeScore(score);
      setCurrentPage(pageIndex);
   };

   const reset = e => {
      e.preventDefault();
      const result = prompt(`Questa operazione eliminerà tutte le scelte salvate fino ad ora. 
      Chiedete l'intervento di un capo se volete proseguire`);
      if (result !== globalPassword) return;
      localStorage.removeItem('pageIndex');
      localStorage.removeItem('totalScore');
      setCurrentPage(0);
   };

   useEffect(() => {
      const storedPageIndex = localStorage.getItem('pageIndex');
      if (storedPageIndex !== null) {
         setCurrentPage(parseInt(storedPageIndex));
      }
      const totalScoreStored = getTotalScoreStored();
      if (totalScoreStored !== null) {
         setTotalScore(totalScoreStored);
      }
   }, []);

   const endPageIndex = pages.findIndex(page => page.id === 'end');

   return (
      <>
         <Navbar expand="lg" sticky="top">
            <Navbar.Brand>
               <FontAwesomeIcon icon={faBook} />
            </Navbar.Brand>
            <Form inline>
               <Button variant="outline-primary" onClick={reset}>
                  <FontAwesomeIcon icon={faRedo} />
               </Button>
            </Form>
         </Navbar>
         <Container className="content p-4">
            <Row className="justify-content-md-center">
               <Col xs lg="8">
                  {currentPage === endPageIndex ? (
                     <End totalScore={totalScore} />
                  ) : (
                     <Route currentPage={currentPage} goToPage={goToPage} />
                  )}
               </Col>
            </Row>
         </Container>
      </>
   );
}

export default App;
