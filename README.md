#Purpose of this repo

This aims to improve the code quality and organisation of Unaty.

Core principles:
    
  1. Naming variables, components, etc. must be obvious.
  2. One file does, at most, 1 or 2 things.
  3. A package solves one and one problem only.
    
##Running the application
The README.md file contains all the required steps to launch the application successfully even with an empty database.


##Seed data
When we start the application with a clean database, the application on startup checks if some collection contains 
a number of record superior to zero. If not, some small dataset must be created to allow the team to test the application.
    
    
By having seed data new team members will be able to run the application with little to no effort.

    
##Application settings

The settings files regarding the local and staging development should in the repo itself. We don't care if any credential
is stolen because they're disposable.     