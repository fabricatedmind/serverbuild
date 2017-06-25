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
    xhttp.open("GET", "/COR-15823", true);
    xhttp.send();

}
//window.onload = getTicket("COR-12342");

document.getElementById("blahBody").innerHTML = getTicket();