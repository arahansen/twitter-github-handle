(function() {
  var githubUrl;
  var user = {
    handle: '',
    firstname: '',
    lastname: '',
  };

  var userElem = document.getElementsByClassName('ProfileHeaderCard-screennameLink')[0];

  if (userElem) {
    var userNameElem = document.getElementsByClassName('ProfileHeaderCard-nameLink')[0];
    var userName   = userNameElem.text.split(' ');

    user.firstname = userName[0];
    user.lastname  = userName[1];
    user.handle = userElem.text.substr(1);

    var githubUser = fetchGithubUser(user);

    if (githubUser) {
      githubUrl = githubUser.html_url;
    } else {
      githubUrl = 'https://github.com/search?q=' + user.firstname + '+' +
        user.lastname + '&ref=searchresults&type=Users';
    }

    var githubContainer = document.createElement('span');
    githubContainer.innerText = ' | ';

    var githubLogo = buildLogo();
    var githubLink = buildLink(user.handle, githubUrl);

    githubContainer.appendChild(githubLogo);
    githubContainer.appendChild(githubLink);

    userElem.parentElement.insertBefore(githubContainer, userElem.nextSibling);
  }

  function buildLink(text, url) {
    var link = document.createElement('a');
    link.innerText = user.handle;
    link.href = githubUrl;

    return link;
  }

  function buildLogo() {
    var logo = document.createElement('img');
    logo.src = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png';
    logo.width  = 20;
    logo.height = 20;
    logo.style  = 'transform: translate(-2px, 5px)';

    return logo;
  }

  function fetchGithubUser(user) {
    var result;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", 'https://api.github.com/search/users?q=' + user.firstname + '+' + user.lastname, false);
    xhr.send();

    if (xhr.status === 200) {
      result = JSON.parse(xhr.responseText);
    }

    return result && result.total_count >= 1
      ? result.items[0]
      : undefined;
  }
})();
