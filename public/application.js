// const doupload = function doupload() {

const btn = document.getElementById('btnupload');
btn.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = document.getElementById('file').files[0];
  const entry = document.getElementById('file').files[0];
  console.log('doupload', entry, data);
  fetch(`/public/uploads/${encodeURIComponent(entry.name)}`, {
    method: 'PUT',
    body: data,
  });
  alert('your file has been uploaded');
  location.reload();
});

// }

// module.exports = doupload