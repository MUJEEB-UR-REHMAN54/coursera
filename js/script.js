$(function(){
    // var send_button = document.getElementById("_send");
    // send_button.onclick = sendMessage;

    $("#_send").click(sendMessage);
    $("#messages").on("click","#Del_btn", function(){
        var self = this;
        del_msg(self);
    });
    $("#messages").on("click", "#Ed_btn", edit_msg);
    GetRequest();
    $("#apis").on("click", "#del_rec", DeleteRecord);
    $("#apis").on("click", "#edit_rec", EditRecord);
    $("#add_rec").click(AddRecord);
    $("#update_rec").click(UpdateRecord);

});

function sendMessage() {
    

    var _First_Name = $("#fname").val();
    var _Last_Name = $("#lname").val();;
    var _Phone_Number = $("#pnum").val();
    var _Email = $("#Email").val();
    var _Message_Body = $("#msg").val();
    var _Full_Name = _First_Name + " " + _Last_Name;

    var isempty = false;
    if(!_First_Name){
        $("#fname").addClass("empty");
        isempty = true;
    }else{
        $("#fname").removeClass("empty");
    }
    if(!_Last_Name){
        $("#lname").addClass("empty");
        isempty = true;
    }else{
        $("#lname").removeClass("empty");
    }
    if(!_Phone_Number){
        $("#pnum").addClass("empty");
        isempty = true;
    }else{
        $("#pnum").removeClass("empty");
    }
    if(!_Email){
        $("#Email").addClass("empty");
        isempty = true;
    }else{
        $("#Email").removeClass("empty");
    }
    if(!_Message_Body){
        $("#msg").addClass("empty");
        isempty = true;
    }else{
        $("#msg").removeClass("empty");
    }
    
    if(isempty){
        return;
    }
    
    $("#fname").val("");
    $("#lname").val("");
    $("#pnum").val("");
    $("#Email").val("");
    $("#msg").val("");
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
    $($div_1).append("Name: ");
    $($div_1).append(_Full_Name);

    var $div_2 = $("<div></div>");
    $($div_2).addClass("jmsg_body");
    $($div_2).append("Message: ");
    $($div_2).append(_Message_Body);

    var $div_3 = $("<div></div>");
    $($div_3).addClass("jemail");
    $($div_3).append("Email: ");
    $($div_3).append(_Email);

    var $div_4 = $("<div></div>");
    $($div_4).addClass("jphn_num");
    $($div_4).append("Contact: ");
    $($div_4).append(_Phone_Number);

    var $btn_0 = $("<button></button>");
    $($btn_0).addClass("btn btn-danger btn-sm");
    $($btn_0).attr("type", "button");
    $($btn_0).attr("id", "Del_btn");
    $($btn_0).text("Delete");

    var $btn_1 = $("<button></button>");
    $($btn_1).addClass("btn btn-warning btn-sm");
    $($btn_1).attr("type", "button");
    $($btn_1).attr("id", "Ed_btn");
    $($btn_1).text("Edit");

    
    var $div_0 = $("<div></div>");
    $($div_0).addClass("message");
    $($div_0).append($div_1);
    $($div_0).append($div_2);
    $($div_0).append($div_3);
    $($div_0).append($div_4);

    var $div_m = $("<div></div>");
    $($div_m).addClass("outer_msg");
    $($div_m).append($div_0);
    $($div_m).append($btn_0);
    $($div_m).append($btn_1);


    
    $("#messages").append($div_m);
}

function del_msg(self){
    $(self).parent().remove();
}

function edit_msg(){
    var $parent_1 = $(this).parent();

    var $_div_0 = $($parent_1).children("div");

    // var $_div_1 = $($_div_0).children(".jname").get(0).innerHTML;   //// same as used below gives the innerhtml.
    var $_div_1 = $($_div_0).children(".jname").html();
    var $_div_2 = $($_div_0).children(".jmsg_body").html();
    var $_div_3 = $($_div_0).children(".jemail").html();
    var $_div_4 = $($_div_0).children(".jphn_num").html();
    var $f_name = $_div_1.split(" ");
    
    $("#fname").val($f_name[0]);
    $("#lname").val($f_name[1]);
    $("#msg").val($_div_2);
    $("#pnum").val($_div_4);
    $("#Email").val($_div_3);
    var self = this;    
    del_msg(self);

}

function AddRecord(){
    var _title = $("input[name = title]").val();
    var _body = $("textarea[name= Body]").val();
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/recipes",
        method: "POST",
        data: {title: _title, body: _body},
        success: function(response){
            console.log(response);
            console.log("The recipie is added successfully");
            GetRequest();
        }
    })
}

function EditRecord(){
    var this_btn = $(this);
    var parent_div = this_btn.closest(".recipie");
    var _id = parent_div.attr("recipie_id"); 
    // var _title = parent_div.children("h5").html();
    // var _body = parent_div.children("p").html();
    $.get("https://usman-recipes.herokuapp.com/api/recipes/"+_id, function(response){
        $("#_Id").val(response._id);
        $("#_Title").val(response.title);
        $("#_Body").val(response.body);
        $("#edit_record").modal("show");
    });    
}

function UpdateRecord(){
    var _id = $("#_Id").val();
    var _title = $("#_Title").val();
    var _body = $("#_Body").val();
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/recipes/" + _id,
        method: "PUT",
        data: {title: _title, body: _body},
        success: function(response){
            console.log(response);
            console.log("The recipie is updated successfully");
            GetRequest();
            $("#edit_record").modal("hide");
        }
    })
}
function DeleteRecord(){
    console.log("Deleting Recipie");
    var this_btn = $(this);
    var parent_div = this_btn.closest(".recipie");
    var Id = parent_div.attr("recipie_id");
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/recipes/"+Id,
        method: "DELETE",
        success: function(response){
            GetRequest();
        }
    })
}

function GetRequest(){
    console.log("Getting Recipies.");
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/recipes",
        method: "GET",
        success: function(response){
            console.log(response);
            var response_n = $("#apis");
            response_n.empty();
            for(var i = 0; i < response.length; i++){
                response_n.append(`<div class = "recipie" recipie_id = "${response[i]._id}"> <h5> ${response[i].title} </h5> <p> ${response[i].body} <button id= "del_rec" class= "btn btn-danger btn-sm float-right">Delete</button> <button id= "edit_rec" class= "btn btn-warning btn-sm float-right">Edit</button></p> </div>`);
            }

        }
    })
}

