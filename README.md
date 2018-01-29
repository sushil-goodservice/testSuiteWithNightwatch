# testSuiteWithNightwatch
This repo is used to developer complete test cases with nightwatch framework, chai framework, selenium, npm and web driver.


Installation Setup and start running test with in 10 minutes.

Test environment setup:
1. Download and Install node.js form nodejs.org.
2. Clone this git repo to your local mechine (run through the terminal and for windows need to use git bash).
  run this commound:git clone repo-url
3. Simply go to the project main folder by using cd commound in terminal.
  cd folder-name/
4. run: npm install.
 It will install and save all the dependencies in local system.
 5. Then run: selenium-standalone start.
 This commond will start the selenium server in your local mechine (You should be the root folder of the project directory,where the package.json is located).
 6. Then to run any testcases using nightwatch, just need to use this commond:
  nightwatch -t folder-name/file-name.js
  or
  nightwatch -t file-name.js
  or 
  nightwatch -test file-name.js
  
  - To run test, cases wise or tag wise or section wise you need to mention the tag name or section name.
  - Please go through the nightwatch documentation website to know more about End-To-End Tesing.
  
Nightwatch documentation - http://nightwatchjs.org/ | 
node.js  - https://nodejs.org/en/download/ | 
npm-install - https://docs.npmjs.com/cli/install
