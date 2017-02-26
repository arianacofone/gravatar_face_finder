


let md5 = function(value) {
  let modifiedValue = value.trim().toLowerCase();
  return CryptoJS.MD5(value).toString();
}

function request() {
  let email = document.querySelector('.email').value;
  let hash = md5(email);
  let url = `http://www.gravatar.com/avatar/${hash}`;

  let image = document.querySelector('.image').src = url;

  document.querySelector('.image').innerHTML = url;
  return (false);
}

// http://jsfiddle.net/33HMj/
