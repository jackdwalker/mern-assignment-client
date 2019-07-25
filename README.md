## LinkedOut :sparkles: <!-- omit in toc -->

### Table of Contents
- [Table of Contents](#table-of-contents)
    - [LinkedOut can be found here](#linkedout-can-be-found-here)
    - [Server can be found here](#server-can-be-found-here)
    - [Client repo here](#client-repo-here)
    - [For advanced server configuration see individual file comments](#for-advanced-server-configuration-see-individual-file-comments)
- [Functions & Features :clipboard:](#functions--features-clipboard)
  - [Original stretch goals :hatching_chick:](#original-stretch-goals-hatchingchick)
- [Tech Stack :computer:](#tech-stack-computer)
- [Design Process](#design-process)
  - [Style Guide](#style-guide)
  - [Workflow of Users Journey](#workflow-of-users-journey)
  - [Wireframes](#wireframes)
  - [ERD](#erd)
  - [DFD](#dfd)
  - [Object Orientated Design component](#object-orientated-design-component)
- [Project Management and Planning](#project-management-and-planning)
  - [Project Plan and Timeline](#project-plan-and-timeline)
  - [Client Diary](#client-diary)
  - [Project Charter](#project-charter)

##### LinkedOut can be found [here](https://linkedout.netlify.com/) 
##### Server can be found [here](https://github.com/jackdwalker/mern-assignment-server)
##### Client repo [here](https://github.com/jackdwalker/mern-assignment-client)

### Config & Installation <!-- omit in toc -->

* To set up a development environment on your local computer
* Git clone the backend
* Git clone the frontend
* In terminal, run npm install on both
* Install nodemon to run the server (npm install -g nodemon) 
* Cd into the backend folder, run terminal command ‘nodemon’
* Run terminal command ‘mongod’ to initialise the mongoDB (if this is not already running)
* Create a new terminal window to cd into the frontend folder, run terminal command ‘npm start’
* The application will initialise on your default browser for ‘localhost:3000’ 
  
##### For advanced server configuration see individual file comments 


###Problem Definition & Purpose :bulb:

Coder Academy has been teaching students full-stack web development in Australia for approximately three years, and the Brisbane campus is its latest expansion. In this period, the organisation has built up a reputation within the local tech scene for graduating job-ready junior developers.

Operating within the same further education market, many tertiary education providers often hold graduate showcases and exhibitions to display what students have achieved in the course of their studies. The Academy at present does not have any external-facing resource that formally showcases its graduating cohort. Graduates instead rely on their own portfolio work, class assessments and reaching out to companies in an ad hoc fashion via meetups, social media and internship interviews.

Our MERN assignment project therefore aims to deliver a minimal viable product (MVP) that prototypes a professional platform for students to present their best work to prospective employers with the view of securing internship opportunities. 

The portal can also incidentally raise the public profile of Coder Academy within the tech industry as a trainer of quality junior developers.




### Functions & Features :clipboard:

* Displays a list of profiles to Guests (non-account holders) and Users   (authorised account holders)
* Guests and users can search for an account by name, tech stack and bio
* Users with an account can create an account 
* Users can edit their own account. (They cannot do this for any other    profiles)
* Users can delete their own account. (They cannot do that for any        other profiles)
* Email and password authentication for account holders
* Session management for logged in users (users stay logged in for a      reasonable period of time after successful authentication)
* Basic data validation in the sign up and edit profile forms
 
#### Original stretch goals :hatching_chick:
* Allow employers to create a “employer” type of account, which has similar profile fields (bio, website, twitter, tech stack, hiring?)
* Employer account-holders will have the additional functionality of      being able to engage in direct messaging with student account holders
* Only users with an email address with the domain of coderacademy.edu.au can sign up for an account
 

### Tech Stack :computer:
* HTML/CSS3 for visual styling the user interface
* Heroku for hosting the server application
* Netlify for hosting the client-side application
* NodeJS as Javascript runtime environment 
* ExpressJS open source framework for creating the server application     on NodeJS
* ReactJS framework for creating the client side application that handles page routing, page rendering, searching 
* MongoDB and MongoAtlas for the student detail database hosted on the    cloud


### Design Process 

#### Style Guide
The font families, font weights, colour palette to be used as standard in the application can be viewed [here](https://docs.google.com/document/d/1iM8JI7sCzEalgNGBUJXbwQizQ2EEFjuER4mN0veOTWA/edit)

####User Stories 
*Coder Academy current student*

Tom is currently studying the Gen Tech stream in Sydney and has been attending hackathons. He is active on the meetup scene and attends classes regularly to keep up with the work. He will be graduating in six months (February 2020). He already has a few linkedin contacts from attending meetups. 

*Coder Academy past student*

Jane graduated from the Fast Track stream in February 2019 and is looking for work either in Melbourne or Sydney. She does have a github account and is working on her own web portfolio. She wants to network with other junior developers to get her name out there.

*Start-up founder*

A start up found based in River City Labs is interested in getting some interns to participate as part of the co-working space’s initiative. He is not sure where to start looking but has heard of the TechBytes event that are regularly held in the same space.  

*Recruiter for software development company in Melbourne*

A recruiter who regularly attends Women Who Code Melbourne meetup has met a few developer students from Coder Academy. She is looking to broaden her contact networks and she is interested to see what these students are capable of and their tech stack exposure. Unfortunately, she has forgotten their names unfortunately and want to get in touch with them again. 


#### Workflow of Users Journey
![Image of User Journey](/docs/Design-process/User_journey.png)

#### Wireframes
*Homescreen*
![Image of Homescreen](/docs/wireframes/Home&#32;-&#32;public.png)
*Profile View*
![Image of Profile View page](/docs/wireframes/Student&#32;Profile&#32;View&#32;(public_private).png)
*Browse Profiles*
![Image of Browse Profile View page](/docs/wireframes/Alternate&#32;Browse&#32;Student&#32;-&#32;(Admin_Private).png)
*Edit Profile View*
![Image of Edit/Signup View page](/docs/wireframes/Edit&#32;Profile&#32;-STudent.png)
*Future iteration to include a messenger feature*
![Image of messaging feature for future iteration](/docs/wireframes/Messaging&#32;-&#32;Stretch.png)


#### ERD
*Entity Relationship Diagram*
![Image of the entity relationship diagram](/docs/Design-process/ERD.png)


#### DFD
*Data Flow Diagram*
![Image of the Data Flow Diagram](/docs/Design-process/New&#32;User&#32;DFD&#32;LinkedOut.png)

#### Object Orientated Design component


### Project Management and Planning 

#### Project Plan and Timeline

#### Client Diary
*day 1*
Discuss with client 

#### Project Charter

####

####Client Communication 

####Trello Screenshots





