window.onload = function(){
    var send_button = document.getElementById("_send");
    send_button.onclick = sendMessage;
};

function sendMessage() {
    var _First_Name = document.getElementById("fname").value;
    var _Last_Name = document.getElementById("lname").value;;
    var _Phone_Number = document.getElementById("pnum").value;
    var _Email = document.getElementById("Email").value;
    var _Message_Body = document.getElementById("msg").value;
    var _Full_Name = _First_Name + " " + _Last_Name;
    var _name = document.createTextNode(_Full_Name);
    var _phn_num = document.createTextNode(_Phone_Number);
    var _email = document.createTextNode(_Email);
    var _msg_bdy = document.createTextNode(_Message_Body);
    var div_1 = document.createElement("div");
    div_1.setAttribute("class", "jname");
    div_1.appendChild(_name);

    var div_2 = document.createElement("div");
    div_2.setAttribute("class", "jmsg_body");
    div_2.appendChild(_msg_bdy);

    var div_3 = document.createElement("div");
    div_3.setAttribute("class", "jemail");
    div_3.appendChild(_email);

    var div_4 = document.createElement("div");
    div_4.setAttribute("class", "jphn_num");
    div_4.appendChild(_phn_num);

    var btn_1 = document.createElement("button");
    btn_1.setAttribute("type", "button");
    btn_1.setAttribute("class", "btn btn-warning");
    btn_1.innerHTML = "Edit";

    var btn_2 = document.createElement("button");
    btn_2.setAttribute("type", "button");
    btn_2.setAttribute("class", "btn btn-primary");
    btn_2.innerHTML = "Reply";

    var div_0 = document.createElement("div");
    div_0.setAttribute("class", "message");
    div_0.appendChild(div_1);
    div_0.appendChild(div_2);
    div_0.appendChild(div_3);
    div_0.appendChild(div_4);
    
    // var _Message = "<div><b>" + _Full_Name +
    // ":</b></div><div>" + _Message_Body +
    // "</div><div><b>Email:</b> " + _Email + 
    // "</div><div><b>Contact Number</b>: " + _Phone_Number + "</div>";
    var Message_Html = document.getElementById("messages");
    Message_Html.appendChild(div_0);
    Message_Html.appendChild(btn_1);
    Message_Html.appendChild(btn_2);
}
