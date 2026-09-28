/* ================================
   SMART AUTOMOBILE PROJECT
================================ */

/* SCROLL FUNCTION */

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  });
}

/* VEHICLE INFORMATION */

function showVehicle(vehicle) {
  let title = "";
  let text = "";

  if (vehicle === "car") {
    title = "🚗 Car Automobile System";

    text =
      "Cars contain several important systems such as engine, " +
      "transmission, braking, suspension, steering and electrical systems. " +
      "The engine produces power and the transmission transfers that power to the wheels.";
  } else if (vehicle === "bike") {
    title = "🏍️ Motorcycle System";

    text =
      "A motorcycle uses an engine, clutch, gearbox, chain drive, " +
      "braking system and suspension. The engine generates power " +
      "and the transmission transfers it to the rear wheel.";
  } else if (vehicle === "lorry") {
    title = "🚛 Heavy Vehicle System";

    text =
      "Lorries are designed to carry heavy loads. " +
      "They use powerful engines, heavy-duty transmission, " +
      "strong suspension and braking systems.";
  }

  openModal(title, text);
}

/* PART INFORMATION */

function showPart(part) {
  let information = {
    Engine:
      "The engine is the main power-producing unit of a vehicle. " +
      "It converts energy from fuel into mechanical energy.",

    Battery:
      "The battery stores electrical energy and supplies electricity " +
      "for starting and other electrical systems.",

    "Braking System":
      "The braking system reduces the speed of a vehicle or brings " +
      "it to a stop. Different vehicles use different brake designs.",

    Gearbox:
      "A gearbox provides different gear ratios so that the vehicle " +
      "can operate effectively at different speeds and loads.",

    Clutch:
      "The clutch controls the connection between the engine and " +
      "transmission in vehicles that use a manual transmission.",

    Suspension:
      "Suspension connects the vehicle body and wheels while helping " +
      "absorb road irregularities and maintain stability.",

    Radiator:
      "A radiator helps transfer heat from engine coolant to the surrounding air.",

    "Tyre & Wheel":
      "Tyres provide contact between the vehicle and road surface. " +
      "Wheels support the tyres and transfer rotational motion.",
  };

  openModal("⚙️ " + part, information[part]);
}

/* MODAL */

function openModal(title, text) {
  document.getElementById("modalTitle").textContent = title;

  document.getElementById("modalText").textContent = text;

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* CLOSE MODAL BY CLICKING OUTSIDE */

window.addEventListener("click", function (event) {
  const modal = document.getElementById("modal");

  if (event.target === modal) {
    closeModal();
  }
});

/* SEARCH PARTS */

function searchParts() {
  let input = document.getElementById("searchInput").value.toLowerCase();

  let cards = document.querySelectorAll(".part-card");

  cards.forEach(function (card) {
    let name = card.getAttribute("data-name");

    if (name.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

/* ESC KEY TO CLOSE MODAL */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
