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
| How does Node and Angular work together? |  |
| What is CORS? | [Project Introduction](#project-introduction) |
| What is bcrypt and hash salting? |  |
| What are HTTP Headers? |  |
| What is Passport.js? |  |
| What is a JSON Web Token? |  |
| What is the RegExp test() method? |  |
| How does Auth Guard work in Angular? |  |

## Table of Contents

I'll go through each video and try to highlight the things I learned, had trouble with or just found interesting.  Each section may also contain links to other references that helped me better understand the concepts used in the video:

[Project Introduction](#project-introduction)				

---

### Project Introduction

As mentioned in the [first video](https://www.youtube.com/watch?v=uONz0lEWft0&t=0s&list=PLillGF-RfqbZMNtaOXJQiDebNXjVapWPZ&index=1) of this tutorial, the following technologies will be used:

#### REST API - Node.js / Express
* Stands for **Representational State Transfer**	
* Used to transfer data

Think of a REST API as a server set-up to give back more than traditional HTML pages.  For example, the [Twitter RESTful API](https://developer.twitter.com/en/docs) can give back information about tweets, users, etc.

In this project, the "REST API" part is when registering, authenticating and getting user profile information.  None of these requests serve up brand new HTML pages because the entire application is a Single Page Application through the use of Angular.  However, when making a request to **/profile**, for example, the user's profile data is requested and, if the credentials are valid, given to the user.

For more information about RESTful APIs check out the following links:
|Source| Link  |
|--|--|
| What is a RESTful API? | [YouTube](https://youtu.be/0oXYLzuucwE) |

### Token Generation & Authentication

In this project, **tokens** are used for authenticating users.  This authentication revolves around **[JSON Web Tokens](https://jwt.io/)** or **JWT** for short, which is an industry standard for passing security information between the client/server.

For an overview of how JWT works with Node.js, [watch this video](https://www.youtube.com/watch?v=7nafaH9SddU) 

Checkout the [official introduction](https://jwt.io/introduction/) for an overview of JWT.

For this project, most of the JWT interaction is performed on the back-end using the [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) package, but there is also some interaction on the front-end using [angular2-jwt](https://github.com/auth0/angular2-jwt).

### CORS

[CORS}(https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) stands for **Cross-Origin Resource Sharing** and commonly configured with public APIs to allow users to access selected data and resources from a server on a different domain.

For example, when developing locally, my server may be running at *http://localhost:3000*.  If I were to go to another site or if I were another user on a different domain and tried making a server request to *http://localhost:3000* it would not work because CORS is not configured to allow these connections.

For a RESTful API, clients and servers have different **origins** so CORS needs to be configured if the public is going to be making requests to the back-end server.

For more information about CORS, check out [this video](https://youtu.be/zoSJ3bNGPp0?t=7m35s)

The [Cors NPM Package](https://www.npmjs.com/package/cors) is used in this project to configure the application with CORS.

### Mongoose ODM

[Mongoose](http://mongoosejs.com/) is an npm package for interacting with MongoDB, which is the database component of a MEAN stack application, within Node.

### Angular 2+ / Angular-CLI

Although the videos from this tutorial use Angular 2, it is updated to use Angular 5.  The main change being the use of the [HttpClient](https://angular.io/guide/http) as opposed to the deprecated *Http* module, which is used in the tutorial but now deprecated.

### Auth Guard

In order to prevent non-logged in users from navigating to pages that only logged in users should be able to view, [Routing/Auth Guards](https://angular.io/guide/router#milestone-5-route-guards) are implemented using Angular.

### Angular Flash Message Module

[Angular Flash Message](https://github.com/moff/angular2-flash-messages) is an NPM package used to display messages on screen.  These will be used to display error and success messages throughout the project

### Compile & Deploy

When the project is completed, it is compiled so that you can view it using Node as your server to display the Angular front-end, with the back-end interactivity.

In the tutorials, the application is deployed using Heroku but my goal is to learn how to deploy the application on [DigitalOcean](https://www.digitalocean.com/).  When I learn how to do this, I will update this readme or create a new repo for a step by step tutorial.

