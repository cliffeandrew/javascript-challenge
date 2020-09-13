// from data.js

//--Refernce to Table Body
//var tableData = data;
var tableData = d3.select("tbody");
//var tableData2 = data;

// YOUR CODE HERE!
//--Initial Console Log
console.log(data);

//--Select Button
var filter_btn = d3.select("#filter-btn");
//var datetime = d3.select("#datetime");
//var filters = d3.select("#filters");

//--Create Event Handlers
filter_btn.on("change", runEnter);
filter_btn.on("click", runEnter);
//datetime.on("click", runEnter);
//filters.on("click", runEnter);
//filters.on("enter", runEnter);

//--Complete Event Handler Function for the Form
function runEnter() {

    //--Prevent Refreshing
    d3.event.preventDefault();
    
    //--Select input element and get raw HTML node
    var inputElement = d3.select("#datetime");
    //var inputElement = d3.select("#ufo-table");

    //--Get value property of input element
    var inputValue = inputElement.property("value");

    //--Print to Console
    console.log(inputValue);
    console.log(tableData);


    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    //var filteredData = tableData2.filter(ufo => ufo.datetime === inputValue);
    
    console.log(filteredData);
    
    //--Create Array with Filtered Date
    var selectdate = filteredData.map(ufo => ufo.datetime);

    //--Remove Children from List
    list.html("");

    //--Append Rows to the List
    list.append("li").text("datetime: {datetime}");
    list.append("li").text("city: {city}");
    list.append("li").text("state: {state}");
    list.append("li").text("country: {country}");
    list.append("li").text("shape: {shape}");
    list.append("li").text("durationMinutes: {durationMinutes}");    
    list.append("li").text("comments: {comments}");
}


//--Refactor using Arrow Function
data.forEach((ufosighting) => {
    var row = tableData.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  