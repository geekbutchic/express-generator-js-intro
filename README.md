# EXPRESS GENERATOR INTRO

### STEP 1
* LOGIN TO GITHUB
* CREATE NEW REPOSITORY
* CREATE REPOSITORY NAME
* CLICK PUBLIC
* CLICK ADD README.MD
* SET .GIT_IGNORE TO NODE
* CLICK CREATE REPOSITORY
* COPY GIT CLONE URL

### STEP 2
* RUN 'npx express-generator -e' IN PROJECT FOLDER
* RUN 'npm i --save-dev nodemon' INSTALLS NODEMON AS DEV DEPENDENCY
* RUN 'npm i' TO INSTALL ALL MODULES
* ADD AND DO INITIAL COMMIT.

### STEP 3
* CLICK ON PACKAGE.JSON
* UNDER SCRIPTS ADD "dev": "node ./bin/www"
* NOW YOU CAN RUN 'npm run dev'

TO NOTE : CHANGING PORT
"PORT=4000 node ./bin/www"

### ASSIGNMENT 1
* Change the start command to do PORT=4000 before node bin/www. ✅
* Create a new GET route /datetime that will send the current date and time as a string to the browser. Hint: The method new Date() will create a new date object that has methods for retrieving the current date and time as strings. ✅
* Create a new GET route /users/myname in the users.js routes file. The route should return your name to the browser. ✅
* Create a new GET route /users/myfavoritemovies in the users.js routes file. The route should return your three favorite movies in an array to the browser. Hint: You may need to use res.json() instead of res.send().
* Stretch goal: Use res.render to render the above routes using the index.ejs template and modify the index.ejs template as needed. Or create your own users.ejs template.