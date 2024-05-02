// © 2024 - BestDeveloper - BestMat, Inc. - All rights reserved.
document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BestServer StaticFileRoutes Java Example</title>
    <script src="./script.js" defer></script>
</head>
<body>
    <h1>Hello World</h1>
    <button class="button">Click Me</button>
</body>
</html>
`);

const button = document.querySelector(".button");

button.addEventListener("click", function(){
    alert("Hello World!");
});
