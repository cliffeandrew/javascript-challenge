// from data.js
//var tableData = data;
var tableData = d3.select("tbody");

// YOUR CODE HERE!
console.log(data);


data.forEach((ufosighting) => {
    var row = tableData.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  