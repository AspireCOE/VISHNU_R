<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>task</title>
</head>
<body>
    <h2>User info form</h2> <!--http://localhost:3000/submit-->
    <form id="userInfoForm" action="/submit" method="POST">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br>
        
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password"><br>
        
        <label for="mobile">Mobile No:</label><br>
        <input type="tel" id="mobile" name="mobile"><br>
        
        <label for="email">Email :</label><br>
        <input type="email" id="email" name="email"><br><br>
        
        <input type="submit" value="Submit">
    </form>

    <a href="/getuser">see user record</a>

    <form action="/changePassword" method="post">

        <label for="username">id</label><br>
        <input type="text" id="username" name="id"><br>
        
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="pass"><br>
        <input type="submit" value="changePassword">
    </form>
</body>
</html>
