// from data.js
//var tableData = data;
var tableData = d3.select("tbody");

// YOUR CODE HERE!
console.log(data);

var filter_btn = d3.select("#filter-btn");
var datetime = d3.select("#datetime");

filter_btn.on("click", runEnter);
datetime.on("click", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(people);
    var filteredData = ufo.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);
}



data.forEach((ufosighting) => {
    var row = tableData.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  