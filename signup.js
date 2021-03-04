function validateEmail()  
{  
    var x=document.form1.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  

    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
    {  
        alert("Please enter a valid e-mail address" );  
        return false;  
    }  
}
function validateMobile()
{
    var y=document.form1.mobile.value;
    if(y.length!=10)
    {
        alert("Enter a valid 10 digit mobile number");
    }
}  

function success()
{
    alert("Thank you for details, We will get back to you soon!");
}

