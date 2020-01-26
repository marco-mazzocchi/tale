import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

function Page({ id = 'intro', text = '', title = '', choices = [], goToPage }) {
   const Choices = choices.map((choice, index) => {
      return (
         <Button
            key={index}
            onClick={() => {
               if (choice.hasOwnProperty('password')) {
                  const result = prompt(
                     'Questa risposta richieda una prova: andate dai capi che vi sbloccheranno la risposta nel caso superiate la prova!'
                  );
                  if (result === choice.password) {
                     goToPage(choice.goTo, choice.score);
                  }
                  return false;
               }
               goToPage(choice.goTo, choice.score);
            }}
            className="mr-2 mb-2"
         >
            {choice.label}
         </Button>
      );
   });
   return (
      <>
         <h1>{title}</h1>
         <div
            className="mb-4"
            dangerouslySetInnerHTML={{
               __html: text
            }}
         />
         <div className="text-center">
            <ButtonToolbar>{Choices}</ButtonToolbar>
         </div>
      </>
   );
}

export default Page;
