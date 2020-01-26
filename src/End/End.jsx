import React from 'react';
import { Badge, Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faDumbbell,
   faSignLanguage,
   faHeart,
   faStar
} from '@fortawesome/free-solid-svg-icons';

export function getBonusScore(score) {
   score.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
   });
   const minValue = score[0];
   return minValue * 2;
}

function End({ totalScore }) {
   const sections = [
      {
         label: 'Salute e forza fisica',
         id: 'strength',
         variant: 'success',
         icon: faDumbbell
      },
      {
         label: 'Abilità manuale',
         id: 'skill',
         variant: 'warning',
         icon: faSignLanguage
      },
      {
         label: 'Servizio al prossimo',
         id: 'care',
         variant: 'danger',
         icon: faHeart
      },
      {
         label: 'Formazione del carattere',
         id: 'character',
         variant: 'info',
         icon: faStar
      }
   ];

   let finalScore = Object.values(totalScore).reduce((acc, score) => {
      acc += score;
      return acc;
   }, 0);

   const bonusScore = getBonusScore(Object.values(totalScore));
   finalScore += bonusScore;

   return (
      <>
         <h1>The End</h1>
         <p>
            Congratulazioni, avete terminato la vostra avventura! Ecco il vostro
            punteggio:
         </p>
         <Table>
            <tbody>
               {sections.map(section => {
                  return (
                     <tr key={section.id}>
                        <td>
                           <FontAwesomeIcon icon={section.icon} />
                        </td>
                        <td>{section.label}</td>
                        <td>
                           <Badge pill variant={section.variant}>
                              {totalScore[section.id]}
                           </Badge>
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </Table>
         <p>
            <em>
               Nota: per ogni 4 punti di ogni tipo otterrete 2 punti bonus.
            </em>
         </p>

         <Card body className="text-center" bg="light">
            <h3>Punteggio finale</h3>
            <h1>
               <Badge pill variant="primary">
                  {finalScore}
               </Badge>
            </h1>
         </Card>
      </>
   );
}

export default End;
