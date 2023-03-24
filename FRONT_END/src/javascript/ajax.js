
function ajaxRequest(type, url, callback, data = null)
{
  let xhr;
  var blocChargement = undefined;
  
  // Create XML HTTP request.
  xhr = new XMLHttpRequest();
  if (type == 'GET' && data != null)
    url += '?' + data;

  
    xhr.addEventListener('loadstart', function(){
      blocChargement = document.getElementsByClassName("chargement")[0];
      if (blocChargement != undefined) {
        blocChargement.innerHTML="Chargement...";
      }
     });
  xhr.open(type, url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.setRequestHeader('Cookie', document.cookie);

  // Add the onload function.
  xhr.onload = () =>
  {
    if (blocChargement != undefined) {
      blocChargement.innerHTML="";
    }
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