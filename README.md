# DLP Class
Developed by Ved Topkar and the [DLP](http://DLP.io) team to help create a productive CS learning environment.

## Setting Up
1. Clone the repository to your computer

2. Install Node.js (if you have not already). On OSX with Homebrew, run `brew update && brew install node`. On a Linux machine, run `apt-get update && apt-get node`

3. Install Sails.js `npm install -g sails`

4. Install all dependencies `npm install`

## VERSION 0.0.2 TODO
- ~~Clean reinstall of sails with required plugins~~
- ~~Write out backend models~~
- ~~Initialize assets~~
- ~~User~~
  - ~~Signup feature (wow that took too much debugging)~~
  - ~~Login feature~~
  - ~~Usertype restrictions~~
- Classroom
  - ~~Overview~~
  - **Editor** (tried it, is pretty hard. Will come back to this later...)
- ClassSession
  - ~~Editor~~
  - View
    - Student View (Scaffolded out. Needs to be plugged into socket.io)
    - Teacher View
- Modules
  - Code Editor
  - ~~Assessment~~
  - Lecture Item
- Messages
- Off-task alerts (done, but needs to be integrated into classroom session)