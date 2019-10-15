$(document).ready(function () {
    //arrays with friends, weapons, and locations
    var friend = ['Emily', 'Luke', 'Audrey', 'Julian', 'Oliver'];
    var weapon = ['knife', 'broadsword', 'katana', 'beam saber', 'hand gun', 'auto rifle', 'machine gun', 'shotgun', 'laser rifle', 'rocket launcher', 'bow and arrow', 'candle stick', 'rope', 'wrench', 'bowling pin', 'frying pan', 'fly swatter', 'water gun', 'flamethrower', 'gundam'];
    var location = ['kitchen', 'living room', 'laundry room', 'bedroom', 'bathroom', 'pantry', 'garage', 'study', 'ballroom', 'dining room'];

    //places accusation headers
    for (var i = 0; i < 100; i++) {
        //creates a heading with accusation "i" and appends to div in body. i+1 so accusation text doesn't start at "Accusation 0"
        var heading = $("<h3></h3>").text("Accusation " + (i + 1));
        $('#headingDiv').append(heading);

        //run accusationAlert function on click
        $(heading).click(accusationAlert(i));
    }

    //returns alert from inner function
    function accusationAlert(i) {
        
        return function () {
            var f = i % friend.length;
            var w = i % weapon.length;
            var l = i % location.length;

            return alert('I accuse ' + friend[f] + ', with the ' + weapon[w] + ' in the ' + location[l] +'!');
        }
    }
});