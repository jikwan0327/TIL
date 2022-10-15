//분수의 덧셈

function solution(denum1, num1, denum2, num2) {
  //denum1, denum2 = 분자, num1, num2 = 분모
  var answer = [0, 0];
  //분자
  let first = num1 * denum2 + num2 * denum1;
  //분모
  let second = num1 * num2;
  let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b)); //최대공약수, 약수가 아닐 경우 약수가 될 때까지 재귀함수 실행
  let min = gcd(first, second); //값 삽입
  answer[0] = first / min; // 분자 / 최대공약수
  answer[1] = second / min; // 분모 / 최대공약수

  console.log(answer);
}

solution(1, 2, 3, 4);

// 입출력 예 #1
// 1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.
// 입출력 예 #2
// 9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.
