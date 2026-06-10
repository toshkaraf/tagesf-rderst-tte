import { writeFileSync } from 'fs'
import { join } from 'path'

const MEDIA = '/media/harari-future-theses'
const id = 'hrf'

const slides = [
  {
    n: 1,
    title: 'Кто такой Харари',
    content:
      'Юваль Ной Харари — историк, а не футуролог, хотя чаще всего его читают именно как автора о будущем. Его книги разошлись тиражом более 45 миллионов экземпляров, и почти каждая из них запускает новый спор о человеке, технологиях и власти.',
    img: '01-yuval-harari-portrait.jpg',
    imgTitle: 'Юваль Ной Харари'
  },
  {
    n: 2,
    title: 'Почему он так раздражает и цепляет',
    content:
      'Харари умеет превращать сложные процессы в одну сильную формулу. За это его либо обожают как мыслителя, либо ругают как человека, который слишком красиво упрощает мир.',
    img: '02-harari-one-formula.jpg',
    imgTitle: 'Сильная формула'
  },
  {
    n: 3,
    title: 'Это не пророчества',
    content:
      'Сам он настаивает: это не предсказания, а предупреждения. Он не говорит «так будет», он говорит «так может стать, если ничего не менять».',
    img: '03-harari-warnings-not-prophecies.jpg',
    imgTitle: 'Предупреждения, не пророчества'
  },
  {
    n: 4,
    title: 'Тезис 1. «Бесполезный класс»',
    content:
      'Один из самых жёстких тезисов Харари: новая технологическая революция может создать «бесполезный класс». Не просто людей без работы, а людей, которых система сочтёт ненужными.',
    img: '04-useless-class-thesis.jpg',
    imgTitle: '«Бесполезный класс»'
  },
  {
    n: 5,
    title: 'Это не обычная безработица',
    content:
      'Раньше можно было потерять профессию и освоить новую. Харари боится, что алгоритмы и машины начнут вытеснять людей сразу из слишком многих сфер, и переучивание уже не спасёт.',
    img: '05-retraining-not-enough.jpg',
    imgTitle: 'Переучивание не спасёт'
  },
  {
    n: 6,
    title: 'Самая мрачная формулировка',
    content:
      'Когда Харари спрашивали, что делать с таким классом людей, он отвечал провокационно: пока лучшее, что придумано, — наркотики и компьютерные игры. Эта фраза звучит как цинизм, но именно поэтому так сильно бьёт.',
    img: '06-drugs-and-video-games-quote.jpg',
    imgTitle: 'Провокационный ответ'
  },
  {
    n: 7,
    title: 'Тезис 2. Главный вопрос века меняется',
    content:
      'Последние двести лет мир спрашивал: как дать людям работу? По Харари, XXI век может задать другой вопрос: зачем вообще нужны люди — и особенно зачем нужно так много людей.',
    img: '07-why-people-needed-question.jpg',
    imgTitle: 'Новый вопрос века'
  },
  {
    n: 8,
    title: 'Почему это ломает привычный мир',
    content:
      'Школа, пенсия, государство, социальные гарантии — всё это выросло из идеи, что человек нужен системе. Если эта идея треснет, треснет и весь старый общественный договор.',
    img: '08-social-contract-cracks.jpg',
    imgTitle: 'Трещина в договоре'
  },
  {
    n: 9,
    title: 'Тезис 3. Люди стали «хакабельны»',
    content:
      'Харари говорит, что человек перестаёт быть чёрным ящиком. Если алгоритмы умеют читать наши слабости, реакции и желания, они могут не только понимать нас, но и направлять.',
    img: '09-hackable-humans.jpg',
    imgTitle: '«Хакабельные» люди'
  },
  {
    n: 10,
    title: 'Алгоритмы будут знать нас лучше нас самих',
    content:
      'Самый тревожный вопрос у Харари звучит так: что будет с демократией, если платформы знают наши политические чувства лучше нас? Если тебя можно точно предсказать, тебя можно и незаметно подтолкнуть.',
    img: '10-algorithms-know-better.jpg',
    imgTitle: 'Алгоритмы и демократия'
  },
  {
    n: 11,
    title: 'Человек как набор данных',
    content:
      'Старый гуманизм видел в человеке внутреннюю тайну. Харари показывает другой образ: человек всё чаще воспринимается как поток биометрии, привычек, кликов и реакций.',
    img: '11-human-data-stream.jpg',
    imgTitle: 'Поток данных'
  },
  {
    n: 12,
    title: 'Кто читает данные — тот и правит',
    content:
      'Если ты умеешь расшифровывать человека, ты получаешь новый тип власти. Это уже не просто власть над телом или голосом, а власть над вниманием, выбором и внутренними импульсами.',
    img: '12-data-readers-power.jpg',
    imgTitle: 'Власть через данные'
  },
  {
    n: 13,
    title: 'Тезис 4. Новая религия из данных',
    content:
      'Харари считает, что самые влиятельные верования XXI века могут прийти не из традиционной религии, а из мира технологий. Он называет это «dataism» — верой в данные как в высший источник смысла и решения.',
    img: '13-dataism-new-religion.jpg',
    imgTitle: 'Датаизм'
  },
  {
    n: 14,
    title: 'Что такое dataism',
    content:
      'Если всё в мире — это данные, то главный авторитет получает тот, кто обрабатывает их лучше других. В такой картине мира не совесть и не Бог знают тебя лучше всех, а вычислительная система.',
    img: '14-what-is-dataism.jpg',
    imgTitle: 'Авторитет данных'
  },
  {
    n: 15,
    title: 'Почему это похоже на религию',
    content:
      'У датаизма тоже есть своя высшая инстанция, свой язык истины и своё обещание спасения через правильную систему. Только вместо откровения здесь — алгоритм.',
    img: '15-dataism-like-religion.jpg',
    imgTitle: 'Алгоритм вместо откровения'
  },
  {
    n: 16,
    title: 'Тезис 5. Сахар опаснее пороха',
    content:
      'Одна из самых известных фраз Харари: «сахар сегодня опаснее пороха». Ею он показывает, как сильно изменился мир: всё чаще людей убивают не старые бедствия, а болезни изобилия и образа жизни.',
    img: '16-sugar-deadlier-gunpowder.jpg',
    imgTitle: 'Сахар и порох'
  },
  {
    n: 17,
    title: 'Мы поменяли тип угроз',
    content:
      'По Харари, человечество не победило войну, голод и болезни окончательно, но во многом отодвинуло их назад. На первый план вышли старение, диабет, переедание и внутренние кризисы.',
    img: '17-abundance-threats.jpg',
    imgTitle: 'Новые угрозы'
  },
  {
    n: 18,
    title: 'Это исторический переворот',
    content:
      'Тысячелетиями люди боялись пустого амбара, чумы и меча. Теперь всё чаще опасность приходит не от нехватки, а от избытка.',
    img: '18-scarcity-to-abundance.jpg',
    imgTitle: 'От нехватки к избытку'
  },
  {
    n: 19,
    title: 'Тезис 6. Люди могут разделиться биологически',
    content:
      'Один из самых мрачных прогнозов Харари: богатые могут начать улучшать себя и своих детей через биотехнологии, а бедные останутся без доступа к этому. Тогда неравенство станет не просто социальным, а биологическим.',
    img: '19-biological-division.jpg',
    imgTitle: 'Биологическое разделение'
  },
  {
    n: 20,
    title: 'Не классы, а почти новые виды',
    content:
      'Если одни смогут усиливать интеллект, здоровье и тело, а другие нет, разрыв станет почти видовым. Это уже не «элита и масса», а разные уровни самого человека.',
    img: '20-almost-new-species.jpg',
    imgTitle: 'Почти новые виды'
  },
  {
    n: 21,
    title: 'Почему этот прогноз особенно страшен',
    content:
      'Классовое неравенство хотя бы можно оспаривать политически. Биологическое неравенство будет выглядеть как будто сама природа подписала новый социальный контракт.',
    img: '21-biological-inequality-fear.jpg',
    imgTitle: 'Страх биологического разрыва'
  },
  {
    n: 22,
    title: 'Тезис 7. Свобода воли — под вопросом',
    content:
      'Харари бьёт по одному из главных оснований либерального мира: идее свободной личности. Он пишет, что наука видит в человеке биохимические процессы, а не отдельную «душу-командира», которая свободно выбирает.',
    img: '22-free-will-questioned.jpg',
    imgTitle: 'Свобода воли под вопросом'
  },
  {
    n: 23,
    title: 'Если это так, качается вся моральная система',
    content:
      'Право, политика и этика во многом держатся на вере в свободный выбор. Если эта вера окажется красивой, но неточной метафорой, придётся пересматривать слишком многое.',
    img: '23-moral-system-shakes.jpg',
    imgTitle: 'Моральная система'
  },
  {
    n: 24,
    title: 'И это не атака на свободу, а тревога о будущем',
    content:
      'Харари не радуется краху старых идей. Его мысль страшнее: может оказаться, что цивилизация построена на образе человека, который наука всё хуже подтверждает.',
    img: '24-civilization-fragile-image.jpg',
    imgTitle: 'Хрупкий образ человека'
  },
  {
    n: 25,
    title: 'Тезис 8. Мир держится на коллективных вымыслах',
    content:
      'Главный тезис Sapiens: люди завоевали планету не силой, а способностью вместе верить в абстракции. Деньги, нации, корпорации, права человека и боги существуют, потому что в них верят миллионы.',
    img: '25-collective-fictions-sapiens.jpg',
    imgTitle: 'Коллективные вымыслы'
  },
  {
    n: 26,
    title: 'Это и есть секрет Homo sapiens',
    content:
      'Волк доверяет стае, а человек — флагу, банку, суду, компании и бумажке с печатью. Именно эта способность к общей выдумке позволяет миллионам незнакомцев сотрудничать.',
    img: '26-homo-sapiens-imagination.jpg',
    imgTitle: 'Секрет Homo sapiens'
  },
  {
    n: 27,
    title: 'Почему эта мысль многих злит',
    content:
      'Потому что она ставит рядом то, что мы привыкли разделять. Если и деньги, и права человека, и религия держатся на общей вере, то граница между «священным» и «социальным мифом» становится опасно тонкой.',
    img: '27-sacred-vs-social-myth.jpg',
    imgTitle: 'Священное и миф'
  },
  {
    n: 28,
    title: 'Но вымысел не значит ерунда',
    content:
      'Харари не говорит, что всё коллективно придуманное — ложь и мусор. Он говорит, что именно такие общие вымыслы и делают возможной большую цивилизацию.',
    img: '28-fiction-enables-civilization.jpg',
    imgTitle: 'Вымысел и цивилизация'
  },
  {
    n: 29,
    title: 'Что связывает все его тезисы',
    content:
      'Почти у всех идей Харари один нерв: технологии растут быстрее, чем наша мудрость. Мы уже умеем собирать данные, менять тела и строить мощные сети, но ещё не поняли, как не потерять в этом человека.',
    img: '29-technology-vs-wisdom.jpg',
    imgTitle: 'Технологии и мудрость'
  },
  {
    n: 30,
    title: 'Главная развилка',
    content:
      'Харари оставляет нас не с ответом, а с тревожным вопросом. Если всё это не пророчество, а предупреждение, то у нас ещё есть время решить, кто будет управлять будущим — человек, рынок, государство или алгоритм.',
    img: '30-harari-future-crossroads.jpg',
    imgTitle: 'Развилка будущего'
  }
]

const quizzes = [
  {
    q: 1,
    slides: [1, 2, 3],
    questions: [
      {
        text: 'Кем Харари называет себя в этой теме?',
        options: [
          'Футурологом',
          'Историком, а не футурологом',
          'Политиком',
          'Биологом по профессии'
        ],
        correct: 1,
        expl: 'Он историк, хотя его читают как автора о будущем.'
      },
      {
        text: 'Почему Харари одновременно обожают и критикуют?',
        options: [
          'Он пишет только короткие тексты',
          'Он сводит сложное к одной сильной формуле',
          'Он отказывается от интервью',
          'Он не переводится на другие языки'
        ],
        correct: 1,
        expl: 'За яркие упрощения его хвалят и ругают.'
      },
      {
        text: 'Как сам Харари описывает свои тезисы?',
        options: [
          'Как точные пророчества',
          'Как предупреждения, а не предсказания',
          'Как научные законы',
          'Как политическую программу'
        ],
        correct: 1,
        expl: '«Так может стать, если ничего не менять».'
      }
    ]
  },
  {
    q: 2,
    slides: [4, 5, 6],
    questions: [
      {
        text: 'Что такое «бесполезный класс» у Харари?',
        options: [
          'Люди без смартфона',
          'Людей, которых система сочтёт ненужными',
          'Только пенсионеров',
          'Только бюрократов'
        ],
        correct: 1,
        expl: 'Не просто безработица, а ощущение ненужности для системы.'
      },
      {
        text: 'Чем новая безработица отличается от старой, по Харари?',
        options: [
          'Она длится один день',
          'Переучивание может уже не помочь',
          'Она касается только фермеров',
          'Её решает только налог'
        ],
        correct: 1,
        expl: 'Алгоритмы вытесняют сразу из слишком многих сфер.'
      },
      {
        text: 'Что Харари провокационно предложил для «бесполезного класса»?',
        options: [
          'Обязательную армию',
          'Наркотики и компьютерные игры',
          'Полный запрет интернета',
          'Переезд на другую планету'
        ],
        correct: 1,
        expl: 'Фраза звучит цинично, но бьёт сильно.'
      }
    ]
  },
  {
    q: 3,
    slides: [7, 8, 9],
    questions: [
      {
        text: 'Какой новый вопрос может задать XXI век, по Харари?',
        options: [
          'Как построить больше заводов',
          'Зачем вообще нужны люди',
          'Как вернуть монархию',
          'Как отменить школу'
        ],
        correct: 1,
        expl: 'Не только «как дать работу», но «зачем столько людей».'
      },
      {
        text: 'Что треснет, если идея «человек нужен системе» ослабнет?',
        options: [
          'Только частные компании',
          'Старый общественный договор',
          'Только спорт',
          'Только музеи'
        ],
        correct: 1,
        expl: 'Школа, пенсия, гарантии выросли из этой идеи.'
      },
      {
        text: 'Что значит, что люди стали «хакабельны»?',
        options: [
          'Их нельзя лечить',
          'Алгоритмы могут читать и направлять нас',
          'Они перестали есть сахар',
          'Они живут только офлайн'
        ],
        correct: 1,
        expl: 'Человек перестаёт быть «чёрным ящиком».'
      }
    ]
  },
  {
    q: 4,
    slides: [10, 11, 12],
    questions: [
      {
        text: 'Какой вопрос Харари связывает с демократией и алгоритмами?',
        options: [
          'Кто построит больше дорог',
          'Что будет, если платформы знают нас лучше нас',
          'Как отменить выборы',
          'Как запретить телефоны'
        ],
        correct: 1,
        expl: 'Предсказуемого человека можно незаметно подтолкнуть.'
      },
      {
        text: 'Как в слайдах описывают человека в эпоху данных?',
        options: [
          'Как чистую душу без следов',
          'Как поток биометрии, привычек и кликов',
          'Как только генетический код',
          'Как только голос'
        ],
        correct: 1,
        expl: 'Старый гуманизм видел внутреннюю тайну — новый образ иной.'
      },
      {
        text: 'Какой тип власти даёт умение «читать» человека?',
        options: [
          'Только над телом',
          'Над вниманием, выбором и импульсами',
          'Только над погодой',
          'Только над архитектурой'
        ],
        correct: 1,
        expl: 'Это власть через расшифровку данных о человеке.'
      }
    ]
  },
  {
    q: 5,
    slides: [13, 14, 15],
    questions: [
      {
        text: 'Как Харари называет веру в данные как высший источник смысла?',
        options: ['Humanism 2.0', 'Dataism', 'Technocracy', 'Digitalism'],
        correct: 1,
        expl: 'Dataism — «новая религия» из мира технологий.'
      },
      {
        text: 'Кто в картине dataism знает тебя лучше всех?',
        options: [
          'Совесть',
          'Вычислительная система',
          'Случайный сосед',
          'Только родители'
        ],
        correct: 1,
        expl: 'Главный авторитет — тот, кто лучше обрабатывает данные.'
      },
      {
        text: 'Чем dataism похож на религию в слайдах?',
        options: [
          'Только тем, что запрещает книги',
          'Высшей инстанцией, языком истины и обещанием спасения',
          'Тем, что требует постов',
          'Тем, что отменяет науку'
        ],
        correct: 1,
        expl: 'Только вместо откровения — алгоритм.'
      }
    ]
  },
  {
    q: 6,
    slides: [16, 17, 18],
    questions: [
      {
        text: 'Какую знаменитую фразу приводит Харари про сахар?',
        options: [
          '«Сахар полезнее воды»',
          '«Сахар сегодня опаснее пороха»',
          '«Сахар — лучший друг»',
          '«Сахар заменит нефть»'
        ],
        correct: 1,
        expl: 'Она показывает смену типа угроз.'
      },
      {
        text: 'Какие угрозы вышли на первый план, по Харари?',
        options: [
          'Только война и меч',
          'Старение, диабет, переедание и внутренние кризисы',
          'Только голод',
          'Только чума'
        ],
        correct: 1,
        expl: 'Старые бедствия отодвинули, но не исчезли навсегда.'
      },
      {
        text: 'Чем опасность «избытка» отличается от старой?',
        options: [
          'Она всегда быстрее',
          'Раньше боялись нехватки, теперь чаще — избытка',
          'Она касается только детей',
          'Её нельзя измерить'
        ],
        correct: 1,
        expl: 'Пустой амбар и чума уступают болезням изобилия.'
      }
    ]
  },
  {
    q: 7,
    slides: [19, 20, 21],
    questions: [
      {
        text: 'Какой мрачный прогноз Харари даёт про биотехнологии?',
        options: [
          'Все станут одинаковыми',
          'Богатые улучшат себя, бедные останутся без доступа',
          'Биотехнологии исчезнут',
          'Государство запретит медицину'
        ],
        correct: 1,
        expl: 'Неравенство может стать биологическим.'
      },
      {
        text: 'Чем «почти новые виды» страшнее «элиты и массы»?',
        options: [
          'Это только метафора моды',
          'Разрыв в интеллекте, здоровье и теле станет почти видовым',
          'Это касается только спорта',
          'Это уже случилось полностью'
        ],
        correct: 1,
        expl: 'Разные уровни самого человека, а не только класса.'
      },
      {
        text: 'Почему биологическое неравенство особенно страшно?',
        options: [
          'Его нельзя заметить',
          'Оно будет выглядеть как будто природа сама его одобрила',
          'Оно длится один день',
          'Его легко отменить законом за неделю'
        ],
        correct: 1,
        expl: 'Политически оспорить будет гораздо труднее.'
      }
    ]
  },
  {
    q: 8,
    slides: [22, 23, 24],
    questions: [
      {
        text: 'По какому основанию либерального мира бьёт Харари?',
        options: [
          'По идее свободной личности и свободной воли',
          'По праву на отпуск',
          'По запрету науки',
          'По любви к монархии'
        ],
        correct: 1,
        expl: 'Наука видит биохимию, а не «душу-командира».'
      },
      {
        text: 'Что качается, если свободный выбор — лишь метафора?',
        options: [
          'Только спорт',
          'Право, политика и этика',
          'Только архитектура',
          'Только кино'
        ],
        correct: 1,
        expl: 'Многое держится на вере в свободный выбор.'
      },
      {
        text: 'Как в слайдах описывают позицию Харари?',
        options: [
          'Он радуется краху старых идей',
          'Он тревожится: цивилизация построена на образе, который наука хуже подтверждает',
          'Он призывает отказаться от науки',
          'Он считает, что всё уже решено'
        ],
        correct: 1,
        expl: 'Это не атака ради атаки, а тревога о будущем.'
      }
    ]
  },
  {
    q: 9,
    slides: [25, 26, 27],
    questions: [
      {
        text: 'На чём, по Sapiens, держится мир согласно Харари?',
        options: [
          'Только на силе оружия',
          'На коллективных вымыслах и общей вере в абстракции',
          'Только на золоте в подвалах',
          'Только на родственных связях'
        ],
        correct: 1,
        expl: 'Деньги, нации, права — потому что в них верят миллионы.'
      },
      {
        text: 'В чём «секрет Homo sapiens» в этой теме?',
        options: [
          'В физической силе',
          'В способности доверять флагу, банку, суду и бумажке с печатью',
          'В умении жить в одиночку',
          'В отказе от сотрудничества'
        ],
        correct: 1,
        expl: 'Общая выдумка связывает миллионы незнакомцев.'
      },
      {
        text: 'Почему мысль о коллективных вымыслах многих злит?',
        options: [
          'Она слишком короткая',
          'Ставит рядом деньги, права и религию как формы общей веры',
          'Отменяет историю',
          'Запрещает спор'
        ],
        correct: 1,
        expl: 'Граница «священного» и «социального мифа» становится тонкой.'
      }
    ]
  },
  {
    q: 10,
    slides: [28, 29, 30],
    questions: [
      {
        text: 'Харари говорит, что коллективный вымысел — это…',
        options: [
          'Всегда ложь и мусор',
          'То, что делает возможной большую цивилизацию',
          'Только детская сказка',
          'Только пропаганда врагов'
        ],
        correct: 1,
        expl: 'Вымысел не значит ерунда.'
      },
      {
        text: 'Что связывает почти все тезисы Харари?',
        options: [
          'Ненависть к технологиям',
          'Технологии растут быстрее мудрости',
          'Вера в конец истории',
          'Отказ от данных'
        ],
        correct: 1,
        expl: 'Мы умеем менять мир, но не всегда понимаем, как сохранить человека.'
      },
      {
        text: 'С чем Харари оставляет нас в финале?',
        options: [
          'С готовым ответом',
          'С тревожным вопросом: кто будет управлять будущим',
          'С призывом ничего не менять',
          'С доказательством, что всё неизбежно'
        ],
        correct: 1,
        expl: 'Человек, рынок, государство или алгоритм — выбор ещё возможен.'
      }
    ]
  }
]

const deSlides = [
  {
    n: 1,
    title: 'Wer ist Harari?',
    content:
      'Yuval Noah Harari ist Historiker, kein Futurist — obwohl man ihn meist als Autor über die Zukunft liest. Seine Bücher wurden über 45 Millionen Mal verkauft, und fast jedes löst neue Debatten über Mensch, Technologie und Macht aus.',
    imgTitle: 'Yuval Noah Harari'
  },
  {
    n: 2,
    title: 'Warum er manche nervt',
    content:
      'Harari kann komplexe Prozesse in eine starke Formel pressen. Deshalb lieben ihn manche als Denker — und kritisieren ihn als jemanden, der die Welt zu schön vereinfacht.',
    imgTitle: 'Eine starke Formel'
  },
  {
    n: 3,
    title: 'Das sind keine Prophezeiungen',
    content:
      'Harari selbst betont: Das sind keine Vorhersagen, sondern Warnungen. Er sagt nicht «so wird es sein», sondern «so könnte es werden, wenn sich nichts ändert».',
    imgTitle: 'Warnungen, keine Prophezeiungen'
  },
  {
    n: 4,
    title: 'These 1: Die «nutzlose Klasse»',
    content:
      'Eine der harten Thesen: Die neue Tech-Revolution könnte eine «nutzlose Klasse» schaffen — nicht nur Arbeitslose, sondern Menschen, die das System für überflüssig hält.',
    imgTitle: '«Nutzlose Klasse»'
  },
  {
    n: 5,
    title: 'Keine normale Arbeitslosigkeit',
    content:
      'Früher verlor man einen Beruf und lernte einen neuen. Harari fürchtet: Algorithmen und Maschinen verdrängen Menschen gleichzeitig aus zu vielen Bereichen — Umschulung reicht dann nicht mehr.',
    imgTitle: 'Umschulung reicht nicht'
  },
  {
    n: 6,
    title: 'Die düsterste Formulierung',
    content:
      'Auf die Frage, was man mit dieser Klasse tun solle, antwortete Harari provokant: Bisher sei das Beste Drogen und Computerspiele. Zynisch — und deshalb so treffend.',
    imgTitle: 'Provokante Antwort'
  },
  {
    n: 7,
    title: 'These 2: Die Frage des Jahrhunderts ändert sich',
    content:
      'Zweihundert Jahre lang fragte die Welt: Wie geben wir Menschen Arbeit? Harari meint: Im 21. Jahrhundert könnte die Frage lauten: Wozu braucht man Menschen überhaupt — und warum so viele?',
    imgTitle: 'Neue Jahrhundertfrage'
  },
  {
    n: 8,
    title: 'Warum das die Welt aufbricht',
    content:
      'Schule, Rente, Staat, Sozialsysteme — all das basiert auf der Idee, dass der Mensch dem System nützt. Wenn diese Idee bricht, bricht der alte Gesellschaftsvertrag.',
    imgTitle: 'Riss im Vertrag'
  },
  {
    n: 9,
    title: 'These 3: Menschen sind «hackbar»',
    content:
      'Harari sagt: Der Mensch ist kein Black Box mehr. Wenn Algorithmen Schwächen, Reaktionen und Wünsche lesen, können sie uns nicht nur verstehen, sondern auch lenken.',
    imgTitle: '«Hackbare» Menschen'
  },
  {
    n: 10,
    title: 'Algorithmen kennen uns besser als wir selbst',
    content:
      'Hararis beunruhigende Frage: Was passiert mit der Demokratie, wenn Plattformen unsere politischen Gefühle besser kennen als wir? Wer vorhersagbar ist, lässt sich leise steuern.',
    imgTitle: 'Algorithmen und Demokratie'
  },
  {
    n: 11,
    title: 'Der Mensch als Datensatz',
    content:
      'Der alte Humanismus sah im Menschen ein inneres Geheimnis. Harari zeigt ein anderes Bild: Der Mensch wird zum Strom aus Biometrie, Gewohnheiten, Klicks und Reaktionen.',
    imgTitle: 'Datenstrom'
  },
  {
    n: 12,
    title: 'Wer Daten liest, herrscht',
    content:
      'Wer den Menschen entschlüsseln kann, gewinnt eine neue Macht — nicht nur über Körper oder Stimme, sondern über Aufmerksamkeit, Entscheidungen und innere Impulse.',
    imgTitle: 'Macht durch Daten'
  },
  {
    n: 13,
    title: 'These 4: Eine neue Religion aus Daten',
    content:
      'Harari meint: Die einflussreichsten Glaubenssysteme des 21. Jahrhunderts könnten aus Technologie kommen. Er nennt es «Dataismus» — Glaube an Daten als höchste Quelle von Sinn und Entscheidung.',
    imgTitle: 'Dataismus'
  },
  {
    n: 14,
    title: 'Was ist Dataismus?',
    content:
      'Wenn alles Daten sind, hat Autorität, wer sie am besten verarbeitet. In dieser Welt kennen nicht Gewissen oder Gott dich am besten — sondern ein Rechensystem.',
    imgTitle: 'Autorität der Daten'
  },
  {
    n: 15,
    title: 'Warum es wie Religion wirkt',
    content:
      'Beim Dataismus gibt es auch eine höchste Instanz, eine Sprache der Wahrheit und ein Heilsversprechen durch das richtige System — nur dass statt Offenbarung der Algorithmus spricht.',
    imgTitle: 'Algorithmus statt Offenbarung'
  },
  {
    n: 16,
    title: 'These 5: Zucker ist gefährlicher als Schießpulver',
    content:
      'Eine berühmte Harari-Formel: «Zucker ist heute gefährlicher als Schießpulver.» Sie zeigt, wie sich die Welt verändert hat: Immer öfter töten nicht alte Katastrophen, sondern Krankheiten des Überflusses.',
    imgTitle: 'Zucker und Schießpulver'
  },
  {
    n: 17,
    title: 'Wir haben die Art der Bedrohung gewechselt',
    content:
      'Harari meint: Krieg, Hunger und Seuchen sind nicht endgültig besiegt, aber oft zurückgedrängt. Vorn stehen Alterung, Diabetes, Überernährung und innere Krisen.',
    imgTitle: 'Neue Bedrohungen'
  },
  {
    n: 18,
    title: 'Ein historischer Umbruch',
    content:
      'Jahrtausende fürchtete man leere Speicher, Pest und Schwert. Heute kommt Gefahr oft nicht aus Mangel, sondern aus Überfluss.',
    imgTitle: 'Vom Mangel zum Überfluss'
  },
  {
    n: 19,
    title: 'These 6: Biologische Spaltung der Menschheit',
    content:
      'Eine düstere Harari-Prognose: Reiche verbessern sich und ihre Kinder per Biotech — Arme bleiben außen vor. Ungleichheit wird dann nicht nur sozial, sondern biologisch.',
    imgTitle: 'Biologische Spaltung'
  },
  {
    n: 20,
    title: 'Nicht Klassen, sondern fast neue Arten',
    content:
      'Wenn manche Intelligenz, Gesundheit und Körper stärken können und andere nicht, wird die Kluft fast artenartig. Nicht «Elite und Masse», sondern verschiedene Stufen des Menschseins.',
    imgTitle: 'Fast neue Arten'
  },
  {
    n: 21,
    title: 'Warum diese Prognose besonders erschreckt',
    content:
      'Klassenungleichheit lässt sich politisch bestreiten. Biologische Ungleichheit wirkt, als hätte die Natur selbst den neuen Vertrag unterschrieben.',
    imgTitle: 'Angst vor biologischer Kluft'
  },
  {
    n: 22,
    title: 'These 7: Freier Wille in Frage',
    content:
      'Harari greift ein Fundament der liberalen Welt an: die freie Person. Die Wissenschaft sieht biochemische Prozesse — keine «Kommandeur-Seele», die frei wählt.',
    imgTitle: 'Freier Wille in Frage'
  },
  {
    n: 23,
    title: 'Dann wackelt das moralische System',
    content:
      'Recht, Politik und Ethik beruhen oft auf freier Wahl. Wenn das nur eine schöne, ungenaue Metapher ist, muss vieles neu gedacht werden.',
    imgTitle: 'Moralisches System'
  },
  {
    n: 24,
    title: 'Kein Angriff auf Freiheit, sondern Sorge',
    content:
      'Harari freut sich nicht über den Zerfall alter Ideen. Sein Gedanke ist gravierender: Vielleicht baut die Zivilisation auf einem Menschenbild, das die Wissenschaft immer schlechter bestätigt.',
    imgTitle: 'Zerbrechliches Menschenbild'
  },
  {
    n: 25,
    title: 'These 8: Die Welt lebt von kollektiven Fiktionen',
    content:
      'Kernaussage von Sapiens: Menschen eroberten die Erde nicht mit Kraft, sondern mit gemeinsamem Glauben an Abstraktionen. Geld, Nationen, Firmen, Menschenrechte und Götter existieren, weil Millionen daran glauben.',
    imgTitle: 'Kollektive Fiktionen'
  },
  {
    n: 26,
    title: 'Das Geheimnis des Homo sapiens',
    content:
      'Der Wolf vertraut dem Rudel, der Mensch Flagge, Bank, Gericht, Firma und Papier mit Siegel. Diese gemeinsame Erfindung ermöglicht Millionen Fremden die Zusammenarbeit.',
    imgTitle: 'Geheimnis des Homo sapiens'
  },
  {
    n: 27,
    title: 'Warum diese Idee viele ärgert',
    content:
      'Sie stellt Nebeneinander, was wir trennen: Wenn Geld, Menschenrechte und Religion auf gemeinsamem Glauben beruhen, wird die Grenze zwischen «Heiligem» und «sozialem Mythos» gefährlich dünn.',
    imgTitle: 'Heiliges und Mythos'
  },
  {
    n: 28,
    title: 'Fiktion heißt nicht Unsinn',
    content:
      'Harari sagt nicht, alles Kollektive sei Lüge und Müll. Er meint: Gerade solche gemeinsamen Fiktionen machen große Zivilisation möglich.',
    imgTitle: 'Fiktion und Zivilisation'
  },
  {
    n: 29,
    title: 'Was alle Thesen verbindet',
    content:
      'Fast alle Harari-Ideen teilen einen Nerv: Technologie wächst schneller als unsere Weisheit. Wir können Daten sammeln, Körper verändern und Netze bauen — aber noch nicht, den Menschen darin zu bewahren.',
    imgTitle: 'Technologie und Weisheit'
  },
  {
    n: 30,
    title: 'Die große Weggabelung',
    content:
      'Harari lässt uns nicht mit einer Antwort, sondern mit einer beunruhigenden Frage: Wenn das keine Prophezeiung, sondern eine Warnung ist, bleibt Zeit zu entscheiden — ob Mensch, Markt, Staat oder Algorithmus die Zukunft steuert.',
    imgTitle: 'Weggabelung der Zukunft'
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
        `      { id: 'q-hrf-${q.q}-${i + 1}', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
    )
    .join(',\n')
  return `    {\n      id: 'q${q.q}',\n      title: 'Викторина',\n      content: '',\n      duration: 2,\n      questions: [\n${lines}\n      ]\n    }`
}

const quizzesDE = [
  {
    q: 1,
    questions: [
      {
        text: 'Wen nennt Harari in dieser Einheit?',
        options: [
          'Einen Futuristen',
          'Einen Historiker, keinen Futuristen',
          'Einen Politiker',
          'Einen Berufsviologen'
        ],
        correct: 1,
        expl: 'Er ist Historiker, wird aber oft als Zukunftsautor gelesen.'
      },
      {
        text: 'Warum wird Harari gelobt und kritisiert?',
        options: [
          'Weil er nur Kurztexte schreibt',
          'Weil er Komplexes in eine starke Formel presst',
          'Weil er keine Interviews gibt',
          'Weil er nicht übersetzt wird'
        ],
        correct: 1,
        expl: 'Klare Formeln faszinieren und vereinfachen zugleich.'
      },
      {
        text: 'Wie beschreibt Harari seine Thesen selbst?',
        options: [
          'Als sichere Prophezeiungen',
          'Als Warnungen, nicht als Vorhersagen',
          'Als Naturgesetze',
          'Als Parteiprogramm'
        ],
        correct: 1,
        expl: '«So könnte es werden, wenn sich nichts ändert».'
      }
    ]
  },
  {
    q: 2,
    questions: [
      {
        text: 'Was ist Hararis «nutzlose Klasse»?',
        options: [
          'Menschen ohne Smartphone',
          'Menschen, die das System für überflüssig hält',
          'Nur Rentner',
          'Nur Beamte'
        ],
        correct: 1,
        expl: 'Nicht nur ohne Job — sondern systemisch unnütz.'
      },
      {
        text: 'Worin unterscheidet sich die neue Arbeitslosigkeit?',
        options: [
          'Sie dauert einen Tag',
          'Umschulung hilft vielleicht nicht mehr',
          'Sie betrifft nur Bauern',
          'Sie löst nur Steuerpolitik'
        ],
        correct: 1,
        expl: 'Algorithmen verdrängen aus zu vielen Bereichen gleichzeitig.'
      },
      {
        text: 'Was schlug Harari provokant für diese Klasse vor?',
        options: [
          'Pflichtdienst',
          'Drogen und Computerspiele',
          'Internetsperre',
          'Umzug auf einen anderen Planeten'
        ],
        correct: 1,
        expl: 'Zynisch formuliert — deshalb so hart.'
      }
    ]
  },
  {
    q: 3,
    questions: [
      {
        text: 'Welche neue Frage könnte das 21. Jahrhundert stellen?',
        options: [
          'Wie bauen wir mehr Fabriken?',
          'Wozu braucht man Menschen überhaupt?',
          'Wie bringen wir Monarchie zurück?',
          'Wie schaffen wir die Schule ab?'
        ],
        correct: 1,
        expl: 'Nicht nur Arbeit — sondern der Sinn vieler Menschen.'
      },
      {
        text: 'Was bricht, wenn «der Mensch nützt dem System» schwächer wird?',
        options: [
          'Nur private Firmen',
          'Der alte Gesellschaftsvertrag',
          'Nur Sport',
          'Nur Museen'
        ],
        correct: 1,
        expl: 'Schule, Rente und Garantien basieren darauf.'
      },
      {
        text: 'Was bedeutet «hackbar» in dieser Einheit?',
        options: [
          'Man kann Menschen nicht behandeln',
          'Algorithmen können uns lesen und lenken',
          'Menschen essen keinen Zucker mehr',
          'Menschen leben nur offline'
        ],
        correct: 1,
        expl: 'Der Mensch ist kein Black Box mehr.'
      }
    ]
  },
  {
    q: 4,
    questions: [
      {
        text: 'Welche Frage verbindet Harari mit Demokratie?',
        options: [
          'Wer baut mehr Straßen?',
          'Was, wenn Plattformen uns besser kennen als wir selbst?',
          'Wie schaffen wir Wahlen ab?',
          'Wie verbieten wir Telefone?'
        ],
        correct: 1,
        expl: 'Vorhersagbare Menschen lassen sich leise steuern.'
      },
      {
        text: 'Wie wird der Mensch im Datenzeitalter beschrieben?',
        options: [
          'Als reine Seele ohne Spuren',
          'Als Strom aus Biometrie, Gewohnheiten und Klicks',
          'Nur als Genom',
          'Nur als Stimme'
        ],
        correct: 1,
        expl: 'Ein anderes Bild als der alte Humanismus.'
      },
      {
        text: 'Welche Macht gibt das «Lesen» des Menschen?',
        options: [
          'Nur über den Körper',
          'Über Aufmerksamkeit, Wahl und Impulse',
          'Nur über das Wetter',
          'Nur über Architektur'
        ],
        correct: 1,
        expl: 'Macht durch Entschlüsselung von Menschendaten.'
      }
    ]
  },
  {
    q: 5,
    questions: [
      {
        text: 'Wie nennt Harari den Glauben an Daten als höchste Quelle?',
        options: ['Humanismus 2.0', 'Dataismus', 'Technokratie', 'Digitalismus'],
        correct: 1,
        expl: 'Dataismus — «neue Religion» aus Technologie.'
      },
      {
        text: 'Wer kennt dich in der Dataismus-Welt am besten?',
        options: ['Das Gewissen', 'Ein Rechensystem', 'Ein zufälliger Nachbar', 'Nur die Eltern'],
        correct: 1,
        expl: 'Autorität hat, wer Daten am besten verarbeitet.'
      },
      {
        text: 'Woran erinnert Dataismus laut Folien an Religion?',
        options: [
          'Nur am Bücherverbot',
          'An höchste Instanz, Wahrheitssprache und Heilsversprechen',
          'An Fastenpflicht',
          'An Wissenschaftsverbot'
        ],
        correct: 1,
        expl: 'Statt Offenbarung spricht der Algorithmus.'
      }
    ]
  },
  {
    q: 6,
    questions: [
      {
        text: 'Welche berühmte Zucker-Formel zitiert Harari?',
        options: [
          '«Zucker ist gesünder als Wasser»',
          '«Zucker ist heute gefährlicher als Schießpulver»',
          '«Zucker ist der beste Freund»',
          '«Zucker ersetzt Öl»'
        ],
        correct: 1,
        expl: 'Sie markiert den Wechsel der Bedrohungsart.'
      },
      {
        text: 'Welche Gefahren rücken nach vorn?',
        options: [
          'Nur Krieg und Schwert',
          'Alterung, Diabetes, Überernährung und innere Krisen',
          'Nur Hunger',
          'Nur Pest'
        ],
        correct: 1,
        expl: 'Alte Katastrophen sind oft zurückgedrängt, nicht verschwunden.'
      },
      {
        text: 'Worin unterscheidet sich Gefahr aus Überfluss?',
        options: [
          'Sie ist immer schneller',
          'Früher fürchtete man Mangel, heute öfter Überfluss',
          'Sie betrifft nur Kinder',
          'Man kann sie nicht messen'
        ],
        correct: 1,
        expl: 'Leere Speicher und Pest weichen Krankheiten des Überflusses.'
      }
    ]
  },
  {
    q: 7,
    questions: [
      {
        text: 'Welche düstere Biotech-Prognose gibt Harari?',
        options: [
          'Alle werden gleich',
          'Reiche verbessern sich, Arme bleiben außen vor',
          'Biotech verschwindet',
          'Der Staat verbietet Medizin'
        ],
        correct: 1,
        expl: 'Ungleichheit könnte biologisch werden.'
      },
      {
        text: 'Warum sind «fast neue Arten» schlimmer als Elite und Masse?',
        options: [
          'Es ist nur Mode',
          'Kluft in Intelligenz, Gesundheit und Körper wird fast artenartig',
          'Es betrifft nur Sport',
          'Es ist schon vollständig Realität'
        ],
        correct: 1,
        expl: 'Verschiedene Stufen des Menschseins, nicht nur Klasse.'
      },
      {
        text: 'Warum ist biologische Ungleichheit besonders erschreckend?',
        options: [
          'Man sieht sie nicht',
          'Sie wirkt, als hätte die Natur sie selbst bestätigt',
          'Sie dauert einen Tag',
          'Man kann sie in einer Woche per Gesetz abschaffen'
        ],
        correct: 1,
        expl: 'Politisch viel schwerer anzugreifen.'
      }
    ]
  },
  {
    q: 8,
    questions: [
      {
        text: 'Welches Fundament der liberalen Welt greift Harari an?',
        options: [
          'Freie Person und freier Wille',
          'Urlaubsrecht',
          'Wissenschaftsverbot',
          'Monarchieliebe'
        ],
        correct: 1,
        expl: 'Wissenschaft sieht Biochemie, keine «Kommandeur-Seele».'
      },
      {
        text: 'Was wackelt, wenn freie Wahl nur Metapher ist?',
        options: ['Nur Sport', 'Recht, Politik und Ethik', 'Nur Architektur', 'Nur Kino'],
        correct: 1,
        expl: 'Vieles beruht auf Glauben an freie Entscheidung.'
      },
      {
        text: 'Wie wird Hararis Haltung in den Folien beschrieben?',
        options: [
          'Er freut sich über Ideenzerfall',
          'Er sorgt sich: Zivilisation baut auf einem schwächer bestätigten Menschenbild',
          'Er lehnt Wissenschaft ab',
          'Er hält alles für entschieden'
        ],
        correct: 1,
        expl: 'Kein Angriff um des Angriffs willen — Sorge um die Zukunft.'
      }
    ]
  },
  {
    q: 9,
    questions: [
      {
        text: 'Worauf beruht die Welt laut Sapiens/Harari?',
        options: [
          'Nur auf Waffengewalt',
          'Auf kollektiven Fiktionen und gemeinsamem Glauben',
          'Nur auf Gold in Kellern',
          'Nur auf Verwandtschaft'
        ],
        correct: 1,
        expl: 'Geld, Nationen, Rechte — weil Millionen glauben.'
      },
      {
        text: 'Was ist das «Geheimnis» des Homo sapiens hier?',
        options: [
          'Körperkraft',
          'Vertrauen in Flagge, Bank, Gericht und Papier mit Siegel',
          'Alleinleben',
          'Verweigerung von Kooperation'
        ],
        correct: 1,
        expl: 'Gemeinsame Erfindung verbindet Millionen Fremde.'
      },
      {
        text: 'Warum ärgert die Fiktionsthese viele?',
        options: [
          'Sie ist zu kurz',
          'Sie stellt Geld, Rechte und Religion als Formen gemeinsamen Glaubens nebeneinander',
          'Sie löscht Geschichte',
          'Sie verbietet Streit'
        ],
        correct: 1,
        expl: 'Grenze zwischen Heiligem und sozialem Mythos wird dünn.'
      }
    ]
  },
  {
    q: 10,
    questions: [
      {
        text: 'Kollektive Fiktion ist für Harari…',
        options: [
          'Immer Lüge und Müll',
          'Das, was große Zivilisation möglich macht',
          'Nur Kindermärchen',
          'Nur Feindpropaganda'
        ],
        correct: 1,
        expl: 'Fiktion heißt nicht Unsinn.'
      },
      {
        text: 'Was verbindet fast alle Harari-Thesen?',
        options: [
          'Technologie-Hass',
          'Technologie wächst schneller als Weisheit',
          'Glaube ans Ende der Geschichte',
          'Datenverweigerung'
        ],
        correct: 1,
        expl: 'Wir verändern die Welt schneller, als wir den Menschen schützen.'
      },
      {
        text: 'Womit endet die Einheit bei Harari?',
        options: [
          'Mit fertiger Antwort',
          'Mit der Frage: Wer steuert die Zukunft?',
          'Mit dem Appell, nichts zu ändern',
          'Mit Beweis der Unvermeidlichkeit'
        ],
        correct: 1,
        expl: 'Mensch, Markt, Staat oder Algorithmus — Wahl bleibt.'
      }
    ]
  }
]

function quizDe(q) {
  const de = quizzesDE[q.q - 1]
  const lines = de.questions
    .map(
      (qu, i) =>
        `      { id: 'q-hrf-${q.q}-${i + 1}-de', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
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
    return `      { id: 'q-hrf-f-${i + 1}', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
  })
  .join(',\n')

const finalQuizDe = quizzesDE
  .flatMap(q => q.questions)
  .map((qu, i) => {
    return `    { id: 'q-hrf-f-${i + 1}-de', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
  })
  .join(',\n')

const sessionRu = `import { Session } from '../types/session'

export const harariFutureThesesSessionRU: Session = {
  id: 'harari-future-theses',
  title: 'Несколько по-настоящему сенсационных тезисов Юваля Ноя Харари о нашем недалёком будущем',
  description:
    'Тридцать слайдов о ключевых тезисах Юваля Ноя Харари: бесполезный класс, хакабельные люди, dataism, биологическое неравенство, свобода воли и коллективные вымыслы — как предупреждения, а не пророчества.',
  type: 'discussion',
  category: 'Наука',
  duration: 90,
  structure: {
    greeting:
      'Юваль Ной Харари — историк, которого читают как автора о будущем. Его формулы одновременно обожают и критикуют.',
    mainContent:
      'Восемь больших тезисов: от «бесполезного класса» и dataism до сахара опаснее пороха, биологического разрыва и коллективных вымыслов.',
    interactive: 'Десять мини-викторин по три вопроса и итоговая викторина на тридцать вопросов.',
    additional: 'Иллюстрации по IMAGE_LIST.html и IMAGE_LIST.md в public/media/harari-future-theses/.',
    closing:
      'На выходе — развилка: если это предупреждение, кто будет управлять будущим — человек, рынок, государство или алгоритм?'
  },
  slides: [
${ruParts.join(',\n\n')}
  ],
  quiz: {
    id: 'quiz-harari-future-theses',
    title: 'Итоговая викторина: тезисы Харари о будущем',
    questions: [
${finalQuizRu}
    ]
  },
  metadata: {
    created: '2026-05-27',
    updated: '2026-05-27',
    tags: ['наука', 'Харари', 'будущее', 'технологии', 'философия', 'обсуждение'],
    difficulty: 'medium'
  }
}
`

const sessionDe = `import { Slide, QuizBlock } from '../types/session'

export const harariFutureThesesSlidesDE: Slide[] = [
${deParts.join(',\n\n')}
]

export const harariFutureThesesFinalQuizDE: QuizBlock = {
  id: 'quiz-harari-future-theses-de',
  title: 'Abschlussquiz: Hararis Thesen über die Zukunft',
  questions: [
${finalQuizDe}
  ]
}
`

const root = join(process.cwd())
writeFileSync(join(root, 'src/data/harari-future-theses-session.ts'), sessionRu, 'utf8')
writeFileSync(join(root, 'src/i18n/harari-future-theses-content-de.ts'), sessionDe, 'utf8')
console.log('Generated session files')
