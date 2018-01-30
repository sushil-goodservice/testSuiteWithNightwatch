 <body>
<h1>testSuiteWithNightwatch</h1>
<p>
This repo is used to developer complete test cases with nightwatch framework, chai framework, selenium, npm and web driver.
</p>
<p>
Installation Setup and start running test with in 10 minutes.
</p>
 <h4>Test environment setup:</h4>
<hr/>
<ol>
<li>
<p> Download and Install node.js form nodejs.org.</p>
<p>- Guide to install Node and npm in Ubuntu :</p>
<p>Ubuntu has Node.js in its default apt repositories. That version of Node.js can be used to provide a consistent experience   across multiple servers.</p>
<p>Update your local package index:</p>
<p> - sudo apt-get update </p>
<p>Install Node.js:</p>
<p>- sudo apt-get install nodejs </p>
<p>You will also want to install NPM, which lets you easily manage your different Node.js packages.</p>
 <p>- sudo apt-get install npm</p>
 </li>
<li>
 <p>Clone this git repo to your local mechine (run through the terminal and for windows need to use git bash).</p>
 <p>run this commound via terminal.</p>
 <code>- git clone repo-url</code>
 </li>
 <li>
  Simply go to the project main folder by using cd commound in terminal.
  cd folder-name/
4. run: npm install.
 It will install and save all the dependencies in local system.
5. To install selenium Server:
  Mac - brew install selenium-server-standalone --save / 
  Ubuntu - npm install selenium-standalone --save
 6. Install nightwatch: 
   Mac/Ubuntu - npm install nightwatch --save
 7. Install Chai: 
   Mac/Ubuntu - npm install chai --save
 8. Then run: Ubuntu: selenium-standalone start / Mac - selenium-server -port 4444.
  This commond will start the selenium server in your local mechine (You should be the root folder of the project           directory,where the package.json is located).
 9. Then to run any testcases using nightwatch, just need to use this commond:
  nightwatch -t folder-name/file-name.js
  or
  nightwatch -t file-name.js
  or 
  nightwatch -test file-name.js
  
  - To run test, cases wise or tag wise or section wise you need to mention the tag name or section name.
  - Please go through the nightwatch documentation website to know more about End-To-End Tesing.
</ol>
Nightwatch documentation - http://nightwatchjs.org/ | 
node.js  - https://nodejs.org/en/download/ | 
npm-install - https://docs.npmjs.com/cli/install
</body>
