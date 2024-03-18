var carousel = 1;

function updateCarousel() {
  // Remove current-card, prev-card, and next-card classes from all cards
  for (var i = 1; i <= 3; i++) {
    var card = document.getElementById("card-" + i);
    card.classList.remove("current-card", "prev-card", "next-card");
  }

  // Add current-card class to the current carousel card
  var currentCard = document.getElementById("card-" + carousel);
  currentCard.classList.add("current-card");

  // Calculate previous and next indices using modulo arithmetic
  var prevIndex = carousel - 1 <= 0 ? 3 : carousel - 1;
  var nextIndex = carousel + 1 > 3 ? 1 : carousel + 1;

  console.log("Current carousel:", carousel);
  console.log("Previous index:", prevIndex);
  console.log("Next index:", nextIndex);

  // Add prev-card and next-card classes to respective cards
  var prevCard = document.getElementById("card-" + prevIndex);
  prevCard.classList.add("prev-card");
  var nextCard = document.getElementById("card-" + nextIndex);
  nextCard.classList.add("next-card");
}

function incrementValue() {
  carousel = (carousel % 3) + 1;
  updateCarousel();
}

function decreaseValue() {
  carousel = carousel === 1 ? 3 : carousel - 1;
  updateCarousel();
}

var screenWidth = window.innerWidth;
var albania = document.getElementById("albania");
var paragraf = document.getElementById("paragraf");
var icon1 = document.getElementById("icon-foot1");
var icon2 = document.getElementById("icon-foot2");
var icon3 = document.getElementById("icon-foot3");
var icon4 = document.getElementById("icon-foot4");

addEventListener("resize", function () {
  screenWidth = window.innerWidth;
  resize();
});

function resize() {
  if (screenWidth <= 768) {
    icon1.innerHTML = "";
    icon2.innerHTML = "";
    icon3.innerHTML = "";
    icon4.innerHTML = "";
    albania.innerHTML = "AL |";
    paragraf.innerHTML =
      "Initiativa për kompozitorët e rinj promovon dhe zhvillon kulturën muzikore në Kosovë, duke pasuruar kulturën tonë dhe stimuluar talentet e rinj. Kërkojmë organizimin e një festivali të kompozitorëve kosovarë për të promovuar kulturën tonë ndërkombëtarisht. Shpresojmë që kërkesa për këtë festival të gjejë mirëkuptim nga institucionet dhe donatorët në botën perëndimore.";
  } else {
    albania.innerHTML = "AL";
    paragraf.innerHTML =
      "Iniciativa e kompozitorëve të rinj flet për vullnetin e të rinjëve që dëshirojne t’a pasurojnë dhe zhvillojnë kulturën muzikore te ne. Kjo do te duhej të ndodhte shumë me herët siç ka ndodhur tek popujt tjerë prandaj me shume kënaqësi e përkrah këtë hap të domosdoshem dhe i stimuloj kompozitorët e rinj që të organizohen dhe ta kene një festival të kompozitorëve kosovarë i cili do te promovon dhe afirmon kulturën tonë muzikore me permasa ndërkombëtare. Shpresoj dhe uroj që kerkesa festivalit të kompozitorëve kosovarë të has në mirëkuptim nga te gjitha institucionet përkatese dhe donatoret te cilet në botën perendimore kan një rol të rëndsishem në përkrahjen dhe promovimin e kulturës muzikore.";
  }
}

function toggle() {
  var dropdown = document.getElementById("phone-dropdown");
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
    dropdown.classList.add("hidden");
  } else {
    dropdown.classList.remove("hidden");
    dropdown.classList.add("show");
  }
}

resize();

// Initial call to update the carousel
updateCarousel();
