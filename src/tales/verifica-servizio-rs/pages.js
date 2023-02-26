const score = {
   relationship: {
      id: 'relationship',
      points: 1
   },
   staff: {
      id: 'staff',
      points: 1
   },
   presence: {
      id: 'presence',
      points: 1
   },
   protagonism: {
      id: 'protagonism',
      points: 1
   }
};

export const globalPassword = 'ganimede';

/*const negative = (scoreItem) => {
   return {...scoreItem, points: -1 * scoreItem.points}
}*/

const changePoints = (scoreItem, amount) => {
   return {...scoreItem, points: amount}
}

const pages = [
   {
      id: 'welcome',
      title: 'Verifica il tuo servizio',
      text: `Ti piace il tuo servizio?`,
      choices: [
         {
            label: 'Sì',
            goTo: '2',
            score: [score.relationship, score.staff, score.presence, score.protagonism]
         },
         {
            label: 'No',
            goTo: '2',
         }
      ]
   },
   {
      id: '2',
      text: `Hai partecipato ad almeno ¾ delle attività?`,
      choices: [
         {
            label: 'Sì',
            goTo: '4',
            score: [changePoints(score.presence, 2)]
         },
         {
            label: 'No',
            goTo: '3',
         }
      ]
   },
   {
      id: '3',
      text: `Hai partecipato ad almeno un evento con pernotto (associativo) / Sei riuscito/a a recuperare qualche assenza (extra-associativo)?`,
      choices: [
         {
            label: 'Sì',
            goTo: '4',
            score: [score.presence]
         },
         {
            label: 'No',
            goTo: '4',
         }
      ]
   },
   {
      id: '4',
      text: `Conosci i nomi di tutti i bambini/ragazzi a cui fai servizio?`,
      choices: [
         {
            label: 'Sì',
            goTo: '5',
            score: [score.relationship]
         },
         {
            label: 'No',
            goTo: '5',
         }
      ]
   },
   {
      id: '5',
      text: `Hai parlato almeno una volta con tutti i bambini/ragazzi a cui fai servizio?`,
      choices: [
         {
            label: 'Sì',
            goTo: '6',
            score: [score.relationship]
         },
         {
            label: 'No',
            goTo: '6',
         }
      ]
   },
   {
      id: '6',
      text: `Sei riuscito ad instaurare un rapporto privilegiato con qualcuno di loro?`,
      choices: [
         {
            label: 'Sì',
            goTo: '7',
            score: [score.relationship]
         },
         {
            label: 'No',
            goTo: '7',
         }
      ]
   },
   {
      id: '7',
      text: `Ti senti coinvolto nelle proposte/decisioni che fa il tuo staff?`,
      choices: [
         {
            label: 'Sì',
            goTo: '10'
         },
         {
            label: 'No',
            goTo: '8'
         }
      ]
   },
   {
      id: '8',
      text: `Avresti piacere ad essere coinvolto/a di più?`,
      choices: [
         {
            label: 'Sì',
            goTo: '9'
         },
         {
            label: 'No',
            goTo: '11'
         }
      ]
   },
   {
      id: '9',
      text: `Sei riuscito/a a comunicare il desiderio di essere più coinvolto/a alla tua staff?`,
      choices: [
         {
            label: 'Sì',
            goTo: '11',
            score: [score.staff]
         },
         {
            label: 'No',
            goTo: '11',
         }
      ]
   },
   {
      id: '10',
      text: `Aiuti a creare un clima sereno e positivo in staff?`,
      choices: [
         {
            label: 'Sì',
            goTo: '11',
            score: [score.staff]
         },
         {
            label: 'No',
            goTo: '11',
         }
      ]
   },
   {
      id: '11',
      text: `Sei riuscito/a a trovare qualcuno dello staff con cui hai instaurato un rapporto privilegiato?`,
      choices: [
         {
            label: 'Sì',
            goTo: '12',
            score: [score.staff]
         },
         {
            label: 'No',
            goTo: '12',
         }
      ]
   },
   {
      id: '12',
      text: `Riesci a far emergere la tua opinione nelle decisioni delle attività da fare (es. riunione di staff)?`,
      choices: [
         {
            label: 'Sì',
            goTo: '13',
            score: [score.protagonism]
         },
         {
            label: 'No',
            goTo: '13',
         }
      ]
   },
   {
      id: '13',
      text: `Durante il tuo servizio riesci a mettere in campo delle tue abilità (es. espressive/manuali/artistiche/informatiche/…)?`,
      choices: [
         {
            label: 'Sì',
            goTo: '14',
            score: [score.protagonism]
         },
         {
            label: 'No',
            goTo: '14',
         }
      ]
   },
   {
      id: '14',
      text: `Durante il tuo servizio riesci ad affrontare alcune delle tue difficoltà (es. espressive/manuali/artistiche/relazionali/….)?`,
      choices: [
         {
            label: 'Sì',
            goTo: '15',
            score: [score.protagonism]
         },
         {
            label: 'No',
            goTo: '15',
         }
      ]
   },
   {
      id: '15',
      text: `Cerchi di proporti per organizzare/gestire attività?`,
      choices: [
         {
            label: 'Sì',
            goTo: 'end',
            score: [score.protagonism]
         },
         {
            label: 'No',
            goTo: 'end',
         }
      ]
   },
   {
      id: 'end'
   }
];

export default pages;
