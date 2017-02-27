# Gravatar Challenge

![app image](/style/screenshot.png)

## The Challenge

Create a simple framework that can be integrated into any other project for fetching a Gravatar image.

## Technologies Used

* HTML
* CSS
* Vanilla Javascript
* CrypoJS/MD5 ([From Google Code](https://code.google.com/archive/p/crypto-js/))

## The Strategy

The most important aspect of this challenge was to make the code as simple as possible, without using too many outside libraries. I wanted this framework to be lightweight and easily applied to any project. Below are some ways in which I tackled this:

* No Elements are directly created in the HTML page, Everything is generated from the Javascript file.
* Through using CrypoJS/MD5, I was able to hash the email input in three lines of code.
* CSS is streamlined to be as portable as possible.

## The Hurdles

My first hurdle was to research and execute the hashing of the email input. This was the first time I had heard of Gravatar or hashing, so tackling the learning curve was the initial priority.

My second hurdle was taking my initial code and refactoring it to be as concise and simple as possible. I knew I wanted future users to be able to plug in my code and use it without any frills, so the transition to make that happen was what took the longest.

My third was creating CSS styling that would be neutral when applied to other websites, but fun enough to be happy for the eyes. Hence all Gravatar code is in neutral color, but the body pops with a blue color just for this project instance.

## Round II

Since Gravatar is so new to me, I would love to go back and develop this file out to integrate it with the browser more. Specifically, when your Gravatar image is produced, how can that information remain available to use until you close your browser session.

### Author

Ariana Dziedzic

### Acknowledgements

WinIt for giving me a shot and motivating me have fun with code on a Sunday!
