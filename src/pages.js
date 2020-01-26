const score = {
   skill: {
      id: 'skill',
      points: 1
   },
   strength: {
      id: 'strength',
      points: 1
   },
   care: {
      id: 'care',
      points: 1
   },
   character: {
      id: 'character',
      points: 1
   }
};

export const globalPassword = 'ganimede';

const pages = [
   {
      id: 'welcome',
      title: 'Welcome',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod nulla a libero convallis porttitor. Maecenas vitae gravida urna. Phasellus blandit, magna eu ullamcorper hendrerit, lacus erat posuere velit, vel dignissim erat libero vel elit. Donec tempor nulla consequat tempus feugiat. Sed pulvinar facilisis vulputate. Ut pharetra a diam non facilisis. Vivamus tincidunt mattis est, vel sodales arcu ultricies sed. Fusce rutrum at nunc id varius. Sed aliquam non lectus in mollis. Etiam viverra cursus diam sed blandit. Aliquam nisl lacus, vehicula at laoreet convallis, mattis in elit. Pellentesque rutrum sagittis dui sed tristique. Phasellus id dolor id nulla pellentesque condimentum. Ut ut nisl nisl.`,
      choices: [
         {
            label: 'Continue',
            goTo: 'second'
         }
      ]
   },
   {
      id: 'second',
      title: 'Second page',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod nulla a libero convallis porttitor. Maecenas vitae gravida urna. Phasellus blandit, magna eu ullamcorper hendrerit, lacus erat posuere velit, vel dignissim erat libero vel elit. Donec tempor nulla consequat tempus feugiat. Sed pulvinar facilisis vulputate. Ut pharetra a diam non facilisis. Vivamus tincidunt mattis est, vel sodales arcu ultricies sed. Fusce rutrum at nunc id varius. Sed aliquam non lectus in mollis. Etiam viverra cursus diam sed blandit. Aliquam nisl lacus, vehicula at laoreet convallis, mattis in elit. Pellentesque rutrum sagittis dui sed tristique. Phasellus id dolor id nulla pellentesque condimentum. Ut ut nisl nisl.`,
      choices: [
         {
            label: 'Third page',
            goTo: 'third'
         },
         {
            label: 'Third with password',
            goTo: 'third',
            password: globalPassword
         },
         {
            label: 'Fourth page',
            goTo: 'fourth'
         },
         {
            label: 'Fourth with score',
            goTo: 'fourth',
            score: [score.care, score.strength]
         }
      ]
   },
   {
      id: 'third',
      title: 'Third page',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod nulla a libero convallis porttitor. Maecenas vitae gravida urna. Phasellus blandit, magna eu ullamcorper hendrerit, lacus erat posuere velit, vel dignissim erat libero vel elit. Donec tempor nulla consequat tempus feugiat. Sed pulvinar facilisis vulputate. Ut pharetra a diam non facilisis. Vivamus tincidunt mattis est, vel sodales arcu ultricies sed. Fusce rutrum at nunc id varius. Sed aliquam non lectus in mollis. Etiam viverra cursus diam sed blandit. Aliquam nisl lacus, vehicula at laoreet convallis, mattis in elit. Pellentesque rutrum sagittis dui sed tristique. Phasellus id dolor id nulla pellentesque condimentum. Ut ut nisl nisl.`,
      choices: [
         {
            label: 'End',
            goTo: 'end'
         }
      ]
   },
   {
      id: 'fourth',
      title: 'Fourth page',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod nulla a libero convallis porttitor. Maecenas vitae gravida urna. Phasellus blandit, magna eu ullamcorper hendrerit, lacus erat posuere velit, vel dignissim erat libero vel elit. Donec tempor nulla consequat tempus feugiat. Sed pulvinar facilisis vulputate. Ut pharetra a diam non facilisis. Vivamus tincidunt mattis est, vel sodales arcu ultricies sed. Fusce rutrum at nunc id varius. Sed aliquam non lectus in mollis. Etiam viverra cursus diam sed blandit. Aliquam nisl lacus, vehicula at laoreet convallis, mattis in elit. Pellentesque rutrum sagittis dui sed tristique. Phasellus id dolor id nulla pellentesque condimentum. Ut ut nisl nisl.`,
      choices: [
         {
            label: 'End',
            goTo: 'end'
         }
      ]
   },
   {
      id: 'end'
   }
];

export default pages;
