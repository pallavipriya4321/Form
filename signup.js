function validateemail()  
{  
    var x=document.form1.email.value;  
   

    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
    {  
        alert("Please enter a valid e-mail address ");  
        return false;  
    }  

}  

function validateContact()
{
    var y=document.form1.mobile.value;

    if(y.length!==10)
    {
        alert("Enter a valid 10 digit mobile number");
        return false;
    }
}