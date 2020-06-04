var x = document.querySelectorAll(".KeyBox");

for (i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function() {

    var y = this.className;

    switch (y) {
      case "KeyBox btn f":
        var France = new Audio("sounds/French.mp3");
        France.play();
        break;
      case "KeyBox btn i":
        var Italy = new Audio("sounds/Italian.mp3");
        Italy.play();
        break;
      case "KeyBox btn s":
        var Spain = new Audio("sounds/Spanish.mp3");
        Spain.play();
        break;
      case "KeyBox btn u":
        var English = new Audio("sounds/English.mp3");
        English.play();
        break;
      case "KeyBox btn r":
        var Russia = new Audio("sounds/Russian.mp3");
        Russia.play();
        break;
      case "KeyBox btn j":
        var Japan = new Audio("sounds/Japanese.mp3");
        Japan.play();
        break;
      default:

    }


  })

}
