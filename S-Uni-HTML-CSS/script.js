const resultList = document.getElementById('results');
new URLSearchParams(window.location.search).forEach((value, name) => {
  resultList.append(`${name}: ${value}`);
  resultList.appendChild(document.createElement('br'));
});
