# express-chat-app

Deployed using Render.com Web Service

See live at https://express-chat-app-webservice.onrender.com

Render.com settings
Runtime: Node
Build command: npm install
Start command: npm start

Steps followed:

1. `npm install express`
2. `npm install express-generator -g`
3. `express express-chat-app --view=pug` This sets up the initial file structure including a package.json file. You do not need to run 'npm init'. Note this will create a new directory (express-chat-app) which you need to cd into to perform the subsequent steps.
4. The generator-created files define all variables as var. Open all of the generated files and change the var declarations to const before you continue (the remainder of the tutorial assumes that you have done so).
5. `npm install`
6. To run `DEBUG=express-locallibrary-tutorial:* npm start`

7. To Enable server restart on file changes, run `npm install --save-dev nodemon` in project's root directory
8. Update the scripts in package.json

`"scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-chat-app:* npm run devstart"
  }`

9. Run using `npm run serverstart` and go to http://localhost:3000/
