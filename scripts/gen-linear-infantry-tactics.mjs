import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const MEDIA = '/media/linear-infantry-tactics'
const id = 'lit'

const slides = [
  {
    n: 1,
    title: 'Почему вообще линия',
    content:
      'Линия была способом вывести вперёд максимум стволов сразу. Чем больше людей могли стрелять одновременно, тем сильнее был боевой эффект.',
    img: '01-why-line-formation.jpg',
    imgTitle: 'Линейный строй',
    imgSearch: '17th+century+infantry+line+formation+musket+volley+battle',
    imgSearchLabel: 'линейный строй'
  },
  {
    n: 2,
    title: 'Почему не прятались',
    content:
      'Полевой бой требовал не спрятаться, а удержать место и сломать строй противника. В открытом сражении укрытие помогало человеку, но не всегда помогало армии.',
    img: '02-why-not-hide.jpg',
    imgTitle: 'Открытое поле боя',
    imgSearch: 'early+modern+open+field+battle+infantry+no+cover+formation',
    imgSearchLabel: 'открытый бой'
  },
  {
    n: 3,
    title: 'Почему не рассыпались',
    content:
      'Рассыпной порядок резко ухудшал управление. В дыму, шуме и без связи отдельные группы быстро теряли друг друга и переставали действовать как единое целое.',
    img: '03-why-not-skirmish-order.jpg',
    imgTitle: 'Потеря управления',
    imgSearch: 'skirmish+vs+line+infantry+smoke+battlefield+confusion+17th+century',
    imgSearchLabel: 'рассыпной порядок'
  },
  {
    n: 4,
    title: 'Почему плотный строй не считался безумием',
    content:
      'Да, по плотной массе легче попасть. Но тогда важнее было не уменьшить заметность, а сохранить строй, контроль и объём общего огня.',
    img: '04-dense-formation-logic.jpg',
    imgTitle: 'Плотный строй',
    imgSearch: 'dense+infantry+line+formation+musket+firepower+17th+century',
    imgSearchLabel: 'плотный строй'
  },
  {
    n: 5,
    title: 'Почему мушкет всё это диктовал',
    content:
      'Мушкет был тяжёлым, медленным и не слишком точным оружием. Его сила проявлялась не в руках одиночки, а в руках шеренги.',
    img: '05-musket-dictated-tactics.jpg',
    imgTitle: 'Мушкет и шеренга',
    imgSearch: 'matchlock+musket+infantry+rank+firing+17th+century+soldier',
    imgSearchLabel: 'мушкет'
  },
  {
    n: 6,
    title: 'Почему стреляли залпом',
    content:
      'Залп давал сразу и урон, и шок. Один выстрел могли не заметить, а сотни одновременно ломали ритм, слух и нервы противника.',
    img: '06-why-volley-fire.jpg',
    imgTitle: 'Залповый огонь',
    imgSearch: 'musket+volley+fire+infantry+line+battle+smoke+17th+century',
    imgSearchLabel: 'залп'
  },
  {
    n: 7,
    title: 'Почему не стреляли кто хочет когда хочет',
    content:
      'Беспорядочный огонь быстро съедал порох и разрушал ритм боя. Командный залп позволял сохранить темп, плотность и контроль над расходом боеприпасов.',
    img: '07-commanded-volley-not-individual.jpg',
    imgTitle: 'Командный залп',
    imgSearch: 'commanded+volley+infantry+officer+order+fire+17th+century',
    imgSearchLabel: 'командный залп'
  },
  {
    n: 8,
    title: 'Почему подпускали ближе',
    content:
      'На большой дистанции мушкет тратил заряд почти впустую. Поэтому опытные части часто терпели до более близкого расстояния, чтобы первый залп был действительно опасным.',
    img: '08-hold-fire-until-close.jpg',
    imgTitle: 'Огонь вблизи',
    imgSearch: 'infantry+hold+fire+close+range+musket+battle+17th+century',
    imgSearchLabel: 'близкая дистанция'
  },
  {
    n: 9,
    title: 'Почему не ложились',
    content:
      'Мушкет заряжался с дула и требовал длинной последовательности движений. Лёжа или даже в глубоком приседе всё это делать было крайне неудобно и слишком медленно.',
    img: '09-why-not-prone-loading.jpg',
    imgTitle: 'Зарядка мушкета',
    imgSearch: 'musket+loading+from+muzzle+standing+infantry+17th+century',
    imgSearchLabel: 'зарядка стоя'
  },
  {
    n: 10,
    title: 'Почему стояли плечом к плечу',
    content:
      'Так было проще сохранять равнение и не терять соседей. В линейной войне человек сражался не сам по себе, а как часть живой стены огня.',
    img: '10-shoulder-to-shoulder.jpg',
    imgTitle: 'Плечом к плечу',
    imgSearch: 'infantry+shoulder+to+shoulder+line+formation+musket+rank',
    imgSearchLabel: 'плечом к плечу'
  },
  {
    n: 11,
    title: 'Зачем второй и третий ряд',
    content:
      'Они не были лишними. Задние ряды подпирали строй, заменяли выбывших и обеспечивали непрерывность огня в разных схемах стрельбы.',
    img: '11-second-third-rank.jpg',
    imgTitle: 'Глубина строя',
    imgSearch: 'three+rank+infantry+formation+musket+depth+17th+century',
    imgSearchLabel: 'второй и третий ряд'
  },
  {
    n: 12,
    title: 'Почему линии со временем худели',
    content:
      'Сначала строи были глубже — до 10 рядов, потом стали тоньше. Причина в том, что мушкеты и обучение улучшались, и армии могли позволить себе больше фронта при меньшей глубине.',
    img: '12-thinning-lines-over-time.jpg',
    imgTitle: 'Утончение линий',
    imgSearch: 'evolution+infantry+formation+depth+10+ranks+to+3+ranks+history',
    imgSearchLabel: 'худеющие линии'
  },
  {
    n: 13,
    title: 'Что такое контрмарш',
    content:
      'Это система, при которой передние ряды стреляли и отходили назад перезаряжаться, а их место занимали следующие. Так пытались сделать огонь более непрерывным.',
    img: '13-countermarch-system.jpg',
    imgTitle: 'Контрмарш',
    imgSearch: 'countermarch+infantry+firing+system+17th+century+musket+drill',
    imgSearchLabel: 'контрмарш'
  },
  {
    n: 14,
    title: 'Почему дым был почти оружием',
    content:
      'Чёрный порох очень быстро заволакивал поле. После нескольких залпов противника уже не столько видели, сколько угадывали по линии, знамёнам и вспышкам.',
    img: '14-smoke-as-weapon.jpg',
    imgTitle: 'Дым на поле боя',
    imgSearch: 'black+powder+battlefield+smoke+obscuring+vision+musket+volley',
    imgSearchLabel: 'дым'
  },
  {
    n: 15,
    title: 'Почему яркие мундиры были полезны',
    content:
      'Не для красоты. В дыму и хаосе яркая одежда, знамёна и отличимые цвета помогали не спутать своих с чужими.',
    img: '15-bright-uniforms-recognition.jpg',
    imgTitle: 'Яркие мундиры',
    imgSearch: 'bright+colored+17th+century+infantry+uniform+recognition+battle',
    imgSearchLabel: 'яркие мундиры'
  },
  {
    n: 16,
    title: 'Зачем барабаны и трубы',
    content:
      'Голос офицера терялся в грохоте. Музыкальные сигналы заменяли связь: по ним строились, шли вперёд, останавливались и перестраивались.',
    img: '16-drums-and-trumpets.jpg',
    imgTitle: 'Боевые сигналы',
    imgSearch: 'military+drum+trumpet+signals+17th+century+infantry+battlefield',
    imgSearchLabel: 'барабаны и трубы'
  },
  {
    n: 17,
    title: 'Почему офицеры были на виду',
    content:
      'Сегодня это кажется самоубийством, но офицер тогда должен был быть заметен. Его функция — не прятаться, а удерживать строй, подавать команды и буквально вести людей глазами и голосом.',
    img: '17-visible-officers.jpg',
    imgTitle: 'Офицер на виду',
    imgSearch: '17th+century+infantry+officer+leading+line+formation+visible',
    imgSearchLabel: 'офицер на виду'
  },
  {
    n: 18,
    title: 'Почему знамя было так важно',
    content:
      'Знамя было не символом «для парада», а точкой сборки. Пока люди видели своё знамя, полк ещё существовал как единое тело.',
    img: '18-regimental-colour-rally.jpg',
    imgTitle: 'Полковое знамя',
    imgSearch: 'regimental+colour+banner+infantry+rally+point+17th+century+battle',
    imgSearchLabel: 'знамя'
  },
  {
    n: 19,
    title: 'Почему муштра была решающей',
    content:
      'На поле боя человек тупеет от страха, шума и усталости. Муштра заменяла мышление автоматизмом: руки делали нужное, даже когда голова уже не очень соображала.',
    img: '19-drill-automatism.jpg',
    imgTitle: 'Муштра',
    imgSearch: 'infantry+drill+musket+training+17th+century+soldiers+practice',
    imgSearchLabel: 'муштра'
  },
  {
    n: 20,
    title: 'Страх наказания тоже работал',
    content:
      'Да, армии держались в том числе на жёсткой дисциплине и телесных наказаниях. Но одних угроз было мало: без привычки и коллективного навыка строй всё равно рассыпался бы.',
    img: '20-discipline-and-punishment.jpg',
    imgTitle: 'Дисциплина',
    imgSearch: 'military+discipline+punishment+17th+century+infantry+formation',
    imgSearchLabel: 'дисциплина'
  },
  {
    n: 21,
    title: 'Почему люди не бежали сразу',
    content:
      'Потому что в строю человек связан с соседями психологически. Часто страшно было не только умереть, но и первым сломать линию, подвести своих и оказаться одному перед врагом.',
    img: '21-psychology-of-the-line.jpg',
    imgTitle: 'Психология строя',
    imgSearch: 'infantry+line+morale+solidarity+battle+psychology+17th+century',
    imgSearchLabel: 'психология строя'
  },
  {
    n: 22,
    title: 'Почему линия шла медленно',
    content:
      'Быстрое движение ломало равнение. А потеря равнения означала, что армия превращается из оружия в толпу.',
    img: '22-slow-advance.jpg',
    imgTitle: 'Медленное движение',
    imgSearch: 'slow+infantry+advance+line+formation+alignment+17th+century',
    imgSearchLabel: 'медленное движение'
  },
  {
    n: 23,
    title: 'Почему лес и неровная местность мешали',
    content:
      'Линейная тактика любила ровное поле. На пересечённой местности строй ломался, интервалы рвались, а управляемость резко падала.',
    img: '23-terrain-breaks-formation.jpg',
    imgTitle: 'Местность и строй',
    imgSearch: 'broken+infantry+formation+rough+terrain+woods+17th+century',
    imgSearchLabel: 'неровная местность'
  },
  {
    n: 24,
    title: 'Почему это была тактика «простых движений»',
    content:
      'Линейная война опиралась не на импровизацию, а на ограниченный набор чётких действий. Чем проще команды, тем выше шанс, что тысячи людей выполнят их одновременно.',
    img: '24-simple-movements-tactics.jpg',
    imgTitle: 'Простые команды',
    imgSearch: 'linear+tactics+simple+drill+commands+mass+infantry+17th+century',
    imgSearchLabel: 'простые движения'
  },
  {
    n: 25,
    title: 'Где тут кавалерия',
    content:
      'Угроза конницы была одной из главных причин держаться вместе. Разрозненная пехота рисковала быть смятой, а сомкнутый строй имел шанс отбиться огнём и холодным оружием.',
    img: '25-cavalry-threat-infantry.jpg',
    imgTitle: 'Угроза кавалерии',
    imgSearch: 'cavalry+charge+vs+infantry+square+line+formation+17th+century',
    imgSearchLabel: 'кавалерия'
  },
  {
    n: 26,
    title: 'Зачем ещё держали пики',
    content:
      'В XVII веке мушкет ещё не решал всё сам. Пики закрывали пехоту от ближней атаки, особенно конной, пока штык окончательно не сделал каждого мушкетёра ещё и колющим бойцом.',
    img: '26-pike-and-shot.jpg',
    imgTitle: 'Пики и мушкеты',
    imgSearch: 'pike+and+shot+formation+17th+century+infantry+pikemen+musketeers',
    imgSearchLabel: 'пики'
  },
  {
    n: 27,
    title: 'Что изменил штык',
    content:
      'Когда штык стал надёжным и массовым, пехота стала более однородной. Теперь один и тот же солдат мог и стрелять, и отбиваться вблизи, а роль пики постепенно ушла.',
    img: '27-bayonet-revolution.jpg',
    imgTitle: 'Штык',
    imgSearch: 'bayonet+infantry+musket+17th+century+close+combat+adoption',
    imgSearchLabel: 'штык'
  },
  {
    n: 28,
    title: 'Почему осечки не ломали систему',
    content:
      'Осечки были обычным делом, особенно в сырость. Но именно поэтому армии и строились в линии: если часть стволов не сработает, общий залп всё равно сохранит эффект за счёт массы.',
    img: '28-misfires-mass-volley.jpg',
    imgTitle: 'Осечки и залп',
    imgSearch: 'musket+misfire+wet+weather+volley+fire+mass+effect+17th+century',
    imgSearchLabel: 'осечки'
  },
  {
    n: 29,
    title: 'Почему бой редко кончался рубкой насмерть',
    content:
      'После нескольких хороших залпов одна из сторон часто ломалась раньше, чем дело доходило до долгой рукопашной. Штык и холодное оружие были важны, но ещё важнее было довести врага до морального срыва.',
    img: '29-moral-collapse-not-melee.jpg',
    imgTitle: 'Моральный срыв',
    imgSearch: 'infantry+battle+morale+break+retreat+after+volley+17th+century',
    imgSearchLabel: 'моральный срыв'
  },
  {
    n: 30,
    title: 'Главная логика линейной войны',
    content:
      'Линейная тактика кажется нелепой только человеку из эпохи точного оружия и радиосвязи. Для XVII века это был очень рациональный способ превратить неточные мушкеты, дым, страх и толпу людей в управляемую боевую систему.',
    img: '30-linear-warfare-logic.jpg',
    imgTitle: 'Логика линейной войны',
    imgSearch: 'linear+tactics+17th+century+infantry+battle+system+rational+warfare',
    imgSearchLabel: 'логика линейной войны'
  }
]

const quizzes = [
  {
    q: 1,
    slides: [1, 2, 3],
    questions: [
      {
        text: 'Зачем пехота строилась в линию?',
        options: [
          'Чтобы спрятаться за щитами',
          'Чтобы вывести вперёд максимум стволов и стрелять одновременно',
          'Чтобы быстрее бегать по полю',
          'Чтобы каждый солдат действовал сам по себе'
        ],
        correct: 1,
        expl: 'Линия давала максимум одновременного огня — главный боевой эффект мушкетной эпохи.'
      },
      {
        text: 'Почему в открытом полевом бою укрытие не всегда помогало армии?',
        options: [
          'Потому что солдаты боялись леса',
          'Нужно было удержать место и сломать строй врага, а не только спрятаться',
          'Укрытие запрещали законы войны',
          'Мушкеты нельзя было стрелять из-за укрытия'
        ],
        correct: 1,
        expl: 'Полевой бой — про удержание позиции и разрушение строя противника, не про личное укрытие.'
      },
      {
        text: 'Чем опасен был рассыпной порядок в дыму и шуме?',
        options: [
          'Солдаты слишком быстро бегали',
          'Группы теряли друг друга и переставали действовать едино',
          'Рассыпной строй давал больше залпов',
          'Офицеры становились невидимыми'
        ],
        correct: 1,
        expl: 'Без связи отдельные отряды быстро распадались и теряли управление.'
      }
    ]
  },
  {
    q: 2,
    slides: [4, 5, 6],
    questions: [
      {
        text: 'Почему плотный строй не считали безумием?',
        options: [
          'Потому что враг не умел стрелять',
          'Важнее были строй, контроль и объём общего огня, чем «незаметность»',
          'Плотность делала солдат неуязвимыми',
          'Мушкеты были слишком точными для прицельной стрельбы'
        ],
        correct: 1,
        expl: 'Плотность жертвовала индивидуальной защитой ради коллективного огня и управления.'
      },
      {
        text: 'Где проявлялась сила мушкета?',
        options: [
          'В руках одиночного меткого стрелка',
          'В руках шеренги, стреляющей вместе',
          'Только в крепостной обороне',
          'Только ночью'
        ],
        correct: 1,
        expl: 'Мушкет был тяжёлым, медленным и неточным — его сила в массовом огне линии.'
      },
      {
        text: 'Зачем стреляли залпом, а не поодиночке?',
        options: [
          'Чтобы сэкономить знамена',
          'Залп давал урон и шок — сотни выстрелов ломали нервы противника',
          'Потому что мушкеты стреляли только синхронно',
          'Чтобы офицеры могли отдохнуть'
        ],
        correct: 1,
        expl: 'Массовый одновременный залп бил и по телам, и по морали врага.'
      }
    ]
  },
  {
    q: 3,
    slides: [7, 8, 9],
    questions: [
      {
        text: 'Почему запрещали стрелять «кто хочет, когда хочет»?',
        options: [
          'Порох был слишком дешёвым',
          'Беспорядочный огонь съедал порох и разрушал ритм боя',
          'Солдаты не умели перезаряжаться',
          'Враг не слышал одиночные выстрелы'
        ],
        correct: 1,
        expl: 'Командный залп сохранял темп, плотность огня и контроль над боеприпасами.'
      },
      {
        text: 'Почему опытные части подпускали врага ближе?',
        options: [
          'На дальней дистанции мушкет часто тратил заряд почти впустую',
          'Ближе легче бросать копья',
          'Далеко нельзя было видеть знамя',
          'Порох работал только в упор'
        ],
        correct: 0,
        expl: 'Первый залп на близкой дистанции был действительно опасным — ради этого терпели.'
      },
      {
        text: 'Почему в линии не ложились для стрельбы?',
        options: [
          'Мундиры мешали лежать',
          'Зарядка с дула требовала длинных движений — лёжа это было слишком медленно',
          'Лежа нельзя было видеть офицера',
          'Мушкеты нельзя было заряжать лёжа по уставу'
        ],
        correct: 1,
        expl: 'Мушкет заряжался с дула стоя — внизу это было крайне неудобно и медленно.'
      }
    ]
  },
  {
    q: 4,
    slides: [10, 11, 12],
    questions: [
      {
        text: 'Зачем стояли плечом к плечу?',
        options: [
          'Чтобы согреться зимой',
          'Чтобы сохранять равнение и не терять соседей в строю',
          'Чтобы прятать мушкеты',
          'Потому что штыки были слишком длинными'
        ],
        correct: 1,
        expl: 'Человек в линии — часть «живой стены огня», а не одиночный боец.'
      },
      {
        text: 'Зачем нужны были второй и третий ряды?',
        options: [
          'Только для парада',
          'Подпирали строй, заменяли выбывших и обеспечивали непрерывность огня',
          'Там стояли только офицеры',
          'Задние ряды не стреляли никогда'
        ],
        correct: 1,
        expl: 'Глубина строя давала устойчивость и разные схемы ведения огня.'
      },
      {
        text: 'Почему линии со временем становились тоньше?',
        options: [
          'Солдат стало меньше',
          'Мушкеты и обучение улучшились — можно было больше фронта при меньшей глубине',
          'Пики полностью исчезли в начале века',
          'Дым перестал мешать'
        ],
        correct: 1,
        expl: 'Сначала до 10 рядов, потом тоньше — за счёт лучшего оружия и муштры.'
      }
    ]
  },
  {
    q: 5,
    slides: [13, 14, 15],
    questions: [
      {
        text: 'Что такое контрмарш?',
        options: [
          'Бегство задних рядов',
          'Передние стреляют и уходят назад перезаряжаться, их сменяют следующие',
          'Атака кавалерии во фланг',
          'Строй только из одного ряда'
        ],
        correct: 1,
        expl: 'Контрмарш пытался сделать огонь более непрерывным при смене рядов.'
      },
      {
        text: 'Почему дым называли «почти оружием»?',
        options: [
          'Дым отравлял врага',
          'После залпов поле заволакивало — видели мало, угадывали по знамёнам и вспышкам',
          'Дым гасил порох врага',
          'Дым был ядовит только ночью'
        ],
        correct: 1,
        expl: 'Чёрный порох быстро делал поле боя почти слепым.'
      },
      {
        text: 'Зачем были яркие мундиры?',
        options: [
          'Только для парадов',
          'В дыму и хаосе помогали отличить своих от чужих',
          'Чтобы спрятаться в траве',
          'Потому что краска дешевела'
        ],
        correct: 1,
        expl: 'Узнаваемость важнее камуфляжа — иначе легко стрелять в своих.'
      }
    ]
  },
  {
    q: 6,
    slides: [16, 17, 18],
    questions: [
      {
        text: 'Зачем на поле боя были барабаны и трубы?',
        options: [
          'Для развлечения войск',
          'Голос офицера терялся — музыкальные сигналы заменяли связь',
          'Чтобы напугать лошадей врага',
          'Только для отбоя'
        ],
        correct: 1,
        expl: 'По сигналам строились, шли, останавливались и перестраивались.'
      },
      {
        text: 'Почему офицер должен был быть на виду?',
        options: [
          'Чтобы враг стрелял только в него',
          'Чтобы удерживать строй, подавать команды и вести людей глазами и голосом',
          'Потому что офицеры не носили оружия',
          'Это было требование церкви'
        ],
        correct: 1,
        expl: 'Офицер не прятался — он был центром управления строем.'
      },
      {
        text: 'Почему знамя было так важно?',
        options: [
          'Его нельзя было потерять по закону моды',
          'Это точка сборки — пока видно знамя, полк существует как единое целое',
          'Знамя защищало от пуль',
          'Без знамени нельзя было стрелять'
        ],
        correct: 1,
        expl: 'Знамя — не парадный символ, а живой ориентир в хаосе боя.'
      }
    ]
  },
  {
    q: 7,
    slides: [19, 20, 21],
    questions: [
      {
        text: 'Зачем была нужна муштра?',
        options: [
          'Чтобы солдаты красиво маршировали на плацу',
          'В бою страх и шум отключают мышление — муштра заменяла его автоматизмом',
          'Чтобы экономить порох',
          'Только для новобранцев без оружия'
        ],
        correct: 1,
        expl: 'Руки делали нужное по привычке, когда голова «не соображала».'
      },
      {
        text: 'Роль жёсткой дисциплины в линейной армии?',
        options: [
          'Одних угроз хватало без муштры',
          'Дисциплина помогала, но без привычки и навыка строй всё равно рассыпался бы',
          'Наказания были запрещены',
          'Дисциплина заменяла знамёна'
        ],
        correct: 1,
        expl: 'Страх наказания работал вместе с коллективным навыком, а не вместо него.'
      },
      {
        text: 'Почему солдаты не бежали сразу?',
        options: [
          'Их привязывали к месту',
          'Страшно было первым сломать линию и оказаться одному перед врагом',
          'Бег был физически невозможен в мундире',
          'За бегство не было наказания'
        ],
        correct: 1,
        expl: 'Психологическая связь с соседями удерживала в строю не меньше приказов.'
      }
    ]
  },
  {
    q: 8,
    slides: [22, 23, 24],
    questions: [
      {
        text: 'Почему линия двигалась медленно?',
        options: [
          'Солдаты были ленивы',
          'Быстрое движение ломало равнение — армия превращалась в толпу',
          'Мушкеты нельзя было нести быстро',
          'Офицеры запрещали шаг быстрее'
        ],
        correct: 1,
        expl: 'Потеря равнения = потеря боевой силы линии.'
      },
      {
        text: 'Почему лес и неровная местность мешали линейной тактике?',
        options: [
          'Деревья ломали мушкеты',
          'Строй рвался, интервалы сбивались, управляемость падала',
          'В лесу нельзя было жечь порох',
          'Кавалерия там была сильнее'
        ],
        correct: 1,
        expl: 'Линейная тактика любила ровное открытое поле.'
      },
      {
        text: 'Почему линейная война — тактика «простых движений»?',
        options: [
          'Солдаты были плохо образованы',
          'Простые команды с большим шансом выполнят тысячи людей одновременно',
          'Сложные манёвры запрещала церковь',
          'Импровизация всегда выигрывала'
        ],
        correct: 1,
        expl: 'Не импровизация, а ограниченный набор чётких действий для массы войск.'
      }
    ]
  },
  {
    q: 9,
    slides: [25, 26, 27],
    questions: [
      {
        text: 'Почему пехота держалась вместе из-за кавалерии?',
        options: [
          'Конница не атаковала пехоту',
          'Разрозненную пехоту легко смять — сомкнутый строй мог отбиться',
          'Лошади боялись мушкетов на расстоянии',
          'Кавалерия сражалась только ночью'
        ],
        correct: 1,
        expl: 'Угроза конного удара — одна из главных причин плотного строя.'
      },
      {
        text: 'Зачем в XVII веке ещё держали пики?',
        options: [
          'Пики были моднее мушкетов',
          'Закрывали пехоту от ближней атаки, пока штык не сделал мушкетёра универсальным бойцом',
          'Мушкеты не стреляли в XVII веке',
          'Пики нужны были только для парада'
        ],
        correct: 1,
        expl: 'Pike and shot — мушкет ещё не решал всё сам.'
      },
      {
        text: 'Что изменил массовый надёжный штык?',
        options: [
          'Пехота перестала стрелять',
          'Один солдат мог и стрелять, и драться вблизи — роль пики ушла',
          'Штык заменил знамёна',
          'Линии стали глубже до 20 рядов'
        ],
        correct: 1,
        expl: 'Пехота стала однороднее — стрелок и копейщик в одном лице.'
      }
    ]
  },
  {
    q: 10,
    slides: [28, 29, 30],
    questions: [
      {
        text: 'Почему осечки не ломали систему залпов?',
        options: [
          'Осечек не бывало',
          'Масса стволов в линии сохраняла эффект залпа, даже если часть не выстрелила',
          'При осечке стрелял сосед за двоих',
          'Осечки считались победой'
        ],
        correct: 1,
        expl: 'Именно ради этого строились в линию — эффект массы компенсировал сбои.'
      },
      {
        text: 'Почему бой редко кончался долгой рукопашной?',
        options: [
          'Штыки были слишком короткими',
          'После хороших залпов одна сторона часто ломалась морально раньше схватки',
          'Рукопашная была запрещена',
          'Солдаты не умели драться'
        ],
        correct: 1,
        expl: 'Моральный срыв важнее долгой «рубки насмерть».'
      },
      {
        text: 'В чём главная логика линейной войны для XVII века?',
        options: [
          'Это была прихоть королей',
          'Рациональный способ превратить неточные мушкеты, дым, страх и толпу в управляемую систему',
          'Линия была слабее рассыпного строя',
          'Тактика работала только с радиосвязью'
        ],
        correct: 1,
        expl: 'Нелепой она кажется только с позиции точного оружия и современной связи.'
      }
    ]
  }
]

const deSlides = [
  {
    n: 1,
    title: 'Warum überhaupt die Linie?',
    content:
      'Die Linie brachte maximal viele Läufe gleichzeitig nach vorn. Je mehr Menschen zugleich feuern konnten, desto stärker war die Wirkung.',
    imgTitle: 'Linienformation'
  },
  {
    n: 2,
    title: 'Warum man sich nicht versteckte',
    content:
      'Feldschlacht hieß: Position halten und die Ordnung des Gegners brechen — nicht sich verstecken. Deckung half dem Einzelnen, aber nicht immer der Armee.',
    imgTitle: 'Offenes Schlachtfeld'
  },
  {
    n: 3,
    title: 'Warum man sich nicht auflöste',
    content:
      'Aufgelöste Ordnung war schwer zu führen. In Rauch und Lärm verloren Gruppen einander und handelten nicht mehr als eine Einheit.',
    imgTitle: 'Kontrollverlust'
  },
  {
    n: 4,
    title: 'Warum dichter Aufmarsch kein Wahnsinn war',
    content:
      'Ja, auf eine dichte Masse trifft man leichter. Wichtiger waren aber Ordnung, Kontrolle und die Masse des gemeinsamen Feuers — nicht Unauffälligkeit.',
    imgTitle: 'Dichte Formation'
  },
  {
    n: 5,
    title: 'Warum der Musketier alles bestimmte',
    content:
      'Die Muskete war schwer, langsam und ungenau. Ihre Kraft lag nicht beim Einzelnen, sondern in der Reihe.',
    imgTitle: 'Muskete und Reihe'
  },
  {
    n: 6,
    title: 'Warum Salvenfeuer?',
    content:
      'Eine Salve traf und schockierte zugleich. Ein Schuss fiel kaum auf — Hunderte zugleich zerstörten Rhythmus, Gehör und Nerven des Gegners.',
    imgTitle: 'Salvenfeuer'
  },
  {
    n: 7,
    title: 'Warum nicht «wer will, wann will»?',
    content:
      'Ungeordnetes Feuer fraß Pulver und zerstörte den Kampfrhythmus. Der kommandierte Feuerstoß hielt Tempo, Dichte und Munitionskontrolle.',
    imgTitle: 'Kommandierte Salve'
  },
  {
    n: 8,
    title: 'Warum näher heranlassen?',
    content:
      'Auf große Distanz war ein Schuss oft fast umsonst. Erfahrene Truppen hielten aus, bis die erste Salve wirklich gefährlich wurde.',
    imgTitle: 'Feuer aus der Nähe'
  },
  {
    n: 9,
    title: 'Warum nicht liegend?',
    content:
      'Die Muskete wurde von vorn geladen — eine lange Bewegungsfolge. Liegend oder in tiefer Hocke ging das viel zu langsam.',
    imgTitle: 'Laden im Stehen'
  },
  {
    n: 10,
    title: 'Warum Schulter an Schulter?',
    content:
      'So blieb die Ausrichtung, und man verlor den Nachbarn nicht. In der Linienschlacht kämpfte man als Teil einer lebenden Feuerwand.',
    imgTitle: 'Schulter an Schulter'
  },
  {
    n: 11,
    title: 'Wozu zweite und dritte Reihe?',
    content:
      'Sie stützten die Ordnung, ersetzten Ausfälle und ermöglichten durchlaufendes Feuer in verschiedenen Schießsystemen.',
    imgTitle: 'Tiefe der Formation'
  },
  {
    n: 12,
    title: 'Warum die Linien dünner wurden',
    content:
      'Früher bis zu zehn Reihen, später dünner: bessere Musketen und Ausbildung erlaubten mehr Front bei weniger Tiefe.',
    imgTitle: 'Dünnere Linien'
  },
  {
    n: 13,
    title: 'Was ist ein Gegenmarsch?',
    content:
      'Vordere Reihen feuern und treten zum Nachladen zurück; die nächsten rücken nach. So sollte das Feuer stetiger werden.',
    imgTitle: 'Gegenmarsch'
  },
  {
    n: 14,
    title: 'Warum Rauch fast eine Waffe war',
    content:
      'Schwarzpulver legte das Feld schnell in Nebel. Nach einigen Salven sah man wenig — man orientierte sich an Linie, Fahnen und Mündungsfeuer.',
    imgTitle: 'Schlachtrauch'
  },
  {
    n: 15,
    title: 'Warum helle Uniformen nützlich waren',
    content:
      'Nicht der Schönheit wegen. In Rauch und Chaos halfen helle Farben und Fahnen, Freund von Feind zu unterscheiden.',
    imgTitle: 'Helle Uniformen'
  },
  {
    n: 16,
    title: 'Wozu Trommeln und Trompeten?',
    content:
      'Die Stimme des Offiziers ging im Lärm unter. Musikalische Signale ersetzten die Verbindung: formieren, vorwärts, halt, umformieren.',
    imgTitle: 'Kampfsignale'
  },
  {
    n: 17,
    title: 'Warum Offiziere sichtbar waren',
    content:
      'Heute wirkt das wie Selbstmord — damals musste der Offizier auffallen. Er sollte Ordnung halten, befehlen und die Leute führen.',
    imgTitle: 'Sichtbarer Offizier'
  },
  {
    n: 18,
    title: 'Warum die Fahne so wichtig war',
    content:
      'Kein Parade-Symbol, sondern Sammelpunkt. Solange man die eigene Fahne sah, existierte das Regiment als Körper.',
    imgTitle: 'Regimentsfahne'
  },
  {
    n: 19,
    title: 'Warum Drill entscheidend war',
    content:
      'Im Gefecht lähmen Angst, Lärm und Müdigkeit. Drill ersetzte Denken durch Automatismus — die Hände taten das Richtige.',
    imgTitle: 'Exerzieren'
  },
  {
    n: 20,
    title: 'Strafe als Haltemittel',
    content:
      'Armeen stützten sich auch auf harte Disziplin und körperliche Strafe. Allein reichte das nicht — ohne Übung und Kollektivfähigkeit zerbräche die Ordnung.',
    imgTitle: 'Disziplin'
  },
  {
    n: 21,
    title: 'Warum man nicht sofort floh',
    content:
      'Im Glied war man mit den Nachbarn verbunden. Oft war es schlimmer, als Erster die Linie zu brechen und allein vor dem Feind zu stehen.',
    imgTitle: 'Psychologie der Linie'
  },
  {
    n: 22,
    title: 'Warum die Linie langsam vorrückte',
    content:
      'Schnelle Bewegung zerstörte die Ausrichtung — und damit wurde die Armee aus Waffe zur Masse.',
    imgTitle: 'Langsamer Vormarsch'
  },
  {
    n: 23,
    title: 'Warum Wald und unebenes Gelände störten',
    content:
      'Linienschlacht liebte ebene Felder. Im Gelände riss die Ordnung, Abstände kollabierten, die Führung sank.',
    imgTitle: 'Gelände und Ordnung'
  },
  {
    n: 24,
    title: 'Taktik der «einfachen Bewegungen»',
    content:
      'Linienkrieg setzte auf wenige klare Befehle, nicht Improvisation. Je einfacher der Befehl, desto eher führten ihn Tausende gleichzeitig aus.',
    imgTitle: 'Einfache Befehle'
  },
  {
    n: 25,
    title: 'Wo bleibt die Kavallerie?',
    content:
      'Reitergewalt war ein Hauptgrund, zusammenzubleiben. Zerstreute Infanterie wurde niedergemacht — geschlossene Ordnung konnte mit Feuer und Klinge standhalten.',
    imgTitle: 'Kavalleriebedrohung'
  },
  {
    n: 26,
    title: 'Warum man noch Pikeniere hielt',
    content:
      'Im 17. Jh. löste die Muskete noch nicht alles. Pikeniere schützten vor Nahkampf und Reitern, bis der Bajonett jeden Schützen auch zum Stoßkämpfer machte.',
    imgTitle: 'Pike und Schuss'
  },
  {
    n: 27,
    title: 'Was der Bajonett veränderte',
    content:
      'Mit zuverlässigem Bajonett wurde die Infanterie einheitlicher. Derselbe Soldat konnte schießen und im Nahkampf halten — die Pike verschwand.',
    imgTitle: 'Bajonett'
  },
  {
    n: 28,
    title: 'Warum Fehlschüsse das System nicht brachen',
    content:
      'Fehlschüsse waren normal, besonders bei Nässe. Deshalb die Linie: wenn ein Teil versagte, rettete die Masse den Effekt der Salve.',
    imgTitle: 'Fehlschüsse und Salve'
  },
  {
    n: 29,
    title: 'Warum selten langer Nahkampf?',
    content:
      'Nach guten Salven brach eine Seite oft moralisch ein, bevor es zum langen Händekampf kam. Bajonett war wichtig — moralischer Zusammenbruch wichtiger.',
    imgTitle: 'Moralischer Bruch'
  },
  {
    n: 30,
    title: 'Die Logik des Linienkriegs',
    content:
      'Linienschlacht wirkt nur aus Sicht präziser Waffen und Funk absurd. Im 17. Jh. war sie ein rationeller Weg, ungenaue Musketen, Rauch, Angst und Masse steuerbar zu machen.',
    imgTitle: 'Logik der Linie'
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
        `      { id: 'q-lit-${q.q}-${i + 1}', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
    )
    .join(',\n')
  return `    {\n      id: 'q${q.q}',\n      title: 'Викторина',\n      content: '',\n      duration: 2,\n      questions: [\n${lines}\n      ]\n    }`
}

const quizzesDE = [
  {
    q: 1,
    questions: [
      {
        text: 'Warum bildete die Infanterie eine Linie?',
        options: [
          'Um sich hinter Schildern zu verstecken',
          'Um maximal viele Läufe gleichzeitig nach vorn zu bringen',
          'Um schneller über das Feld zu rennen',
          'Damit jeder für sich kämpfte'
        ],
        correct: 1,
        expl: 'Die Linie maximierte gleichzeitiges Feuer — der Kern der Musketentaktik.'
      },
      {
        text: 'Warum half Deckung der Armee nicht immer?',
        options: [
          'Soldaten fürchteten den Wald',
          'Man musste Position halten und die Ordnung des Feindes brechen',
          'Deckung war kriegsrechtlich verboten',
          'Musketen durften nicht aus Deckung feuern'
        ],
        correct: 1,
        expl: 'Feldschlacht = Position und gegnerische Ordnung, nicht persönliches Verstecken.'
      },
      {
        text: 'Was war gefährlich an aufgelöster Ordnung?',
        options: [
          'Man lief zu schnell',
          'Gruppen verloren einander und handelten nicht mehr einheitlich',
          'Aufgelöste Ordnung gab mehr Salven',
          'Offiziere wurden unsichtbar'
        ],
        correct: 1,
        expl: 'Ohne Verbindung zerfielen Truppen und verloren die Führung.'
      }
    ]
  },
  {
    q: 2,
    questions: [
      {
        text: 'Warum war dichter Aufmarsch kein Wahnsinn?',
        options: [
          'Der Feind konnte nicht schießen',
          'Ordnung, Kontrolle und Feuermasse waren wichtiger als Unsichtbarkeit',
          'Dichte machte unverwundbar',
          'Musketen waren zu präzise für Einzelschüsse'
        ],
        correct: 1,
        expl: 'Man opferte individuellen Schutz für kollektives Feuer und Führung.'
      },
      {
        text: 'Wo lag die Stärke der Muskete?',
        options: [
          'Beim einzelnen Scharfschützen',
          'In der Reihe, die gemeinsam feuerte',
          'Nur in der Festung',
          'Nur nachts'
        ],
        correct: 1,
        expl: 'Schwer, langsam, ungenau — die Kraft lag in der Masse.'
      },
      {
        text: 'Warum Salven statt Einzelschüsse?',
        options: [
          'Um Fahnen zu sparen',
          'Salve = Wirkung und Schock; Hunderte Schüsse brachen die Nerven',
          'Musketen konnten nur synchron feuern',
          'Damit Offiziere ruhen konnten'
        ],
        correct: 1,
        expl: 'Gleichzeitige Salve traf Körper und Moral.'
      }
    ]
  },
  {
    q: 3,
    questions: [
      {
        text: 'Warum kein «wer will, wann will»-Feuer?',
        options: [
          'Pulver war zu billig',
          'Ungeordnetes Feuer fraß Pulver und zerstörte den Rhythmus',
          'Soldaten konnten nicht nachladen',
          'Der Feind hörte Einzelschüsse nicht'
        ],
        correct: 1,
        expl: 'Kommandierte Salve hielt Tempo, Dichte und Munitionskontrolle.'
      },
      {
        text: 'Warum ließ man den Feind näher heran?',
        options: [
          'Auf Distanz war Schuss oft fast umsonst',
          'Näher konnte man Speere werfen',
          'Weit weg sah man die Fahne nicht',
          'Pulver wirkte nur im Nahbereich'
        ],
        correct: 0,
        expl: 'Erste Salve aus der Nähe sollte wirklich gefährlich sein.'
      },
      {
        text: 'Warum nicht liegend schießen?',
        options: [
          'Uniformen hinderten',
          'Laden von vorn brauchte lange Bewegungen — liegend zu langsam',
          'Liegend sah man den Offizier nicht',
          'Liegend war per Reglement verboten'
        ],
        correct: 1,
        expl: 'Musketen wurden im Stehen von vorn geladen.'
      }
    ]
  },
  {
    q: 4,
    questions: [
      {
        text: 'Warum Schulter an Schulter?',
        options: [
          'Zum Wärmen im Winter',
          'Ausrichtung halten und Nachbarn nicht verlieren',
          'Musketen verstecken',
          'Weil Bajonette zu lang waren'
        ],
        correct: 1,
        expl: 'Man war Teil einer Feuerwand, kein Einzelkämpfer.'
      },
      {
        text: 'Wozu zweite und dritte Reihe?',
        options: [
          'Nur für Parade',
          'Stützen, Ausfälle ersetzen, Feuerkontinuität',
          'Nur für Offiziere',
          'Hintere Reihen feuerten nie'
        ],
        correct: 1,
        expl: 'Tiefe gab Stabilität und verschiedene Feuersysteme.'
      },
      {
        text: 'Warum wurden Linien dünner?',
        options: [
          'Weniger Soldaten',
          'Bessere Musketen und Ausbildung — mehr Front, weniger Tiefe',
          'Piken verschwanden sofort',
          'Rauch störte nicht mehr'
        ],
        correct: 1,
        expl: 'Von bis zu zehn Reihen zu dünneren Linien.'
      }
    ]
  },
  {
    q: 5,
    questions: [
      {
        text: 'Was ist Gegenmarsch?',
        options: [
          'Flucht der hinteren Reihen',
          'Vorne feuern, zurück zum Laden; nächste rücken nach',
          'Kavallerieangriff in die Flanke',
          'Nur eine Reihe'
        ],
        correct: 1,
        expl: 'System für stetigeres Feuer durch Reihenwechsel.'
      },
      {
        text: 'Warum war Rauch «fast eine Waffe»?',
        options: [
          'Rauch vergiftete',
          'Nach Salven kaum Sicht — Orientierung an Fahnen und Mündungsfeuer',
          'Rauch löschte gegnerisches Pulver',
          'Rauch war nur nachts giftig'
        ],
        correct: 1,
        expl: 'Schwarzpulver machte das Feld schnell blind.'
      },
      {
        text: 'Wozu helle Uniformen?',
        options: [
          'Nur Parade',
          'In Rauch und Chaos Freund von Feind unterscheiden',
          'Um sich im Gras zu verstecken',
          'Weil Farbe billig wurde'
        ],
        correct: 1,
        expl: 'Erkennbarkeit wichtiger als Tarnung.'
      }
    ]
  },
  {
    q: 6,
    questions: [
      {
        text: 'Wozu Trommeln und Trompeten?',
        options: [
          'Unterhaltung',
          'Stimme ging unter — musikalische Signale ersetzten Verbindung',
          'Pferde erschrecken',
          'Nur Zapfenstreich'
        ],
        correct: 1,
        expl: 'Formieren, vorwärts, halt — alles über Signale.'
      },
      {
        text: 'Warum musste der Offizier sichtbar sein?',
        options: [
          'Damit nur er getroffen wurde',
          'Ordnung halten, befehlen, führen — nicht verstecken',
          'Offiziere trugen keine Waffen',
          'Kirchenvorschrift'
        ],
        correct: 1,
        expl: 'Der Offizier war das sichtbare Zentrum der Führung.'
      },
      {
        text: 'Warum war die Fahne so wichtig?',
        options: [
          'Moderegel',
          'Sammelpunkt — solange Fahne sichtbar, existiert das Regiment',
          'Fahne schützte vor Kugeln',
          'Ohne Fahne kein Schuss'
        ],
        correct: 1,
        expl: 'Kein Parade-Schmuck, sondern Orientierung im Chaos.'
      }
    ]
  },
  {
    q: 7,
    questions: [
      {
        text: 'Wozu Drill?',
        options: [
          'Schönes Marschieren',
          'Angst und Lärm lähmen — Drill ersetzt Denken durch Automatismus',
          'Pulver sparen',
          'Nur für unbewaffnete Rekruten'
        ],
        correct: 1,
        expl: 'Hände handelten nach Gewohnheit, wenn der Kopf versagte.'
      },
      {
        text: 'Rolle harter Disziplin?',
        options: [
          'Allein reichte ohne Drill',
          'Half, aber ohne Übung zerbräche die Ordnung trotzdem',
          'Strafen waren verboten',
          'Disziplin ersetzte Fahnen'
        ],
        correct: 1,
        expl: 'Strafe plus Kollektivfähigkeit, nicht statt dessen.'
      },
      {
        text: 'Warum flohen Soldaten nicht sofort?',
        options: [
          'Man war festgebunden',
          'Als Erster die Linie zu brechen war oft schlimmer als Sterben',
          'Rennen im Waffenrock unmöglich',
          'Flucht wurde nicht bestraft'
        ],
        correct: 1,
        expl: 'Psychologische Bindung an Nachbarn hielt im Glied.'
      }
    ]
  },
  {
    q: 8,
    questions: [
      {
        text: 'Warum langsamer Vormarsch?',
        options: [
          'Faulheit',
          'Schnelle Bewegung zerstörte Ausrichtung — Armee wurde zur Masse',
          'Musketen nicht tragbar im Lauf',
          'Offiziere verboten schnellen Schritt'
        ],
        correct: 1,
        expl: 'Ohne Ausrichtung keine Linienwaffe.'
      },
      {
        text: 'Warum störten Wald und Gelände?',
        options: [
          'Bäume brachen Musketen',
          'Ordnung riss, Abstände kollabierten, Führung sank',
          'Im Wald kein Pulver',
          'Dort war Kavallerie stärker'
        ],
        correct: 1,
        expl: 'Linienschlacht brauchte ebene offene Felder.'
      },
      {
        text: 'Warum «einfache Bewegungen»?',
        options: [
          'Soldaten ungebildet',
          'Einfache Befehle führen Tausende eher gleichzeitig aus',
          'Komplexe Manöver verbot die Kirche',
          'Improvisation gewann immer'
        ],
        correct: 1,
        expl: 'Wenige klare Befehle statt Improvisation für die Masse.'
      }
    ]
  },
  {
    q: 9,
    questions: [
      {
        text: 'Warum zusammenbleiben wegen Kavallerie?',
        options: [
          'Reiter griffen Infanterie nie an',
          'Zerstreute Infanterie wurde niedergemacht — geschlossene Ordnung konnte standhalten',
          'Pferde fürchteten Musketen in der Ferne',
          'Kavallerie nur nachts'
        ],
        correct: 1,
        expl: 'Reitergewalt war Hauptgrund für geschlossenen Aufmarsch.'
      },
      {
        text: 'Warum noch Pikeniere im 17. Jh.?',
        options: [
          'Piken waren modischer',
          'Schutz vor Nahkampf, bis Bajonett den Schützen vervollständigte',
          'Musketen schossen im 17. Jh. nicht',
          'Piken nur Parade'
        ],
        correct: 1,
        expl: 'Pike und Schuss — die Muskete löste noch nicht alles.'
      },
      {
        text: 'Was änderte der zuverlässige Bajonett?',
        options: [
          'Infanterie schoss nicht mehr',
          'Ein Soldat schoss und kämpfte nah — Pike verschwand',
          'Bajonett ersetzte Fahnen',
          'Linien wurden 20 Reihen tief'
        ],
        correct: 1,
        expl: 'Einheitlichere Infanterie: Schütze und Stoßkämpfer in einer Person.'
      }
    ]
  },
  {
    q: 10,
    questions: [
      {
        text: 'Warum brachen Fehlschüsse das Salvensystem nicht?',
        options: [
          'Fehlschüsse gab es nicht',
          'Masse der Läufe rettete den Salveneffekt',
          'Nachbar schoss doppelt',
          'Fehlschuss = Sieg'
        ],
        correct: 1,
        expl: 'Genau deshalb die Linie — Masse kompensierte Ausfälle.'
      },
      {
        text: 'Warum selten langer Nahkampf?',
        options: [
          'Bajonette zu kurz',
          'Nach Salven brach oft die Moral vor dem Händekampf',
          'Nahkampf verboten',
          'Soldaten konnten nicht kämpfen'
        ],
        correct: 1,
        expl: 'Moralischer Zusammenbruch wichtiger als lange Hauerei.'
      },
      {
        text: 'Hauptlogik des Linienkriegs im 17. Jh.?',
        options: [
          'Laune der Könige',
          'Ungenaue Musketen, Rauch, Angst und Masse steuerbar machen',
          'Linie schwächer als aufgelöste Ordnung',
          'Brauchte Funk'
        ],
        correct: 1,
        expl: 'Absurd nur aus Sicht moderner Präzision und Verbindung.'
      }
    ]
  }
]

function quizDe(q) {
  const de = quizzesDE[q.q - 1]
  const lines = de.questions
    .map(
      (qu, i) =>
        `      { id: 'q-lit-${q.q}-${i + 1}-de', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
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
    return `      { id: 'q-lit-f-${i + 1}', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
  })
  .join(',\n')

const finalQuizDe = quizzesDE
  .flatMap(q => q.questions)
  .map((qu, i) => {
    return `    { id: 'q-lit-f-${i + 1}-de', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
  })
  .join(',\n')

const sessionRu = `import { Session } from '../types/session'

export const linearInfantryTacticsSessionRU: Session = {
  id: 'linear-infantry-tactics',
  title: 'Линейная тактика: зачем солдаты стояли в линию',
  description:
    'Тридцать слайдов о линейной тактике XVII века: залповый огонь, муштра, дым, знамёна, пики и штыки — почему плотный строй был рациональным решением для мушкетной эпохи.',
  type: 'discussion',
  category: 'История',
  duration: 90,
  structure: {
    greeting:
      'Сегодня кажется безумием — стоять плечом к плечу под залпами. Но для мушкетной эпохи линия была способом превратить толпу в оружие.',
    mainContent:
      'От причин линейного строя и залпового огня до контрмарша, дыма, муштры, кавалерии, пик и штыка — и главной логики линейной войны.',
    interactive: 'Десять мини-викторин по три вопроса и итоговая викторина на тридцать вопросов.',
    additional: 'Иллюстрации по IMAGE_LIST.html и IMAGE_LIST.md в public/media/linear-infantry-tactics/.',
    closing:
      'Линейная тактика — не глупость, а рациональный ответ на неточные мушкеты, дым, страх и необходимость управлять тысячами людей.'
  },
  slides: [
${ruParts.join(',\n\n')}
  ],
  quiz: {
    id: 'quiz-linear-infantry-tactics',
    title: 'Итоговая викторина: линейная тактика',
    questions: [
${finalQuizRu}
    ]
  },
  metadata: {
    created: '2026-05-20',
    updated: '2026-05-20',
    tags: ['история', 'линейная тактика', 'мушкеты', 'XVII век', 'война', 'обсуждение'],
    difficulty: 'medium'
  }
}
`

const sessionDe = `import { Slide, QuizBlock } from '../types/session'

export const linearInfantryTacticsSlidesDE: Slide[] = [
${deParts.join(',\n\n')}
]

export const linearInfantryTacticsFinalQuizDE: QuizBlock = {
  id: 'quiz-linear-infantry-tactics-de',
  title: 'Abschlussquiz: Linieninfanterie-Taktik',
  questions: [
${finalQuizDe}
  ]
}
`

const sessionTitle = 'Линейная тактика: зачем солдаты стояли в линию'

const imageListMd = `# Список изображений: ${sessionTitle}

Формат: **имя файла** + **ссылка на Google Images**.

${slides
  .map(
    s =>
      `${s.n}. **${s.img}**  \n   https://www.google.com/search?tbm=isch&q=${s.imgSearch}`
  )
  .join('\n\n')}
`

const imageListHtml = `<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>IMAGE LIST — Линейная тактика</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.5; }
    h1 { margin-bottom: 10px; }
    ol { padding-left: 20px; }
    li { margin-bottom: 10px; }
    code { background: #f4f4f4; padding: 1px 4px; border-radius: 4px; }
    a { word-break: break-all; }
  </style>
</head>
<body>
  <h1>Список изображений: ${sessionTitle}</h1>
  <p>Формат: <strong>имя файла</strong> + <strong>ссылка на поиск в Google Images</strong>.</p>
  <ol>
${slides
  .map(
    s =>
      `    <li><code>${s.img}</code><br><a href="https://www.google.com/search?tbm=isch&amp;q=${s.imgSearch}" target="_blank" rel="noopener noreferrer">Google Images: ${s.imgSearchLabel}</a></li>`
  )
  .join('\n')}
  </ol>
</body>
</html>
`

const readmeMd = `# Изображения: «${sessionTitle}»

Слайды ссылаются на файлы \`01-…jpg\` … \`30-…jpg\` в этой папке. Подбор поисковых запросов — в \`IMAGE_LIST.md\` и \`IMAGE_LIST.html\` (Google Images).
`

const root = join(process.cwd())
const mediaDir = join(root, 'public/media/linear-infantry-tactics')
mkdirSync(mediaDir, { recursive: true })

writeFileSync(join(root, 'src/data/linear-infantry-tactics-session.ts'), sessionRu, 'utf8')
writeFileSync(join(root, 'src/i18n/linear-infantry-tactics-content-de.ts'), sessionDe, 'utf8')
writeFileSync(join(mediaDir, 'IMAGE_LIST.md'), imageListMd, 'utf8')
writeFileSync(join(mediaDir, 'IMAGE_LIST.html'), imageListHtml, 'utf8')
writeFileSync(join(mediaDir, 'README.md'), readmeMd, 'utf8')
console.log('Generated session and media list files')
