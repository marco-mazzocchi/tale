import React from 'react';
import { Badge, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCalendar,
   faHandHoldingHeart,
   faBullhorn,
    faHandshake
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
         label: 'Relazione con gli educandi',
         id: 'relationship',
         variant: 'success',
         icon: faHandHoldingHeart,
         maxScore: 4,
      },
      {
         label: 'Relazione con lo staff',
         id: 'staff',
         variant: 'warning',
         icon: faHandshake,
         maxScore: 3,
      },
      {
         label: 'Presenza',
         id: 'presence',
         variant: 'danger',
         icon: faCalendar,
         maxScore: 3,
      },
      {
         label: 'Protagonismo',
         id: 'protagonism',
         variant: 'info',
         icon: faBullhorn,
         maxScore: 5,
      }
   ];

   /*let finalScore = Object.values(totalScore).reduce((acc, score) => {
      acc += score;
      return acc;
   }, 0);

   const bonusScore = getBonusScore(Object.values(totalScore));
   finalScore += bonusScore;*/

   return (
      <>
         <h1>Fine!</h1>
         <p>
            Congratulazioni, hai terminato la tua verifica! Ecco i tuoi
            punteggi:
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
                              {totalScore[section.id]} / {section.maxScore}
                           </Badge>
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </Table>
      </>
   );
}

export default End;
