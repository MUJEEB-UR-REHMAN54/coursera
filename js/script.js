$(function(){
    // var send_button = document.getElementById("_send");
    // send_button.onclick = sendMessage;

    $("#_send").click(sendMessage);
    $("#messages").on("click","button", function(){
        $(this).remove();
    })
});

function sendMessage() {
    

    var _First_Name = document.getElementById("fname").value;
    var _Last_Name = document.getElementById("lname").value;;
    var _Phone_Number = document.getElementById("pnum").value;
    var _Email = document.getElementById("Email").value;
    var _Message_Body = document.getElementById("msg").value;
    var _Full_Name = _First_Name + " " + _Last_Name;
    
    //to understand different eays to add HTML element through jquery.
    //https://stackoverflow.com/questions/10619445/the-preferred-way-of-creating-a-new-element-with-jquery

    //------------------------------------------------------------1st way to insert an html.
    // var _Message = "<div><b>" + _Full_Name + ":</b></div><div>" + _Message_Body + "</div><div><b>Email:</b> " + _Email + "</div><div><b>Contact Number</b>: " + _Phone_Number + "</div>";
    
    //------------------------------------------------------------(without jquery)2nd way to insert an html element. 
    // var _name = document.createTextNode(_Full_Name);
    // var _phn_num = document.createTextNode(_Phone_Number);
    // var _email = document.createTextNode(_Email);
    // var _msg_bdy = document.createTextNode(_Message_Body);

    // var div_1 = document.createElement("div");
    // div_1.setAttribute("class", "jname");
    // div_1.appendChild(_name);

    // var div_2 = document.createElement("div");
    // div_2.setAttribute("class", "jmsg_body");
    // div_2.appendChild(_msg_bdy);

    // var div_3 = document.createElement("div");
    // div_3.setAttribute("class", "jemail");
    // div_3.appendChild(_email);

    // var div_4 = document.createElement("div");
    // div_4.setAttribute("class", "jphn_num");
    // div_4.appendChild(_phn_num);

    // var btn_1 = document.createElement("button");
    // btn_1.setAttribute("type", "button");
    // btn_1.setAttribute("class", "btn btn-warning");
    // btn_1.innerHTML = "Edit";

    // var btn_2 = document.createElement("button");
    // btn_2.setAttribute("type", "button");
    // btn_2.setAttribute("class", "btn btn-primary");
    // btn_2.innerHTML = "Reply";

    // var div_0 = document.createElement("div");
    // div_0.setAttribute("class", "message");
    // div_0.appendChild(div_1);
    // div_0.appendChild(div_2);
    // div_0.appendChild(div_3);
    // div_0.appendChild(div_4);

    // var Message_Html = document.getElementById("messages");
    // Message_Html.append(div_0);
    // Message_Html.append(btn_1);
    // Message_Html.append(btn_2);


    //------------------------------------------------------------(with jquery)3rd way to insert an html element.
    // var $div_1 = $("<div>", {id : "1_div"});
    // $("#1_div").addClass("jname");
    // $("#1_div").append(_name);

    // var $div_2 = $("<div></div>" , {id : "2_div"});
    // $("#2_div").addClass("jmsg_bodys");
    // $("#2_div").append(_msg_bdy);

    // var $div_3 = $("<div></div>" , {id : "3_div"});
    // $("#3_div").addClass("jemail");
    // $("#3_div").append(_email);

    // var $div_4 = $("<div></div>" , {id: "4_div"});
    // $("#4_div").addClass("jphn_num");
    // $("#4_div").append(_phn_num);

    //------------------------------------------------------------(with jquery)4th way to insert an html element.
    var $div_1 = $("<div>");
    $($div_1).addClass("jname");
    $($div_1).append(_Full_Name);

    var $div_2 = $("<div></div>");
    $($div_2).addClass("jmsg_bodys");
    $($div_2).append(_Message_Body);

    var $div_3 = $("<div></div>");
    $($div_3).addClass("jemail");
    $($div_3).append(_Email);

    var $div_4 = $("<div></div>");
    $($div_4).addClass("jphn_num");
    $($div_4).append(_Phone_Number);

    var $btn_0 = $("<button></button>");
    $($btn_0).addClass("btn btn-danger");
    $($btn_0).attr("type", "button");
    $($btn_0).text("Delete");

    var $btn_1 = $("<button></button>");
    $($btn_1).addClass("btn btn-warning");
    $($btn_1).attr("type", "button");
    $($btn_1).text("Edit");

    var $btn_2 = $("<button></button>");
    $($btn_2).addClass("btn btn-primary");
    $($btn_2).attr("type", "button");
    $($btn_2).text("Update");
    
    var $div_0 = $("<div></div>");
    $($div_0).addClass("message");
    $($div_0).append($div_1);
    $($div_0).append($div_2);
    $($div_0).append($div_3);
    $($div_0).append($div_4);
    
    $("#messages").append($btn_0);
    $("#messages").append($div_0);
    $("#messages").append($btn_1);
    $("#messages").append($btn_2);
}
