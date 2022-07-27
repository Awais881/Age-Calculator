const miliSecondsInYear= 31557600000;
const miliSecondsInMonth= 2629800000;
const miliSecondsInDay= 86400000;

let intervalId1 = undefined;
		

// Calculating the age Of user

function birthAge() {  
   
			intervalId1 = setInterval(() => {
				birthAge()
			}, 1000);

    let today= new Date();
    let dateEntered= new Date(document.querySelector("#userAge").value
   );
   if (dateEntered=="" || dateEntered=="Invalid Date") {
      alert("Enter a date!");
      return;
   }
   //validation if user enters a birth-date of future
   if (dateEntered > today) {
      alert("Age can't be greater then current Date!");
      return;
   }
   


   let diffInMili= today - dateEntered;
    console.log("Total MiliSeconds:", diffInMili);

      let ageInYear= Math.floor (diffInMili / miliSecondsInYear);
       let reminderOfYear=  diffInMili % miliSecondsInYear

       let ageInMonth= Math.floor (reminderOfYear / miliSecondsInMonth);
       let reminderOfMonth=  reminderOfYear % miliSecondsInMonth

       let ageInDays= Math.floor (reminderOfMonth / miliSecondsInDay);
       document.querySelector("#age").innerHTML=  'You are  '+ageInYear+'  Years '+ageInMonth+' Months '+ageInDays+' Days Old ' ;  

     
       // Calculating Next BirthDay 
       let birthDayThisYear= dateEntered;
        birthDayThisYear.setFullYear(today.getFullYear());

        let thisMOnth=today.getMonth();
        let birthDayMonth= dateEntered.getMonth();

     if(thisMOnth> birthDayMonth){
        birthDayThisYear.setFullYear(birthDayThisYear.getFullYear() +1);
       
     }  
        let nextBirthdayDiffInMili= birthDayThisYear - today
        let nextBirthdayInDays= Math.floor(nextBirthdayDiffInMili/miliSecondsInDay);
        let nextBirthdayInDaysReminder= nextBirthdayDiffInMili % miliSecondsInDay;


        let nextBirthdayInHours=  Math.floor(nextBirthdayInDaysReminder/(1000*60*60));
       let nextBirthdayInHoursReminder=  nextBirthdayInDaysReminder % (1000*60*60);


       
       let nextBirthdayInMInutes=  Math.floor(nextBirthdayInHoursReminder/(1000*60));
       let nextBirthdayInMInutesReminder=  nextBirthdayInHoursReminder % (1000*60);

       let nextBirthdayInSeconds=  Math.floor(nextBirthdayInMInutesReminder/(1000));
       let nextBirthdayInSecondsReminder=  nextBirthdayInMInutesReminder % (1000);
     
       document.querySelector("#birth").innerHTML=  nextBirthdayInDays + 'Days &nbsp'+ nextBirthdayInHours +'Hours &nbsp' +nextBirthdayInMInutes+ 'Minutes and '
       + nextBirthdayInSeconds + 'Seconds are Left Until Your Next birth';
    }

   