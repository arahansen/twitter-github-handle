var userElem = document.getElementsByClassName('ProfileHeaderCard-screennameLink')[0];
if (userElem) {
  var user = userElem.text.substr(1);

  var githubUrl = 'http://github.com/' + user;

  var githubContainer = document.createElement('span');
  githubContainer.innerText = ' | ';

  var githubLogo = document.createElement('img');
  githubLogo.src = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png';
  githubLogo.width  = 20;
  githubLogo.height = 20;
  githubLogo.style  = 'transform: translate(-2px,5px)';

  var githubLink = document.createElement('a');
  githubLink.innerText = user;
  githubLink.href = githubUrl;

  githubContainer.appendChild(githubLogo);
  githubContainer.appendChild(githubLink);

  userElem.parentElement.insertBefore(githubContainer, userElem.nextSibling);
}
