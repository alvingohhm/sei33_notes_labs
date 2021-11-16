// if (typeof jQuery == "undefined") {
//   console.log("oops! I still have to link my jQuery properly!");
// } else {
//   console.log("I did it! I linked jQuery and this js file!");
// }
$(() => {
  // Year 1
  $container = $("#container");
  console.log($container);
  $h1 = $("<h1>");
  console.log($h1);
  $h1.text("Hogwarts");
  $container.append($h1);

  //Year 2
  $h2 = $("<h2>").text("alvin");
  $h3 = $("<h3>").text("Slytherin");
  $h4 = $("<h4>").addClass("snake").text("snaky");
  $h4Wand = $("<h4>").text("Birch Wand with Phoenix Feather Core");
  $container.append($h2, $h3, $h4, $h4Wand);

  //Year 3
  const listItems = {
    "butter beer": "na",
    "invisibility cloak": "secret",
    "magic map": "secret",
    "time turner": "secret",
    "leash ": "snake",
    "Bertie Bott's Every Flavor [Jelly] Beans": "na",
  };

  $ul = $("<ul>").attr("storage", "trunk");
  Object.entries(listItems).forEach(([key, value]) => {
    $li = $("<li>").text(key);
    if (value !== "na") {
      $li.addClass(value);
    }
    $ul.append($li);
  });

  $container.append($ul);

  //Year 4
  $h5 = $("<h5>").text("Spring 2017");
  $table = $("<table>");
  //create table and append the heading element
  $table.append(
    $("<thead>").append($("<th>").text("Day"), $("<th>").text("Classes"))
  );
  //create the table body
  $tbody = $("<tbody>");
  const lesson = [
    "Herbology",
    "Divination",
    "History of Magic",
    "Charms",
    "Potions",
    "Transfiguration",
    "Defense Against the Dark Arts",
    "Quidditch practice",
  ];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // loop thru monday to friday create each row with 2 column (day and lesson) then append to body
  days.forEach((ele, index) => {
    $tbody.append(
      $("<tr>").append($("<td>").text(ele), $("<td>").text(lesson[index]))
    );
  });

  $table.append($tbody);

  $container.append($h5, $table);

  //Year 5
  $wand = $('h4:contains("Wand")');
  $wand.remove();
  $('li:contains("butter beer")').remove();
  $h4Wand.text($h4Wand.text() + "-New created!!!");
  $pet = $('h4:contains("snaky")');
  $h4Wand.insertAfter($pet);
  $h4Wand.css({
    "background-color": "yellow",
    color: "indigo",
  });
  $petOnMission = $pet.remove();
  $container.append($("<div>").attr("id", "hidden"));
  $petOnMission.appendTo("#hidden");

  $petOnMission.remove();
  $petOnMission.insertBefore($h4Wand);

  //Year 6
  $(".secret").hide("slow").delay(2000);
  $(".secret").show("slow");

  $leash = $('li:contains("leash")');
  $leash.addClass("cabbage");
  $leash.removeClass("cabbage");

  //Year 7
  $('h5:contains("Spring 2017")').text("Fall 2018");
  $('ul[storage*="trunk"]').prepend($("<li>").text("butter beer"));
  $('ul[storage*="trunk"]').attr("storage", "chest");
});
