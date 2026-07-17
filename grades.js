const scores = [95, 72, 58, 88, 40];

for (let i = 0; i < scores.length; i++) {
  const score = scores[i];

  if (score >= 90) {
    console.log(score + " - Grade A");
  } else if (score >= 70) {
    console.log(score + " - Grade B");
  } else if (score >= 50) {
    console.log(score + " - Grade C");
  } else {
    console.log(score + " - Fail");
  }
}