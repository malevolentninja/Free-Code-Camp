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

00. Complete "Install npm"

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


01. Complete "Dev Environment"

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



02. Complete "Login"
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


03. Complete "Start A Project"

04. Complete "Install A Module"

05. Complete "Listing Dependencies"

06. Complete "npm Test"

07. Complete "Package Niceties"

08. Complete "Publish"

09. Complete "Version"

10. Complete "Publish Again"

11. Complete "Dist Tag"

12. Complete "Dist Tag Removal"

13. Complete "Outdated"

14. Complete "Update"

15. Complete "Rm"

16. Complete "Finale"
