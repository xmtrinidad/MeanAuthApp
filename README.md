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
| What is CORS? |  |
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



### test
* Token Generation & Authentication
* CORS
* Mongoose ODM
* **Angular 2+ / Angular-CLI**
* Angular Router, ~~HTTP Module~~ **HttpClient Module**
* Angular2-JWT
* Auth Guard
* Angular Flash Message Module
* Compile & **Deploy**







