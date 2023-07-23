import quizData from "./Questions.js";

// Получение ссылок на различные элементы HTML-страницы.
const quiz = document.getElementById('quiz'); // Контейнер для вопросов и ответов викторины.
const answerEls = document.querySelectorAll('.answer'); // Список HTML-элементов для вариантов ответов.
const questionEl = document.getElementById('question'); // Элемент HTML для отображения вопроса викторины.
const a_text = document.getElementById('a_text'); // Элемент HTML для отображения текста варианта "а".
const b_text = document.getElementById('b_text'); // Элемент HTML для отображения текста варианта "b".
const c_text = document.getElementById('c_text'); // Элемент HTML для отображения текста варианта "c".
const d_text = document.getElementById('d_text'); // Элемент HTML для отображения текста варианта "d".
const e_text = document.getElementById('e_text'); // Элемент HTML для отображения текста варианта "e".
const f_text = document.getElementById('f_text'); // Элемент HTML для отображения текста варианта "f".
const g_text = document.getElementById('g_text'); // Элемент HTML для отображения текста варианта "g".
const h_text = document.getElementById('h_text'); // Элемент HTML для отображения текста варианта "h".
const i_text = document.getElementById('i_text'); // Элемент HTML для отображения текста варианта "i".
const j_text = document.getElementById('j_text'); // Элемент HTML для отображения текста варианта "j".
const submitBtn = document.getElementById('submit'); // Кнопка для отправки ответа пользователем.
let currentQuiz = 0; // Переменная для отслеживания индекса текущего вопроса викторины, который отображается.
let score = 0; // Переменная для отслеживания результата пользователя (количество правильных ответов).

// Загрузка первого вопроса и ответов викторины при запуске приложения.
loadQuiz();

// Определение функции для загрузки вопроса и ответов в HTML-элементы.
function loadQuiz() {
    // Снятие выделения с любых предыдуще выбранных ответов.
    deselectAnswers();

    // Получение данных текущего вопроса из массива quizData по индексу currentQuiz.
    const currentQuizData = quizData[currentQuiz];

    // Отображение текста вопроса в HTML-элементе questionEl.
    questionEl.innerText = currentQuizData.question;

    // Отображение текстов вариантов ответов в соответствующих HTML-элементах.
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
    f_text.innerText = currentQuizData.f;
    g_text.innerText = currentQuizData.g;
    h_text.innerText = currentQuizData.h;
    i_text.innerText = currentQuizData.i;
    j_text.innerText = currentQuizData.j;
}

// Определение функции для снятия выделения с предыдуще выбранных ответов.
function deselectAnswers() {
    // Перебор всех элементов answerEls (вариантов ответов) и снятие выделения.
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// Определение функции для получения выбранного пользователем ответа.
function getSelected() {
    let answer;
    // Перебор всех элементов answerEls (вариантов ответов).
    answerEls.forEach(answerEl => {
        // Если элемент (вариант ответа) отмечен пользователем, сохраняем его id.
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer; // Возвращаем id выбранного ответа или undefined, если ответ не выбран.
}

// Добавление обработчика событий на кнопку submitBtn.
submitBtn.addEventListener('click', () => {
    // Получение выбранного пользователем ответа.
    const answer = getSelected();

    // Проверка, был ли выбран ответ.
    if (answer) {
        // Если ответ выбран, проверяем его на правильность.
        if (answer === quizData[currentQuiz].correct) {
            // Если ответ правильный, увеличиваем счетчик score.
            score++;
        }
        // Переходим к следующему вопросу.
        currentQuiz++;

        // Если есть еще вопросы, загружаем следующий вопрос.
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // Иначе, если все вопросы отвечены, отображаем сообщение о завершении и ссылку для просмотра результатов.
            quiz.innerHTML = `
                <h2>Тест Завершён</h2>
                <a href="/Html/index_Step-3.html" class="btn_down">Показать результат</a>
            `;
        }
    }
});






