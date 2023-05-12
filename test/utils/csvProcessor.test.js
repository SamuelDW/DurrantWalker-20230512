import assert from 'assert'
import { objectsFromData, modifyPickLocation } from '../../utils/csvProcessor.js'

describe('modifyPickLocation', () => {
    it('should modify the pick_location property to include row and shelf', () => {
      const data = [
        {
          product_code: '12879',
          quantity: '12',
          pick_location: 'AL 7'
        },
        {
          product_code: '98765',
          quantity: '8',
          pick_location: 'D 3'
        }
      ];

      const modifiedData = modifyPickLocation(data);

      assert.deepStrictEqual(modifiedData, [
        {
          product_code: '12879',
          quantity: '12',
          pick_location: 'AL 7',
          row: 'AL',
          shelf: '7'
        },
        {
          product_code: '98765',
          quantity: '8',
          pick_location: 'D 3',
          row: 'D',
          shelf: '3'
        }
      ]);
    });
  });

  describe('objectsFromData', () => {

    it('should return an array of objects with the correct properties', () => {
      const data = {
        headers: ['product_code', 'quantity', 'pick_location'],
        values: [
          ['15248', '10', 'AB 10'],
          ['25636', '1', 'C 8'],
          ['26982', '1', 'AF 7'],
          ['36389', '4', 'AC 5']
        ]
      }

      const expectedOutput = [
        { product_code: '15248', quantity: '10', pick_location: 'AB 10' },
        { product_code: '25636', quantity: '1', pick_location: 'C 8' },
        { product_code: '26982', quantity: '1', pick_location: 'AF 7' },
        { product_code: '36389', quantity: '4', pick_location: 'AC 5' }
      ]

      const result = objectsFromData(data.headers, data.values);

      assert.deepStrictEqual(result, expectedOutput);
    });
  });
