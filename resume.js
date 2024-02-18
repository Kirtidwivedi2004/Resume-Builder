function addNewexpField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("expField");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter Here");

    letexpOb=document.getElementById("exp");
    let addexpOb=document.getElementById("expAddBtn");

    WebSocket.insertBefore(newNode,expAddBtnOb);
}