# Getting Started with Curiocity-Webpage App
# Run command to install all dependent libraries
### `npm install`

## Available Scripts

To start the project server run
### `npm start`


Runs the app in the development mode.\
Open [http://localhost:3000/foods](http://localhost:3000/foods) to view it in the browser.


# API Reference
I am using food open source api [Click Here](https://www.themealdb.com/api.php) for more Information.

## Description
You can get the list of foods
1. Search meal by name [https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata](https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata)
2. List all meals by first letter [https://www.themealdb.com/api/json/v1/1/search.php?f=a](https://www.themealdb.com/api/json/v1/1/search.php?f=a)

Note: 
1. Find for "strMeal" key is API and use it's value is search meal by name. ex: `https://www.themealdb.com/api/json/v1/1/search.php?s=STRMEAL`
2. In application URL it will be looks like [http://localhost:3000/foods/Arrabiata](http://localhost:3000/foods/Arrabiata). where "Arrabiata" is value of strMeal.