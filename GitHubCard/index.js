/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/Uzoamaka126')
  .then(data => {
    debugger
    console.log(data.data.avatar_url);
  })
  .catch(error => {
    debugger
  })
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

const followersArray = [];

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
  luishrd   bigknell
*/
const getGitHubUsername = (obj) => {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('.card');

  const userImage = document.createElement('img');
  img.src = data.data.avatar_url;

  const cardInfo = document.createElement('div');

  const h3 = document.createElement('h3');
  h3.textContent = data.data.name;
 
  const pUserName = document.createElement('p');
  pUserName.classList.add('username');
  p.textContent = data.data.login;

  const pLocation = document.createElement('p');
  pLocation.textContent = data.data.location;

  const pProfile = document.createElement('p');
    const pProfileLink = document.createElement('a');
    pProfileLink.textContent = data.data.url;
  pProfile.appendChild(pProfileLink);
  
  const pFollowers = document.createElement('p');
  pFollowers.textContent = data.data.followers;

  const pFollowing = document.createElement('p');
  pFollowing.textContent = data.data.following;

  const pBio = document.createElement('p');
  pBio.textContent = data.data.bio;

  cardInfo.appendChild(h3);
  cardInfo.appendChild(pUserName)
  cardInfo.appendChild(pLocation);;
  cardInfo.appendChild(pProfile);
  cardInfo.appendChild(pFollowers);
  cardInfo.appendChild(pFollowing);
  cardInfo.appendChild(pBio);

  cardDiv.appendChild(cardInfo);
  cardDiv.appendChild(userImage);

    return cardDiv;
}


