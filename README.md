# Grocery List Application

Grocery list app that allows user to view, add, and delete from a stored grocery list.

# Running the Project

1. Clone the repository<br />
2. Backend setup<br />
   a. To run the backend you will need .NET 6, SQL Server, and Visual Studio 2022 installed<br />
   b. Once Visual Studio is installed open the solution in the 'backend' folder using Visual Studio.<br />
   c. Before running the application run 'dotnet ef database update' to generate the database.<br />
   d. Once the migration is complete you can check to make sure the DB is generated in SQL Server Management Studio or begin running the application.<br />
   e. Run the application by CLI while in the project folder ('dotnet run') or hitting the play button that will execute the solution in Visual Studio.<br />
      -If using CLI navigate to https://localhost:7033/swagger/index.html to view swagger UI if needed.<br />
3. Frontend setup<br />
   a. To run the frontend it is recommended to use VS Code other IDE's may differ from these instructions<br />
   b. In VS Code open the 'frontend' folder and then open a terminal<br />
   c. Next navigate to the 'grocery-list' folder using the terminal and run 'npm install'.<br />
   d. Once finished installing run 'npm run start' or 'ng serve'.<br />
4. Demo the application by adding and removing grocery items!<br />
