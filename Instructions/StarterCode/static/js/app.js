// from data.js
var tableData = data;



var tbody = d3.select("tbody");
tableData.forEach((sightings) => {
    // Creating table rows for each row of alients data
    var row = tbody.append("tr");
    //Iterating thru each row for key and values
    Object.entries(sightings).forEach(([key, value]) => {
        // Creating cells for posting table data
        var cell = row.append("td");
        cell.text(value);
    });


    
    var button = d3.select("#filter-btn");
    // Select the form
    var form = d3.select("#form");
    
    // Create event handlers 
    button.on("click", runEnter);
    form.on("submit",runEnter);
    
    // Complete the event handler function for the form
    function runEnter() {
    
      // Prevent the page from refreshing
      d3.event.preventDefault();
      
      // Select the input element and get the raw HTML node
      var inputElement = d3.select("#datetime.form-control");
    
      // Get the value property of the input element
      var inputValue = inputElement.property("value");
    
      console.log(inputValue);
      
    // filterdinfo={}
      
    var filteredDate = data.filter(data => data.datetime === inputValue); 
    //   var filteredCity = data.filter(data => data.city === inputValue); 
    //   var filteredState = data.filter(data => data.state === inputValue); 
    //   var filteredCountry = data.filter(data => data.country === inputValue); 
    //   var filteredShape = data.filter(data => data.shape === inputValue); 
    //   var filteredDurationMinutes = data.filter(data => data.durationMinutes === inputValue); 
    //   var filteredComments = data.filter(data => data.comments === inputValue); 
   
    
      console.log(filteredDate);
    //   console.log(filteredCity);
    //   console.log(filteredState);
    //   console.log(filteredCountry);
    //   console.log(filteredShape);
    //   console.log(filteredDurationMinutes);
    //   console.log(filteredComments);


    var tbody = d3.select("tbody");
      tbody.html("")
    filteredDate.forEach((sightings) => {
//     // Creating table rows for each row of alients data
      var row = tbody.append("tr");
//     //Iterating thru each row for key and values
    Object.entries(sightings).forEach(([key, value]) => {
//         // Creating cells for posting table data
        var cell = row.append("td");
        cell.text(value);
    });
    });

  };
  
      
    
    
    
});
    
    
    // Then, select the unordered list element by class name
    // var list = d3.select(".summary");

    // // remove any children from the list to
    // list.html("");
  
    // // append stats to the list
    // list.append("li").text(`Mean: ${mean}`);
    // list.append("li").text(`Median: ${median}`);
    // list.append("li").text(`Mode: ${mode}`);
    // list.append("li").text(`Variance: ${variance}`);
    // list.append("li").text(`Standard Deviation: ${standardDeviation}`);


// Create a function to build filter and function to appl
// // Create a functiont to filter the dates
// var inputField = d3.select("#datetime.form-control");
// inputField.on("change", function() {
//     var searchfield = d3.event.target.value;
//         function search(dates) {
//         return dates.datetime === searchfield;
//       }
//       var searchresults = data.filter(search);
//       console.log(searchresults);

    
//   });
  

// * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

// ### Level 2: Multiple Search Categories (Optional)

// * Complete all of Level 1 criteria.

// * Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

//   1. `date/time`
//   2. `city`
//   3. `state`
//   4. `country`
//   5. `shape`

// - - -