# WDI25 Yearbook

For this assignment you'll be making a Yearbook for WDI25.

The yearbook should display all of your classmates with images, and other data collected.
Keep it fun and lighthearted, and use it as an opportunity to share your contact details and headshots.

You need to create the server-side Express API _AND_ the client-side React App.

**DO NOT ATTEMPT TO IMPLEMENT IMAGE UPLOAD** we will be looking into this next week!

## Requirements
- You will need two models:
  - User (for authentication and registration)
  - Student (for the students in the class)
- There should be _no embedded or referenced relationships in your models_
- A user needs to register and login if they want to amend the student data
- A user does not need to login to see the students INDEX and SHOW pages
- The student schema should include the following:
  - name `String` (required)
  - image `String`
  - linkedIn `String` (link to the student's linkedIn profile)
  - github `String` (link to the student's github)
  - mostLikeyTo `String` (a bit of fun, something like "get drunk on melon bellinis")
- The app should be styled.

## Deliverables
- A full stack app with full CRUD actions on the Student resource
- Login / Registration capabilities

## Tips
- Build out the API first and test with Insomnia **before** starting the Angular App.