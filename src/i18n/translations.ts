export type Language = 'de' | 'ru'

export interface Translations {
  common: {
    back: string
    next: string
    previous: string
    start: string
    finish: string
    questions: string
    media: string
    duration: string
    minutes: string
  }
  home: {
    title: string
    subtitle: string
    categories: string
    availableSessions: string
    sessions: string
  }
  session: {
    notFound: string
    backToHome: string
    structure: string
    greeting: string
    mainContent: string
    interactive: string
    closing: string
    startSession: string
    startQuiz: string
    goToQuiz: string
    test: string
    quizComplete: string
    score: string
    correctAnswers: string
    slideProgress: string
    slideOf: string
    enlargedImage: string
    yes: string
    no: string
    correct: string
    incorrect: string
    thinkMore: string
  }
    quiz: {
      question: string
      questionOf: string
      nextQuestion: string
      finishQuiz: string
      correct: string
      incorrect: string
      explanation: string
    }
  types: {
    presentation: string
    quiz: string
    'virtual-tour': string
    biography: string
    cultural: string
    science: string
    language: string
    discussion: string
  }
}

export const translations: Record<Language, Translations> = {
  de: {
    common: {
      back: 'Zurück',
      next: 'Weiter',
      previous: 'Zurück',
      start: 'Starten',
      finish: 'Beenden',
      questions: 'Fragen',
      media: 'Medien',
      duration: 'Dauer',
      minutes: 'Min.'
    },
    home: {
      title: 'Tagesförderstätte',
      subtitle: 'Interaktive Sitzungen und Bildungsprogramme',
      categories: 'Kategorien',
      availableSessions: 'Verfügbare Sitzungen',
      sessions: 'Sitzungen'
    },
    session: {
      notFound: 'Sitzung nicht gefunden',
      backToHome: 'Zurück zur Startseite',
      structure: 'Sitzungsstruktur',
      greeting: 'Begrüßung',
      mainContent: 'Hauptinhalt',
      interactive: 'Interaktiver Teil',
      closing: 'Abschluss',
      startSession: 'Sitzung starten',
      startQuiz: 'Quiz starten',
      goToQuiz: 'Zum Quiz',
      test: 'Test',
      quizComplete: 'Quiz abgeschlossen',
      score: 'Punkte',
      correctAnswers: 'Richtige Antworten',
      slideProgress: 'Folie',
      slideOf: 'von',
      enlargedImage: 'Vergrößertes Bild',
      yes: 'Ja',
      no: 'Nein',
      correct: 'Richtig!',
      incorrect: 'Falsch',
      thinkMore: 'Überlegen Sie noch einmal.'
    },
    quiz: {
      question: 'Frage',
      questionOf: 'von',
      nextQuestion: 'Nächste Frage',
      finishQuiz: 'Quiz beenden',
      correct: 'Richtig!',
      incorrect: 'Falsch',
      explanation: 'Erklärung'
    },
    types: {
      presentation: 'Präsentation',
      quiz: 'Quiz',
      'virtual-tour': 'Virtuelle Reise',
      biography: 'Biografie',
      cultural: 'Kultur',
      science: 'Wissenschaft',
      language: 'Sprachen',
      discussion: 'Diskussion'
    }
  },
  ru: {
    common: {
      back: 'Назад',
      next: 'Далее',
      previous: 'Назад',
      start: 'Начать',
      finish: 'Завершить',
      questions: 'Вопросы',
      media: 'Медиа',
      duration: 'Длительность',
      minutes: 'мин'
    },
    home: {
      title: 'Tagesförderstätte',
      subtitle: 'Интерактивные занятия и образовательные программы',
      categories: 'Категории',
      availableSessions: 'Доступные занятия',
      sessions: 'занятий'
    },
    session: {
      notFound: 'Занятие не найдено',
      backToHome: 'Вернуться на главную',
      structure: 'Структура занятия',
      greeting: 'Приветствие',
      mainContent: 'Основная часть',
      interactive: 'Интерактивная часть',
      closing: 'Завершение',
      startSession: 'Начать занятие',
      startQuiz: 'Начать викторину',
      goToQuiz: 'Перейти к викторине',
      test: 'Тест',
      quizComplete: 'Викторина завершена',
      score: 'Баллы',
      correctAnswers: 'Правильных ответов',
      slideProgress: 'Слайд',
      slideOf: 'из',
      enlargedImage: 'Увеличенное изображение',
      yes: 'Да',
      no: 'Нет',
      correct: 'Правильно!',
      incorrect: 'Неверно',
      thinkMore: 'Подумайте еще.'
    },
    quiz: {
      question: 'Вопрос',
      questionOf: 'из',
      nextQuestion: 'Следующий вопрос',
      finishQuiz: 'Завершить викторину',
      correct: 'Правильно!',
      incorrect: 'Неверно',
      explanation: 'Объяснение'
    },
    types: {
      presentation: 'Презентация',
      quiz: 'Викторина',
      'virtual-tour': 'Виртуальное путешествие',
      biography: 'Биография',
      cultural: 'Культура',
      science: 'Наука',
      language: 'Языки',
      discussion: 'Дискуссия'
    }
  }
}



