export function dateToRelative(dateStr) {
  // 後台時間秒數差的function

  const date = new Date(dateStr);
  // 接收日期字符串,將日期字符串放進date變數
  // dateStr會是這樣子的一個字串:2024-08-22T02:23:04.429Z

  const now = new Date();
  // 獲取當天時間

  const diff = now - date;
  // 當天時間減去傳進來的date,這樣可以獲取兩個時間相差的毫秒數

  if (diff < 1000 * 60) {
    // 如果差值小於1000*60也就是60秒,就顯示多少秒前
    const seconds = Math.floor(diff / 1000);
    return `${seconds}秒前`;
  }

  if (diff < 1000 * 60 * 60) {
    // 如果差值小於1000*60*60也就是60分鐘,就顯示多少分前
    const minutes = Math.floor(diff / (1000 * 60));
    return `${minutes}分鐘前`;
  }

  if (diff < 1000 * 60 * 60 * 24) {
    // 如果差值小於1000*60*60*24也就是24小時,就顯示多少小時前
    const hours = Math.floor(diff / (1000 * 60 * 60));
    return `${hours}小時前`;
  }

  // 再更大的差值就顯示四位數年份/兩位數日期
  return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + (date.getDate() + 1)).slice(-2)}`;
}
