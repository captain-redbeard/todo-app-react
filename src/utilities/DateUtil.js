export function formatDate(date) {
  function appendLeadingZeroes(number) {
    if (number <= 9) {
      return "0" + number;
    }
  
    return number;
  }

  date = new Date(date);
  const day = appendLeadingZeroes(date.getDate());
  const month = appendLeadingZeroes(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = appendLeadingZeroes(date.getHours());
  const minutes = appendLeadingZeroes(date.getMinutes());

  return year + "-" + month + "-" + day + " " + hours + ":" + minutes;
}