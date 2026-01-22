const questions = [
  {
    text: "Глобализация усиливает экономические связи между странами.",
    correct: "true"
  },
  {
    text: "Глобализация означает закрытие границ и уменьшение международной торговли.",
    correct: "false"
  },
  {
    text: "Интернет ускорил процессы глобализации.",
    correct: "true"
  },
  {
    text: "Глобализация приводит к тому, что товары из разных стран становятся доступнее.",
    correct: "true"
  },
  {
    text: "Глобализация делает невозможным культурный обмен между странами.",
    correct: "false"
  },
  {
    text: "Международные корпорации — один из факторов глобализации.",
    correct: "true"
  },
  {
    text: "Глобализация означает, что все страны становятся одинаково богатыми.",
    correct: "false"
  },
  {
    text: "Глобализация способствует распространению технологий по миру.",
    correct: "true"
  },
  {
    text: "Глобализация полностью уничтожает национальные культуры.",
    correct: "false"
  },
  {
    text: "Глобализация включает в себя рост международной миграции.",
    correct: "true"
  },
  {
    text: "Глобализация — это процесс, который существует только в экономике.",
    correct: "false"
  },
  {
    text: "Глобализация влияет на музыку, кино и моду.",
    correct: "true"
  },
  {
    text: "Глобализация делает международные путешествия проще.",
    correct: "true"
  },
  {
    text: "Глобализация означает уменьшение международного сотрудничества.",
    correct: "false"
  },
  {
    text: "Глобализация способствует появлению международных стандартов и норм.",
    correct: "true"
  }
];

let current = 0;

const questionText = document.getElementById("questionText");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");

function loadQuestion(){
  const q = questions[current];
  questionText.textContent = q.text;
  result.textContent = "";
  document.querySelectorAll("input[name='answer']").forEach(r => r.checked = false);
}

submitBtn.addEventListener("click", () => {
  const chosen = document.querySelector("input[name='answer']:checked");
  if(!chosen){
    result.textContent = "Выберите вариант.";
    return;
  }

  if(chosen.value === questions[current].correct){
    result.textContent = "Правильно!";
    result.style.color = "#10b981";
  } else {
    result.textContent = "Неправильно.";
    result.style.color = "#ef4444";
  }

  current++;
  if(current < questions.length){
    setTimeout(loadQuestion, 1200);
  } else {
    setTimeout(() => {
      questionText.textContent = "Опрос завершён.";
      result.textContent = "";
    }, 1200);
  }
});

loadQuestion();