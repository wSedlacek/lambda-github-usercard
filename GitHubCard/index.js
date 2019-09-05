/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const createCard = data => {
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardInfoName = document.createElement('h3');
  const cardInfoUsername = document.createElement('p');
  const cardInfoLocation = document.createElement('p');
  const cardInfoProfile = document.createElement('p');
  const cardInfoProfileLink = document.createElement('a');
  const cardInfoFollowers = document.createElement('p');
  const cardInfoFollowing = document.createElement('p');
  const cardInfoBio = document.createElement('p');

  card.className = 'card';
  cardInfo.className = 'card-info';
  cardInfoName.className = 'name';
  cardInfoUsername.className = 'username';

  cardImg.src = data.avatar_url;
  cardInfoName.textContent = data.name || data.login;
  cardInfoUsername.textContent = data.login;
  cardInfoLocation.textContent = `Location: ${data.location || 'Unknown'}`;
  cardInfoProfile.textContent = `Profile: `;
  cardInfoProfileLink.textContent = data.html_url;
  cardInfoProfileLink.href = data.html_url;
  cardInfoFollowers.textContent = `Followers: ${data.followers}`;
  cardInfoFollowing.textContent = `Following: ${data.following}`;
  cardInfoBio.textContent = `Bio: ${data.bio}`;

  card.append(cardImg);
  card.append(cardInfo);
  cardInfo.append(cardInfoName);
  cardInfo.append(cardInfoUsername);
  cardInfo.append(cardInfoLocation);
  cardInfo.append(cardInfoProfile);
  cardInfoProfile.append(cardInfoProfileLink);
  cardInfo.append(cardInfoFollowers);
  cardInfo.append(cardInfoFollowing);
  cardInfo.append(cardInfoBio);

  console.log(data);
  return card;
};

const container = document.querySelector('.cards');

axios
  .get('https://api.github.com/users/wsedlacek')
  .then(response => createCard(response.data))
  .then(card => container.append(card));

axios
  .get('https://api.github.com/users/wSedlacek/followers')
  .then(response => response.data.map(data => createCard(data)))
  .then(cards => container.append(...cards));
