
var count = 0;
document.onkeyup = function(event){
		switch(event.keyCode){
					case 87:
						if(count < 10) count++;
					break;
					case 65:
						if(count < 10) count++;
					break;
					case 68:
						if(count < 10) count++;
					break;
					case 83:
						if(count < 10) count++;
					break;
		}
	document.getElementById('counter').innerHTML = count;
}

var keys = ["W", "A", "S", "D"];
document.getElementById('ungemischt').innerHTML = keys;

function shuffleArray() {
    for (var i = keys.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp =keys[i];
        keys[i] = keys[j];
        keys[j] = temp;
    }
   	document.getElementById('ungemischt').innerHTML = keys;
}


