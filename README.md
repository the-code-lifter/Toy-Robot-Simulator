# Toy-Robot-Simulator

Description:
* The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
* There are no other obstructions on the table surface.
* The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement
that would result in the robot falling from the table must be prevented, however further valid movement commands must still
be allowed.

* Create an application that can read in commands of the following form -
```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```

* PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
* The origin (0,0) can be considered to be the SOUTH WEST most corner.
* The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
* MOVE will move the toy robot one unit forward in the direction it is currently facing.
* LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
* REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.

* A robot that is not on the table can choose the ignore the MOVE, LEFT, RIGHT and REPORT commands.
* Input can be from a file, or from standard input, as the developer chooses.
* Provide test data to exercise the application.




Constraints:
The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.
Any move that would cause the robot to fall must be ignored.

Example Input and Output:
```
a)
PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH
```

```
b)
PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST
```

```
c)
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH
```


## Getting Started

To run this project on your machine you just need to clone the repository by using this command `git clone https://github.com/the-code-lifter/Toy-Robot-Simulator.git` and change directory to the root folder.

After changing to the root directory of the project you need to run `npm install` to install the required packages for this project.

After you have installed the required packages you can run the application by entering `node index.js` into the terminal.

There are 4 example files you can choose from. To use these examples I have listed the commands below:
```
node index.js example1
node index.js example2
node index.js example3
node index.js example4
```

### Prerequisites

```
Node >= v8.9.4
```

## Running the tests

To run the tests for this application you just need to run this command `npm test`

## Authors

* **Jake Rossi** - *Initial work* - [PurpleBooth](https://github.com/the-code-lifter)
