## Habit Tracker

This is simple Habit Tracker app,where we can define habits and track them.

## Features

- Add multiple habits to track like reading a book, going to the gym etc
- Track each habit everyday. These are the 3 statuses of a habit:
  - Done - Mark the habit as done for a day
  - Not done - Mark the habit as not done for a day
  - None - User did not take any action on a habit for a day
- A view to show all current habits. Here give an add button where you can add a new habit to track
- A view to display 7 days of each habit
  - Show today where user can mark todays habit
  - And show the previous 6 days and the status of that habit for each day
  - A user can toggle between the three (above mentioned) statuses of a habit i.e. I can change today’s status as done, not done or none anytime.
  - Also I should be able to change any of the previous days status i.e. I can change the status of a habit for yesterday, day before yesterday or any previous 6 days as well
  - Store the data in a DB

## Tech Stack

Node.js, MongoDB, express, Ejs

## Installation

##### Clone the Repository

`git clone https://github.com/ayushmaan32/Habit-Tracker`

```bash
  npm install
  npm start
```

## Folder Structure

| --- assets<br>
| --- | -- css<br>
| --- | -- | -- dashboard<br>
| --- | -- | -- layout<br>
| --- | -- | -- weekly_details<br>
| --- | -- js<br>
| --- | -- | -- dashboard<br>
| --- | -- | -- weekly_details<br>
| --- config<br>
| --- | -- mongoose.js<br>
| --- controllers<br>
| --- | -- dashboard_controllers<br>
| --- | -- home_controllers<br>
| --- | -- users_controllers<br>
| --- | -- weekly_controller<br>
| --- models<br>
| --- | -- habits<br>
| --- | -- users<br>
| --- routes<br>
| --- | -- dashboard<br>
| --- | -- index<br>
| --- | -- users<br>
| --- | -- weekly_details<br>
| --- views<br>
| --- | -- dashboard<br>
| --- | -- home<br>
| --- | -- layout<br>
| --- | -- user_sign_in<br>
| --- | -- user_sign_up<br>
| --- .gitignore<br>
| --- index<br>
| --- package-lock.json<br>
| --- package.json<br>
| --- ReadMe.md<br>
