 name_of_the_guests= [];
 function submit() 
    { 
        var GuestName = document.getElementById("geustname").value; 
    name_of_the_guests.push(GuestName); 
    console.log(name_of_the_guests); 
    document.getElementById("firstlist").innerHTML=name_of_the_guests; 
} 
function show() 
    { 
       
            var i= name_of_the_guests.join("<br>"); 
        console.log(name_of_the_guests); 
        document.getElementById("guest").innerHTML=i.toString(); 
        
        
       //var k;
        //for(var k=0; k<name_of_the_guests; k++)
        //{
            //alert(k);
            //var dd = document.getElementById("geustname_"+k).value; 
            //document.getElementById("guest").innerHTML=dd;
        //}
        //
   
} 
function sort()
{
    var GuestName = document.getElementById("geustname").value; 
    name_of_the_guests.sort();
   
  
    console.log(name_of_the_guests); 
    document.getElementById("list_sort").innerHTML=name_of_the_guests; 
}
function search()
{
    var s= document.getElementById("checkgeustname").value;
    var found=0;
    var j;
    for(j=0; j<name_of_the_guests.length; j++)
    {
        if(s==name_of_the_guests[j]){
            found=found+1;

        }
    }
    document.getElementById("search1").innerHTML="name found "+found+" time/s";
    console.log("found name"+found+" time/s");
}
    





