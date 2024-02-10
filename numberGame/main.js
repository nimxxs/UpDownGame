let computerNum = 0;
let startButton = document.getElementById("startButton");
let inputNum = document.getElementById("inputNum");
let comment = document.getElementById("comment");
let chances = 10;
let chancesText = document.getElementById("chancesText");
let resetButton = document.getElementById("resetButton");
let history = [];

startButton.addEventListener("click", play);
inputNum.addEventListener("focus", function() {
    inputNum.value = "";
});
resetButton.addEventListener("click", replay);

function cpNum() {
    computerNum = Math.floor(Math.random() * 100 + 1);
    console.log("정답은?", computerNum)
}
cpNum()

function play() {
    let userNum = inputNum.value;

    // 유효성 검사 - 숫자 범위
    if (userNum < 1 || userNum > 100) {
        comment.textContent = "1부터 100사이의 숫자를 입력해주세요."
        return;
    }
    // 유효성 검사 - 중복된 숫자
    if (history.includes(userNum)) {
        comment.textContent = "중복된 숫자입니다."
        return;
    }
    // 남은 기회는?
    chances--;
    chancesText.textContent = `${chances}번`
    // up&down
    if (userNum < computerNum) {
        comment.textContent = "UP!"
    } else if (userNum > computerNum) {
        comment.textContent = "DOWN!"
    } else {
        comment.textContent = "맞추셨습니다!"
        startButton.disabled = true;
    }
    // 유효성 검사 - 중복된 숫자를 history 배열에 넣기
    // 숫자 입력을 해야 history에 들어갈거고, 그러고 중복 유효성 검사를 해야함!
    history.push(userNum);
    console.log(history)
    // 기회가 없으면 disabled
    if (chances < 1) {
        startButton.disabled = true;
    }
}

function replay() {
    // input창 정리
    inputNum.value = "";
    // 새로운 번호 생성
    cpNum();
    // 히스토리 리셋
    history = [];
    // 멘트 새로고침
    comment.textContent = "";
    chancesText.textContent = "";
    // 기회 리셋
    chances = 10;
    // 남은 기회 
    chancesText.textContent = `${chances}번`
    // 시작버튼 활성화
    startButton.disabled = false;
}