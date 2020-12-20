// function courseActive() {
//     var course = document.getElementById("nav_course");
//     var RMIT = document.getElementById("nav_RMIT");
//     var personal = document.getElementById("nav_personal");
//     course.classList.add("active");
//     RMIT.classList.remove('active');
//     personal.classList.remove('active');
// }

// function RMITActive() {
//     var course = document.getElementById("nav_course");
//     var RMIT = document.getElementById("nav_RMIT");
//     var personal = document.getElementById("nav_personal");
//     RMIT.classList.add('active');
//     personal.classList.remove('active');
//     course.classList.remove('active');
// }

// function personalActive() {
//     var course = document.getElementById("nav_course");
//     var RMIT = document.getElementById("nav_RMIT");
//     var personal = document.getElementById("nav_personal");
//     personal.classList.add('active');
//     course.classList.remove('active');
//     RMIT.classList.remove('active');
// }

// function activate(table_code, button_code) {
//   let table = document.getElementById(table_code);
//   let button = document.getElementById(button_code);

//   table.style.visibility = 'visible';
//   button.setAttribute('onclick', 'deActivate(table_code, button_code)');
// }

// function deActivate(table_code, button_code) {
//   let table = document.getElementById(table_code);
//   let button = document.getElementById(button_code);

//   table.style.visibility = 'hidden';
//   button.setAttribute('onClick', 'activate(table_code, button_code)');
// }

function programmingActive() {
    const PROGRAM_TABLE = document.getElementById("general_programming");

    const GENERAL_PROGRAMMING_BUTTON = document.getElementById('general_programming_button');

    PROGRAM_TABLE.style.visibility = 'visible';

    GENERAL_PROGRAMMING_BUTTON.className = "button_active";
    GENERAL_PROGRAMMING_BUTTON.setAttribute("onClick", "programmingDeactive()");
}

function programmingDeactive() {
  const PROGRAM_TABLE = document.getElementById("general_programming");

  const GENERAL_PROGRAMMING_BUTTON = document.getElementById(
    "general_programming_button"
  );

  PROGRAM_TABLE.style.visibility = "hidden";

  GENERAL_PROGRAMMING_BUTTON.className = "button";
  GENERAL_PROGRAMMING_BUTTON.setAttribute('onClick', 'programmingActive()');
}

function compSciActive() {
        const COMPSCI_TABLE = document.getElementById("info_tech/comp_sci");

        const COMPSCI_BUTTON = document.getElementById(
          "info_tech/comp_sci_button"
        );

        COMPSCI_TABLE.style.visibility = "visible";

        COMPSCI_BUTTON.className = "button_active";
        COMPSCI_BUTTON.setAttribute('onClick', 'compSciDeactive()');
}

function compSciDeactive() {
  const COMPSCI_TABLE = document.getElementById("info_tech/comp_sci");

  const COMPSCI_BUTTON = document.getElementById("info_tech/comp_sci_button");

  COMPSCI_TABLE.style.visibility = "hidden";

  COMPSCI_BUTTON.className = "button";
  COMPSCI_BUTTON.setAttribute("onClick", "compSciActive()");
}

function webDevelopmentActive() {
        const WEBDEVELOPMENT_TABLE = document.getElementById("web_development");

        const WEBDEVELOPMENT_BUTTON = document.getElementById(
          "web_development_button"
        );

        WEBDEVELOPMENT_TABLE.style.visibility = "visible";

        WEBDEVELOPMENT_BUTTON.className = "button_active";
        WEBDEVELOPMENT_BUTTON.setAttribute('onClick', 'webDevelopmentDeactive()');
}

function webDevelopmentDeactive() {
  const WEBDEVELOPMENT_TABLE = document.getElementById("web_development");

  const WEBDEVELOPMENT_BUTTON = document.getElementById(
    "web_development_button"
  );

  WEBDEVELOPMENT_TABLE.style.visibility = "hidden";

  WEBDEVELOPMENT_BUTTON.className = "button";
  WEBDEVELOPMENT_BUTTON.setAttribute("onClick", "webDevelopmentActive()");
}

function gameProgrammingActive() {
        const GAMEPROGRAMMING_TABLE = document.getElementById(
          "game_programming"
        );

        const GAMEPROGRAMMING_BUTTON = document.getElementById(
          "game_programming_button"
        );

        GAMEPROGRAMMING_TABLE.style.visibility = "visible";

        GAMEPROGRAMMING_BUTTON.className = "button_active";
        GAMEPROGRAMMING_BUTTON.setAttribute('onClick', 'gameProgrammingDeactive()');
}

function gameProgrammingDeactive() {
  const GAMEPROGRAMMING_TABLE = document.getElementById("game_programming");

  const GAMEPROGRAMMING_BUTTON = document.getElementById(
    "game_programming_button"
  );

  GAMEPROGRAMMING_TABLE.style.visibility = "hidden";

  GAMEPROGRAMMING_BUTTON.className = "button";
  GAMEPROGRAMMING_BUTTON.setAttribute("onClick", "gameProgrammingActive()");
}


function commerceActive() {
    const COMMERCE_TABLE = document.getElementById("commerce");

    const COMMERCE_BUTTON = document.getElementById("commerce_button");


    COMMERCE_TABLE.style.visibility = "visible";

    COMMERCE_BUTTON.className = "button_active";
    COMMERCE_BUTTON.setAttribute('onClick', 'commerceDeactive()');
}

function commerceDeactive() {
  const COMMERCE_TABLE = document.getElementById("commerce");

  const COMMERCE_BUTTON = document.getElementById("commerce_button");

  COMMERCE_TABLE.style.visibility = "hidden";

  COMMERCE_BUTTON.className = "button";
  COMMERCE_BUTTON.setAttribute("onClick", "commerceActive()");
}

function languageActive() {
    const LANGUAGE = document.getElementById("language");

    const LANGUAGE_BUTTON = document.getElementById("language_button");

    LANGUAGE.style.visibility = "visible";

    LANGUAGE_BUTTON.className = "button_active";
    LANGUAGE_BUTTON.setAttribute('onClick', 'languageDeactive()');
}

function languageDeactive() {
  const LANGUAGE = document.getElementById("language");

  const LANGUAGE_BUTTON = document.getElementById("language_button");

  LANGUAGE.style.visibility = "hidden";

  LANGUAGE_BUTTON.className = "button";
  LANGUAGE_BUTTON.setAttribute('onClick', 'languageActive()');
}

function reset() {
    const PROGRAM_TABLE = document.getElementById("general_programming");
    const COMPSCI_TABLE = document.getElementById("info_tech/comp_sci");
    const WEBDEVELOPMENT_TABLE = document.getElementById("web_development");
    const GAMEPROGRAMMING_TABLE = document.getElementById("game_programming");
    const COMMERCE_TABLE = document.getElementById("commerce");
    const LANGUAGE = document.getElementById("language");

    const GENERAL_PROGRAMMING_BUTTON = document.getElementById(
      "general_programming_button"
    );
    const COMPSCI_BUTTON = document.getElementById("info_tech/comp_sci_button");
    const WEBDEVELOPMENT_BUTTON = document.getElementById(
      "web_development_button"
    );
    const GAMEPROGRAMMING_BUTTON = document.getElementById(
      "game_programming_button"
    );
    const COMMERCE_BUTTON = document.getElementById("commerce_button");
    const LANGUAGE_BUTTON = document.getElementById("language_button");

    PROGRAM_TABLE.style.visibility = "hidden";
    COMPSCI_TABLE.style.visibility = "hidden";
    WEBDEVELOPMENT_TABLE.style.visibility = "hidden";
    GAMEPROGRAMMING_TABLE.style.visibility = "hidden";
    COMMERCE_TABLE.style.visibility = "hidden";
    LANGUAGE.style.visibility = "hidden";

    GENERAL_PROGRAMMING_BUTTON.className = "button";
    COMPSCI_BUTTON.className = "button";
    WEBDEVELOPMENT_BUTTON.className = "button";
    GAMEPROGRAMMING_BUTTON.className = "button";
    COMMERCE_BUTTON.className = "button";
    LANGUAGE_BUTTON.className = "button";
}