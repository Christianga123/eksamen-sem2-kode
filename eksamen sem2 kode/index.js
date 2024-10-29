console.clear();

const menuUp = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
const menuDown = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

let menuOpen = false;

const tl = gsap.timeline({
  paused: true,
  defaults: { duration: 0.3, ease: "power1.inOut" }
});

tl.fromTo(".menu-icon", { rotation: 0 }, { rotation: 180 }, 0)
  .fromTo(
    ".menu",
    { clipPath: menuUp, visibility: "hidden" },
    { clipPath: menuDown, visibility: "visible" },
    0
  )
  .fromTo(
    ".menu-item",
    { opacity: 0, y: "0.5em", stagger: 0.1 },
    { opacity: 1, y: "0em", stagger: 0.1 }
  )
  .fromTo(
    ".menu-item2",
    { opacity: 0, y: "0.5em", stagger: 0.1 },
    { opacity: 1, y: "0em", stagger: 0.1 }
  );

document.querySelector(".menu-icon").addEventListener("click", () => {
  if (!menuOpen) {
    tl.play();
    menuOpen = true;
  } else {
    tl.reverse();
    menuOpen = false;
  }
});
//Header end
/*kapitel-1.1*/
(function () {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
      const select = dropdown.querySelector('.select');
      const caret = dropdown.querySelector('.caret');
      const menu = dropdown.querySelector('.menu1');
      const options = dropdown.querySelectorAll('.menu1 li');
      const selected = dropdown.querySelector('.selected');

      select.addEventListener('click', () => {
          select.classList.toggle('select-clicked');
          caret.classList.toggle('caret-rotate');
          menu.classList.toggle('menu1-open');
          
         
          adjustDropdownPositions(); 
      });

      options.forEach(option => {
          option.addEventListener('click', () => {
              selected.innerText = option.innerText;
              select.classList.remove('select-clicked');
              caret.classList.remove('caret-rotate');
              menu.classList.remove('menu1-open');
              
              options.forEach(option => {
                  option.classList.remove('active');
              });
              option.classList.add('active');
              
             
              adjustDropdownPositions(); 
          });
      });
  });
  function adjustDropdownPositions() {
      let offset = 0;
      dropdowns.forEach(dropdown => {
          dropdown.style.top = `${offset}px`; 
          const menu = dropdown.querySelector('.menu1');
          if (menu.classList.contains('menu1-open')) {
              offset += menu.offsetHeight; 
          } else {
              offset += dropdown.offsetHeight; 
          }
      });
  }

  adjustDropdownPositions(); 
})();

  // Mobile quiz1
const questions = [
  {
    question: "Hvad står CPU for?",
    answers: [
      {text: "Central power unit", correct: false},
      {text: "Central Processing Unit", correct: true},
      {text: "Center professional utility", correct: false},
      {text: "Centralized process unification", correct: false},
    ]
  },
  {
    question: "Hvor mange kerner er der typisk i et CPU?",
    answers: [
      {text: "5 til 10 kerner", correct: false},
      {text: "4 til 24 kerner", correct: true},
      {text: "1 til 2 kerner", correct: false},
      {text: "Bare 1 kerne", correct: false},
    ]
  },
  {
    question: "Hvad er vigtigst når du skal købe din egen CPU?",
    answers: [
      {text: "Være sikker på det har kerner nok til dine behov", correct: true},
      {text: "At det er så bredt så muligt", correct: false},
      {text: "At det har samme brand som dine andre dele", correct: false},
      {text: "At det kan arbejde selvstændigt fra motherboardet", correct: false},
    ]
  },
  {
    question: "Hvad er CPU’ens hovedfunktion?",
    answers: [
      {text: "Øge grafisk kvalitet ", correct: false},
      {text: "Lagering af data", correct: false},
      {text: "Computerens hjerne", correct: true},
      {text: "Computerens hjerte", correct: false},
    ]
  },
  {
    question: "Hvilken funktion har et Motherboard?",
    answers: [
      {text: "Motherboardet er ansvarlig for at køle CPU'en og GPU'en ", correct: false},
      {text: "Motherboardet er en ekstern enhed, der tilsluttes computeren via USB", correct: false},
      {text: "Motherboardet forbinder alle PC’ens dele og tillader dem at samarbejde", correct: true},
      {text: "Motherboardet fungerer som computerens primære strømforsyning", correct: false},
    ]
  },
  {
    question: "Hvad står PCB for?",
    answers: [
      {text: "Printed Circuit Board", correct: true},
      {text: "Plate Circuit Board", correct: false},
      {text: "Processing Central Board", correct: false},
      {text: "Processing Circuit Board", correct: false},
    ]
  },
  {
    question: "Hvad hedder de små modeller af Motherboards?",
    answers: [
      {text: "Mini Board", correct: false},
      {text: "S-ITX", correct: false},
      {text: "M-ITX", correct: true},
      {text: "M-PCU", correct: false},
    ]
  },
  {
    question: "Hvad er specielt ved større Motherboard modeller?",
    answers: [
      {text: "De laver bedre grafik på din skærm", correct: false},
      {text: "De har deres egen blæser", correct: false},
      {text: "De kan indeholde 2 CPUer", correct: true},
      {text: "De giver mere lagerplads", correct: false},
    ]
  },
  {
    question: "Hvad er forskellen mellem RAM og en harddisk?",
    answers: [
      {text: "RAM er permanent, mens en harddisk er midlertidig", correct: false},
      {text: "RAM er hurtigere, men har mindre kapacitet end en harddisk", correct: true},
      {text: "RAM er til lager af billeder/videoer, mens en harddisk bruges til software", correct: false},
      {text: "Der er ingen forskel mellem RAM og en harddisk", correct: false},
    ]
  },
  {
    question: "Hvad er forskellen mellem RAM og en harddisk?",
    answers: [
      {text: "RAM er permanent, mens en harddisk er midlertidig", correct: false},
      {text: "RAM er hurtigere, men har mindre kapacitet end en harddisk", correct: true},
      {text: "RAM er til lager af billeder/videoer, mens en harddisk bruges til software", correct: false},
      {text: "Der er ingen forskel mellem RAM og en harddisk", correct: false},
    ]
  },
  {
    question: "Hvad er Dual channel RAM?",
    answers: [
      {text: "To RAM-moduler fra samme producent giver hurtigere hastighed", correct: true},
      {text: "forskellige RAM-moduler i hver sin computer", correct: false},
      {text: "En RAM producent", correct: false},
      {text: "En blæser som sættes på RAM-modulerne individuelt", correct: false},
    ]
  },
  {
    question: "Hvad står RAM for?",
    answers: [
      {text: "Rummer Alt Muligt", correct: false},
      {text: "Random Access Memory", correct: true},
      {text: "Rendering Access Mechanism", correct: false},
      {text: "Real Access Multiplier", correct: false},
    ]
  },
  {
    question: "Hvad gør RAM, som harddisken ikke gør?",
    answers: [
      {text: "En harddisk er mindre", correct: false},
      {text: "Der er ingen forskel", correct: false},
      {text: "RAM gemmer den seneste data fra dine programmer mens de er åbne", correct: true},
      {text: "En harddisk gemmer hurtigere end RAM ", correct: false},
    ]
  },
  {
    question: "Hvad er en heatsink, og hvordan virker den med en blæser?",
    answers: [
      {text: "En heatsink er en enhed til at forbedre luftstrømmen i computerens", correct: false},
      {text: "En heatsink er en enhed til at sprede varme væk fra en del såsom CPU", correct: true},
      {text: "En heatsink er en type kølemiddel, der bruges i væskekølesystemer", correct: false},
      {text: "En heatsink er en anden betegnelse for en CPU-køler", correct: false},
    ]
  },
  {
    question: "Hvad sker der, hvis man ikke har nok køling?",
    answers: [
      {text: "Der sker ikke noget", correct: false},
      {text: "Computeren skal genstartes", correct: false},
      {text: "Ram-modulerne falder ud", correct: false},
      {text: "Luftcirkulationen forringes, og kan ødelægge computeren", correct: true},
    ]
  },
  {
    question: "Hvad er en AIO-køler?",
    answers: [
      {text: "En køler, der kun bruger luft til at køle CPU'en", correct: false},
      {text: "En avanceret intern enhed til strømstyring", correct: false},
      {text: "En All-In-One vandkøler, der kombinerer pumpe, radiator og blæsere", correct: true},
      {text: "En type software, der styrer kølesystemets hastighed", correct: false},
    ]
  },
  {
    question: "Hvad er fordelen ved en vandkøler i forhold til en luftkøler?",
    answers: [
      {text: "Væskekølere er billigere og lettere at installere", correct: false},
      {text: "Vandkølere er helt lydløse under drift", correct: false},
      {text: "Vandkølere tilbyder ofte bedre effektivitet og kan håndtere mere varme", correct: true},
      {text: "Væskekølere bruger ingen elektrisk strøm til at fungere", correct: false},
    ]
  },
  {
    question: "Hvad er fordelen ved en vandkøler i forhold til en luftkøler?",
    answers: [
      {text: "Væskekølere er billigere og lettere at installere", correct: false},
      {text: "Vandkølere er helt lydløse under drift", correct: false},
      {text: "Vandkølere tilbyder ofte bedre effektivitet og kan håndtere mere varme", correct: true},
      {text: "Væskekølere bruger ingen elektrisk strøm til at fungere", correct: false},
    ]
  },
  {
    question: "Hvorfor vælge en strømforsyning med nok watt?",
    answers: [
      {text: "For meget wattstyrke kan skade computerens komponenter", correct: false},
      {text: "For lidt watt kan føre til ustabil ydeevne og at computeren slukker", correct: true},
      {text: "Wattstyrken påvirker ikke computerens ydeevne eller stabilitet", correct: false},
      {text: "Wattstyrken bestemmer kun strømforsyningens fysiske størrelse/vægt", correct: false},
    ]
  },
  {
    question: "Hvad sker der hvis man ikke har en strømforsyning tilkoblet?",
    answers: [
      {text: "Computeren begynder hurtigere at gå i dvaletilstand", correct: false},
      {text: "Computeren kører langsommere", correct: false},
      {text: "Computerens starter langsommere", correct: false},
      {text: "Computeren kan ikke tænde", correct: false},
    ]
  },
  {
    question: "Hvad står PSU for?",
    answers: [
      {text: "Process Supply Unit", correct: false},
      {text: "Power Supply Unit", correct: true},
      {text: "Power Section Unit", correct: false},
      {text: "Power Sending Unit", correct: false},
    ]
  },
  {
    question: "Hvad er det vigtigste du skal gøre når du skal købe en strømforsyning",
    answers: [
      {text: "Beregn dit systems watt forbrug", correct: true},
      {text: "At kablerne er lige lange", correct: false},
      {text: "Prisen", correct: false},
      {text: "Brandet", correct: false},
    ]
  },
  {
    question: "Hvad er formålet med en GPU på et grafikkort?",
    answers: [
      {text: "At administrere strømforsyningen til computerens harddiske", correct: false},
      {text: "At forbedre internetforbindelsen til computeren", correct: false},
      {text: "At styre køle ventilatorerne i computerens kabinet", correct: false},
      {text: "At behandle og generere grafik for at vise på skærmen", correct: true},
    ]
  },
  {
    question: "Hvad er den primære grund til at købe et dyrt grafikkort?",
    answers: [
      {text: "Gaming i høj opløsning og 3D programmer", correct: true},
      {text: "Computere kræver et grafikkort for at tænde", correct: false},
      {text: "RGB lys", correct: false},
      {text: "Mere hukommelsesplads", correct: false},
    ]
  },
  {
    question: "Hvad står GPU for?",
    answers: [
      {text: "Graphic Power Unit", correct: false},
      {text: "Graphic Processing Unit", correct: true},
      {text: "General Purpose Unit", correct: false},
      {text: "Graphic Picture Unit", correct: false},
    ]
  },
  {
    question: "Hvad betyder det, når et grafikkort understøtter ray tracing?",
    answers: [
      {text: "Det kan forbinde til flere skærme samtidig", correct: false},
      {text: "Det kan simulere lysets interaktioner med objekter for mere realisme", correct: true},
      {text: "Det bruger mindre strøm under høj belastning", correct: false},
      {text: "Det har indbygget lydforbedring teknologi", correct: false},
    ]
  },
  {
    question: "Hvad er det vigtigste, når du vælger et kabinet til din pc?",
    answers: [
      {text: "At der er vinduer så du kan holde øje med at delene kører som de skal", correct: false},
      {text: "At det kan rumme alle dine dele", correct: true},
      {text: "At det er ekstra stort så der er plads til nye dele", correct: false},
      {text: "At det er flot at kigge på", correct: false},
    ]
  },
  {
    question: "Hvordan finder man ud af om der er plads til komponenterne i kabinettet?",
    answers: [
      {text: "På bunden af kassen", correct: false},
      {text: "Spørg i pakkeshoppen", correct: false},
      {text: "Det kan man ikke", correct: false},
      {text: "Producenternes hjemmesider", correct: true},
    ]
  },
  {
    question: "Hvad betyder det, når et kabinet har support til ATX, mATX og ITX bundkort?",
    answers: [
      {text: "At kabinettet kan tilsluttes til forskellige typer skærme", correct: false},
      {text: "At kabinettet understøtter forskellige typer RAM", correct: false},
      {text: "At kabinettet kan rumme bundkort af forskellige størrelser og forme", correct: true},
      {text: "At kabinettet kan forbedre ydelsen af CPU'en", correct: false},
    ]
  },
  {
    question: "Hvad er formålet med kabelføring huller i et computer kabinet?",
    answers: [
      {text: "At opbevare ekstra kabler og ledninger", correct: false},
      {text: "At organisere og skjule kabler for bedre luftstrøm og et rent udeseende", correct: true},
      {text: "At forbinde flere computere sammen", correct: true},
      {text: "At forbedre strømforsyningen til grafikkortet", correct: false},
    ]
  },
];
const questionElement = document.getElementById('question1');
const answerButtons = document.getElementById('answer-buttons1');
const nextButton = document.getElementById('next-btn1');

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
  
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn1");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();


