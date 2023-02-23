'use-strict';

{
//タイマー
function check () {
  let countdown = endTime - new Date().getTime();



//タイマーが終わるまでボタン無効と０になったらリセット
  if (countdown < 0) {
    clearInterval(intervalId);
    const countdown = 3600 * 1000;
    btn.disabled = false;
  }

   totalSeconds = Math.floor(countdown / 1000);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const minutesFormatted = String(minutes).padStart(2, '0'); 
  const secondsFormatted = String(seconds).padStart(2, '0'); 

  timer.textContent = `${minutesFormatted}:${secondsFormatted}`;
}

const timer = document.getElementById('timer');
const btn = document.getElementById('btn');
let endTime;
let intervalId;

function resetTimer() {
  clearInterval(intervalId);
  timer.textContent = "00:00";
  btn.disabled = false;
}

btn.addEventListener('click', function() {
// 1分後の時刻を計算する
endTime = new Date().getTime() + 3600 * 1000;

// タイマーを開始
intervalId = setInterval(check, 1000);
});

//猫の手がクリックしたらボタンを隠す
btn.addEventListener('click', () =>{
 endTime = new Date().getTime() + 3600 * 1000;
 btn.disabled = true;
 
 intervalId = setInterval(check, 100);
});
const $a = document.querySelectorAll('.pic-cat')[0];

  btn.addEventListener('click', () =>{
    $a.classList.add('move');
});

 


  //おみくじ
  const omikuji = document.getElementById('omikuji');
  const result = document.getElementById('result');
  const daikichi = document.querySelector('.daikichi');
  const close = document.getElementById('close');
  const chukichi = document.querySelector('.chukichi')
  const kyou = document.querySelector('.kyou')
  const syoukichi = document.querySelector('.syoukichi')

  //おみくじランダム
  omikuji.addEventListener('click', () => {
    const results = ['大吉', '中吉', '凶', '小吉'];
    const n = Math.floor(Math.random() * results.length);
    result.textContent = results[n];

//それぞれの結果の要素の表示
    daikichi.classList.toggle('show', n === 0);
    chukichi.classList.toggle('show', n === 1);
    kyou.classList.toggle('show', n === 2);
    syoukichi.classList.toggle('show', n === 3);
  });

  const closeDaikichi = document.getElementById('close-daikichi');
  const closeChukichi = document.getElementById('close-chukichi');
  const closeKyou = document.getElementById('close-kyou');
  const closeSyoukichi = document.getElementById('close-syoukichi');
    
  
    closeDaikichi.addEventListener('click', () => {
      result.classList.remove('show');
      daikichi.classList.remove('show');
    });
    closeChukichi.addEventListener('click', () => {
      result.classList.remove('show');
      chukichi.classList.remove('show');
    });

    closeKyou.addEventListener('click', () => {
      result.classList.remove('show');
      kyou.classList.remove('show');
    });

    closeSyoukichi.addEventListener('click', () => {
      result.classList.remove('show');
      syoukichi.classList.remove('show');
    });


  };
