# Traversy Media - MEAN Stack Front to Back

This is an updated version of the [MEAN Stack Tutorial](https://www.youtube.com/playlist?list=PLillGF-RfqbZMNtaOXJQiDebNXjVapWPZ) from [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)

## About

My intent while going through this tutorial wasn't to just simply code along.  I wanted to understand how an entire MEAN stack works.  I soon discovered that, even if I wanted to code along, things were not going to be that simple.

Since the original version of this tutorial came out more than a year ago, there were several changes that needed to be made to get this application to work with the latest version of Angular (Angular 5).

This readme will highlight some of the issues I had while going through the tutorial, but I will also try to explain the things I learned while going through this tutorial.

## My Questions

While going through this tutorial, there were many new things I encountered and many questions that I had about these new technologies and concepts.  Below is a list of my questions that I will answer as I walk through the tutorial:

|Question| Answer Section  |
|--|--|
| What technologies are used throughout this project? | [Project Introduction](#project-introduction) |
| How does Node and Angular work together? | [How Node and Angular Work Together](#how-node-and-angular-work-together) |
| What is CORS? | [Project Introduction](#project-introduction) |
| What is bcrypt and hash salting? | [User Model and Register](#user-model-and-register) |
| What is Passport.js? | [About Passport.js](#about-passport.js)  |
| What is a JSON Web Token? | [Project Introduction](#project-introduction) |

## Table of Contents

I'll go through each video and try to highlight the things I learned, had trouble with or just found interesting.  Each section may also contain links to other references that helped me better understand the concepts used in the video:


[Project Introduction](#project-introduction)		

[Express Setup and Routes](#express-setup-and-routes)		

[User Model and Register](#user-model-and-register)		

[API Authentication and Token](#api-authentication-and-token)		

[Angular 2 Components And Routes](#angular-2-components-and-routes)		

[Register Component, Validation and Flash Messages](#register-component-validation-and-flash-messages)		

[Auth Service and User Registration](#auth-service-and-user-registration)		

[Login and Logout](#login-and-logout)		

[Protected Requests and Auth Guard](#protected-requests-and-auth-guard)		


---

### How Node and Angular Work Together  
  
Since this is a MEAN stack application that utilizes Angular, there isn't going to be a request to the server for every single change made in the application, as is done in *server-side only applications*  
  
In a **Single Page Application** like Angular the client side controls the entire application, loading/removing/updating data dynamically without reaching out to the server.  
  
Where Node is used with an Angular front-end is when there needs to be some sort of database interactivity.  What typically happens is:  
  
1. Angular makes a post/get request to the Node server back-end  
  
2. Node is configured with routes that, when connected to from the Angular front-end, will perform some sort of function (like authenticating a user or getting a user's profile information from the database)  
  
3. If it is a GET request, the data is passed back to the front-end where Angular can update the DOM dynamically based on that data.  
  
All of this happens Asynchronously, without reloading the page.

### Project Introduction

[**Video Link**](https://youtu.be/uONz0lEWft0)

As mentioned in the [first video](https://www.youtube.com/watch?v=uONz0lEWft0&t=0s&list=PLillGF-RfqbZMNtaOXJQiDebNXjVapWPZ&index=1) of this tutorial, the following technologies will be used:

#### REST API - Node.js / Express
* Stands for **Representational State Transfer**	
* Used to transfer data

Think of a REST API as a server set-up to give back more than traditional HTML pages.  For example, the [Twitter RESTful API](https://developer.twitter.com/en/docs) can give back information about tweets, users, etc.

In this project, the "REST API" part is when registering, authenticating and getting user profile information.  None of these requests serve up brand new HTML pages because the entire application is a Single Page Application through the use of Angular.  However, when making a request to **/profile**, for example, the user's profile data is requested and, if the credentials are valid, given to the user.

For more information about RESTful APIs check out this [youtube video](https://youtu.be/0oXYLzuucwE):

#### Token Generation and Authentication

In this project, **tokens** are used for authenticating users.  This authentication revolves around **[JSON Web Tokens](https://jwt.io/)** or **JWT** for short, which is an industry standard for passing security information between the client/server.

For an overview of how JWT works with Node.js, [watch this video](https://www.youtube.com/watch?v=7nafaH9SddU) 

Checkout the [official introduction](https://jwt.io/introduction/) for an overview of JWT.

For this project, most of the JWT interaction is performed on the back-end using the [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) package, but there is also some interaction on the front-end using [angular2-jwt](https://github.com/auth0/angular2-jwt).

#### About Passport.js

For authentication, [Passport.js](http://www.passportjs.org/) is used to authenticate JSON Web Tokens.

As stated from [Quora: What is passport.js?](https://www.quora.com/What-is-passport-js):
``` 
passport.js is a middleware used to **authenticate** requests 
in your node applications.

You can use it to enable email/password authentication or 
even social logins like login with facebook, twitter, instagram 
and the likes, and also login with services like pocket, 
dropbox, meetup, zendesk .etc
```

Before Passport can be used to authenticate, a [**strategy**](http://www.passportjs.org/docs/configure/) must be configured.  For this project, [passport-jwt](https://github.com/themikenicholson/passport-jwt) is the strategy used with passport.

#### CORS

[CORS}(https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) stands for **Cross-Origin Resource Sharing** and commonly configured with public APIs to allow users to access selected data and resources from a server on a different domain.

For example, when developing locally, my server may be running at *http://localhost:3000*.  If I were to go to another site or if I were another user on a different domain and tried making a server request to *http://localhost:3000* it would not work because CORS is not configured to allow these connections.

For a RESTful API, clients and servers have different **origins** so CORS needs to be configured if the public is going to be making requests to the back-end server.

For more information about CORS, check out [this video](https://youtu.be/zoSJ3bNGPp0?t=7m35s)

The [Cors NPM Package](https://www.npmjs.com/package/cors) is used in this project to configure the application with CORS.

#### Mongoose ODM

[Mongoose](http://mongoosejs.com/) is an npm package for interacting with MongoDB, which is the database component of a MEAN stack application, within Node.

#### Angular 2+ / Angular-CLI

Although the videos from this tutorial use Angular 2, it is updated to use Angular 5.  The main change being the use of the [HttpClient](https://angular.io/guide/http) as opposed to the deprecated *Http* module, which is used in the tutorial but now deprecated.

#### Auth Guard

In order to prevent non-logged in users from navigating to pages that only logged in users should be able to view, [Routing/Auth Guards](https://angular.io/guide/router#milestone-5-route-guards) are implemented using Angular.

#### Angular Flash Message Module

[Angular Flash Message](https://github.com/moff/angular2-flash-messages) is an NPM package used to display messages on screen.  These will be used to display error and success messages throughout the project

#### Compile & Deploy

When the project is completed, it is compiled so that you can view it using Node as your server to display the Angular front-end, with the back-end interactivity.

In the tutorials, the application is deployed using Heroku but my goal is to learn how to deploy the application on [DigitalOcean](https://www.digitalocean.com/).  When I learn how to do this, I will update this readme or create a new repo for a step by step tutorial.

---

### Express Setup and Routes

[**Video Link**](https://youtu.be/DQ9pZ2NKXRo)

#### Setting up MongoDB on Windows

When I first went through this tutorial, I didn't have MongoDB installed and I didn't know much about MongoDB, either.

I watched the [recommended video](https://www.youtube.com/watch?v=pWbMrx5rVBE) from the tutorial to get an overview of MongoDB and how to set it up on a Windows machine.

A new things to note:

1.  If you're following along with the recommended video, when clicking download you aren't automatically taken to the *community server* tab.  It's the 2nd tab, make sure to click the tab and download the recommended Windows version of MongoDB

2. Make sure you run the commands as **admin** (right click on cmd and Run as Admin)

3.  At the [4:33]() mark in the MongoDB video, the flags have changed to ```mongod --directoryperdb --dbpath C:\mongodb\data\db --logpath C:\mongodb\log\mongo.log --logappend --install```

4.  Once logging is set up, navigate to the MongoDB *bin* folder and ensure that MongoDB is running using ```net start MongoDB```, as performed in the tutorial.  This is important because the Database part of the application will not work in the MEAN app if MongoDB isn't running.

Below is a list of common commands used throughout the tutorial series for displaying information.  Keep in mind you have to be in the MongoDB *bin* folder (```C:\mongodb\bin```) to run these commands.

* ```mongo```
	* This will run MongoDB
* ```show dbs```
	* Show a list of current databases
* ```use db-name```
	* Switch to the database specified and use it to display database information
* ```show collections```
	* Show the collections within the database (for example, the *users* collection)
* ```db.users.find().pretty()```
	* the *db.useres.find()* part gets all users within the *users* collection, *.pretty()* presents the data in a easier to read format.

#### Setting up the package.json file

In the tutorial, the package.json file is set up using NPM but the dependencies are initially defined manually.  You don't have to do this.  Simply installing the dependencies will add them to the package.json file.  Also, per the[ NPM Documentation](https://docs.npmjs.com/cli/install) "```npm install saves any specified packages into dependencies by default.```"

The following dependencies are used for the Node.js back-end (There are more dependencies for the Angular front-end that aren't included in this section):

|Dependency| Description |
|--|--|
| [bcryptjs](https://www.npmjs.com/package/bcryptjs) | Used to hash passwords before storing in database |
| [body-parser](https://github.com/expressjs/body-parser) | Express middleware to parse data from request bodies |
| [cors](https://www.npmjs.com/package/cors) | Usage described in [Project Introduction](#cors)  |
| [express](https://www.npmjs.com/package/express) | Node.js framework  |
| [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) | Usage described in [Project Introduction](#token-generation-and-authentication)  |
| [mongoose](https://github.com/jaredhanson/passport) | Used to interact with MongoDB with Node.js  |
| [passport-jwt](https://www.npmjs.com/package/passport-jwt) | Passport strategy for authenticating users using JSON Web Tokens  |

All these dependencies can be installed with the following command (after running ```npm init```):

```npm install bcryptjs body-parser cors express jsonwebtoken mongoose passport-jwt```

Once all these dependencies are installed, they will also be listed in the package.json file.

### User Model and Register

**[Video Link](https://youtu.be/1ZeDy2QI3OE)**

#### Bcrypt and Hashing

At around the 9:50 mark, the user password is hashed before being added in the database.  This is a common practice for securely storing passwords.  

For more information about hashing, the following links are helpful:

**[Professor Messer - Hashing](https://www.youtube.com/watch?v=Uw1GD34p1uw)**		
**[Computerphile - Hashing Algorithms and Security](https://www.youtube.com/watch?v=b4b8ktEV4Bg)**		

**Bcrypt** itself is a password hashing function.  The package used in this project (bcryptjs) is bcrypt optimized to be used with JavaScript.

Although I was familiar with hashing before from using PHP, I never used the bcrypt package and I also didn't understand the concept of salting, which is used with the bcrypt *.hash()* method.  The following video helped me better understand why salting is used:

**[Password Hashing, Salts, Peppers](https://www.youtube.com/watch?v=--tnZMuoK3E)**

### API Authentication and Token

**[Video Link](https://youtu.be/6pdFXmTfkeE)**

#### Auth Header options change at 4:34

In the tutorial, an option is configured that needs to be changed so the authorization token can be extracted later on in the application.

```js
opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
```

Change to:

```js
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
```
See [About the JSON response](#about-the-json-response) below to find out more about why the change is needed.

#### token const error at 10:34

At the 10:34 mark, when a token is being created, putting **user** as the first argument in the *jwt.sign()* method, as done in the tutorial, will not work and will throw the following error:

```
Expected "payload" to be a plain object.
```
This is because the **user** is a Mongoose document, which is fetched from the MongoDB database.

You can convert the **user** into a plain object by simply wrapping it around brackets by using the [toObject()](http://mongoosejs.com/docs/guide.html#toObject) method.  The new token constant then looks like so:

```js
const token = jwt.sign(user.toObject(), config.secret, {  
  expiresIn: '604800' // 1 week  
});
```
#### res.json() token at 11:55

In the tutorial, the JSON data response (res.json()) contains token information.  It needs to be changed from 
```token: 'JWT ' +token``` 
to 
```token: Bearer ${token}``` 

The entire res.json() looks like so:

```js
res.json({  
  success: true,  
  token: `Bearer ${token}`,  
  user: {  
  id: user._id,  
  name: user.name,  
  username: user.username,  
  email: user.email  
  }  
});
```
#### About the JSON response

While I was coding along with the tutorial, I wondered why a JSON response was necessary.  After getting a better understanding of what was going on, I realized the following:

**Bearer ${token}**		
The token part of the JSON response is how passport authenticates based on a JSON Web Token.  Earlier, a passport.js file was configured and the following option is included in that configuration:
```js
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
```
As the *fromAuthHeaderAsBearerToken()* method implies, the JWT is extracted from the Authorization header as a Bearer token.

**User Object**			
The User is included in the JSON resonse so that it can be extracted later on and used to display profile data using Angular on the front-end.

### Angular 2 Components And Routes

**[Video Link](https://youtu.be/zrViDpWiNVE)**		

This tutorial was created more than a year ago using Angular 2.  I will try to update it to best practices using the latest version of Angular, which is, as of 3/3/2018, Angular 5.

#### Angular CLI Install at 4:26

For Angular 5, installing the Angular CLI no longer uses ```npm install -g angular-cli``` as is used in the tutorial.

Instead, you should use ```npm install -g @angular/cli``` as the [official documentation](https://github.com/angular/angular-cli) recommends.

#### Routing

In this project, the routing configuration is created in the *app.module.ts* file.  A best practice is to create a separate **app-routing.module.ts** file and put all routing configuration in there.

You can create an app-routing file using the Angular CLI with the following command: ````ng g module my-module --routing````, where *my-module*, for this project, would be **app**.  The entire command would look like this:

```ng g module app --routing```

From within the *app-routing.module.ts* file, **RouterModule** would need to be exported then the **AppRoutingModule** would need to be imported into the main *app.module.ts* file then included in the *imports* array in the *@NgModule decorator*  so that the separate routing file can be used.

The entire *app-routing.module.ts* file will eventually look like:
```ts
import { NgModule } from '@angular/core';  
import { RouterModule, Routes, CanActivate} from "@angular/router";  
import {HomeComponent} from "./components/home/home.component";  
import {RegisterComponent} from "./components/register/register.component";  
import {LoginComponent} from "./components/login/login.component";  
import {DashboardComponent} from "./components/dashboard/dashboard.component";  
import {ProfileComponent} from "./components/profile/profile.component";  
  
import { AuthGuard } from "./guards/auth.guard";  
  
const routes: Routes = [  
 { path: '', component: HomeComponent},  
  { path: 'register', component: RegisterComponent },  
  { path: 'login', component: LoginComponent },  
  { path: 'dashboard', component: DashboardComponent, canActivate: \[AuthGuard\] },  
  { path: 'profile', component: ProfileComponent, canActivate: \[AuthGuard\] },  
  { path: '**', redirectTo: '', pathMatch: 'full'}  
];  
  
@NgModule({  
  exports: [ RouterModule ],  
  imports: [ RouterModule.forRoot(routes) ],  
  providers: [AuthGuard]  
})  
export class AppRoutingModule { }
```
#### Import FormsModule and HttpClientModule

When generating an Angular application using the AngularCLI with Angular 5, the **FormsModule** and **HttpClientModule** are not imported by default.

Also, in the tutorial, the project uses the now deprecated **HttpModule**, which needs to switched out with the **HttpClientModule**

To import these, place the following lines at the top of the *app.module.ts* file and underneath the *BrowserModule* and *NgModule*:

```ts
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
```

Once these modules are imported they need to be added to the **import** array inside the *@NgModule* decorator:
```ts
imports: [  
  BrowserModule,   
  FormsModule,
  HttpClientModule  
  // ...other imports  
  ]
```

#### Redirect Route

Something not covered in the tutorial that you may want to implement is a redirect route for when a user enters an invalid URL.  This is done later on in the tutorial series on the back-end, but it can also be implemented on the back end by pasting the following route configuration into your *routes* constant that defines the routes in the application:
```ts
{ path: '**', redirectTo: '', pathMatch: 'full'}
```

The ```**``` is a placeholder for anything that doesn't match all the other defined routes.  If the URL doesn't match, it will redirect to the route path defined as ```''```, which, for this application, is the HomeComponent.


### Register Component, Validation and Flash Messages

[Video Link](https://youtu.be/bxZAPoeMr7U)

#### Template Parse Error

If you get an error that looks something like ```Template parse errors: 'Can't bind to 'ngModel; since it isn't a known property of 'input'```, it's because the **FormsModule** wasn't imported.

As mentioned in the [previous section](#import-formsmodule-and-httpclientmodule), using the latest version of the Angular CLI does not import the FormsModule by default.  Import the FormsModule and include it in the imports array then the error should go away.

### Auth Service and User Registration

[Video Link](https://youtu.be/dFftMN32jyQ)		

When using Angular5, this section should be using the HttpClientmodule instead of the Http module, which is used in the tutorial series.

To begin, the ```import 'rxjs/add/operator/map';``` import isn't needed when using the HttpClientModule because *get()* and *post()* methods return mapped Observables by default.

#### Adding headers

Another change can be found in how Headers are defined.  While the *headers.append()* method works like in the tutorial, Header options can be added when **HttpHeaders** is instantiated like so:

```ts
const headers = new HttpHeaders({  
  'Content-Type': 'application/json'  
});
```

### Login and Logout

[Video Link](https://youtu.be/rt6VSxXL4_w)			

The main change in this section is that

### Protected Requests and Auth Guard

[Video Link](https://youtu.be/OILrJmjkId4)

#### Headers

As in the previous section, the headers in the tutorial can be set without appending to them like so:
```ts
const headers = new HttpHeaders({  
  'Content-Type': 'application/json',  
  'Authorization': this.authToken  
});
```
#### Auth Service loggedIn()

At 12:40, a loggedIn() function is created that uses the *tokenNotExpired()* function from the angular2-jwt npm package.  This function checks localStorage for a token and checks if it's expired or not.

In the previous tutorial video, the token was set in local storage using the name ```id_token``` and, if the *tokenNotExpired()* function does not taken in this argument, it will not be able to retrieve the token information.  The correct function should look like:

```ts
loggedIn() {  
  return tokenNotExpired('id_token');  
}
```
