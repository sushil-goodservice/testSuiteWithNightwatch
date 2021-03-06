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
<code> sudo apt-get update </code>
<p>Install Node.js:</p>
<code>sudo apt-get install nodejs </code>
<p>You will also want to install NPM, which lets you easily manage your different Node.js packages.</p>
 <code>sudo apt-get install npm</code>
 <br>
 <p>- Guide to install Node and npm in Mac :</p>
<p>In order to install everything on a Mac, we’ll be running commands in Terminal.</p>
<p>We’re going to use Node Version Manager (nvm) to install Node.js and npm.</p>
<code> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash </code>
<p>Open the ~/.bash_profile file, and make sure source ~/.bashrc is written in there somewhere. Restart the terminal.</p>
<p>Run the install command.</p>
<code>source ~/.nvm/nvm.sh</code><br>
<code>touch ~/.bash_profile</code><br>
<code> nvm install node </code>
<p>Run the use command.</p>
<code>nvm use node </code>
 <p>Now that Node.js and npm are installed, test them by typing <code>node -v</code> and <code>npm -v</code>.</p>
</li>
<li>
 <p>Clone this git repo to your local mechine (run through the terminal and for windows need to use git bash).</p>
 <p>run this commound via terminal.</p>
 <code>git clone repo-url</code>
 </li>
 <li>
  <p>Simply go to the project main folder by using cd commound in terminal.</p>
  <code>cd folder-name/</code>
  </li>
 <li>
  <p>It will install and save all the dependencies in local system.</p>
  <code> npm install </code>
 </li>
 <li>
  <p>To install selenium Server:</p>
  <p>Mac -</p>
  <code> brew install selenium-server-standalone --save </code>
  <p>Ubuntu -</p>
  <code>npm install selenium-standalone --save</code>
 </li>
 <li>
  <p>Install nightwatch (Mac/Ubuntu): </p>
  <code> npm install nightwatch --save </code>
 </li>
 <li>
  <p>Install Chai (Mac/Ubuntu):</p>
  <code> npm install chai --save </code>
  </li>
 <li>
  <p>Ubuntu: </p>
  <code>selenium-standalone start</code>
  <p>Mac: </p>
  <code>selenium-server -port 4444</code>
  <p>This commond will start the selenium server in your local mechine (You should be the root folder of the project           directory,where the package.json is located).</p>
  </li>
 <li>
  <p> Then to run any testcases using nightwatch, just need to use this commond:</p>
  <code>nightwatch -t folder-name/file-name.js </code><br>
  <code>nightwatch -t file-name.js</code><br>
  <code>nightwatch -test file-name.js</code>
  <br>
  <p>- To run test, cases wise or tag wise or section wise you need to mention the tag name or section name.</p>
  <p>- Please go through the nightwatch documentation website to know more about End-To-End Tesing.</p>
  </li>
</ol>
  <p>
Nightwatch documentation - http://nightwatchjs.org/ <br>
node.js  - https://nodejs.org/en/download/ <br>
npm-install - https://docs.npmjs.com/cli/install <br>
  npm-install-mac - https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/
  </p>
</body>
