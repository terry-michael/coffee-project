"use strict";

var searchInput = document.getElementById('search');

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},

    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];

var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

div.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);

// function findObjectByKey(array, key, value) {
//     for (var i = 0; i < coffees.length; i++) {
//         if (coffees[i][key] === value) {
//             return coffees[i];
//         }
//     }
//     return null;
// }
//  var resultObject = findObjectByKey(coffee.name, coffees);

function search(nameCoffee) {
    // outputArr of filtered results
    var filteredNames = [];

    for (var i = 0; i < coffees.length; i++) {
        // check if user input is anywhere in the string of a coffees[i].name with .indexOf()
        if (coffees[i].name.indexOf(nameCoffee) !== -1) {
            filteredNames.push(coffees[i]);
        }
    }

    // return the filtered results outputArr
    return filteredNames;
}


submitButton.addEventListener('click', function(e){
    e.preventDefault();
    console.log(search(searchInput.value));
});

// coffees = search(coffee.name, coffees);
// console.log(search());