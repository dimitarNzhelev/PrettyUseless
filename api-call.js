function getInputValue(){
    var inputVal = document.getElementById("form").value;
    window.localStorage.setItem('MyString', inputVal);
    window.location = window.location.href;
}
function displayData(){
    window.onload = function() {
        var inputVal = window.localStorage.getItem('MyString');
        if (inputVal !== null) 
        {
            alert("Request needs to be made");
        }
        
        window.localStorage.removeItem('MyString');
    }
     
    
}
