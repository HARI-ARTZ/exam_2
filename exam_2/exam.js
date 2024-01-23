//[id , brand , model , type , pricePerDay, available]
let carBooking =[
    [1,'Toyota', 'Corolla', 'Sedan ',50 ,10],
    [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
    [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
    [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
    [5,'Nissan', 'Altima' , 'Sedan',45,12]
];


//1. print all car brands
console.log('car brands :');
carBookingbrands = carBooking.map(carb=>carb[1]).forEach(bran=> {console.log(bran);});
console.log('**************');


//2.print total number of cars available
console.log('total cars :');
totalcars = carBooking.map(carb=>carb[5]).reduce((car1,car2)=>car1+car2)
console.log(totalcars);
console.log('**************');


//3. print sedan car details
console.log('details of sedan car :');
Sedan = carBooking .find(type=>type[3]=='Sedan')
console.log(Sedan);
console.log('************');

//4. print car with price per day greater than 60
console.log('price per day >60 :');
carBooking.filter(carb=>carb[4]>60).forEach(bran=>{console.log(bran);});
console.log('**************');

//5. print the details of 'jeep wrangler'
console.log('details of jeep wrangler :');
Jeep = carBooking .find(bran=>bran[1]=='Jeep')
console.log(Jeep);
console.log('************');


//6. sort cars based on the descending order of the price per day
console.log('descending order of the price per day :');
carBooking.sort((car1,car2)=>car2[4]-car1[4]).forEach(bran=>{console.log(bran[1]);});

console.log('************');

//7. sort cars based on the ascending order of available car
console.log(' ascending order of the available car :');
carBooking.sort((car1,car2)=>car2[5]+car1[5]).forEach(bran=>{console.log(bran[1]);});

console.log('************');

//8. fin the car with the most available
console.log('most available :');
mostavaicar = carBooking.reduce((car1,car2)=>car1[5]>car2[5]?car1:car2)
console.log(mostavaicar[1]);
console.log('************');


//9. calculate the revenue if all cars are rented for a day
console.log('revenue if all cars are rented for a day :');
totalrevenue = carBooking.map(carb=>carb[4]).reduce((car1,car2)=>car1+car2)
console.log(totalrevenue);
console.log('************');

//10. count the number of sedan cars
console.log('number of sedan cars');




//11. print all unique car brands
console.log('unique car brands :');
carBookingbrands = carBooking.map(carb=>carb[1]).forEach(bran=> {console.log(bran);});
console.log('**************');


//12. find the total number of available cars for all types
console.log('total number of available cars for all types :');
totalavalcars = carBooking.map(carb=>carb[5]).reduce((car1,car2)=>car1+car2)
console.log(totalavalcars);
console.log('**************');


//13. find the cars with the least available cars 
console.log(' cars with the least available cars :');
leastavilcar = carBooking.reduce((car1,car2)=>car1[5]<car2[5]?car1:car2)
console.log(leastavilcar[1]);
console.log('**************');


//14. check if there is any car with a price exactly 55

console.log('if there is any car with a price exactly 55');
priceexactly55 = carBooking.some(price=>price=55)
console.log(priceexactly55?'yes':'no');