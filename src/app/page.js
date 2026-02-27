<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script>
        function celsius(){
            var f = document.getElementById('f').value
            var c = (5 * (f-32)) / 9
            alert(f + 'f convertidos para celsius é: ' + c)
        }
    </script>

</head>
<body>
    
    <h1>Conversor de Fahrenheit</h1>

    <form action="form1" method="post "action="onclick">

        <label>Fahrenheit: </label>
        <input type="number" name="f" id="f">
        <input type="button" value="Calcular" onclick="celsius()">

    </form>

</body>
</html>