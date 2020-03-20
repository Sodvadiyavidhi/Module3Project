//Javascript document
//the main function or the parent function/object template of all the functions with all the property named Rental.
function Rental(name, price, rating, location, rooms, features, availability) {
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.rooms = rooms;
    this.availability = availability;
    this.features = features;
}
//method to display the properties.
Rental.prototype.details = function() {
    //setting the values to the paragraph set in the section which are selected using the id name.
    let section = document.getElementById('innerdescp');
    let para = document.getElementById('cuba');
    let detail = this.name + ' will cost $' + this.price + ' with ratings ' + this.rating + ' and is located at ' + this.location + '. There are ' + this.rooms + ' rooms. It has ' + this.features + ' and ' + this.availablility + ' available.';
    para.innerHTML = detail;
    section.appendChild(para);
    //displaying the values in the console.
    console.log(detail);
};
//function to check the if the place is available or not
function Available(name, availabilty) {
    Rental.call(this, name, availabilty);
    if (this.availability === 'is') {
        this.availability = availabilty;
    }
}
Available.prototype = Object.create(Rental.prototype);
//object instances for the first property.
let cuba = new Rental('Cubex', 575.50, 4.5, 'Havana,Cuba', 3, 'Swimming pool and a jacuzzi', 'is');
let montreal = new Rental('Monty', 600, 3.75, 'Montreal,Quebec', 5, 'Fire Place and a garden', 'is not');
// function/object template to check if the function is of special type or not which is inherting the properties of Rental function.
function Rate(name, price, rating, location, rooms, features, availability, type) {
    Rental.call(this, name, price, rating, location, rooms, features, availability);
    this.type = type;
    type = 'special type';
}
//function Calculate(price,type,newPrice){
//    Rate.call(this,price,type);
//
//    if(type=='special rate'){
//    newPrice= price-((20/100)*price);
//}
//    else{
//      this.newPrice=newPrice;
//    }
//}
//method to calculate the special price and display the new price if the type is special.
Rate.prototype.calculate = function(price, type, newPrice) {
    Rate.call(this, price, type);
    if (type == 'special rate') {
        newPrice = price - ((20 / 100) * price);
    } else {
        this.newPrice = newPrice;
    }
};
//Calculate.prototype=Object.create(Rate.prototype);
Rate.prototype = Object.create(Rental.prototype);
//displaying the details.
Rate.prototype.details = function() {
    let section = document.getElementById('innerdescp');
    let para = document.getElementById('sydney');
    let detail = this.name + ' will cost $' + this.price + ' with ratings ' + this.rating + ' and is located at ' + this.location + '. There are ' + this.rooms + ' rooms. It has ' + this.features + ' and ' + this.availablility + ' available and has ' + this.type;
    para.innerHTML = detail;
    section.appendChild(para);
    console.log(detail);
};
//object instance with type special property.
let sydney = new Rate('Syden', 800, 4.8, 'Sydney, Australia', 2, 'Beach side view', 'is', 'special type');
//object template for the type super host that inherits from the Rental function.
function SuperHost(name, price, rating, location, rooms, features, availability, type) {
    Rental.call(this, name, price, rating, location, rooms, features, availability);
    this.type = type;
    type = 'Super Host';
}
//method to check of the object instance is of type super host and if it is, set the value for the host rating.
function shRating(name, price, rating, location, rooms, features, availability, type, hostrating) {
    SuperHost.call(this, name, price, rating, location, rooms, features, availability, type);
    if (type == 'Super Host') {
        hostrating = 4.5;
    }
};
//using the prototype property for inhertance.
SuperHost.prototype = Object.create(Rental.prototype);
shRating.prototype = Object.create(SuperHost.prototype);
SuperHost.prototype.details = function() {
    let section = document.getElementById('innerdescp');
    let para = document.getElementById('rome');
    let detail = this.name + ' will cost $' + this.price + ' with ratings ' + this.rating + ' and is located at ' + this.location + '. There are ' + this.rooms + ' rooms. It has ' + this.features + ' and ' + this.availablility + ' available and has ' + this.type;
    para.innerHTML = detail;
    section.appendChild(para);
    console.log(detail);
};
let rome = new SuperHost('Roma', 750, 3.6, 'Rome,Italy', 4, '3 big rooms with balcony and one kids room', 'is', 'Super Host');