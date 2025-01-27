# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

## Added Strech Features
### 1. Navigation Bar
When a user clicks the Compose button in the Navigation Bar:
if the Compose Tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused
if the Compose Tweet box is currently showing, then it is hidden
in either case, transitions between 'shown' and 'hidden' states should be animated
### 2. Second Toggle Button
When a user scrolls a second button appears in the lower right hand corner (center in mobile view)
If the user clicks this button they are brought back up to the top of the page

## Screenshots
![Tweet submission](docs/tweet%20submission.png)
![Double down arrow toggle hide/show tweet area](docs/toggle%20hide.png)
![Back to top button when scroll bar is present](docs/back%20to%20top.png)
![Hovering over tweetbox reveals a shadow while hovering over flag/retweet/heart changes color](docs/hover.png)
![Empty tweet error](docs/error%20empty.png)
![Character limit exceeded error](docs/error%20limit.png)
![Mobile browser version for smaller screens](docs/mobile%20.png)

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
