function newCookie(name, value){
  document.cookie = name+"="+value+";";
  return document.cookie;
}
function deleteCookie(name){
  document.cookie = name+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  return document.cookie;
}
function getCookie(name){
  var decoded = decodeURIComponent(document.cookie);
  var cookie = decoded.split('; ');
  for(i=0; i < cookie.length; i++){
    if(cookie[i].indexOf(name) === 0){
      //+1 because of '=' at the beginning of the string
      return cookie[i].substring(name.length+1);
    }
  }
  return "cookie not found";
}
