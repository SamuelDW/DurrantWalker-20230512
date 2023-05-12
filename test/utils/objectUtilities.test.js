import assert from 'assert'
import cleanObjects, { objectsToCsv } from '../../utils/objectUtilities.js'

describe('An object should have some keys removed when the function is run', () => {
    it('should remove two keys', () => {
        const testData = [
			{
				product_code: '15248',
				quantity: 15,
				pick_location: 'AB 10',
				row: 'AB',
				shelf: '10'
			},
			{
				product_code: '25636',
				quantity: 1,
				pick_location: 'C 8',
				row: 'C',
				shelf: '8'
			}
		]

		const expected = [
            {
				product_code: '15248',
				quantity: 15,
				pick_location: 'AB 10',
			},
			{
				product_code: '25636',
				quantity: 1,
				pick_location: 'C 8',
			},
		]

        const cleaned = cleanObjects(testData, {row: true, shelf: true})
        assert.deepStrictEqual(expected, cleaned)
    })
})

describe('objectsToCsv', () => {
    it('should convert an array of objects to a CSV string', () => {
      const inputData = [
        {
            product_code: '25636',
            quantity: 1,
            pick_location: 'C 8',
            row: 'C',
            shelf: '8'
        },
        {
          product_code: '15248',
          quantity: 15,
          pick_location: 'AB 10',
          row: 'AB',
          shelf: '10'
        },
      ]

      const expectedOutput = 'product_code,quantity,pick_location,row,shelf\n25636,1,C 8,C,8\n15248,15,AB 10,AB,10'

      const result = objectsToCsv(inputData)
      assert.strictEqual(result, expectedOutput)
    });
  });
