[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/2020491/IWA-CA1)

# IWA_BScITSept18_CA1 (25%): 
GitHub repository storing all app code


I) Set Up Gitpod for project:
  1) Add "gitpd.io/#" to the start of the github repo to start it
  2) Set up default package.json settings file used by npm (node package manager) 
    i) Function:
      -> sets up & configures project
      ->add scripts, dependencies, version info, names, descriptions, keywords..., everything about project defined in this file
   ii) Steps:
   -> Create package.json file:
    In Terminal: npm init --y
   -> Set up values:
   npm config set init.author.name "2020491"
   npm config set init.author.email "2020491"
   npm config set init.license "MIT"
  -> All dependencies stored in node-modules folder in the express file
  npm i express

npm run task --var=data
console.log(process.env.npm_config_var); // data
