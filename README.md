# Node.js CLI csv sorting
This task was given for a interview process.

Task was, given a CSV, find the ideal path to get the products, summing up where products were duplicated, and order them according to A - AZ, 1 - 10 for each alphabetical value.

## How I approached the task
1. I knew i didn't know how to use/write CSV files are write a CLI program in node, so I looked into how to go about this, common libraries tutorials
2. I looked at the data and how to approach the problem, what I might need, what I already knew.
3. Set up a very basic function and built how to pass arguments to the functions.
4. Once this was done, broke it down into steps
    - Split the CSV into rows, and split that out into objects
    - Make the objects easier to work with, remove duplicates (summing them) and adding the row and shelf values to make the next steps easier
    - sort out alphabetical first
    - sort out numerical order by grouping the alphabetical values
    - clean the objects once completed, removing anything I'd added to complete the sorting
    - convert the data back into a csv string ready to write
    - write the file to a specific directory
5. Document anything that wasn't documented completely
6. Had a final run through, checked everything as best as I could and zipped this up for you

## Prequisites:
1. Node.js

## Installation.
1. whilst in the root of this project, run `npm i -g` which will install it globally on your system

## Packages used
- [Chalk](https://www.npmjs.com/package/chalk) For making the terminal more readable for errors, warnings or successes
- [Commander](https://www.npmjs.com/package/commander) For ease of creating command line interfaces
- [fs-extra](https://www.npmjs.com/package/fs-extra) for some additional features for writing the csv file, such as creating the directory if specified
- [Mocha](https://www.npmjs.com/package/mocha) my usual test suite
- [ESLint](https://www.npmjs.com/package/eslint) my usual linting standards

## Using the application
1. Run the command `order sort ./path/to/csv/file`
2. to specify the directory you wish to write to, `order sort ./path/to/file -f ./path/to/save` defaults to application directory
3. To specify a delimiter for the CVS use `order sort ./path/to/file -d ;` defaults to `,`

### Additional Notes:
- There is a test script, whilst in the directory run `npm test` to run the tests that are written
- There is a eslint file to keep code up to standards
- I'd not actually used much of the file input for Node so this was a new thing to me
- I've accounted for commas at the end of a line, as well as whitespace. For a more feature complete, I would like to add ability to remove extra commas elsewhere
- There's two extra CSVs, `no_data.csv` and `bad_data.csv` for some extra things

### Notes for interviewers:
- Whilst I have touched on Typescript, I haven't used it enough currently to be confident with it enough, so functions have used JSDoc for type hints
- To perhaps add records of csv inputs, sqlite could be used and used to add reporting capabilities
I would use the package `better-sqlite3` for this as it's very decent to use (for me)
- As mentioned, Node.js is a secondary language to me as my primary is PHP so hopefully this is all up to scratch!

- Thank you for taking your time to look at this!
