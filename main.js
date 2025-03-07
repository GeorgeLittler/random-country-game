import countriesAndContinents from "./countries.js";
import {
  startBtn,
  playAgainBtn,
  worldMapImg,
  mainScreenBorder,
  inputElement,
  input,
  timerCountdownButton,
  timerCountdownElement,
  pointsAvailableElement,
  totalPointsElement,
  totalPointsEndElement,
  randomContinentElement,
  randomLetterElement,
  randomContinentEndElement,
  randomLetterEndElement,
  possibleCountriesListElement,
  introScreen,
  mainContentScreen,
  endScreen,
  changeColourIconIntroScreen,
  changeColourIconEndScreen,
  settingsIconIntroScreen,
  settingsIconEndScreen,
  settingsScreen,
  closeSettingsIcon,
  veryHardBtn,
  hardBtn,
  normBtn,
  easyBtn,
  introScreenH1,
  introScreenP,
  introScreenImg,
  introScreenFooter,
  mainContentScreenH1,
  infoBtns,
  endScreenH1,
  finalScore,
  countryInfoAndBtn,
  endScreenFooter,
  checkboxWorld,
  checkboxAfrica,
  checkboxAsia,
  checkboxEurope,
  checkboxNorthAmerica,
  checkboxSouthAmerica,
  checkboxOceania,
  successScreen,
  successScreenH1,
  successScreenP,
  successScreenP2,
  successScreenImg,
  successFinalScore,
  successScreenBtn,
  successTotalPoints,
  successScreenFooter,
  changeColourIconSuccessScreen,
  settingsIconSuccessScreen,
} from "./uiElements.js";

// declaration of variables
let timerInterval, pointsAvailableInterval;
let pointsAvailable;
let totalPoints = 0;
let countriesAndContinentsCopy;
let randomCountryInitialWithContinent;
let randomCountryData;
let matchingCountries;

let userInput;
let isMatch;
let usedCountries = [];

let settingsIntroScreen, settingsEndScreen, settingsSuccessScreen;

let timer = 15;

let gameMode = "world";
let totalListElements;

function numberOfListElements(totalListElements) {
  if (totalListElements === 1) {
    possibleCountriesListElement.classList.add("one-element");
  } else {
    possibleCountriesListElement.classList.remove("one-element");
  }
}

function updateTimer() {
  if (timer === 15) {
    normBtn.classList.add("active");
    veryHardBtn.classList.remove("active");
    hardBtn.classList.remove("active");
    easyBtn.classList.remove("active");
  } else if (timer === 5) {
    normBtn.classList.remove("active");
    veryHardBtn.classList.add("active");
    hardBtn.classList.remove("active");
    easyBtn.classList.remove("active");
  } else if (timer === 10) {
    normBtn.classList.remove("active");
    veryHardBtn.classList.remove("active");
    hardBtn.classList.add("active");
    easyBtn.classList.remove("active");
  } else if (timer === 20) {
    normBtn.classList.remove("active");
    veryHardBtn.classList.remove("active");
    hardBtn.classList.remove("active");
    easyBtn.classList.add("active");
  }
}

veryHardBtn.onclick = () => {
  timer = 5;
  updateTimer();
};

hardBtn.onclick = () => {
  timer = 10;
  updateTimer();
};

normBtn.onclick = () => {
  timer = 15;
  updateTimer();
};

easyBtn.onclick = () => {
  timer = 20;
  updateTimer();
};

checkboxWorld.onclick = () => {
  checkboxWorld.classList.add("active");
  checkboxAfrica.classList.remove("active");
  checkboxAsia.classList.remove("active");
  checkboxEurope.classList.remove("active");
  checkboxNorthAmerica.classList.remove("active");
  checkboxSouthAmerica.classList.remove("active");
  checkboxOceania.classList.remove("active");
  gameMode = "world";
};

checkboxAfrica.onclick = () => {
  checkboxWorld.classList.remove("active");
  checkboxAfrica.classList.add("active");
  checkboxAsia.classList.remove("active");
  checkboxEurope.classList.remove("active");
  checkboxNorthAmerica.classList.remove("active");
  checkboxSouthAmerica.classList.remove("active");
  checkboxOceania.classList.remove("active");
  gameMode = "africa";
};

checkboxAsia.onclick = () => {
  checkboxWorld.classList.remove("active");
  checkboxAfrica.classList.remove("active");
  checkboxAsia.classList.add("active");
  checkboxEurope.classList.remove("active");
  checkboxNorthAmerica.classList.remove("active");
  checkboxSouthAmerica.classList.remove("active");
  checkboxOceania.classList.remove("active");
  gameMode = "asia";
};

checkboxEurope.onclick = () => {
  checkboxWorld.classList.remove("active");
  checkboxAfrica.classList.remove("active");
  checkboxAsia.classList.remove("active");
  checkboxEurope.classList.add("active");
  checkboxNorthAmerica.classList.remove("active");
  checkboxSouthAmerica.classList.remove("active");
  checkboxOceania.classList.remove("active");
  gameMode = "europe";
};

checkboxNorthAmerica.onclick = () => {
  checkboxWorld.classList.remove("active");
  checkboxAfrica.classList.remove("active");
  checkboxAsia.classList.remove("active");
  checkboxEurope.classList.remove("active");
  checkboxNorthAmerica.classList.add("active");
  checkboxSouthAmerica.classList.remove("active");
  checkboxOceania.classList.remove("active");
  gameMode = "north america";
};

checkboxSouthAmerica.onclick = () => {
  checkboxWorld.classList.remove("active");
  checkboxAfrica.classList.remove("active");
  checkboxAsia.classList.remove("active");
  checkboxEurope.classList.remove("active");
  checkboxNorthAmerica.classList.remove("active");
  checkboxSouthAmerica.classList.add("active");
  checkboxOceania.classList.remove("active");
  gameMode = "south america";
};

checkboxOceania.onclick = () => {
  checkboxWorld.classList.remove("active");
  checkboxAfrica.classList.remove("active");
  checkboxAsia.classList.remove("active");
  checkboxEurope.classList.remove("active");
  checkboxNorthAmerica.classList.remove("active");
  checkboxSouthAmerica.classList.remove("active");
  checkboxOceania.classList.add("active");
  gameMode = "oceania";
};

function toggleColour() {
  if (!introScreen.classList.contains("light-mode")) {
    introScreen.classList.add("light-mode");
    introScreenH1.classList.add("light-mode");
    introScreenP.classList.add("light-mode");
    introScreenImg.classList.add("light-mode");
    startBtn.classList.add("light-mode");
    introScreenFooter.classList.add("light-mode");
    mainContentScreen.classList.add("light-mode");
    mainContentScreenH1.classList.add("light-mode");
    worldMapImg.classList.add("light-mode");
    randomContinentElement.classList.add("light-mode");
    randomLetterElement.classList.add("light-mode");
    infoBtns.classList.add("light-mode");
    input.classList.add("light-mode");
    endScreen.classList.add("light-mode");
    endScreenH1.classList.add("light-mode");
    finalScore.classList.add("light-mode");
    countryInfoAndBtn.classList.add("light-mode");
    endScreenFooter.classList.add("light-mode");
    successScreen.classList.add("light-mode");
    successScreenH1.classList.add("light-mode");
    successScreenP.classList.add("light-mode");
    successScreenP2.classList.add("light-mode");
    successScreenImg.classList.add("light-mode");
    successFinalScore.classList.add("light-mode");
    successTotalPoints.classList.add("light-mode");
    successScreenFooter.classList.add("light-mode");
    changeColourIconSuccessScreen.classList.add("light-mode");
    settingsIconSuccessScreen.classList.add("light-mode");
  } else {
    introScreen.classList.remove("light-mode");
    introScreenH1.classList.remove("light-mode");
    introScreenP.classList.remove("light-mode");
    introScreenImg.classList.remove("light-mode");
    startBtn.classList.remove("light-mode");
    introScreenFooter.classList.remove("light-mode");
    mainContentScreen.classList.remove("light-mode");
    mainContentScreenH1.classList.remove("light-mode");
    worldMapImg.classList.remove("light-mode");
    randomContinentElement.classList.remove("light-mode");
    randomLetterElement.classList.remove("light-mode");
    infoBtns.classList.remove("light-mode");
    input.classList.remove("light-mode");
    endScreen.classList.remove("light-mode");
    endScreenH1.classList.remove("light-mode");
    finalScore.classList.remove("light-mode");
    countryInfoAndBtn.classList.remove("light-mode");
    endScreenFooter.classList.remove("light-mode");
    successScreen.classList.remove("light-mode");
    successScreenH1.classList.remove("light-mode");
    successScreenP.classList.remove("light-mode");
    successScreenP2.classList.remove("light-mode");
    successScreenImg.classList.remove("light-mode");
    successFinalScore.classList.remove("light-mode");
    successTotalPoints.classList.remove("light-mode");
    successScreenFooter.classList.remove("light-mode");
    changeColourIconSuccessScreen.classList.remove("light-mode");
    settingsIconSuccessScreen.classList.remove("light-mode");
  }
}

// when colour change icon is clicked
changeColourIconIntroScreen.onclick = () => {
  toggleColour();
};

changeColourIconEndScreen.onclick = () => {
  toggleColour();
};

changeColourIconSuccessScreen.onclick = () => {
  toggleColour();
};

// when settings icon is clicked
settingsIconIntroScreen.onclick = () => {
  settingsScreen.classList.add("active");
  updateTimer();
  introScreen.classList.remove("active");
  settingsIntroScreen = true;
  settingsEndScreen = false;
  settingsSuccessScreen = false;
};

settingsIconEndScreen.onclick = () => {
  settingsScreen.classList.add("active");
  updateTimer();
  endScreen.classList.remove("active");
  settingsIntroScreen = false;
  settingsEndScreen = true;
  settingsSuccessScreen = false;
};

settingsIconSuccessScreen.onclick = () => {
  settingsScreen.classList.add("active");
  updateTimer();
  successScreen.classList.remove("active");
  settingsIntroScreen = false;
  settingsEndScreen = false;
  settingsSuccessScreen = true;
};

closeSettingsIcon.onclick = () => {
  settingsScreen.classList.remove("active");
  if (settingsIntroScreen === true) {
    introScreen.classList.add("active");
  } else if (settingsEndScreen === true) {
    endScreen.classList.add("active");
  } else {
    successScreen.classList.add("active");
  }
};

// when start button is clicked
startBtn.onclick = () => {
  introScreen.classList.remove("active");
  mainContentScreen.classList.add("active");

  initializePointsStartAndPlayAgain();

  resetCountries();
  countriesAndContinentsCopy = gameModeCountries(
    countriesAndContinentsCopy,
    gameMode
  );
  randomCountryInitialWithContinent = getRandomCountryInitialWithContinent(
    countriesAndContinentsCopy
  );
  console.log(randomCountryInitialWithContinent);

  setRandomCountryToTextContent();

  randomCountryData = randomCountryInitialWithContinent;
  matchingCountries = searchCountriesByInitialAndContinent(
    countriesAndContinentsCopy,
    randomCountryData.initial,
    randomCountryData.continent
  );
  console.log(matchingCountries);
  totalListElements = updateCountryList(matchingCountries);
  console.log(totalListElements);
  numberOfListElements(totalListElements);

  resetClassesOnCountdownButtonElement();

  if (timer === 5) {
    timerCountdown(5);
    pointsAvailableCountdown(10, 500);
  } else if (timer === 10) {
    timerCountdown(10);
    pointsAvailableCountdown(5, 2000);
  } else if (timer === 15) {
    timerCountdown(15);
    pointsAvailableCountdown(3, 5000);
  } else {
    timerCountdown(20);
    pointsAvailableCountdown(2, 10000);
  }

  focusInput();
  autocompleteOff();
};

// when user input submitted via enter key
inputElement.addEventListener("input", function () {
  try {
    userInput = inputElement.value;
    isMatch = isUserInputMatch(userInput, matchingCountries);
    console.log(isMatch);
    inputElement.classList.remove("warning");

    if (isMatch) {
      incrementPointsSubmitAndEnter();
      removeCountryFromList(userInput);

      clearInterval(timerInterval);
      clearInterval(pointsAvailableInterval);

      randomCountryInitialWithContinent = getRandomCountryInitialWithContinent(
        countriesAndContinentsCopy
      );
      console.log(randomCountryInitialWithContinent);

      setRandomCountryToTextContent();

      randomCountryData = randomCountryInitialWithContinent;
      matchingCountries = searchCountriesByInitialAndContinent(
        countriesAndContinentsCopy,
        randomCountryData.initial,
        randomCountryData.continent
      );
      console.log(matchingCountries);
      totalListElements = updateCountryList(matchingCountries);
      console.log(totalListElements);
      numberOfListElements(totalListElements);

      inputElement.value = "";
      successBorderGreen();
      removeWarningClasses();

      resetClassesOnCountdownButtonElement();

      if (timer === 5) {
        timerCountdown(5);
        pointsAvailableCountdown(10, 500);
      } else if (timer === 10) {
        timerCountdown(10);
        pointsAvailableCountdown(5, 2000);
      } else if (timer === 15) {
        timerCountdown(15);
        pointsAvailableCountdown(3, 5000);
      } else {
        timerCountdown(20);
        pointsAvailableCountdown(2, 10000);
      }
    }
    addToUsedCountries(userInput);
  } catch (error) {
    inputElement.value = "";
    mainContentScreen.classList.remove("active");
    endScreen.classList.remove("active");
    successScreen.classList.add("active");
  }
});

// when play again buttton is clicked
playAgainBtn.onclick = () => {
  inputElement.classList.remove("active");
  resetUsedCountries();
  initializePointsStartAndPlayAgain();

  resetCountries();
  countriesAndContinentsCopy = gameModeCountries(
    countriesAndContinentsCopy,
    gameMode
  );
  randomCountryInitialWithContinent = getRandomCountryInitialWithContinent(
    countriesAndContinentsCopy
  );
  console.log(randomCountryInitialWithContinent);

  setRandomCountryToTextContent();

  randomCountryData = randomCountryInitialWithContinent;
  matchingCountries = searchCountriesByInitialAndContinent(
    countriesAndContinentsCopy,
    randomCountryData.initial,
    randomCountryData.continent
  );
  console.log(matchingCountries);
  totalListElements = updateCountryList(matchingCountries);
  console.log(totalListElements);
  numberOfListElements(totalListElements);

  mainContentScreen.classList.add("active");
  endScreen.classList.remove("active");

  resetClassesOnCountdownButtonElement();

  if (timer === 5) {
    timerCountdown(5);
    pointsAvailableCountdown(10, 500);
  } else if (timer === 10) {
    timerCountdown(10);
    pointsAvailableCountdown(5, 2000);
  } else if (timer === 15) {
    timerCountdown(15);
    pointsAvailableCountdown(3, 5000);
  } else {
    timerCountdown(20);
    pointsAvailableCountdown(2, 10000);
  }

  focusInput();
  autocompleteOff();
};

successScreenBtn.onclick = () => {
  inputElement.classList.remove("active");
  resetUsedCountries();
  initializePointsStartAndPlayAgain();

  resetCountries();
  countriesAndContinentsCopy = gameModeCountries(
    countriesAndContinentsCopy,
    gameMode
  );
  randomCountryInitialWithContinent = getRandomCountryInitialWithContinent(
    countriesAndContinentsCopy
  );
  console.log(randomCountryInitialWithContinent);

  setRandomCountryToTextContent();

  randomCountryData = randomCountryInitialWithContinent;
  matchingCountries = searchCountriesByInitialAndContinent(
    countriesAndContinentsCopy,
    randomCountryData.initial,
    randomCountryData.continent
  );
  console.log(matchingCountries);
  totalListElements = updateCountryList(matchingCountries);
  numberOfListElements(totalListElements);

  mainContentScreen.classList.add("active");
  successScreen.classList.remove("active");

  resetClassesOnCountdownButtonElement();

  if (timer === 5) {
    timerCountdown(5);
    pointsAvailableCountdown(10, 500);
  } else if (timer === 10) {
    timerCountdown(10);
    pointsAvailableCountdown(5, 2000);
  } else if (timer === 15) {
    timerCountdown(15);
    pointsAvailableCountdown(3, 5000);
  } else {
    timerCountdown(20);
    pointsAvailableCountdown(2, 10000);
  }

  focusInput();
  autocompleteOff();
};

// function to set focus on input element
function focusInput() {
  setTimeout(() => {
    if (inputElement) {
      inputElement.focus();
    }
  }, 1);
}

// function to turn autocomplete off
function autocompleteOff() {
  setTimeout(() => {
    if (inputElement) {
      inputElement.setAttribute("autocomplete", "off");
    }
  }, 1);
}

// countdown function to track time left - also contains screen change and class change logic // 5,10 10,5 15,3 20,2
function timerCountdown(time) {
  let count = time;
  timerCountdownElement.textContent = count;

  timerInterval = setInterval(function () {
    count--;
    timerCountdownElement.textContent = count;

    if (count <= time / 3) {
      timerCountdownButton.classList.add("danger");
      setWarningClasses();
    }

    if (count === 0) {
      clearInterval(timerInterval);
      mainContentScreen.classList.remove("active");
      endScreen.classList.add("active");
      inputElement.value = "";
      inputElement.classList.remove("warning");
      removeWarningClasses();
    }
  }, 1000);
}

// function to track points countdown   //15,3,5000 5,10,500 10,5,2000 20,2,10000
function pointsAvailableCountdown(points, interval) {
  pointsAvailable = points;
  pointsAvailableElement.textContent = pointsAvailable;

  pointsAvailableInterval = setInterval(function () {
    pointsAvailable--;
    pointsAvailableElement.textContent = pointsAvailable;

    if (pointsAvailable === 0) {
      clearInterval(pointsAvailableInterval);
    }
  }, interval);
}

// function to initialize total points to 0 - called at start and play again
function initializePointsStartAndPlayAgain() {
  totalPoints = 0;
  totalPointsElement.textContent = totalPoints;
  totalPointsEndElement.textContent = totalPoints;
}

// function to initialize total points for submit btn and enter
function incrementPointsSubmitAndEnter() {
  totalPoints += pointsAvailable;
  totalPointsElement.textContent = totalPoints;
  totalPointsEndElement.textContent = totalPoints;
  successTotalPoints.textContent = totalPoints;
}

// function to set randomly generated country to text content
function setRandomCountryToTextContent() {
  randomContinentElement.textContent =
    randomCountryInitialWithContinent["continent"];
  randomLetterElement.textContent =
    randomCountryInitialWithContinent["initial"];
}

// function to set mainScreenBorder to green when user inputs successful answer
function successBorderGreen() {
  mainScreenBorder.classList.add("success");
  worldMapImg.classList.add("success");
  input.classList.add("success");
  setTimeout(() => {
    mainScreenBorder.classList.remove("success");
    worldMapImg.classList.remove("success");
    input.classList.remove("success");
  }, 800);
}

// function to reset to btn-warning bootstrap class
function resetClassesOnCountdownButtonElement() {
  timerCountdownButton.classList.remove("danger");
}

// function to add warning to input
function setWarningClasses() {
  mainScreenBorder.classList.add("danger");
  inputElement.classList.add("danger");
  input.classList.add("danger");
  worldMapImg.classList.add("danger");
}

// function to remove warning to input
function removeWarningClasses() {
  mainScreenBorder.classList.remove("danger");
  inputElement.classList.remove("danger");
  input.classList.remove("danger");
  worldMapImg.classList.remove("danger");
}

function resetCountries() {
  countriesAndContinentsCopy = countriesAndContinents.slice();
}

function gameModeCountries(countriesAndContinentsCopy, gameMode) {
  console.log("Received game mode:", gameMode);

  // Convert gameMode to lowercase for case-insensitive matching
  gameMode = gameMode.toLowerCase();
  console.log("Lowercased game mode:", gameMode);

  if (gameMode === "world") {
    console.log("Returning all countries.");
    return countriesAndContinentsCopy;
  } else {
    // Filter countries by continent (case-insensitive matching)
    const filteredCountries = countriesAndContinentsCopy.filter(
      (country) => country.continent.toLowerCase() === gameMode
    );
    console.log("Filtered countries:", filteredCountries);
    return filteredCountries;
  }
}

// function that generates random country from data structure and returns its first letter and continent
function getRandomCountryInitialWithContinent(countriesAndContinentsCopy) {
  const flatCountries = countriesAndContinentsCopy.flatMap((item) =>
    Array.isArray(item.country)
      ? item.country.map((country) => ({
          name: country,
          continent: item.continent,
        }))
      : [{ name: item.country, continent: item.continent }]
  );

  const randomIndex = Math.floor(Math.random() * flatCountries.length);

  const selectedCountry = flatCountries[randomIndex];

  return {
    initial: selectedCountry.name.charAt(0),
    continent: selectedCountry.continent,
  };
}

// function that searches in data structure for countries containing the first letter and continent the previous function returned
function searchCountriesByInitialAndContinent(
  countriesAndContinentsCopy,
  initial,
  continent
) {
  const matchingCountries = countriesAndContinentsCopy.filter(
    (item) =>
      (Array.isArray(item.country)
        ? item.country.some((country) => country.charAt(0) === initial)
        : item.country.charAt(0) === initial) && item.continent === continent
  );

  return matchingCountries.map((item) =>
    Array.isArray(item.country) ? item.country : item.country
  );
}

function updateCountryList(countries) {
  // Clear the existing list
  possibleCountriesListElement.innerHTML = "";

  // Counter to track the number of list items created
  let listItemCounter = 0;

  countries.forEach((countryArray) => {
    const firstCountry = Array.isArray(countryArray)
      ? countryArray[0]
      : countryArray;

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = firstCountry;
    possibleCountriesListElement.appendChild(listItem);

    // Increment the counter
    listItemCounter++;
  });

  // Return the total number of list items created
  return listItemCounter;
}

// function that checks if user input is correct or not
function isUserInputMatch(input, matchingCountries) {
  const userInput = input.trim().toLowerCase();

  const lowerCaseMatchingCountries = matchingCountries.map((country) => {
    if (typeof country === "string") {
      return country.toLowerCase();
    } else if (Array.isArray(country)) {
      return country.map((subCountry) => subCountry.toLowerCase());
    } else {
      // Handle other data types as needed
      return country;
    }
  });

  const flattenedCountries = lowerCaseMatchingCountries.flat();

  return flattenedCountries.includes(userInput);
}

function addToUsedCountries(input) {
  const lowerCaseUserInput = input.trim().toLowerCase();

  // Check if the user input matches any country in the data structure
  const matchingCountries = countriesAndContinents.filter((item) =>
    isUserInputMatch(
      lowerCaseUserInput,
      Array.isArray(item.country) ? item.country : [item.country]
    )
  );

  if (matchingCountries.length > 0) {
    // Extract the first country from the matched countries
    const firstCountry = Array.isArray(matchingCountries[0].country)
      ? matchingCountries[0].country[0]
      : matchingCountries[0].country;

    // Check if the country is already in usedCountries
    if (!usedCountries.includes(firstCountry)) {
      // If not, add it to usedCountries
      usedCountries.push(firstCountry);
    } else {
      // If yes, show an alert
      inputElement.classList.add("warning");
    }
  }
}

//function to reset used countries
function resetUsedCountries() {
  usedCountries = [];
}

//function to remove countries from copy list
function removeCountryFromList(userInput) {
  countriesAndContinentsCopy = countriesAndContinentsCopy.filter(
    (item) =>
      !isUserInputMatch(
        userInput,
        Array.isArray(item.country) ? item.country : [item.country]
      )
  );
}
