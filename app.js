// クリックされた時の処理
document.addEventListener('click', function() {
  // タイマーの残り時間を設定
  let remainingTime = 3600; // 3600秒のタイマーを設定

  // グラフを初期化
  const ctx = document.getElementById('myChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [], // X軸のラベル
      datasets: [
        {
          label: 'タイマーの残り時間', // データセットのラベル
          data: [], // データ
          borderColor: 'rgb(255, 99, 132)',
          fill: false,
        },
      ],
    },
  });

  // タイマーを開始
  let timerId = setInterval(function() {
    // 残り時間を1秒減らす
    remainingTime--;

    // グラフに残り時間を追加
    chart.data.labels.push(`t${3600 - remainingTime}`);
    chart.data.datasets[0].data.push(remainingTime);

    // グラフを更新
    chart.update();

    // 残り時間がゼロになった場合に処理を実行する
    if (remainingTime <= 0) {
      clearInterval(timerId); // タイマーを停止する

      // グラフに1を追加
      chart.data.labels.push(`t${3600}`);
      chart.data.datasets[0].data.push(1);

      // グラフを更新
      chart.update();
    }
  }, 3600 * 1000); // 1秒ごとに処理を実行する
});
