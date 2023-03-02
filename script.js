// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$().ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').click(function(){
    var timeblock = $(this).parent().attr('id');
    var memo = $(this).prev().val();
    localStorage.setItem(timeblock, memo);
    
    //console.log(timeblock);
    //console.log(memo);
    //console.log(oldInfo);
  }); 

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var ctime = dayjs().format('HH');
  console.log(ctime);
  //const timeslot = [7,8,9,10,11,12,13,14,15,16,17,18,19];
  /* for(i=0; i < timeslot.length; i++){
    //console.log(timeslot[i]);
    if(timeslot[i] < ctime){
        console.log('past');
        
    }
  } */
  var tblock = $('.container-lg').children('div');
  //console.log(tblock);

  for(j = 0; j < tblock.length; j++ ){
    var tid = '#' + tblock[j]['id'];
    var shorttid = tid.split('-');
    //console.log(tid);
    //console.log(shorttid);
    //console.log(shorttid[0]);
    //console.log(shorttid[1]);

    
    if(shorttid[1] < ctime){
        //console.log('past');
        $(tid).addClass('past');
    } else if (shorttid[1] == ctime) {
        //console.log('present');
        $(tid).addClass('present');
    }else if (shorttid[1] > ctime ){
        //console.log('future');
        $(tid).addClass('future');

    }
  }
  
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
    for(i = 0; i < tblock.length; i++ ){
        var getID = tblock[i]['id'];
        //console.log(getID);
        var oldInfo = localStorage.getItem(getID);
        //console.log(oldInfo);
        if(oldInfo != null){
            $('#'+getID).children('textarea').val(oldInfo);
        }

    }
    
  //
  // TODO: Add code to display the current date in the header of the page.
  var cday = dayjs().format('MM/DD/YYYY');
  $('#currentDay').text(cday);
  console.log(cday);

});
