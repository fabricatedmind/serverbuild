$(function(){

    var clients = [
        { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
        { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
        { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },
        { "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave", "Married": true },
        { "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street", "Married": false }
    ];
 
    var countries = [
        { Name: "", Id: 0 },
        { Name: "United States", Id: 1 },
        { Name: "Canada", Id: 2 },
        { Name: "United Kingdom", Id: 3 }
    ];
 
    $("#jsGrid").jsGrid({
        height: "70%",
        width: "100%",
        filtering: true,
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 10,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete client?",
        controller: {
            loadData: function(){
                return $.ajax({
                    type: "GET",
                    url: "/api/list",
                    dataType: "json",
                    
                    
                });
            }
        },  
        
        fields: [
            { name: "Hostname", type: "text", width: 150, validate: "required" },
            
            { type: "control" }
        ]
    });

});





function copyRow(trId){
    //console.log(trId);
    //console.log(trId.parentNode.childNodes.length);
    //set value to append later
    var tBody = trId.parentNode;
    //grab the tr id and replace any characters but numerical
    var theId = trId.id.replace(/\D/g,'');
    //set the newId by grapping the parent node (#theBody) and adding 1 to the end
    var newId = trId.parentNode.childNodes.length + 1;
    //clone the node to a new variable
    var newTr = trId.cloneNode(true);
    //set the new id for the tr to not have dups
    newTr.id = "trid"+newId;
    //append new row to end of #tbody
    tBody.appendChild(newTr);
    //console.log(document.getElementById("theBody"));

}

function getTicket(corTicketId){
    //console.log(corTicketId);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == XMLHttpRequest.DONE){
            if (xhttp.status == 200){
                var response = JSON.parse(xhttp.responseText);
                console.log(response);
                var tBody = document.getElementById("blahBody");
                console.log(tBody);
                for(var x = 0; x < response.length; x++){
                    var newTr = document.createElement('tr');
                    for (key in response[x]){
                        var newTd = document.createElement('td');
                        newTd.setAttribute('contenteditable', 'true');
                        var tdText = document.createTextNode(response[x][key]);
                        newTd.appendChild(tdText);
                        newTr.appendChild(newTd);
                    }
                    tBody.appendChild(newTr);
                }
                console.log(tBody);
                document.getElementById("blahBody").innerHTML = tBody.innerHTML;
            }
            else if (xhttp.status == 400){
                console.log("error 400");
            }
            else{
                console.log("Something other than 200");
            }
        }
    }
    xhttp.open("GET", "/api/list", true);
    xhttp.send();

}
//window.onload = getTicket("COR-12342");

document.getElementById("blahBody").innerHTML = getTicket();