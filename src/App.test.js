import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { getBonusScore } from './End/End';

test('getBonusScore', () => {
   const tests = [
      {
         score: [0, 0, 0, 0],
         expect: 0
      },
      {
         score: [1, 0, 0, 0],
         expect: 0
      },
      {
         score: [1, 1, 1, 1],
         expect: 2
      },
      {
         score: [2, 1, 2, 1],
         expect: 2
      },
      {
         score: [4, 3, 2, 2],
         expect: 4
      },
      {
         score: [12, 0, 2, 0],
         expect: 0
      },
      {
         score: [4, 3, 7, 12],
         expect: 6
      },
      {
         score: [8, 13, 4, 9],
         expect: 8
      }
   ];

   tests.forEach(test => {
      expect(getBonusScore(test.score)).toBe(test.expect);
   });
});
