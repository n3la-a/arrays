const scores = [95, 72, 58, 88, 40];

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 70) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else {
    return "Fail";
  }
}

function printResults(scoreList) {
  for (let i = 0; i < scoreList.length; i++) {
    const score = scoreList[i];
    const grade = getGrade(score);
    console.log(score + " - " + grade);
  }
}

printResults(scores);