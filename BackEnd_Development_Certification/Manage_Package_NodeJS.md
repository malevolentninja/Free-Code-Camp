# Manage Packages with npm

Free Code Camp recommend using c9.io but instead I have decided to use my local machine. 

Note that you can only add dist tags to the specific version numbers published in steps 8 and 10. 
If you receive a 403 or 404 error, run how-to-npm and try again.


### Key Commands

#### globally install how-to-npm package

```sh
npm install -g how-to-npm
```

#### runs the package
```sh
how-to-npm
```

#### Get help with npm 
```sh
npm help 
```

#### Re-display the current excercise
```sh
how-to-npm print 
```

#### Verify finished excercise
```sh
how-to-npm verify 
```

#### Show the solution
```sh
how-to-npm solution 
```


## Tasks to complete 

#### 00. Complete "Install npm"

```sh
npm install -g how-to-npm
```

* Veryify using version 5.4.0
```sh
npm -v
```

* to check the latest version is installed
```sh
how-to-npm verify

Now let's see what the latest version is... wait for it...
The latest npm is: 5.4.0
Congratulations!
You have a recent version of npm installed!
```


#### 01. Complete "Dev Environment"

* create new directory and move to it

mkdir nodeJSFCC
cd nodeJSFCC

create a package.json file
```sh
npm init
package name: howfcc
version: 1.0.0
description: version one
entry point: app.js
test commmand: app
git repository
keywords
author: malevolentninja
license: (ISC)

About to write...

Is this ok? yes
```

* check passed
```sh
how-to-npm verify

 Congratulations!
    You have a development environment.
    
    From here on out, make sure to run the workshop in this dir
    
    You might notice that a `.npmrc` file will show up in there.
    That normally would not be required, but the workshop uses it
    to mock out the parts that would normally talk to the internet.
```



#### 02. Complete "Login"
* Create account and see who you are logged in as

```sh
npm adduser

npm whoami
```

* check passed
```sh
how-to-npm verify

Congratulations, malevolentninja!
You are the proud owner of an imaginary new npm account!
Use it wisely.  Never in anger.  Always for the Good.

With this sweet power comes much responsibility, which is
sufficiently different from Spiderman's thing that Marvel
hopefully won't sue us.

Excelsior!
```

#### 03. Complete "Start A Project"

replace <username> with newly created 

```sh
npm init --scope=malevolentninja
```

* verify 
```sh 
how-to-npm verify

Congratulations!
You created a project!  View the package.json file to see it.
```

#### 04. Complete "Install A Module"

* install a dependency: @linclark/pkg module

```sh
npm install @linclark/pkg

```

#### 05. Complete "Listing Dependencies"
```sh
npm ls
how-to-npm verify OK
how-to-npm verify NOT OK
npm install @linclark/pkg --save
how-to-npm verify OK
```

#### 06. Complete "npm Test"

* Create new file called “test.js”
* Edit package.json
```sh
 "scripts": {  
         "test": "node test.js"  
       },  
       
```


#### 07. Complete "Package Niceties"

* Create a README.md file to add description
* Add a “repository” field in package.json with a url

```sh
 {
  …
  "license": "ISC",
          "repository": "http://tellyipock.com"
 }

npm init
npm install
```

#### 08. Complete "Publish"

* publish module
```sh
npm publish
```

#### 09. Complete "Version"
* update the version number

```sh
Modified package.json “version”: “1.0.1”,
npm version
```

#### 10. Complete "Publish Again"
* publish again

```sh
npm publish
```
#### 11. Complete "Dist Tag"

 `npm dist-tag add <pkg>@<version> [<tag>]`
if it's a security releasefor a legacy version, or something), then you can manually manage  
these distribution tags with the `dist-tag` function.
To add a tag type in the name of the tag. npm dist-tag add pkg@1.0.1 beta  
```sh
npm dist-tag add @linclark/pkg@1.0.2 [beta]
```

#### 12. Complete "Dist Tag Removal"

* remove dist tag
```sh
npm dist-tag ls @linclark/pkg
npm dist-tag rm @linclark/pkg [beta]
```

#### 13. Complete "Outdated"
```sh
 how-to-npm verify @linclark/pkg
```

#### 14. Complete "Update"
```sh
npm update [-g] [@linclark/pkg]
```

#### 15. Complete "Rm"
* removing dependencies

```sh
npm rm --save
```

#### 16. Complete "Finale"
```sh
 how-to-npm verify
 ```
