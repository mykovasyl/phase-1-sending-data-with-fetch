
function submitData(userName, userEmail) {
  const list = document.querySelector('body')
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  })
  .then(resp => resp.json())
  .then(function (data) {
    list.append(data.id);
  })
  .catch(function (err) {
    list.append(err.message)
  })
}