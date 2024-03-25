// const languageSelect = document.getElementById("language-select");
const myName = document.querySelector(".my-name");
const myInfo = document.querySelector(".my-info");
const selectTitle = document.querySelector(".select-title");
const titleSummary = document.querySelector(".title-summary");
const myProjects = document.querySelector(".my-projects");
const webStudioLanguage = document.querySelector(".webStudioLanguage");
const filmotekaLanguage = document.querySelector(".filmotekaLanguage");
const phoneBookLanguage = document.querySelector(".phoneBookLanguage");
const myWork = document.querySelector(".myWork");
const courier = document.querySelector(".courier");
const courierTime = document.querySelector(".courierTime");
const firstDutiesCourier = document.querySelector(".firstDutiesCourier");
const secondDutiesCourier = document.querySelector(".secondDutiesCourier");
const workRailway = document.querySelector(".workRailway");
const railway = document.querySelector(".railway");
const railwayTime = document.querySelector(".railwayTime");
const firstDutiesRailway = document.querySelector(".firstDutiesRailway");
const secondDutiesRailway = document.querySelector(".secondDutiesRailway");
const education = document.querySelector(".education");
const goIt = document.querySelector(".goIt");
const educationTitle = document.querySelector(".educationTitle");
const technicalEducation = document.querySelector(".technical-education");
const timeElectrical = document.querySelector(".time-electrical");
const klauzula = document.querySelector(".klauzula");

const translations = {
  en: {
    name: "Oleksandr Shcherbyna",
    summaryText:
      "I am a beginner front-end developer with two years of non-commercial experience. I have worked in a team on educational projects. I am eager to learn and develop technical skills, and I am excited about the opportunity to work alongside more experienced developers to contribute to the team and the company.",
    selectTitle: "Language",
    titleSummary: "SUMMARY",
    myProjects: "PROJECT EXPERIENCE",
    webStudioLanguage:
      "The LEARN ENGLISH WORDS project is an innovative application developed using the React library, aimed at helping people learn English with enthusiasm and efficiency. The main idea of the application is to find matching pairs of words in English, making the learning process interesting and engaging. One of the key features of the application is its multilingual capability - it is available in three languages: Ukrainian, Polish, and Russian. Users also have the ability to create their own word databases by adding them to their personal dictionary. This feature is available only to registered users, with email confirmation required upon registration. Registration and authentication are done using a refresh token or through a Google account. The application also provides the option to listen to the pronunciation of English words at a customizable speed, which helps improve auditory perception and pronunciation. LEARN ENGLISH WORDS is optimized for mobile devices, ensuring convenience in any situation. However, it should be noted that the application has been tested only in the Google Chrome browser. While the application is still in development, its core functionality is already operational. Future plans include expanding the database to include 5000-8000 words, covering the most commonly used words in the English language.",
    filmotekaLanguage:
      "About the project: This is a team project in the creation of which 7 developers took part. This app is for searching and receiving information about the film with the possibility of viewing trailers. My task was to implement the display of a collection of movies on the pages, as well as their stylization.",
    phoneBookLanguage:
      "This project was developed by me personally while studying on a course with REACT. The application is adapted for mobile devices. User registration is also implemented.",
    myWork: "WORK EXPERIENCE",
    courier: "Сourier",
    courierTime: "September 2019 - September 2022 | Poland",
    firstDutiesCourier: "Delivery and packing of parcels to parcel boxes.",
    secondDutiesCourier: "Careful handling of parcels.",
    workRailway: "Ukrainian railway",
    railway: "The driver",
    railwayTime: "February 2018 - August 2019 | Ukraine",
    firstDutiesRailway:
      "During railway accidents, rapid response and delivery of the railway management to the scene of the accident.",
    secondDutiesRailway: "Keeping the car and driver relaxation room clean.",
    education: "Education",
    goIt: "August 2021 - February 2023 | Ukraine",
    educationTitle: "Dnipropetrovsk Industrial Technical School",
    technicalEducation: "Installation and operation of electrical equipment",
    timeElectrical: "September 2002 - June 2005 | Ukraine",
    klauzula:
      "I consent to the processing of my personal data for the purpose of recruiting for the position I am applying for.",
  },
  pl: {
    name: "Oleksandr Shcherbyna",
    summaryText:
      "Jestem początkującym front-end developerem. Mam rok pracy niekomercyjnej. Posiadam doświadczenie w pracy w zespole przy projektach edukacyjnych. Jestem chętny do nauki i rozwijania umiejętności technicznych oraz pracy w zespole bardziej wykształconych programistów z korzyścią dla zespołu i firmy.",
    selectTitle: "Język",
    titleSummary: "o mnie",
    myProjects: "moje projekty",
    webStudioLanguage:
      "Ten projekt został opracowany przeze mnie osobiście podczas szkolenia z technologii HTML i CSS. Strona jest dostosowana do urządzeń mobilnych.",
    filmotekaLanguage:
      "O projekcie: Jest to projekt zespołowy, w tworzeniu którego brało udział 7 programistów. Ta aplikacja służy do wyszukiwania i odbierania informacji o filmie z możliwością przeglądania traileru. Moim zadaniem było zrobić wyświetlania kolekcji filmów na stronach, a także ich stylizacja.",
    phoneBookLanguage:
      "Ten projekt został opracowany przeze mnie podczas studiów na kursie z REACT. Aplikacja jest dostosowana do urządzeń mobilnych. Realizowana jest również rejestracja użytkowników.",
    myWork: "DOŚWIADCZENIE ZAWODOWE",
    courier: "Kurier",
    courierTime: "wrzesień 2019 - wrzesień 2022 | Polska",
    firstDutiesCourier: "Dostarczanie i pakowanie przesyłek do paczkomatów.",
    secondDutiesCourier: "Ostrożne obchodzenie się z paczkami.",
    workRailway: "Kolej żelazna",
    railway: "Kierowca",
    railwayTime: "luty 2018 - sierpień 2019 | Ukraina",
    firstDutiesRailway:
      "Podczas wypadków kolejowych szybka reakcja i dowóz dyrekcji kolei na miejsce wypadku.",
    secondDutiesRailway:
      "Utrzymanie w czystości samochodu i pokoju wypoczynkowego kierowcy.",
    education: "Edukacja",
    goIt: "Sierpień 2021 - luty 2023 | Ukraina",
    educationTitle: "Dnipropetrovsk Industrial Technical School",
    technicalEducation: "Montaż i obsługa urządzeń elektrycznych",
    timeElectrical: "Wrzesień 2002 - czerwiec 2005 | Ukraina",
    klauzula:
      "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.",
  },
  ua: {
    name: "Олександр Щербина",
    summaryText:
      "Я початківець front-end розробник. Маю рік некомерційної роботи. Маю досвід роботи в команді на освітніх проектах. Я готовий навчатися та розвивати технічні навички та працювати в команді більш освічених розробників, щоб принести користь команді та компанії.",
    selectTitle: "Мова",
    titleSummary: "про мене",
    myProjects: "мої проєкти",
    webStudioLanguage:
      "Цей проєкт був розроблений особисто мною під час навчання на курсі з технології HTML і CSS. Сайт адаптований для мобільних пристроїв.",
    filmotekaLanguage:
      "Про проєкт: Це командний проєкт, у створенні якого брали участь 7 розробників. Цей додаток призначений для пошуку та отримання інформації про фільм з можливістю перегляду трейлерів. Моїм завданням було реалізувати показ колекції фільмів на сторінках, а також їх стилізацію.",
    phoneBookLanguage:
      "Цей проєкт був розроблений мною особисто під час навчання на курсі з REACT. Додаток адаптований для мобільних пристроїв. Також реалізована реєстрація користувачів.",
    myWork: "ДОСВІД РОБОТИ",
    courier: "Кур'єр",
    courierTime: "Вересень 2019 - Вересень 2022 | Польща",
    firstDutiesCourier: "Доставлення та вкладання посилок до поштомата.",
    secondDutiesCourier: "Дбайливе поводження з посилками.",
    workRailway: "Українська залізниця",
    railway: "Водій",
    railwayTime: "Лютий 2018 - Серпень 2019 | Україна",
    firstDutiesRailway:
      "Під час залізничних аварій швидке реагування та довіз керівництва залізниці на місце пригоди.",
    secondDutiesRailway:
      "Утримання автомобіля та кімнати відпочинку водія в чистоті.",
    education: "Освіта",
    goIt: "Серпень 2021 - Лютий 2023 | Україна",
    educationTitle: "Дніпропетровський індустріальний технікум",
    technicalEducation: "Монтаж та експлуатація електроустаткування",
    timeElectrical: "Вересень 2002 - червень 2005 | Україна",
    klauzula:
      "Даю згоду на обробку моїх персональних даних з метою підбору персоналу на посаду, на яку я претендую.",
  },
};

const changeLanguage = () => {
  // const language = languageSelect.value;
  const translation = translations.en;
  myName.textContent = translation.name;
  myInfo.textContent = translation.summaryText;
  // selectTitle.textContent = translation.selectTitle;
  titleSummary.textContent = translation.titleSummary.toUpperCase();
  myProjects.textContent = translation.myProjects.toUpperCase();
  webStudioLanguage.textContent = translation.webStudioLanguage;
  filmotekaLanguage.textContent = translation.filmotekaLanguage;
  phoneBookLanguage.textContent = translation.phoneBookLanguage;
  myWork.textContent = translation.myWork;
  courier.textContent = translation.courier;
  courierTime.textContent = translation.courierTime;
  firstDutiesCourier.textContent = translation.firstDutiesCourier;
  secondDutiesCourier.textContent = translation.secondDutiesCourier;
  workRailway.textContent = translation.workRailway;
  railway.textContent = translation.railway;
  railwayTime.textContent = translation.railwayTime;
  firstDutiesRailway.textContent = translation.firstDutiesRailway;
  secondDutiesRailway.textContent = translation.secondDutiesRailway;
  education.textContent = translation.education;
  goIt.textContent = translation.goIt;
  educationTitle.textContent = translation.educationTitle;
  technicalEducation.textContent = translation.technicalEducation;
  timeElectrical.textContent = translation.timeElectrical;
  klauzula.textContent = translation.klauzula;
};

changeLanguage();

// languageSelect.addEventListener("change", changeLanguage);
