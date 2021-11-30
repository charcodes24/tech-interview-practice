// Given a list of the scores of different students, items, where items[i] = [IDi, scorei] represents one score from a student with IDi, calculate each student's top five average.

// Return the answer as an array of pairs result, where result[j] = [IDj, topFiveAveragej] represents the student with IDj and their top five average. Sort result by IDj in increasing order.

function highFive(items) {
    //initiate an object to store scores
  let scores = {};

    //iterate over the array of scores
    for (let i = 0; i < items.length; i++) {
      //if the scores object does NOT have a key that belongs to this student
        if (!scores.hasOwnProperty(items[i][0])) {
        //create a key in the scores object for the student id and set it equal to an emptry array
      scores[items[i][0]] = [];
        }
        //push the students score into the corresponding array in the scores object
    scores[items[i][0]].push(items[i][1]);
  }

    //create an emptry array and set it equal to a variable
  let output = [];

    
    //iterate over the keys in the scores object
    Object.keys(scores).forEach((key) => {
      //set variable average equal to 0
        let avg = 0;
        //sort the keys
        scores[key].sort((a, b) => b - a);
        //iterate over each students top five scores
        for (let i = 0; i < 5; i++) {
        //set average equal to the sum of all 5 scores
      avg += scores[key][i];
        }
        //calculate the true averabe by dividing average by 5 and rounding to the nearest whole number
        avg = Math.floor(avg / 5);
        //push the student ID number and corresponding average as a pair into the output array
    output.push([key, avg]);
  });

    //return output
  return output;
};

let listOfScores = [
  [1, 91],
  [1, 92],
  [2, 93],
  [2, 97],
  [1, 60],
  [2, 77],
  [1, 65],
  [1, 87],
  [1, 100],
  [2, 100],
  [2, 76],
];

highFive(listOfScores)