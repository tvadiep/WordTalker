function solution(S) {
  let curr = -1;
  while (curr < S.length) {
    if (S[curr + 1] === "a") curr++;
    else break;
  }
  curr++;
  while (curr < S.length) {
    if (S[curr] === "a") return false;
    curr++;
  }
  return true;
}

console.log(solution("ba"));
console.log(solution("aaa"));
console.log(solution("bbb"));
console.log("================");
console.log(solution("aba"));
console.log(solution("aab"));
