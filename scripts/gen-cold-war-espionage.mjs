import { writeFileSync } from 'fs'
import { join } from 'path'

const MEDIA = '/media/cold-war-espionage'
const id = 'cwe'

const slides = [
  {
    n: 1,
    title: 'Холодная война: как шпионы ошибались',
    content:
      'Холодная война — это не только ракеты и идеология, но и очень странная война из жучков, тайников, тоннелей, переодетых устройств и безумных экспериментов. Чем глубже смотришь на реальные истории ЦРУ и КГБ, тем сильнее кажется, что часть этой эпохи писали одновременно инженеры, параноики и сценаристы чёрной комедии.',
    img: '01-cold-war-espionage-intro.jpg',
    imgTitle: 'Холодная война и разведка'
  },
  {
    n: 2,
    title: 'Деревянный герб, который подслушивал',
    content:
      'В 1945 году советские школьники подарили американскому послу в Москве красиво вырезанный деревянный герб США. Подарок был настолько удачным, что его повесили в резиденции как символ дружбы и дипломатии.',
    img: '02-great-seal-bug-gift.jpg',
    imgTitle: 'Подарок-герб'
  },
  {
    n: 3,
    title: 'The Thing внутри стены',
    content:
      'Но внутри уже сидел хитроумный жучок, позже известный как The Thing. Несколько лет американцы сами держали у себя на стене советское устройство для прослушки — один из самых элегантных трюков всей Холодной войны.',
    img: '03-great-seal-bug-device.jpg',
    imgTitle: 'Жучок The Thing'
  },
  {
    n: 4,
    title: 'Кирпич в посольстве тоже мог быть шпионом',
    content:
      'Проблема прослушки в Москве не ограничивалась подарками. В здании посольства США находили встроенные жучки, в том числе устройства, спрятанные прямо в строительных элементах, например в кирпичах.',
    img: '04-bugged-brick-embassy.jpg',
    imgTitle: 'Жучок в кирпиче'
  },
  {
    n: 5,
    title: 'Когда не доверяешь стене',
    content:
      'Это особенно неприятный тип шпионажа: ты не просто не доверяешь комнате, ты не доверяешь самой стене. Получается, что в Москве даже ремонт мог быть формой разведоперации.',
    img: '05-embassy-construction-moscow.jpg',
    imgTitle: 'Посольство в Москве'
  },
  {
    n: 6,
    title: 'Пишущая машинка, которая стучала не только буквами',
    content:
      'В посольстве США в Москве КГБ сумел внедрить модифицированные пишущие машинки IBM Selectric. Они не мешали печатать, но параллельно передавали информацию о том, какие клавиши нажимал человек.',
    img: '06-ibm-selectric-bug.jpg',
    imgTitle: 'IBM Selectric'
  },
  {
    n: 7,
    title: 'Аппаратный кейлоггер',
    content:
      'По сути, это был аппаратный кейлоггер ещё до эпохи обычных компьютерных кейлоггеров. Человек печатал секретный документ, а машинка тихо доносила его содержание на сторону противника.',
    img: '07-typewriter-embassy.jpg',
    imgTitle: 'Машинка в посольстве'
  },
  {
    n: 8,
    title: 'Берлинский тоннель',
    content:
      'ЦРУ и британская разведка построили под Берлином секретный тоннель, чтобы подключиться к советским линиям связи. Операция была огромной, дорогой и технически очень сложной, поэтому на Западе её считали почти шпионским шедевром.',
    img: '08-berlin-spy-tunnel.jpg',
    imgTitle: 'Шпионский тоннель'
  },
  {
    n: 9,
    title: 'Тоннель, о котором уже знали',
    content:
      'Но был один неприятный нюанс: советская сторона знала о тоннеле заранее благодаря агенту в британской разведке. Одна сторона героически рыла подземный проход, а другая уже понимала, чем закончится вся эта дорогостоящая драма.',
    img: '09-tunnel-map-berlin.jpg',
    imgTitle: 'Берлин и тоннель'
  },
  {
    n: 10,
    title: 'Кот-шпион Acoustic Kitty',
    content:
      'В 1960-х ЦРУ реально пыталось превратить кота в подслушивающее устройство. Животному вживили микрофон и передатчик, чтобы оно якобы подходило к нужным людям и записывало разговоры.',
    img: '10-acoustic-kitty-cia.jpg',
    imgTitle: 'Acoustic Kitty'
  },
  {
    n: 11,
    title: 'Кот не читает оперативный план',
    content:
      'Проблема была фундаментальной: кот — это кот. Проект оказался дорогим и почти бесполезным, потому что кошка не обязана уважать оперативный план, государственный бюджет и серьёзность международной обстановки.',
    img: '11-cat-spy-experiment.jpg',
    imgTitle: 'Кот и микрофон'
  },
  {
    n: 12,
    title: 'Голуби с камерами',
    content:
      'На фоне истории с котом идея использовать голубей даже кажется разумной. ЦРУ обучало голубей делать снимки чувствительных объектов с помощью маленьких камер.',
    img: '12-pigeon-camera-spy.jpg',
    imgTitle: 'Голубь-разведчик'
  },
  {
    n: 13,
    title: 'Птица и без приказа',
    content:
      'Звучит дико, но у птиц хотя бы есть одно важное преимущество: они и без приказа умеют летать. Иногда самый странный шпионский план — это попытка сделать вид, что это уже не странно.',
    img: '13-cia-pigeon-training.jpg',
    imgTitle: 'Обучение голубей'
  },
  {
    n: 14,
    title: 'Insectothopter — почти стрекоза',
    content:
      'ЦРУ в 1970-х разработало крошечный аппарат Insectothopter, который выглядел как механическое насекомое и должен был переносить миниатюрный микрофон. Идея: подлететь к окну, зависнуть и слушать разговор.',
    img: '14-insectothopter-dragonfly.jpg',
    imgTitle: 'Insectothopter'
  },
  {
    n: 15,
    title: 'Проект проиграл ветру',
    content:
      'Но реальность быстро напомнила о себе: такой аппарат было трудно контролировать на ветру, и в реальной полевой работе он оказался слишком капризным. Очень умный проект, который проиграл обычной погоде.',
    img: '15-miniature-spy-drone.jpg',
    imgTitle: 'Мини-дрон-насекомое'
  },
  {
    n: 16,
    title: 'Operation Tamarisk: шпионить через мусор',
    content:
      'Западные военные миссии в Восточной Германии проводили Operation Tamarisk: собирали выброшенные советские бумаги, письма и другой мусор после учений и перемещений частей. Иногда в дело шло даже использованное туалетное бумажное сырьё, если на нём оставались важные сведения.',
    img: '16-operation-tamarisk-trash.jpg',
    imgTitle: 'Разведка через мусор'
  },
  {
    n: 17,
    title: 'Квалифицированное копание в мусоре',
    content:
      'Звучит не очень героически, но операция считалась крайне полезной. Это один из лучших примеров того, что разведка иногда выглядит не как фильм про Джеймса Бонда, а как очень квалифицированное копание в чужом мусоре.',
    img: '17-military-waste-intelligence.jpg',
    imgTitle: 'Военный мусор'
  },
  {
    n: 18,
    title: 'Glienicke Bridge — мост обмена',
    content:
      'Глинике-мост между Потсдамом и Западным Берлином стал знаменитым местом обмена агентами Востока и Запада. Один из крупнейших обменов Холодной войны произошёл там 11 июня 1985 года, когда мост буквально превратился в сцену для шпионской дипломатии.',
    img: '18-glienicke-bridge-exchange.jpg',
    imgTitle: 'Мост Глинике'
  },
  {
    n: 19,
    title: 'Шпионы навстречу по белой линии',
    content:
      'В этом есть особая театральность эпохи: не тайная встреча в подвале, а почти официальный обмен людьми посреди моста. Шпионы, за которыми годами охотились, в итоге шли друг другу навстречу по белой линии.',
    img: '19-spy-swap-bridge.jpg',
    imgTitle: 'Обмен агентами'
  },
  {
    n: 20,
    title: 'Болгарский зонтик',
    content:
      'В 1978 году в Лондоне был смертельно отравлен болгарский диссидент Георгий Марков. История прославилась версией о специальном устройстве, замаскированном под зонтик, с помощью которого жертве ввели ядовитую микрогранулу.',
    img: '20-bulgarian-umbrella.jpg',
    imgTitle: 'Болгарский зонтик'
  },
  {
    n: 21,
    title: 'Легенда, которая закрепилась',
    content:
      'Позднее появились версии, что операция могла быть сложнее, чем легенда про «одинокий зонтик», но образ закрепился навсегда. Это один из редких случаев, когда реальная история шпионажа звучит настолько эффектно, что кажется выдумкой.',
    img: '21-georgi-markov-london.jpg',
    imgTitle: 'Георгий Марков'
  },
  {
    n: 22,
    title: 'Помада-пистолет',
    content:
      'Среди холодновоенных шпионских устройств фигурировал и так называемый lipstick pistol — однозарядное оружие, замаскированное под тюбик помады. Его даже называли «поцелуем смерти».',
    img: '22-lipstick-pistol.jpg',
    imgTitle: 'Помада-пистолет'
  },
  {
    n: 23,
    title: 'Косметика как оружие',
    content:
      'Это уже чистая эссенция эпохи: вещь выглядит как косметика, а работает как оружие. Холодная война обожала превращать самые обычные предметы в нечто тревожное.',
    img: '23-spy-gadget-disguise.jpg',
    imgTitle: 'Шпионский гаджет'
  },
  {
    n: 24,
    title: '«Собачья куча» как маяк',
    content:
      'ЦРУ разработало передатчик T-1151, который маскировали под экскременты собаки или другого животного. Такой предмет можно было бросить на землю и использовать как маяк для поиска, связи или эвакуации.',
    img: '24-dog-poop-transmitter.jpg',
    imgTitle: 'Маяк-передатчик'
  },
  {
    n: 25,
    title: 'Никто не рассматривает кучку',
    content:
      'Это, наверное, один из самых унизительно-практичных шпионских приборов эпохи. Он некрасивый, нелепый, но именно поэтому и полезный: никто не станет внимательно рассматривать подозрительную кучку на дороге.',
    img: '25-spy-rescue-beacon.jpg',
    imgTitle: 'Маяк спасения'
  },
  {
    n: 26,
    title: '«Московский сигнал»',
    content:
      'В посольстве США в Москве в годы Холодной войны фиксировали направленное электромагнитное излучение, которое позже стали называть «московским сигналом». Американцы даже наносили специальные покрытия на окна, пытаясь защититься от его воздействия.',
    img: '26-moscow-signal-embassy.jpg',
    imgTitle: 'Московский сигнал'
  },
  {
    n: 27,
    title: 'Слушают, облучают или и то и другое',
    content:
      'До конца значение этого сигнала обсуждалось по-разному, но сама ситуация уже выглядит тревожно и странно. Ты сидишь в посольстве и не знаешь, слушают тебя, облучают или делают и то и другое сразу.',
    img: '27-embassy-microwave.jpg',
    imgTitle: 'Посольство и излучение'
  },
  {
    n: 28,
    title: 'Посольство внутри посольства — «пузырь»',
    content:
      'Из-за страха прослушки американцы обсуждали важные темы внутри специальной защищённой конструкции в посольстве, которую называли «пузырём». Внутри собственного посольства им пришлось создать ещё одно маленькое безопасное помещение.',
    img: '28-embassy-bubble-room.jpg',
    imgTitle: 'Защищённый «пузырь»'
  },
  {
    n: 29,
    title: 'Сейф для разговора',
    content:
      'Сам факт существования такого «пузыря» отлично показывает уровень нервозности эпохи. Если тебе нужен сейф не для документов, а для самого разговора, значит обычная дипломатия уже давно закончилась.',
    img: '29-secure-room-diplomacy.jpg',
    imgTitle: 'Безопасная комната'
  },
  {
    n: 30,
    title: 'Факты страннее вымысла',
    content:
      'Самое поразительное в шпионской истории Холодной войны то, что лучшие реальные сюжеты часто страннее вымысла. Жучок в гербе, шпионский тоннель, кот с микрофоном, куча-передатчик и пишущая машинка-доносчик — это не сценарий, а настоящие факты эпохи.',
    img: '30-cold-war-espionage-legacy.jpg',
    imgTitle: 'Наследие эпохи'
  }
]

const quizzes = [
  {
    q: 1,
    slides: [1, 2, 3],
    questions: [
      {
        text: 'О чём в первую очередь эта тема?',
        options: [
          'Только о космической гонке',
          'О предметных, почти кинематографичных эпизодах шпионажа Холодной войны',
          'Только о современном кибершпионаже',
          'Только о Второй мировой'
        ],
        correct: 1,
        expl: 'Жучки, тоннели, гаджеты и абсурдные операции ЦРУ и КГБ.'
      },
      {
        text: 'Как называли жучок в деревянном гербе?',
        options: ['Red October', 'The Thing', 'Golden Eye', 'Black Box'],
        correct: 1,
        expl: 'The Thing — знаменитый пассивный жучок в подарке 1945 года.'
      },
      {
        text: 'Что сделали американцы с подаренным гербом?',
        options: [
          'Сразу сожгли',
          'Повесили в резиденции на стену',
          'Отправили в музей в тот же день',
          'Подарили обратно через неделю'
        ],
        correct: 1,
        expl: 'Герб висел в резиденции, пока работал встроенный жучок.'
      }
    ]
  },
  {
    q: 2,
    slides: [4, 5, 6],
    questions: [
      {
        text: 'Где находили жучки, встроенные в кирпичи?',
        options: ['В Кремле', 'В посольстве США в Москве', 'В ООН в Женеве', 'В Лондоне'],
        correct: 1,
        expl: 'Строительные элементы здания посольства.'
      },
      {
        text: 'Какие машинки взломали в посольстве?',
        options: ['Remington', 'IBM Selectric', 'Olivetti', 'Underwood только'],
        correct: 1,
        expl: 'Модифицированные Selectric передавали нажатия клавиш.'
      },
      {
        text: 'Чем по сути была «взломанная» пишущая машинка?',
        options: [
          'Вирусом на дискете',
          'Аппаратным кейлоггером',
          'Фотокамерой внутри',
          'Радиоприёмником'
        ],
        correct: 1,
        expl: 'Фиксировала нажатия клавиш при обычной печати.'
      }
    ]
  },
  {
    q: 3,
    slides: [7, 8, 9],
    questions: [
      {
        text: 'Что делала машинка Selectric помимо печати?',
        options: [
          'Печатала дважды',
          'Передавала данные о нажатых клавишах',
          'Самостоятельно отправляла факсы',
          'Меняла язык'
        ],
        correct: 1,
        expl: 'Секретная передача нажатий — суть взлома.'
      },
      {
        text: 'Зачем рыли тоннель под Берлином?',
        options: [
          'Для метро',
          'Чтобы подключиться к советским линиям связи',
          'Для туристов',
          'Для водопровода'
        ],
        correct: 1,
        expl: 'Операция ЦРУ и британцев по перехвату связи.'
      },
      {
        text: 'Почему тоннель — история не только успеха Запада?',
        options: [
          'Его затопили',
          'Советы знали о нём заранее через агента',
          'Тоннель не достроили',
          'Внутри не было проводов'
        ],
        correct: 1,
        expl: 'Предупреждение через агента в британской разведке.'
      }
    ]
  },
  {
    q: 4,
    slides: [10, 11, 12],
    questions: [
      {
        text: 'Как назывался проект ЦРУ с котом?',
        options: ['Project Felix', 'Acoustic Kitty', 'Silent Paws', 'CatWire'],
        correct: 1,
        expl: 'Acoustic Kitty — попытка вживить микрофон кошке.'
      },
      {
        text: 'Почему Acoustic Kitty провалился?',
        options: [
          'Кот сдал ЦРУ',
          'Кот не подчинялся оперативному плану',
          'Микрофон был слишком громким всегда',
          'Проект запретил Конгресс до старта'
        ],
        correct: 1,
        expl: 'Животное не ведёт себя как агент.'
      },
      {
        text: 'Кого ещё пытались использовать для съёмки с воздуха?',
        options: ['Собак', 'Голубей с камерами', 'Лошадей', 'Рыб'],
        correct: 1,
        expl: 'ЦРУ обучало голубей для разведсъёмки.'
      }
    ]
  },
  {
    q: 5,
    slides: [13, 14, 15],
    questions: [
      {
        text: 'Преимущество голубей перед котом в шутке слайдов?',
        options: [
          'Они дешевле',
          'Умеют летать без приказа',
          'Не шумят',
          'Не нужны камеры'
        ],
        correct: 1,
        expl: 'Птицы летают сами — в отличие от кота.'
      },
      {
        text: 'Как назывался аппарат-«насекомое» ЦРУ?',
        options: ['Dragonfly X', 'Insectothopter', 'Mosquito-1', 'BugFly'],
        correct: 1,
        expl: 'Insectothopter — механическое «насекомое» с микрофоном.'
      },
      {
        text: 'Почему Insectothopter плохо работал в поле?',
        options: [
          'Его съели птицы',
          'Был трудно управлять на ветру',
          'Не было батареек',
          'Запретили закон'
        ],
        correct: 1,
        expl: 'Ветер делал аппарат неуправляемым.'
      }
    ]
  },
  {
    q: 6,
    slides: [16, 17, 18],
    questions: [
      {
        text: 'Что собирали в Operation Tamarisk?',
        options: [
          'Только оружие',
          'Выброшенные советские бумаги и мусор после учений',
          'Только карты',
          'Только радио'
        ],
        correct: 1,
        expl: 'Разведка через отходы и документы на свалке.'
      },
      {
        text: 'Как в слайдах описывают Tamarisk?',
        options: [
          'Как провал',
          'Как полезное «копание в мусоре»',
          'Как шутку прессы',
          'Как миф'
        ],
        correct: 1,
        expl: 'Операция считалась очень полезной.'
      },
      {
        text: 'Где проходили знаменитые обмены шпионами?',
        options: [
          'На Эйфелевой башне',
          'На мосту Глинике',
          'В Вашингтоне у Белого дома',
          'В Стокгольме'
        ],
        correct: 1,
        expl: 'Glienicke Bridge между Потсдамом и Западным Берлином.'
      }
    ]
  },
  {
    q: 7,
    slides: [19, 20, 21],
    questions: [
      {
        text: 'Что особенного в обмене на мосту Глинике?',
        options: [
          'Проходил только ночью в тоннеле',
          'Почти театральный обмен посреди моста',
          'Только обмен деньгами',
          'Только обмен оружием'
        ],
        correct: 1,
        expl: 'Агенты шли навстречу по белой линии.'
      },
      {
        text: 'Кого отравили в Лондоне в 1978 году?',
        options: ['Чехова', 'Георгия Маркова', 'Солженицына', 'Пастернака'],
        correct: 1,
        expl: 'Болгарский диссидент Георгий Марков.'
      },
      {
        text: 'С чем связана легенда «болгарского зонтика»?',
        options: [
          'С отравлением через устройство, похожее на зонтик',
          'С дождем в Софии',
          'С фильмом о 007',
          'С краской для волос'
        ],
        correct: 1,
        expl: 'Версия о микрогрануле яда через «зонтик».'
      }
    ]
  },
  {
    q: 8,
    slides: [22, 23, 24],
    questions: [
      {
        text: 'Что такое lipstick pistol?',
        options: [
          'Помада с ядом',
          'Однозарядный пистолет, замаскированный под помаду',
          'Губная помада бренда KGB',
          'Фотоаппарат'
        ],
        correct: 1,
        expl: '«Поцелуй смерти» — оружие в тюбике.'
      },
      {
        text: 'Под чем маскировали передатчик T-1151?',
        options: [
          'Под камнем',
          'Под экскрементами собаки',
          'Под почтовым ящиком',
          'Под цветочным горшком'
        ],
        correct: 1,
        expl: 'Маяк, похожий на собачью «кучу».'
      },
      {
        text: 'Зачем маскировать маяк под кучу?',
        options: [
          'Для запаха',
          'Никто не станет это внимательно рассматривать',
          'Он легче',
          'Так требовал модерн'
        ],
        correct: 1,
        expl: 'Нелепый вид = хорошая маскировка.'
      }
    ]
  },
  {
    q: 9,
    slides: [25, 26, 27],
    questions: [
      {
        text: 'Что такое «московский сигнал»?',
        options: [
          'Радиостанция «Голос Америки»',
          'Направленное излучение в посольстве США в Москве',
          'Сигнал метро',
          'Кодовое имя шпиона'
        ],
        correct: 1,
        expl: 'ЭМ-излучение, фиксировавшееся в посольстве.'
      },
      {
        text: 'Что делали с окнами из-за «сигнала»?',
        options: [
          'Закрасили',
          'Наносили специальные покрытия',
          'Разбили',
          'Закрыли навсегда'
        ],
        correct: 1,
        expl: 'Пытались защититься от воздействия.'
      },
      {
        text: 'Как называли защищённую комнату в посольстве?',
        options: ['Кокон', '«Пузырь»', 'Бункер-2', 'Сейф'],
        correct: 1,
        expl: '«Пузырь» для разговоров внутри посольства.'
      }
    ]
  },
  {
    q: 10,
    slides: [28, 29, 30],
    questions: [
      {
        text: 'Зачем нужен был «пузырь» в посольстве?',
        options: [
          'Для хранения посуды',
          'Чтобы говорить в защищённом помещении',
          'Для пресс-конференций',
          'Для спорта'
        ],
        correct: 1,
        expl: 'Сейф для разговора, не для документов.'
      },
      {
        text: 'Что показывает «пузырь» про эпоху?',
        options: [
          'Полное доверие к стенам',
          'Крайний уровень паранойи и прослушки',
          'Отсутствие технологий',
          'Только эстетику 1970-х'
        ],
        correct: 1,
        expl: 'Дипломатия под постоянным страхом жучков.'
      },
      {
        text: 'Главный вывод финального слайда?',
        options: [
          'Всё выдумано кинематографом',
          'Реальные сюжеты шпионажа часто страннее вымысла',
          'Шпионов не существовало',
          'Только КГБ ошибалось'
        ],
        correct: 1,
        expl: 'Жучок, тоннель, кот и машинка — реальные факты.'
      }
    ]
  }
]

const deSlides = [
  {
    n: 1,
    title: 'Kalte Kriegsspionage: Irrtümer und Pannen',
    content:
      'Der Kalte Krieg war nicht nur Raketen und Ideologie, sondern auch eine seltsame Kriegsführung aus Wanzen, Verstecken, Tunneln, verkleideten Geräten und verrückten Experimenten. Je tiefer man in echte CIA- und KGB-Geschichten blickt, desto stärker wirkt die Epoche wie ein Stück Schwarzer Komödie von Ingenieuren und Paranoikern.',
    imgTitle: 'Kalte Krieg und Spionage'
  },
  {
    n: 2,
    title: 'Das hölzerne Wappen, das mithörte',
    content:
      '1945 schenkten sowjetische Schüler dem US-Botschafter in Moskau ein kunstvoll geschnitztes hölzernes US-Wappen. Der Anblick war so gelungen, dass man es in der Residenz als Zeichen der Freundschaft aufhängte.',
    imgTitle: 'Geschenk-Wappen'
  },
  {
    n: 3,
    title: 'The Thing in der Wand',
    content:
      'Im Inneren saß bereits eine raffinierte Wanze, später bekannt als «The Thing». Jahre lang hingen die Amerikaner freiwillig ein sowjetisches Abhörgerät an der Wand — einer der elegantesten Tricks des Kalten Krieges.',
    imgTitle: 'Wanze The Thing'
  },
  {
    n: 4,
    title: 'Auch ein Ziegel konnte spionieren',
    content:
      'Die Abhörproblematik in Moskau beschränkte sich nicht auf Geschenke. In der US-Botschaft fand man eingebaute Wanzen, teils direkt in Bauelementen wie Ziegelsteinen versteckt.',
    imgTitle: 'Wanze im Ziegel'
  },
  {
    n: 5,
    title: 'Wenn man der Wand misstraut',
    content:
      'Besonders unangenehm: Man misstraut nicht nur dem Raum, sondern der Wand selbst. In Moskau konnte selbst eine Renovierung wie eine Spionageoperation wirken.',
    imgTitle: 'Botschaft Moskau'
  },
  {
    n: 6,
    title: 'Die Schreibmaschine, die mehr tippte',
    content:
      'In der US-Botschaft gelang es dem KGB, modifizierte IBM-Selectric-Maschinen einzuschleusen. Sie druckten normal, übertrugen aber parallel, welche Tasten gedrückt wurden.',
    imgTitle: 'IBM Selectric'
  },
  {
    n: 7,
    title: 'Hardware-Keylogger',
    content:
      'Das war praktisch ein Hardware-Keylogger lange vor der Computerära. Jemand tippte ein Geheimdokument — und die Maschine verriet den Inhalt durch die Tastenfolge.',
    imgTitle: 'Maschine in der Botschaft'
  },
  {
    n: 8,
    title: 'Der Berliner Spionagetunnel',
    content:
      'CIA und britischer Geheimdienst gruben unter Berlin einen geheimen Tunnel, um sowjetische Leitungen anzuzapfen. Die Operation war riesig, teuer und technisch beeindruckend — fast ein Spionagekunstwerk.',
    imgTitle: 'Spionagetunnel'
  },
  {
    n: 9,
    title: 'Der Tunnel, den man schon kannte',
    content:
      'Der Haken: Die Sowjetunion wusste durch einen Agenten im britischen Dienst schon vorher Bescheid. Eine Seite grub heroisch — die andere wusste bereits, wie das teure Drama enden würde.',
    imgTitle: 'Berlin und Tunnel'
  },
  {
    n: 10,
    title: 'Die Spionkatze Acoustic Kitty',
    content:
      'In den 1960ern versuchte die CIA wirklich, eine Katze zum Abhörgerät zu machen. Mikrofon und Sender wurden implantiert, damit das Tier angeblich Zielpersonen näherkommt und Gespräche aufzeichnet.',
    imgTitle: 'Acoustic Kitty'
  },
  {
    n: 11,
    title: 'Die Katze liest keinen Einsatzplan',
    content:
      'Das Problem war grundlegend: Eine Katze bleibt eine Katte. Das Projekt wurde teuer und fast nutzlos, weil kein Tier Operationsplan, Budget und Weltlage respektieren muss.',
    imgTitle: 'Katze und Mikrofon'
  },
  {
    n: 12,
    title: 'Tauben mit Kameras',
    content:
      'Nach der Katze wirkt die Taube fast vernünftig. Die CIA trainierte Brieftauben, mit kleinen Kameras sensible Objekte zu fotografieren.',
    imgTitle: 'Spionagetaube'
  },
  {
    n: 13,
    title: 'Fliegen ohne Befehl',
    content:
      'Klingt verrückt, aber Vögel können zumindest ohne Befehl fliegen. Manchmal ist der seltsamste Spionageplan der Versuch, ihn für normal zu verkaufen.',
    imgTitle: 'Taubentraining'
  },
  {
    n: 14,
    title: 'Insectothopter — fast eine Libelle',
    content:
      'In den 1970ern entwickelte die CIA den winzigen Insectothopter: ein mechanisches «Insekt» mit Mikrofon. Die Idee: ans Fenster fliegen, schweben, zuhören.',
    imgTitle: 'Insectothopter'
  },
  {
    n: 15,
    title: 'Gescheitert am Wind',
    content:
      'In der Praxis war das Gerät im Wind schwer zu steuern und im Feld zu unzuverlässig. Ein kluges Projekt, das gegen normales Wetter verlor.',
    imgTitle: 'Mini-Spion-Drohne'
  },
  {
    n: 16,
    title: 'Operation Tamarisk: Spionage per Müll',
    content:
      'Westliche Militärmissionen in der DDR sammelten weggeworfene sowjetische Papiere und anderen Abfall nach Übungen und Truppenbewegungen. Manchmal zählte sogar Toilettenpapier-Rohmaterial, wenn darauf noch brauchbare Spuren standen.',
    imgTitle: 'Müllaufklärung'
  },
  {
    n: 17,
    title: 'Qualifiziert im Fremdmüll wühlen',
    content:
      'Klingt unheroisch, galt aber als sehr nützlich. Manchmal sieht Aufklärung nicht wie James Bond aus, sondern wie professionelles Wühlen in fremdem Müll.',
    imgTitle: 'Militärabfall'
  },
  {
    n: 18,
    title: 'Glienicker Brücke — Tauschbühne',
    content:
      'Die Glienicker Brücke zwischen Potsdam und West-Berlin wurde berühmt für Agententausch. Einer der größten fand am 11. Juni 1985 statt — die Brücke wurde zur Bühne der Spionagediplomatie.',
    imgTitle: 'Glienicker Brücke'
  },
  {
    n: 19,
    title: 'Agenten auf der weißen Linie',
    content:
      'Statt Keller-Treffen: fast offizieller Tausch mitten auf der Brücke. Spione, die man jahrelang jagte, gingen einander auf der weißen Linie entgegen.',
    imgTitle: 'Agententausch'
  },
  {
    n: 20,
    title: 'Der bulgarische Regenschirm',
    content:
      '1978 wurde der bulgarische Dissident Georgi Markow in London tödlich vergiftet. Berühmt wurde die Version eines Geräts, das wie ein Regenschirm wirkte und eine giftige Mikrokügelchen einbrachte.',
    imgTitle: 'Bulgarischer Regenschirm'
  },
  {
    n: 21,
    title: 'Eine Legende, die blieb',
    content:
      'Später hieß es, die Operation sei komplexer als die «einsame Regenschirm»-Legende — doch das Bild blieb. Manchmal klingt echte Spionagegeschichte zu filmisch, um wahr zu wirken.',
    imgTitle: 'Georgi Markow'
  },
  {
    n: 22,
    title: 'Der Lippenstift-Pistole',
    content:
      'Unter den Geräten der Epoche war auch die «lipstick pistol»: eine Einzelschusswaffe, getarnt als Lippenstifttube. Man nannte sie sogar «Kuss des Todes».',
    imgTitle: 'Lippenstift-Pistole'
  },
  {
    n: 23,
    title: 'Kosmetik als Waffe',
    content:
      'Die Essenz der Epoche: Alltägliches Aussehen, gefährliche Funktion. Der Kalte Krieg liebte es, Normales in Bedrohliches zu verwandeln.',
    imgTitle: 'Spionage-Gadget'
  },
  {
    n: 24,
    title: 'Der «Hundehaufen»-Sender',
    content:
      'Die CIA entwickelte den Sender T-1151, getarnt als Hundekot oder anderes Tier. Man konnte ihn fallen lassen und als Such-, Funk- oder Evakuierungsmarkierung nutzen.',
    imgTitle: 'Sender-Tarnung'
  },
  {
    n: 25,
    title: 'Niemand untersucht den Haufen',
    content:
      'Vielleicht das demütig-praktischste Gerät der Epoche: hässlich, absurd — und deshalb nützlich. Kaum jemand untersucht einen verdächtigen Haufen auf der Straße genau.',
    imgTitle: 'Rettungsmarkierung'
  },
  {
    n: 26,
    title: 'Das «Moskauer Signal»',
    content:
      'In der US-Botschaft in Moskau registrierte man gerichtete elektromagnetische Strahlung, später «Moskauer Signal» genannt. Man beschichtete sogar Fenster, um sich zu schützen.',
    imgTitle: 'Moskauer Signal'
  },
  {
    n: 27,
    title: 'Abhören, bestrahlen oder beides?',
    content:
      'Die genaue Bedeutung blieb umstritten — die Situation wirkt schon allein deshalb beunruhigend. Man sitzt in der Botschaft und weiß nicht: Wird man belauscht, bestrahlt oder beides zugleich?',
    imgTitle: 'Botschaft und Strahlung'
  },
  {
    n: 28,
    title: 'Botschaft in der Botschaft — die «Blase»',
    content:
      'Aus Angst vor Wanzen besprach man Wichtiges in einer speziellen Schutzkonstruktion — der «Blase». Innerhalb der eigenen Botschaft brauchte man ein zweites, kleines sicheres Zimmer.',
    imgTitle: 'Schutz-«Blase»'
  },
  {
    n: 29,
    title: 'Tresor für das Gespräch',
    content:
      'Die «Blase» zeigt die Nervosität der Epoche. Braucht man einen Tresor nicht für Dokumente, sondern für das Gespräch selbst, ist normale Diplomatie längst vorbei.',
    imgTitle: 'Sicherer Raum'
  },
  {
    n: 30,
    title: 'Fakten seltsamer als Fiktion',
    content:
      'Das Erstaunlichste: Die besten echten Spionagegeschichten sind oft seltsamer als Erfindung. Wanze im Wappen, Tunnel, Katze mit Mikrofon, Kot-Sender und verräterische Schreibmaschine — keine Drehbuchideen, sondern Fakten der Epoche.',
    imgTitle: 'Erbe der Epoche'
  }
]

function slideRu(s) {
  return `  { id: '${id}${s.n}', title: ${JSON.stringify(s.title)}, content: ${JSON.stringify(s.content)}, duration: 3, media: [{ type: 'image', url: '${MEDIA}/${s.img}', title: ${JSON.stringify(s.imgTitle)} }] }`
}

function slideDe(s, ru) {
  const d = deSlides[s.n - 1]
  return `  { id: '${id}${s.n}', title: ${JSON.stringify(d.title)}, content: ${JSON.stringify(d.content)}, duration: 3, media: [{ type: 'image', url: '${MEDIA}/${ru.img}', title: ${JSON.stringify(d.imgTitle)} }] }`
}

function quizRu(q) {
  const lines = q.questions
    .map(
      (qu, i) =>
        `      { id: 'q-cwe-${q.q}-${i + 1}', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
    )
    .join(',\n')
  return `    {\n      id: 'q${q.q}',\n      title: 'Викторина',\n      content: '',\n      duration: 2,\n      questions: [\n${lines}\n      ]\n    }`
}

const quizzesDE = [
  {
    q: 1,
    questions: [
      {
        text: 'Worum geht es in dieser Einheit vor allem?',
        options: [
          'Nur um das Raumfahrtrennen',
          'Um konkrete, fast filmreife Spionage-Episoden des Kalten Krieges',
          'Nur um moderne Cyber-Spionage',
          'Nur um den Zweiten Weltkrieg'
        ],
        correct: 1,
        expl: 'Wanzen, Tunnel, Gadgets und Pannen von CIA und KGB.'
      },
      {
        text: 'Wie hieß die Wanze im hölzernen Wappen?',
        options: ['Red October', 'The Thing', 'Golden Eye', 'Black Box'],
        correct: 1,
        expl: 'The Thing — die berühmte passive Wanze im Geschenk von 1945.'
      },
      {
        text: 'Was machten die Amerikaner mit dem geschenkten Wappen?',
        options: [
          'Verbrannten es sofort',
          'Hängten es in der Residenz an die Wand',
          'Gaben es am selben Tag ins Museum',
          'Schenkten es nach einer Woche zurück'
        ],
        correct: 1,
        expl: 'Das Wappen hing an der Wand, während die Wanze aktiv war.'
      }
    ]
  },
  {
    q: 2,
    questions: [
      {
        text: 'Wo fand man Wanzen in Ziegelsteinen?',
        options: ['Im Kreml', 'In der US-Botschaft in Moskau', 'In der UNO in Genf', 'In London'],
        correct: 1,
        expl: 'Eingebaut in Bauelemente der Botschaft.'
      },
      {
        text: 'Welche Schreibmaschinen wurden manipuliert?',
        options: ['Remington', 'IBM Selectric', 'Olivetti', 'Nur Underwood'],
        correct: 1,
        expl: 'Selectric-Maschinen übertrugen Tastendrücke.'
      },
      {
        text: 'Was war die manipulierte Schreibmaschine praktisch?',
        options: [
          'Ein Diskettenvirus',
          'Ein Hardware-Keylogger',
          'Eine eingebaute Kamera',
          'Ein Radioempfänger'
        ],
        correct: 1,
        expl: 'Sie meldete Tastenanschläge beim normalen Tippen.'
      }
    ]
  },
  {
    q: 3,
    questions: [
      {
        text: 'Was tat die Selectric zusätzlich zum Drucken?',
        options: [
          'Druckte doppelt',
          'Übertrug Informationen über gedrückte Tasten',
          'Schickte selbstständig Faxe',
          'Wechselte die Sprache'
        ],
        correct: 1,
        expl: 'Geheime Übertragung der Tastenfolge.'
      },
      {
        text: 'Wozu grub man den Tunnel unter Berlin?',
        options: [
          'Für die U-Bahn',
          'Um sowjetische Fernmeldeleitungen anzuzapfen',
          'Für Touristen',
          'Für die Wasserversorgung'
        ],
        correct: 1,
        expl: 'CIA- und britische Abhöraktion.'
      },
      {
        text: 'Warum ist der Tunnel nicht nur ein westlicher Erfolg?',
        options: [
          'Er wurde geflutet',
          'Die Sowjets wussten vorher durch einen Agenten Bescheid',
          'Er wurde nicht fertiggestellt',
          'Innen lagen keine Kabel'
        ],
        correct: 1,
        expl: 'Warnung durch Agent im britischen Dienst.'
      }
    ]
  },
  {
    q: 4,
    questions: [
      {
        text: 'Wie hieß das CIA-Projekt mit der Katze?',
        options: ['Project Felix', 'Acoustic Kitty', 'Silent Paws', 'CatWire'],
        correct: 1,
        expl: 'Acoustic Kitty — Mikrofon in der Katze.'
      },
      {
        text: 'Warum scheiterte Acoustic Kitty?',
        options: [
          'Die Katze verriet die CIA',
          'Die Katze folgte keinem Einsatzplan',
          'Das Mikrofon war immer zu laut',
          'Der Kongress verbot es vor Start'
        ],
        correct: 1,
        expl: 'Ein Tier verhält sich nicht wie ein Agent.'
      },
      {
        text: 'Wen nutzte man zusätzlich für Luftbilder?',
        options: ['Hunde', 'Tauben mit Kameras', 'Pferde', 'Fische'],
        correct: 1,
        expl: 'CIA trainierte Brieftauben.'
      }
    ]
  },
  {
    q: 5,
    questions: [
      {
        text: 'Vorteil der Taube gegenüber der Katze?',
        options: [
          'Sie ist billiger',
          'Sie kann ohne Befehl fliegen',
          'Sie ist leise',
          'Sie braucht keine Kamera'
        ],
        correct: 1,
        expl: 'Vögel fliegen von selbst — anders als die Katze.'
      },
      {
        text: 'Wie hieß das CIA-«Insekten»-Gerät?',
        options: ['Dragonfly X', 'Insectothopter', 'Mosquito-1', 'BugFly'],
        correct: 1,
        expl: 'Insectothopter — mechanisches Insekt mit Mikrofon.'
      },
      {
        text: 'Warum scheiterte Insectothopter im Feld?',
        options: [
          'Vögel fraßen es',
          'Schwer steuerbar bei Wind',
          'Keine Batterien',
          'Gesetzliches Verbot'
        ],
        correct: 1,
        expl: 'Wind machte es unzuverlässig.'
      }
    ]
  },
  {
    q: 6,
    questions: [
      {
        text: 'Was sammelte Operation Tamarisk?',
        options: [
          'Nur Waffen',
          'Weggeworfene sowjetische Papiere und Müll nach Übungen',
          'Nur Landkarten',
          'Nur Radios'
        ],
        correct: 1,
        expl: 'Aufklärung über Abfälle und Dokumente.'
      },
      {
        text: 'Wie wird Tamarisk in den Folien beschrieben?',
        options: [
          'Als Fehlschlag',
          'Als nützliches «Wühlen im Müll»',
          'Als Pressewitz',
          'Als Mythos'
        ],
        correct: 1,
        expl: 'Die Operation galt als sehr nützlich.'
      },
      {
        text: 'Wo fanden berühmte Agententausche statt?',
        options: [
          'Am Eiffelturm',
          'An der Glienicker Brücke',
          'Am Weißen Haus',
          'In Stockholm'
        ],
        correct: 1,
        expl: 'Brücke zwischen Potsdam und West-Berlin.'
      }
    ]
  },
  {
    q: 7,
    questions: [
      {
        text: 'Was ist besonders am Tausch auf der Glienicker Brücke?',
        options: [
          'Er lief nur nachts im Tunnel',
          'Fast theatralischer Tausch mitten auf der Brücke',
          'Nur Geldtausch',
          'Nur Waffentausch'
        ],
        correct: 1,
        expl: 'Agenten auf der weißen Linie.'
      },
      {
        text: 'Wer wurde 1978 in London vergiftet?',
        options: ['Tschechow', 'Georgi Markow', 'Solschenizyn', 'Pasternak'],
        correct: 1,
        expl: 'Der bulgarische Dissident Georgi Markow.'
      },
      {
        text: 'Womit hängt die «bulgarische Regenschirm»-Legende zusammen?',
        options: [
          'Mit Vergiftung über ein regenschirmähnliches Gerät',
          'Mit Regen in Sofia',
          'Mit einem 007-Film',
          'Mit Haarfarbe'
        ],
        correct: 1,
        expl: 'Version einer Giftmikrokügelchen.'
      }
    ]
  },
  {
    q: 8,
    questions: [
      {
        text: 'Was ist die «lipstick pistol»?',
        options: [
          'Giftlippenstift',
          'Einzelschusswaffe als Lippenstift getarnt',
          'Lippenstift der KGB-Marke',
          'Eine Kamera'
        ],
        correct: 1,
        expl: '«Kuss des Todes» — Waffe im Tübchen.'
      },
      {
        text: 'Woraus tarnte man den Sender T-1151?',
        options: [
          'Einen Stein',
          'Hundekot',
          'Einen Briefkasten',
          'Einen Blumentopf'
        ],
        correct: 1,
        expl: 'Markierung, die wie Kot aussieht.'
      },
      {
        text: 'Warum die Tarnung als «Haufen»?',
        options: [
          'Wegen des Geruchs',
          'Niemand untersucht das genau',
          'Er ist leichter',
          'Modernisierungsvorschrift'
        ],
        correct: 1,
        expl: 'Absurde Tarnung = gute Tarnung.'
      }
    ]
  },
  {
    q: 9,
    questions: [
      {
        text: 'Was war das «Moskauer Signal»?',
        options: [
          'Radio «Stimme Amerikas»',
          'Gerichtete Strahlung in der US-Botschaft Moskau',
          'U-Bahn-Signal',
          'Deckname eines Spions'
        ],
        correct: 1,
        expl: 'EM-Strahlung in der Botschaft.'
      },
      {
        text: 'Was tat man mit den Fenstern wegen des Signals?',
        options: [
          'Übermalte sie',
          'Trug spezielle Beschichtungen auf',
          'Zerschlug sie',
          'Schloss sie für immer'
        ],
        correct: 1,
        expl: 'Schutz vor der Strahlung.'
      },
      {
        text: 'Wie hieß der geschützte Raum in der Botschaft?',
        options: ['Kokon', '«Blase»', 'Bunker-2', 'Tresor'],
        correct: 1,
        expl: '«Blase» für Gespräche in der Botschaft.'
      }
    ]
  },
  {
    q: 10,
    questions: [
      {
        text: 'Wozu diente die «Blase»?',
        options: [
          'Für Geschirr',
          'Für Gespräche im geschützten Raum',
          'Für Pressekonferenzen',
          'Für Sport'
        ],
        correct: 1,
        expl: 'Tresor fürs Gespräch, nicht fürs Papier.'
      },
      {
        text: 'Was zeigt die «Blase» über die Epoche?',
        options: [
          'Volles Vertrauen in die Wände',
          'Extreme Paranoia wegen Abhörung',
          'Fehlende Technik',
          'Nur 1970er-Ästhetik'
        ],
        correct: 1,
        expl: 'Diplomatie unter ständiger Angst vor Wanzen.'
      },
      {
        text: 'Hauptaussage der letzten Folie?',
        options: [
          'Alles ist Filmfiktion',
          'Echte Spionage ist oft seltsamer als Erfindung',
          'Es gab keine Spione',
          'Nur das KGB irrte sich'
        ],
        correct: 1,
        expl: 'Wanze, Tunnel, Katze, Maschine — echte Fakten.'
      }
    ]
  }
]

function quizDe(q) {
  const de = quizzesDE[q.q - 1]
  const lines = de.questions
    .map(
      (qu, i) =>
        `      { id: 'q-cwe-${q.q}-${i + 1}-de', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
    )
    .join(',\n')
  return `    {\n      id: 'q${q.q}',\n      title: 'Quiz',\n      content: '',\n      duration: 2,\n      questions: [\n${lines}\n      ]\n    }`
}

// Build RU slides array with quizzes after every 3
const ruParts = []
for (let i = 0; i < slides.length; i += 3) {
  const chunk = slides.slice(i, i + 3)
  ruParts.push(...chunk.map(s => slideRu(s)))
  const qNum = i / 3 + 1
  if (qNum <= 10) ruParts.push(quizRu(quizzes[qNum - 1]))
}

const deParts = []
for (let i = 0; i < slides.length; i += 3) {
  const chunk = slides.slice(i, i + 3)
  deParts.push(...chunk.map(s => slideDe(s, s)))
  const qNum = i / 3 + 1
  if (qNum <= 10) deParts.push(quizDe(quizzes[qNum - 1]))
}

const finalQuizRu = quizzes
  .flatMap(q => q.questions)
  .map((qu, i) => {
    const qn = quizzes.findIndex(qx => qx.questions.includes(qu)) + 1
    const qi = quizzes[qn - 1].questions.indexOf(qu) + 1
    return `      { id: 'q-cwe-f-${i + 1}', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
  })
  .join(',\n')

const finalQuizDe = quizzesDE
  .flatMap(q => q.questions)
  .map((qu, i) => {
    return `    { id: 'q-cwe-f-${i + 1}-de', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
  })
  .join(',\n')

const sessionRu = `import { Session } from '../types/session'

export const coldWarEspionageSessionRU: Session = {
  id: 'cold-war-espionage',
  title: 'Холодная война: как шпионы ошибались',
  description:
    'Тридцать слайдов о предметных эпизодах шпионажа: жучок в гербе, кирпичи и машинки в посольстве, берлинский тоннель, Acoustic Kitty, голуби, Tamarisk, мост Глинике, зонтик и «пузырь» — с юмором и без ссылок в тексте.',
  type: 'presentation',
  category: 'История',
  duration: 90,
  structure: {
    greeting:
      'Холодная война — это не только ракеты, но и жучки, тоннели, переодетые гаджеты и операции, которые звучат как чёрная комедия.',
    mainContent:
      'Четырнадцать ярких сюжетов: от The Thing и IBM Selectric до кота-шпиона, мусорной разведки и московского сигнала.',
    interactive: 'Десять мини-викторин по три вопроса и итоговая викторина на тридцать вопросов.',
    additional: 'Иллюстрации по IMAGE_LIST.html и IMAGE_LIST.md в public/media/cold-war-espionage/.',
    closing:
      'На выходе — вопрос: почему реальная разведка Холодной войны часто страннее любого шпионского фильма?'
  },
  slides: [
${ruParts.join(',\n\n')}
  ],
  quiz: {
    id: 'quiz-cold-war-espionage',
    title: 'Итоговая викторина: шпионаж Холодной войны',
    questions: [
${finalQuizRu}
    ]
  },
  metadata: {
    created: '2026-05-14',
    updated: '2026-05-14',
    tags: ['история', 'холодная война', 'ЦРУ', 'КГБ', 'шпионаж'],
    difficulty: 'medium'
  }
}
`

const sessionDe = `import { Slide, QuizBlock } from '../types/session'

export const coldWarEspionageSlidesDE: Slide[] = [
${deParts.join(',\n\n')}
]

export const coldWarEspionageFinalQuizDE: QuizBlock = {
  id: 'quiz-cold-war-espionage-de',
  title: 'Abschlussquiz: Spionage im Kalten Krieg',
  questions: [
${finalQuizDe}
  ]
}
`

const root = join(process.cwd())
writeFileSync(join(root, 'src/data/cold-war-espionage-session.ts'), sessionRu, 'utf8')
writeFileSync(join(root, 'src/i18n/cold-war-espionage-content-de.ts'), sessionDe, 'utf8')
console.log('Generated session files')
