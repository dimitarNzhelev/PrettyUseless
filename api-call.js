function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("form").value;
    window.localStorage.setItem('MyString', inputVal);
    window.location = window.location.href;
}
function displayData(){
    window.onload = function() {
        var inputVal = window.localStorage.getItem('MyString');
        if (inputVal !== null) 
        {
            const link = 'https://ntrs.nasa.gov/search?q='
            FinalLink = link + inputVal
  
            document.getElementById("data-panel").innerHTML = FinalLink;
        }
        
        window.localStorage.removeItem('MyString');
    }
     
    
}