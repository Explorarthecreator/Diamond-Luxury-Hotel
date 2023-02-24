// var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31],
//     today = new Date(),
//     // default targetDate is christmas
//     targetDate = new Date(today.getFullYear(), 11, 25); 

// setDate(targetDate);
// setYears(5) // set the next five years in dropdown

// $("#select-month").change(function() {
// var monthIndex = $("#select-month").val();
// setDays(monthIndex);
// });

// function setDate(date) {
// setDays(date.getMonth());
// $("#select-day").val(date.getDate());
// $("#select-month").val(date.getMonth());
// $("#select-year").val(date.getFullYear());
// }

// // make sure the number of days correspond with the selected month
// function setDays(monthIndex) {
// var optionCount = $('#select-day option').length,
//     daysCount = daysInMonth[monthIndex];

// if (optionCount < daysCount) {
//     for (var i = optionCount; i < daysCount; i++) {
//     $('#select-day')
//         .append($("<option></option>")
//         .attr("value", i + 1)
//         .text(i + 1));
//     }
// }
// else {
//     for (var i = daysCount; i < optionCount; i++) {
//     var optionItem = '#select-day option[value=' + (i+1) + ']';
//     $(optionItem).remove();
//     }
// }
// }

// function setYears(val) {
// var year = today.getFullYear();
// for (var i = 0; i < val; i++) {
//     $('#select-year')
//         .append($("<option></option>")
//         .attr("value", year + i)
//         .text(year + i)); 
//     }
// }

const parking = document.getElementById('parking');
const dining = document.getElementById('dining');
const spa = document.getElementById('spa');
const resort = document.getElementById('resort');
const casino = document.getElementById('casino');
const bedroom = document.getElementById('bedroom');
const eventSpace = document.getElementById('event');



const parkingPictures = document.getElementById('parkingPics')
const mainPictures = document.querySelector('.spacepics')
const spaPictures = document.getElementById('spaPics')
const resortPics = document.getElementById('resortPics')
const casinoPics = document.getElementById('casinoPics')
const bedPics = document.getElementById('bedPics')
const eventPics = document.getElementById('eventPics')


const changeDining = ()=>{
    mainPictures.setAttribute('style','display:block;');
    parkingPictures.setAttribute('style','display:none;');
    spaPictures.setAttribute('style','display:none;');
    resortPics.setAttribute('style','display:none;');
    casinoPics.setAttribute('style','display:none;');
    bedPics.setAttribute('style','display:none;');
    eventPics.setAttribute('style','display:none;');
    dining.classList.add('acti')
    parking.classList.remove(`acti`)
    spa.classList.remove(`acti`)
    resort.classList.remove(`acti`)
    casino.classList.remove(`acti`)
    bedroom.classList.remove(`acti`)
    eventSpace.classList.remove(`acti`)
    console.log(emma.innerHTML);
};

const changeParking = ()=>{
    // alert('My NAme is Explorar')
    // mainPictures.classList.add('hide')
    // parkingPictures.classList.add('sho')
    mainPictures.setAttribute('style','display:none;');
    parkingPictures.setAttribute('style','display:block;');
    spaPictures.setAttribute('style','display:none;');
    resortPics.setAttribute('style','display:none;');
    casinoPics.setAttribute('style','display:none;');
    bedPics.setAttribute('style','display:none;');
    eventPics.setAttribute('style','display:none;');
    // emm.setAttribute('style','border-bottom:2px solid #583101')
    parking.classList.add('acti')
    dining.classList.remove(`acti`)
    spa.classList.remove(`acti`)
    resort.classList.remove(`acti`)
    casino.classList.remove(`acti`)
    bedroom.classList.remove(`acti`)
    eventSpace.classList.remove(`acti`)
    console.log(emma.innerHTML);
};

const changeSpa = ()=>{
    // alert('My NAme is Explorar')
    // emmma.setAttribute('style','display:none;');
    // emma.setAttribute('style','display:block;');
    // emm.setAttribute('style','border-bottom:2px solid #583101')
    mainPictures.setAttribute('style','display:none;');
    parkingPictures.setAttribute('style','display:none;');
    spaPictures.setAttribute('style','display:block;');
    resortPics.setAttribute('style','display:none;');
    casinoPics.setAttribute('style','display:none;');
    bedPics.setAttribute('style','display:none;');
    eventPics.setAttribute('style','display:none;');
    spa.classList.add('acti')
    dining.classList.remove(`acti`)
    parking.classList.remove(`acti`)
    resort.classList.remove(`acti`)
    casino.classList.remove(`acti`)
    bedroom.classList.remove(`acti`)
    eventSpace.classList.remove(`acti`)
    console.log(emma.innerHTML);
};

const changeResort = ()=>{
    // alert('My NAme is Explorar')
    // emmma.setAttribute('style','display:none;');
    // emma.setAttribute('style','display:block;');
    // emm.setAttribute('style','border-bottom:2px solid #583101')
    mainPictures.setAttribute('style','display:none;');
    parkingPictures.setAttribute('style','display:none;');
    spaPictures.setAttribute('style','display:none;');
    resortPics.setAttribute('style','display:block;');
    casinoPics.setAttribute('style','display:none;');
    bedPics.setAttribute('style','display:none;');
    eventPics.setAttribute('style','display:none;');
    resort.classList.add('acti')
    dining.classList.remove(`acti`)
    spa.classList.remove(`acti`)
    parking.classList.remove(`acti`)
    casino.classList.remove(`acti`)
    bedroom.classList.remove(`acti`)
    eventSpace.classList.remove(`acti`)
    console.log(emma.innerHTML);
};

const changeCasino = ()=>{
    // alert('My NAme is Explorar')
    // emmma.setAttribute('style','display:none;');
    // emma.setAttribute('style','display:block;');
    // emm.setAttribute('style','border-bottom:2px solid #583101')
    mainPictures.setAttribute('style','display:none;');
    parkingPictures.setAttribute('style','display:none;');
    spaPictures.setAttribute('style','display:none;');
    resortPics.setAttribute('style','display:none;');
    casinoPics.setAttribute('style','display:block;');
    bedPics.setAttribute('style','display:none;');
    eventPics.setAttribute('style','display:none;');
    casino.classList.add('acti')
    dining.classList.remove(`acti`)
    spa.classList.remove(`acti`)
    resort.classList.remove(`acti`)
    parking.classList.remove(`acti`)
    bedroom.classList.remove(`acti`)
    eventSpace.classList.remove(`acti`)
    console.log(emma.innerHTML);
};

const changeBed = ()=>{
    // alert('My NAme is Explorar')
    // emmma.setAttribute('style','display:none;');
    // emma.setAttribute('style','display:block;');
    // emm.setAttribute('style','border-bottom:2px solid #583101')
    mainPictures.setAttribute('style','display:none;');
    parkingPictures.setAttribute('style','display:none;');
    spaPictures.setAttribute('style','display:none;');
    resortPics.setAttribute('style','display:none;');
    casinoPics.setAttribute('style','display:none;');
    bedPics.setAttribute('style','display:block;');
    eventPics.setAttribute('style','display:none;');
    bedroom.classList.add('acti')
    dining.classList.remove(`acti`)
    spa.classList.remove(`acti`)
    resort.classList.remove(`acti`)
    casino.classList.remove(`acti`)
    parking.classList.remove(`acti`)
    eventSpace.classList.remove(`acti`)
    console.log(emma.innerHTML);
};

const changeEvents = ()=>{
    // alert('My NAme is Explorar')
    // emmma.setAttribute('style','display:none;');
    // emma.setAttribute('style','display:block;');
    // emm.setAttribute('style','border-bottom:2px solid #583101')
    mainPictures.setAttribute('style','display:none;');
    parkingPictures.setAttribute('style','display:none;');
    spaPictures.setAttribute('style','display:none;');
    resortPics.setAttribute('style','display:none;');
    casinoPics.setAttribute('style','display:none;');
    bedPics.setAttribute('style','display:none;');
    eventPics.setAttribute('style','display:block;');
    eventSpace.classList.add('acti')
    dining.classList.remove(`acti`)
    spa.classList.remove(`acti`)
    resort.classList.remove(`acti`)
    casino.classList.remove(`acti`)
    bedroom.classList.remove(`acti`)
    parking.classList.remove(`acti`)
    console.log(emma.innerHTML);
};


// const reverse = ()=>{
//     emmma.setAttribute('style','display:block;');
//     emma.setAttribute('style','display:none')
// }

// add
// remove
// toggle