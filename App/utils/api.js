export const API = {
  getBio(username) {
    const url = `https://api.github.com/users/${username.toLowerCase().trim()}`
    return fetch(url)
      .then(res => res.json())
  },
  getRepos(username) {
    const url = `https://api.github.com/users/${username.toLowerCase().trim()}/repos`
    return fetch(url)
      .then(res => res.json())
  },
  getNotes(username) {
    const url = `https://github-notetaker-tutorial-api.firebaseio.com/${username.toLowerCase().trim()}.json`
    console.log('name from api', username)
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data));
    return fetch(url)
      .then(res => res.json())
  },
  addNote(username, note) {
    username = username.toLowerCase().trim();
    const url = `https://github-notetaker-tutorial-api.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    }).then(res => res.json());
  }
}
