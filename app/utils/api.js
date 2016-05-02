export function getBio(userName) {
  userName = userName.toLowerCase().trim();
  const url = `https://api.github.com/users/${userName}`;
  return fetch(url).then((res) => res.json());
}

export function getRepos(userName) {
  userName = userName.toLowerCase().trim();
  const url = `https://api.github.com/users/${userName}/repos`;
  return fetch(url).then((res) => res.json());
}

export function getNotes(username) {
  username = username.toLowerCase().trim();
  const url = `https://jbgithub-notetaker.firebaseio.com/${username}.json`;
  return fetch(url).then((res) => res.json())
}

export function addNote(username, note) {
  username = username.toLowerCase().trim();
  const url = `https://jbgithub-notetaker.firebaseio.com/${username}.json`;
  return fetch(url, {
   method: 'post',
   body: JSON.stringify(note)
  }).then((res) => res.json());
}
