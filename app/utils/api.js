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
