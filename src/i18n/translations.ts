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
    openConnectFour: string
  }
  connectFour: {
    title: string
    newGame: string
    again: string
    player1: string
    player2: string
    turn1: string
    turn2: string
    won1: string
    won2: string
    draw: string
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
      results: string
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
      title: 'Das unbekannte Bekannte',
      subtitle: 'Interaktive Sitzungen und Bildungsprogramme',
      categories: 'Kategorien',
      availableSessions: 'Verfügbare Sitzungen',
      sessions: 'Sitzungen',
      openConnectFour: '4 gewinnt'
    },
    connectFour: {
      title: '4 gewinnt',
      newGame: 'Neues Spiel',
      again: 'Nochmal',
      player1: 'Spieler 1',
      player2: 'Spieler 2',
      turn1: 'Spieler 1 ist am Zug',
      turn2: 'Spieler 2 ist am Zug',
      won1: 'Spieler 1 hat gewonnen',
      won2: 'Spieler 2 hat gewonnen',
      draw: 'Unentschieden'
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
      explanation: 'Erklärung',
      results: 'Ergebnisse'
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
      title: 'Неизвестное известное',
      subtitle: 'Интерактивные занятия и образовательные программы',
      categories: 'Категории',
      availableSessions: 'Доступные занятия',
      sessions: 'занятий',
      openConnectFour: '4 в ряд'
    },
    connectFour: {
      title: '4 в ряд',
      newGame: 'Новая игра',
      again: 'Заново',
      player1: 'Игрок 1',
      player2: 'Игрок 2',
      turn1: 'Ход игрока 1',
      turn2: 'Ход игрока 2',
      won1: 'Победил игрок 1',
      won2: 'Победил игрок 2',
      draw: 'Ничья'
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
      explanation: 'Объяснение',
      results: 'Результаты'
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



