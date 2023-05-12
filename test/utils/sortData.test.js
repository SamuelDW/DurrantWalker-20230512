import assert from 'assert'
import { orderCharacters, orderNumeric, combineDuplicates } from '../../utils/sortData.js'

describe('orderCharacters', () => {
	it('should order characters according to a - az', () => {
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

		const sorted = orderCharacters(testData)
		assert.deepStrictEqual(expected, sorted)
	})
})

describe('orderNumeric', () => {
    it('should return an array of products sorted numerically by shelf', () => {
      const data = [
		{
		  product_code: '25214',
		  quantity: 10,
		  pick_location: 'A 1',
		  row: 'A',
		  shelf: '1'
		},
		{
		  product_code: '30124',
		  quantity: 5,
		  pick_location: 'A 1',
		  row: 'A',
		  shelf: '1'
		},
		{
		  product_code: '25636',
		  quantity: 1,
		  pick_location: 'C 8',
		  row: 'C',
		  shelf: '8'
		},
		{
		  product_code: '15178',
		  quantity: 9,
		  pick_location: 'D 4',
		  row: 'D',
		  shelf: '4'
		},
		{
		  product_code: '12345',
		  quantity: 15,
		  pick_location: 'L 3',
		  row: 'L',
		  shelf: '3'
		},
		{
		  product_code: '23689',
		  quantity: 10,
		  pick_location: 'X 10',
		  row: 'X',
		  shelf: '10'
		},
		{
		  product_code: '15248',
		  quantity: 15,
		  pick_location: 'AB 10',
		  row: 'AB',
		  shelf: '10'
		},
		{
		  product_code: '52568',
		  quantity: 7,
		  pick_location: 'AB 10',
		  row: 'AB',
		  shelf: '10'
		},
		{
		  product_code: '12456',
		  quantity: 10,
		  pick_location: 'AB 9',
		  row: 'AB',
		  shelf: '9'
		},
		{
		  product_code: '36389',
		  quantity: 4,
		  pick_location: 'AC 5',
		  row: 'AC',
		  shelf: '5'
		},
		{
		  product_code: '33331',
		  quantity: 6,
		  pick_location: 'AC 4',
		  row: 'AC',
		  shelf: '4'
		},
		{
		  product_code: '26982',
		  quantity: 1,
		  pick_location: 'AF 7',
		  row: 'AF',
		  shelf: '7'
		},
		{
		  product_code: '23568',
		  quantity: 8,
		  pick_location: 'AH 8',
		  row: 'AH',
		  shelf: '8'
		},
		{
		  product_code: '26897',
		  quantity: 9,
		  pick_location: 'AL 2',
		  row: 'AL',
		  shelf: '2'
		},
		{
		  product_code: '12879',
		  quantity: 12,
		  pick_location: 'AL 7',
		  row: 'AL',
		  shelf: '7'
		},
		{
		  product_code: '14789',
		  quantity: 3,
		  pick_location: 'AM 9',
		  row: 'AM',
		  shelf: '9'
		},
		{
		  product_code: '11224',
		  quantity: 8,
		  pick_location: 'AZ 4',
		  row: 'AZ',
		  shelf: '4'
		},
		{
		  product_code: '88958',
		  quantity: 4,
		  pick_location: 'AZ 10',
		  row: 'AZ',
		  shelf: '10'
		}
	  ]

      const expectedOutput = [
		{
		  product_code: '25214',
		  quantity: 10,
		  pick_location: 'A 1',
		  row: 'A',
		  shelf: '1'
		},
		{
		  product_code: '30124',
		  quantity: 5,
		  pick_location: 'A 1',
		  row: 'A',
		  shelf: '1'
		},
		{
		  product_code: '25636',
		  quantity: 1,
		  pick_location: 'C 8',
		  row: 'C',
		  shelf: '8'
		},
		{
		  product_code: '15178',
		  quantity: 9,
		  pick_location: 'D 4',
		  row: 'D',
		  shelf: '4'
		},
		{
		  product_code: '12345',
		  quantity: 15,
		  pick_location: 'L 3',
		  row: 'L',
		  shelf: '3'
		},
		{
		  product_code: '23689',
		  quantity: 10,
		  pick_location: 'X 10',
		  row: 'X',
		  shelf: '10'
		},
		{
		  product_code: '12456',
		  quantity: 10,
		  pick_location: 'AB 9',
		  row: 'AB',
		  shelf: '9'
		},
		{
		  product_code: '15248',
		  quantity: 15,
		  pick_location: 'AB 10',
		  row: 'AB',
		  shelf: '10'
		},
		{
		  product_code: '52568',
		  quantity: 7,
		  pick_location: 'AB 10',
		  row: 'AB',
		  shelf: '10'
		},
		{
		  product_code: '33331',
		  quantity: 6,
		  pick_location: 'AC 4',
		  row: 'AC',
		  shelf: '4'
		},
		{
		  product_code: '36389',
		  quantity: 4,
		  pick_location: 'AC 5',
		  row: 'AC',
		  shelf: '5'
		},
		{
		  product_code: '26982',
		  quantity: 1,
		  pick_location: 'AF 7',
		  row: 'AF',
		  shelf: '7'
		},
		{
		  product_code: '23568',
		  quantity: 8,
		  pick_location: 'AH 8',
		  row: 'AH',
		  shelf: '8'
		},
		{
		  product_code: '26897',
		  quantity: 9,
		  pick_location: 'AL 2',
		  row: 'AL',
		  shelf: '2'
		},
		{
		  product_code: '12879',
		  quantity: 12,
		  pick_location: 'AL 7',
		  row: 'AL',
		  shelf: '7'
		},
		{
		  product_code: '14789',
		  quantity: 3,
		  pick_location: 'AM 9',
		  row: 'AM',
		  shelf: '9'
		},
		{
		  product_code: '11224',
		  quantity: 8,
		  pick_location: 'AZ 4',
		  row: 'AZ',
		  shelf: '4'
		},
		{
		  product_code: '88958',
		  quantity: 4,
		  pick_location: 'AZ 10',
		  row: 'AZ',
		  shelf: '10'
		}
	  ]

      const result = orderNumeric(data);

      assert.deepStrictEqual(result, expectedOutput);
    });
  });

describe('Remove duplicates', () => {
	it('should remove duplicates and add quantity to one object', () => {
		const data = [
			{
			  product_code: '15248',
			  quantity: '10',
			  pick_location: 'AB 10',
			  row: 'AB',
			  shelf: '10'
			},
			{
			  product_code: '25636',
			  quantity: '1',
			  pick_location: 'C 8',
			  row: 'C',
			  shelf: '8'
			},
			{
			  product_code: '26982',
			  quantity: '1',
			  pick_location: 'AF 7',
			  row: 'AF',
			  shelf: '7'
			},
			{
			  product_code: '36389',
			  quantity: '4',
			  pick_location: 'AC 5',
			  row: 'AC',
			  shelf: '5'
			},
			{
			  product_code: '25214',
			  quantity: '10',
			  pick_location: 'A 1',
			  row: 'A',
			  shelf: '1'
			},
			{
			  product_code: '15248',
			  quantity: '5',
			  pick_location: 'AB 10',
			  row: 'AB',
			  shelf: '10'
			},
			{
			  product_code: '23689',
			  quantity: '10',
			  pick_location: 'X 10',
			  row: 'X',
			  shelf: '10'
			},
			{
			  product_code: '11224',
			  quantity: '8',
			  pick_location: 'AZ 4',
			  row: 'AZ',
			  shelf: '4'
			},
			{
			  product_code: '15178',
			  quantity: '9',
			  pick_location: 'D 4',
			  row: 'D',
			  shelf: '4'
			},
			{
			  product_code: '30124',
			  quantity: '5',
			  pick_location: 'A 1',
			  row: 'A',
			  shelf: '1'
			},
			{
			  product_code: '88958',
			  quantity: '4',
			  pick_location: 'AZ 10',
			  row: 'AZ',
			  shelf: '10'
			},
			{
			  product_code: '14789',
			  quantity: '3',
			  pick_location: 'AM 9',
			  row: 'AM',
			  shelf: '9'
			},
			{
			  product_code: '33331',
			  quantity: '6',
			  pick_location: 'AC 4',
			  row: 'AC',
			  shelf: '4'
			},
			{
			  product_code: '52568',
			  quantity: '7',
			  pick_location: 'AB 10',
			  row: 'AB',
			  shelf: '10'
			},
			{
			  product_code: '23568',
			  quantity: '8',
			  pick_location: 'AH 8',
			  row: 'AH',
			  shelf: '8'
			},
			{
			  product_code: '26897',
			  quantity: '9',
			  pick_location: 'AL 2',
			  row: 'AL',
			  shelf: '2'
			},
			{
			  product_code: '12456',
			  quantity: '10',
			  pick_location: 'AB 9',
			  row: 'AB',
			  shelf: '9'
			},
			{
			  product_code: '12345',
			  quantity: '15',
			  pick_location: 'L 3',
			  row: 'L',
			  shelf: '3'
			},
			{
			  product_code: '12879',
			  quantity: '12',
			  pick_location: 'AL 7',
			  row: 'AL',
			  shelf: '7'
			}
		]

		const expected = [
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
			},
			{
			  product_code: '26982',
			  quantity: 1,
			  pick_location: 'AF 7',
			  row: 'AF',
			  shelf: '7'
			},
			{
			  product_code: '36389',
			  quantity: 4,
			  pick_location: 'AC 5',
			  row: 'AC',
			  shelf: '5'
			},
			{
			  product_code: '25214',
			  quantity: 10,
			  pick_location: 'A 1',
			  row: 'A',
			  shelf: '1'
			},
			{
			  product_code: '23689',
			  quantity: 10,
			  pick_location: 'X 10',
			  row: 'X',
			  shelf: '10'
			},
			{
			  product_code: '11224',
			  quantity: 8,
			  pick_location: 'AZ 4',
			  row: 'AZ',
			  shelf: '4'
			},
			{
			  product_code: '15178',
			  quantity: 9,
			  pick_location: 'D 4',
			  row: 'D',
			  shelf: '4'
			},
			{
			  product_code: '30124',
			  quantity: 5,
			  pick_location: 'A 1',
			  row: 'A',
			  shelf: '1'
			},
			{
			  product_code: '88958',
			  quantity: 4,
			  pick_location: 'AZ 10',
			  row: 'AZ',
			  shelf: '10'
			},
			{
			  product_code: '14789',
			  quantity: 3,
			  pick_location: 'AM 9',
			  row: 'AM',
			  shelf: '9'
			},
			{
			  product_code: '33331',
			  quantity: 6,
			  pick_location: 'AC 4',
			  row: 'AC',
			  shelf: '4'
			},
			{
			  product_code: '52568',
			  quantity: 7,
			  pick_location: 'AB 10',
			  row: 'AB',
			  shelf: '10'
			},
			{
			  product_code: '23568',
			  quantity: 8,
			  pick_location: 'AH 8',
			  row: 'AH',
			  shelf: '8'
			},
			{
			  product_code: '26897',
			  quantity: 9,
			  pick_location: 'AL 2',
			  row: 'AL',
			  shelf: '2'
			},
			{
			  product_code: '12456',
			  quantity: 10,
			  pick_location: 'AB 9',
			  row: 'AB',
			  shelf: '9'
			},
			{
			  product_code: '12345',
			  quantity: 15,
			  pick_location: 'L 3',
			  row: 'L',
			  shelf: '3'
			},
			{
			  product_code: '12879',
			  quantity: 12,
			  pick_location: 'AL 7',
			  row: 'AL',
			  shelf: '7'
			}
		]

		const result = combineDuplicates(data)

		assert.deepEqual(result, expected)
	})
})
