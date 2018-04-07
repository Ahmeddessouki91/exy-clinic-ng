function FormatterPhoto(value, row, index) {
    //console.log(row);
    //return "";
    //row.name
    return "<img src=" + row.photo + " class='' />";
}

function FormatterAction(value, row, index) {
    
return '<div class="person-btns">\
                                    <a class="here-personBtn" href="#"><img src="images/here.png" alt=""> Here</a>\
                                    <a class="enter-personBtn" href="#"><img src="images/enter.png" alt=""> Enter</a>\
                                    <a class="edit-personBtn" href="#"><img src="images/edit.png" alt=""> Edit</a>\
                                    <a class="delete-personBtn" href="#"><img src="images/delete.png"\ alt="">Delete</a>\
                                </div>';
}

function rowStyle(row,index){
    return {
    classes: 'text-nowrap tr-style',
    css: {
        "padding" : "15px"
    }
  };
}

function FormatterAge(value, row, index){
    return '<span class="ageCircle"><i class=" fas fa-circle"></i> '+ row.age + ' years'
}

function FormatterServ(value, row, index){
    return '<span class="ageCircle"><i class=" fas fa-circle"></i> '+ row.service
}