# Armed-Forces
WT Assignment-1

### Question

Write a Node Js program for applying for Armed forces Jobs online
The system should register candidates by collecting the basic information like  Name, age ,Height,weight gender ,category ,qualification(lowest to highest[BE,Mtech,Phd]),Type of forces[Army,Navy,Airforce]
The system should reject the candidate if the height is less than 152 cms for male and 150 for female and age not more than 25  .Display the list of eligible candidates.


### Angular Side

Run `ng serve --open` for a dev server on the terminal.

Command To Create Component `ng g c componentname`

Command To Create Service `ng g s componentname`

Command To Create Class `ng g class componentname --type=model`

Navigate to `http://localhost:4200/`.


### Host Angular App on Github | Host a Website on Github pages 

Step 1 - `ng add angular-cli-ghpages`

Step 2 - Push code to Github Repo

Step 3 - Go to repo setting and select main branch and save

Step 4 - Build application using below cmd `ng build --base-href "https://_githubProfileName_.github.io/_repoName_/"`

Step 5 - Publish your build changes from your local folder to github pages with below cmd `npx angular-cli-ghpages --dir=dist/_repo_name_`

Step 6 - Go to repo setting and select gh-pages branch and save
