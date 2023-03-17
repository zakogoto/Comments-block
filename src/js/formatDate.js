function formatDate(date) {
  let d = new Date(Date.parse(date));
  let today = new Date();

  let arr = [d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()].map(item => item < 10 ? '0' + item : item);

  if(d.getDate() === today.getDate() ) {
    return `Сегодня ${arr.slice(3).join(':')}`
  }

  if (today.getDate() - d.getDate() === 1) {

    return `Вчера ${arr.slice(3).join(':')}`

  } else {

    return `${arr.slice(0, 3).reverse().join('.')}`
  }
}

export default formatDate;