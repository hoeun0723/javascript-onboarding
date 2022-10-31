function problem1(pobi, crong) {
  var answer;
  return answer;
}

function checkInput(input) {
  if (input.length !== 2) return false;

  const [left, right] = input;
  const [startPage, lastPage] = [1, 400];

  if (left % 2 !== 1 && right % 2 !== 0) return false; // 홀수, 짝수가 아닌 값 처리
  if (left + 1 !== right) return false; // 홀수와 다음 짝수가 각각 left, right인지 처리
  if (left <= startPage || left >= lastPage) return false; // 시작 페이지와 끝 페이지 보다 작거나 큰 경우 처리
  if (right <= startPage || right >= lastPage) return false; // 동일

  return true;
}

module.exports = problem1;
