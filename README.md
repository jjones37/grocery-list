# Grocery List Application

Grocery list app that allows user to view, add, and delete from a stored grocery list.

# Running the Project

1. Clone the repository
2. Backend setup
   a. To run the backend you will need .NET 6, SQL Server, and Visual Studio 2022 installed
   b. Once Visual Studio is installed open the solution in the 'backend' folder using Visual Studio.
   c. Before running the application run 'dotnet ef database update' to generate the database.
   d. Once the migration is complete you can check to make sure the DB is generated SQL Server Management Studio or begin running the application.
   e. Run the application by CLI while in the project folder ('dotnet run') or hitting the play button that will execute the solution in Visual Studio.
   -If using CLI navigate to https://localhost:7033/swagger/index.html to view swagger UI if needed.
3. Frontend setup
   a. To run the frontend it is recommended to use VS Code other IDE's may differ from these instructions
   b. In VS Code open the 'frontend' folder and then open a terminal
   c. Next navigate to the 'grocery-list' folder and run 'npm install'.
   d. Once finished installing run 'npm run start' or 'ng serve'.
4. Demo the application by adding a removing grocery items!
