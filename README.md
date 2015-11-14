# dig-it-games-Coding-Assessment
a brief understanding of my JS Coding skills.... 



Assessment:
Create a web app that drills addition equations. The app should appear as a native application on iOS when it is installed on the device home screen. It should also run in a browser.  The app should display three screens: a main menu, an equation screen, and an end of game screen.

The main menu should display a title for the app and a “play” button. When the “play” button is pressed, it should display the equation screen.

The equation screen should display a random addition equation of two numbers. Each number should be 2-5 digits long. Beneath the equation, display a row of blank boxes with a box for each digit of the solution. Beneath the solution boxes, display a row of boxes containing the digits 0-9.

To input the solution, the player drags the correct digit boxes and drops them onto the solution boxes. The dragging mechanism should recognize touch events on an iOS device.

When a digit box is dropped on a solution box, the solution box displays that digit and the digit box reappears in the row of digit boxes. Dropping a digit box on a solution box that already has a digit, the digit in the solution box is replaced by the new digit.

When the solution boxes all have numbers, evaluate the solution and indicate to the player if it is correct or not. After a short delay, display another addition equation for solving. In this manner, display five addition equations, alternating between displaying the equation vertically and horizontally. After all five equations have been solved, display the end of game screen.

The end of game screen should display a list of all of the equations presented to the player, along with the player’s solution and an indication of whether the solution was correct or not. If the solution was incorrect, display the correct solution. The end of game screen should display two buttons: “new game”, which resets the game and returns to the equation screen to display five more equations; and “main menu”, which returns to the main menu screen.

When completed, create a new public repository on GitHub, commit the project, and add a readme.md file with any additional information you’d like to supply. Then by Sunday, November 15 8:00am, send the link to the repository as a reply all to this email.
