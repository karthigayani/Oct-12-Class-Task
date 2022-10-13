// HTML-Code-Function:

function extract(){
    var res=document.getElementById("Email").value;
    var res1=document.getElementById("Password").value;
    console.log(res,res1);
    }
// ---------------------------------------------------------------------------------------------------------->

// Example 1:

// var label=createlabels("label","for","email","EmailId");
// var br1=createlinebreak("br");
// var input=createinput("input","type","email","id","email");
// var br2=createlinebreak("br");

// var password=createlabels("label","for","pass","Password");
// var br3=createlinebreak("br");
// var passinput=createinput("input","type","password","id","pass");
// var br4=createlinebreak("br");


// document.body.append(label,br1,input,br2,password,br3,passinput,br4);


// function createlabels(tagname,attrname,attrvalue,content){
// var ele=document.createElement(tagname);
// ele.setAttribute(attrname,attrvalue);
// ele.innerHTML=content;
// return ele;
// }
// //it is returning an HTML element
// //<label for="email">Mail</label>

// function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attrname,attrvalue);
//     ele.setAttribute(attrname1,attrvalue1);
//     return ele;
// }
// function createlinebreak(tagname){
// var ele=document.createElement(tagname);
// return ele;
// }
// ------------------------------------------------------------------------------------------------------------>


// Example 2:
// // /* <label for="Firstname">Firstname</label><br>
//     <input type="text" id="Firstname"><br></br> */

    // var FN=createlabels("label","for","FirstName","FirstName");
    // var br1=createlinebreak("br");
    // var FI=createinput("input","type","text","id","FirstName");
    // var br2=createlinebreak("br");

    // var MN=createlabels("label","for","MiddleName","MiddleName");
    // var br3=createlinebreak("br");
    // var MI=createinput("input","type","text","id","MiddleName");
    // var br4=createlinebreak("br");

    // var LN=createlabels("label","for","LastName","LastName");
    // var br5=createlinebreak("br");
    // var LI=createinput("input","type","text","id","LastName");
    // var br6=createlinebreak("br");

    // var PN=createlabels("label","for","PhoneNumber","PhoneNumber");
    // var br7=createlinebreak("br");
    // var PI=createinput("input","type","number","id","PhoneNumber");
    // var br8=createlinebreak("br");

    // var SB=createlabels("button","onclick","extract()","Submit");

    // document.body.append(FN,br1,FI,br2,MN,br3,MI,br4,LN,br5,LI,br6,PN,br7,PI,br8,SB);

    //    function createlabels(tagname,attrname,attrvalue,content){
    //          var ele=document.createElement(tagname);
    //          ele.setAttribute(attrname,attrvalue);
    //          ele.innerHTML=content;
    //          return ele; 
    //        }

    // function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    //     var ele=document.createElement(tagname);
    //     ele.setAttribute(attrname,attrvalue);
    //     ele.setAttribute(attrname1,attrvalue1);
    //     return ele; 
    //  }
    //  function createlinebreak(tagname){
    //     var ele=document.createElement(tagname);
    //     return ele;
    // }
    

      