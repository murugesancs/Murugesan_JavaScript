/* https://www.tutorialrepublic.com/codelab.php?topic=javascript&file=form-validation */

// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
var studentList = [];
// Defining a function to validate form 
function validateForm() {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var sslc = document.getElementById("sslc").value;
    var puc = document.getElementById("puc").value;
    
    
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = sslcErr = pucErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    // Validate sslc number
    if(sslc == "") {
        printError("sslcErr", "Please enter your sslc number");
    } else {
        var regex = /^[1-9]\d{0,2}$/;
        if(regex.test(sslc) === false) {
            printError("sslcErr", "Please enter a 3 digit sslc number");
        } else{
            printError("sslcErr", "");
            sslcErr = false;
        }
    }


    // Validate puc number
    if(puc == "") {
        printError("pucErr", "Please enter your puc number");
    } else {
        var regex = /^[1-9]\d{0,2}$/;
        if(regex.test(puc) === false) {
            printError("pucErr", "Please enter a 3 digit puc number");
        } else{
            printError("pucErr", "");
            pucErr = false;
        }
    }
    
  
   
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || sslcErr || pucErr ) == true) {
       return false;
    } else {
        
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n"+
                          "SSLC Mark: " + sslc + "\n"+
                          "PUC Mark: " + puc + "\n";


          var student = {
              name : name,
              email :email,
              mobile : mobile,
              sslc : parseInt(sslc),
              puc : parseInt(puc)
          }
//          console.log("Student", student);      // Student Object Details
          studentList.push(student);            //push Value into Array

          //Desending order Sorting List of Student Details List
          studentList.sort(function(a,b)    
          {
              return (((b.sslc + b.puc)/2) - (a.sslc + a.puc)/2);
          });
          console.log("Student List=>",studentList); 
        // Getting Fist top # student details in given Student List
        function findStudent(val){
          const topSelectedList = studentList.slice(0, val);
          console.log("Selected Student List =>", topSelectedList);
          console.log("val=> ",topSelectedList.length);
        }
      
        function rejectedList(val){
            const rejectedList = studentList.slice(val, studentList.length);
            console.log("Rejected Student List =>", rejectedList);
            console.log("Value=> ",rejectedList.length);
        }
         findStudent(3);  
         rejectedList(3);       //Student list 




//======================Selected Student Details===================================================
         var html = "<table border='1|1'>";
            function selectedStudentList(val){ 
                html+="<td>"+"Rejected Student List"+"</td>";
            for (var i = val; i < studentList.length; i++) {   
            html+="<tr>";
            html+="<td>"+studentList[i].name+"</td>";
            html+="<td>"+studentList[i].email+"</td>";
            html+="<td>"+studentList[i].mobil+"</td>";
            html+="<td>"+studentList[i].sslc+"</td>";
            html+="<td>"+studentList[i].puc+"</td>";
           html+="</tr>";
            }
            html+="</table>";
            document.getElementById("box").innerHTML = html;
        }
//=========================Rejected Student List===================================================
            var html1 = "<table border='1|1'>";

            function RejectedStudentList(val){
                html1+="<th>"+"Selected Student List"+"</th>";
                for (var j = 0; j < val; j++) {
                html1+="<tr>";
                html1+="<td>"+studentList[j].name+"</td>";
                html1+="<td>"+studentList[j].email+"</td>";
                html1+="<td>"+studentList[j].mobil+"</td>";
                html1+="<td>"+studentList[j].sslc+"</td>";
                html1+="<td>"+studentList[j].puc+"</td>";
                html1+="</tr> <br>";
            }
             html1+="</table>";
            document.getElementById("box1").innerHTML = html1; 
        }  
     selectedStudentList(3);
     RejectedStudentList(3);
//=========================================================================


        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
        return false;
    
};

}