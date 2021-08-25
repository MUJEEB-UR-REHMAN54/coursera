window.onload = function(){
    var send_button = document.getElementById("_send");
    send_button.onclick = sendMessage;
};

function sendMessage() {
    var _First_Name = document.getElementById("fname").value;
    console.log("_First_Name");
    var _Last_Name = document.getElementById("lname").value;
    var _Phone_Number = document.getElementById("pnum").value;
    var _Email = document.getElementById("Email").value;
    var _Message_Body = document.getElementById("msg").value;
    var _Full_Name = _First_Name + " " + _Last_Name;
    var _Message = "<div><b>" + _Full_Name +
    ":</b></div><div>" + _Message_Body +
    "</div><div><b>Email:</b> " + _Email + 
    "</div><div><b>Contact Number</b>: " + _Phone_Number + "</div>";
    var Message_Html = document.getElementById("messages");
    Message_Html.innerHTML = Message_Html.innerHTML + _Message;
}
