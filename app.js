// FUNCTIONALITY

// md5 function
// 1. grabs value
// 2. removes the spacing before/after input with trim()
// 3. lowercases input with toLowerCase()
// 4. returns the input hashed using MD5 (script file linked)
let md5 = function(value) {
  let modifiedValue = value.trim().toLowerCase();
  return CryptoJS.MD5(value).toString();
}

// request function:
// 1. get email value from input
// 2. hashes the value using the md5 function above
// 3. sets the hash in the gravatar url
// 4. creates an image element, setting the src to the url
// 5. appends image to the document
// 6. clears email input and prevents the page from refreshing
function request() {
  let email = emailInput.value;
  let hash = md5(email);
  let url = `http://www.gravatar.com/avatar/${hash}`;
  
  image.src = url;
  gravatar.appendChild(image);

  emailInput.value = '';
  return (false);
}

// DOM MANIPULATION

// creates paragraph HTML Element and adds direction
let title = document.createElement('p');
title.innerHTML = 'Gravatar Face Finder';

// creates email input
let emailInput = document.createElement('input');
emailInput.type = "email";

// creates submit input and adds event to call request function onclick
let submitInput = document.createElement('input');
submitInput.type = "submit";
submitInput.onsubmit = request;

// creates image element to be called later in request function
let image = document.createElement('img');

let form = document.createElement('form');
form.appendChild(title);
form.appendChild(emailInput);
form.appendChild(submitInput);

// creates a parent element with id of gravatar and appends all of the children created above
let gravatar = document.createElement('div');
document.body.appendChild(gravatar);
gravatar.setAttribute('id', 'gravatar');
gravatar.appendChild(form);
