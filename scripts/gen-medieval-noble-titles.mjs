import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const MEDIA = '/media/medieval-noble-titles'
const id = 'ntl'

const slides = [
  {
    n: 1,
    title: 'Дворянин — это свободный слуга',
    content:
      'Сейчас свобода — естественное право, но в Средние века быть никому не принадлежащим человеком — это огромная привилегия. Дворянин изначально — это лично свободный человек, который не работает, а служит своему сюзерену, чаще всего с оружием в руках.',
    img: '01-noble-free-servant.jpg',
    imgTitle: 'Свободный слуга',
    imgSearch: 'medieval+noble+knight+sworn+service+lord+illustration',
    imgSearchLabel: 'свободный слуга'
  },
  {
    n: 2,
    title: 'Но были и дворяне-рабы',
    content:
      'А вот в средневековой Германии существовало явление, ломающее шаблон: министериалы. Это были рыцари и управленцы, которые носили оружие, воевали, имели замки, но юридически оставались «несвободными» (по сути, рабами) своего господина — короля или епископа.',
    img: '02-noble-serf-knights.jpg',
    imgTitle: 'Министериалы',
    imgSearch: 'medieval+ministeriales+unfree+knight+castle+Germany+history',
    imgSearchLabel: 'дворяне-рабы'
  },
  {
    n: 3,
    title: 'Рыцарь: солдат, а не романтик',
    content:
      'Слово «рыцарь» (в английском knight, от древнеанглийского cniht — слуга, юноша, или немецкого Ritter — всадник) изначально не имело отношения к турнирам и прекрасным дамам. Это просто тяжеловооруженный профессиональный конный воин, прошедший обряд признания его годности к офицерской службе.',
    img: '03-knight-soldier-not-romantic.jpg',
    imgTitle: 'Рыцарь-солдат',
    imgSearch: 'medieval+heavy+cavalry+knight+soldier+not+tournament+romantic',
    imgSearchLabel: 'рыцарь-солдат'
  },
  {
    n: 4,
    title: 'Рыцарь-бакалавр и рыцарь-баннерет',
    content:
      'Бакалавр — это рядовой рыцарь-одиночка (хотя у него были слуги). А баннерет — это рыцарь, получивший право поднимать в бою собственное знамя (баннер). Это не просто понты, а функция: радиосвязи не было, и знамя служило ориентиром, чтобы солдаты знали, куда бежать в горячке боя.',
    img: '04-knight-bachelor-banneret.jpg',
    imgTitle: 'Баннер и бакалавр',
    imgSearch: 'medieval+knight+banner+bachelor+banneret+battle+standard',
    imgSearchLabel: 'бакалавр и баннерет'
  },
  {
    n: 5,
    title: 'Откуда взялись титулы?',
    content:
      'Графы, герцоги, бароны — мы привыкли воспринимать эти слова как красивые сказочные звания из романов Дюма. На самом деле во времена раннего Средневековья всё было сугубо утилитарно: это были названия конкретных чиновничьих должностей и военных функций.',
    img: '05-where-titles-came-from.jpg',
    imgTitle: 'Утилитарные титулы',
    imgSearch: 'medieval+feudal+titles+duke+count+baron+official+duties+history',
    imgSearchLabel: 'происхождение титулов'
  },
  {
    n: 6,
    title: 'Барон: просто мужик с землей',
    content:
      'Слово «барон» происходит от старофранцузского и позднелатинского baro, что значило просто «человек», «мужчина», «наемник». Барон — это держатель лена (баронии), земли, полученной непосредственно от короля, а не от другого феодала.',
    img: '06-baron-landholder.jpg',
    imgTitle: 'Барон и барония',
    imgSearch: 'medieval+baron+land+holder+feudal+barony+direct+vassal+king',
    imgSearchLabel: 'барон с землёй'
  },
  {
    n: 7,
    title: 'Почему бароны диктовали волю королям?',
    content:
      'Читая историю (ту же Великую хартию вольностей), мы удивляемся: почему условия Джону Безземельному ставили «бароны» — низшая ступень знати? Потому что тогда барон — это не титул, а статус: «прямой королевский вассал». И только прямые вассалы имели право выдвигать требования монарху.',
    img: '07-barons-dictated-to-kings.jpg',
    imgTitle: 'Бароны и король',
    imgSearch: 'Magna+Carta+King+John+barons+medieval+England+1215',
    imgSearchLabel: 'бароны и король'
  },
  {
    n: 8,
    title: 'Граф: древний бухгалтер',
    content:
      'Слово граф (английское count, от латинского comes — спутник, компаньон императора) изначально обозначало королевского наместника в регионе. Грубо говоря, это был чиновник-учетчик, сборщик налогов и местный судья.',
    img: '08-count-ancient-accountant.jpg',
    imgTitle: 'Граф-наместник',
    imgSearch: 'medieval+count+comes+royal+administrator+tax+collector+history',
    imgSearchLabel: 'граф-чиновник'
  },
  {
    n: 9,
    title: 'Английская аномалия: Earl',
    content:
      'В Англии графов называют не Count, а Earl. Это слово пошло от скандинавского jarl (ярл) — племенного вождя или военачальника. Но интересно, что жен их при этом называют французским словом Countess (графиня), так как женского аналога ярла не было.',
    img: '09-english-earl-anomaly.jpg',
    imgTitle: 'Earl и Countess',
    imgSearch: 'English+Earl+medieval+nobility+jarl+Viking+Countess+history',
    imgSearchLabel: 'Earl в Англии'
  },
  {
    n: 10,
    title: 'Разнообразие графов',
    content:
      'Со временем «учетчики» стали плодиться. Пфальцграф — это наместник пфальца (королевского дворца-имения). Ландграф — наместник обычной провинции. Бургграф — комендант укрепленного города. Все они были на госслужбе.',
    img: '10-variety-of-counts.jpg',
    imgTitle: 'Виды графов',
    imgSearch: 'medieval+Pfalzgraf+Landgraf+Burggraf+castle+administrator+Germany',
    imgSearchLabel: 'виды графов'
  },
  {
    n: 11,
    title: 'Маркиз: пограничник на стероидах',
    content:
      'Слово маркиз (маркграф) происходит от слова «марка» (march) — так называли опасные приграничные территории. Наместник марки имел больше полномочий и войск, чем обычный граф, так как ему приходилось постоянно отбиваться от соседей.',
    img: '11-marquis-border-guard.jpg',
    imgTitle: 'Маркграф на границе',
    imgSearch: 'medieval+margrave+marquis+border+march+frontier+castle+defense',
    imgSearchLabel: 'маркиз-пограничник'
  },
  {
    n: 12,
    title: 'Виконт: просто зам',
    content:
      'Виконт (английское viscount, от латинского vice-comes) — это буквально «заместитель графа» или вице-граф. Изначально это был чиновник, который исполнял обязанности графа, пока тот тусовался при дворе или воевал.',
    img: '12-viscount-deputy.jpg',
    imgTitle: 'Виконт-заместитель',
    imgSearch: 'medieval+viscount+vice+count+deputy+administrator+nobility',
    imgSearchLabel: 'виконт-зам'
  },
  {
    n: 13,
    title: 'Герцог: совсем другая порода',
    content:
      'А вот герцог (от лат. dux — военный лидер, предводитель; англ. duke) изначально не был назначенным чиновником. Дюк — это древний вождь германского племени. Чтобы умаслить этих племенных авторитетов, королям приходилось давать им высочайший статус.',
    img: '13-duke-different-breed.jpg',
    imgTitle: 'Герцог-вождь',
    imgSearch: 'medieval+duke+dux+Germanic+tribal+leader+feudal+history',
    imgSearchLabel: 'герцог-вождь'
  },
  {
    n: 14,
    title: 'Герцоги были почти королями',
    content:
      'Герцог управлял огромными территориями (часто населенными отдельными народностями, как баварцы или саксонцы) и сам себе был хозяином. Первым английским герцогом стал сын Эдуарда III в 1337 году — до этого такого титула в Англии не существовало.',
    img: '14-dukes-almost-kings.jpg',
    imgTitle: 'Герцог и территория',
    imgSearch: 'medieval+duke+territory+Bavaria+Saxony+Edward+III+first+English+duke',
    imgSearchLabel: 'герцоги почти короли'
  },
  {
    n: 15,
    title: 'Принц: первый среди равных',
    content:
      'Слово «принц» (от лат. princeps — первый) изначально не означало сына короля. В Риме так называли императора (принцепс сената). В Средние века принц — это любой независимый правитель, суверен, которому никто не указ.',
    img: '15-prince-first-among-equals.jpg',
    imgTitle: 'Принц-суверен',
    imgSearch: 'medieval+prince+princeps+sovereign+ruler+independent+history',
    imgSearchLabel: 'принц-суверен'
  },
  {
    n: 16,
    title: 'Почему принцы Уэльские не рыцари по умолчанию?',
    content:
      'В Средние века знатность (рождение) и рыцарство (военная профессия) — это разные вещи. Даже сыновья короля рождались просто знатными людьми. Чтобы стать рыцарем, принц крови всё равно должен был пройти военное обучение и обряд посвящения.',
    img: '16-welsh-princes-not-knights.jpg',
    imgTitle: 'Рождение и рыцарство',
    imgSearch: 'medieval+prince+knight+dubbing+ceremony+nobility+birth+training',
    imgSearchLabel: 'принц и рыцарство'
  },
  {
    n: 17,
    title: 'Сквайр: оруженосец с претензией',
    content:
      'Сквайр (от лат. scutarius — щитоносец, французское écuyer) — это оруженосец рыцаря. Со временем стать рыцарем стало очень дорого, и многие богатые землевладельцы так и оставались сквайрами всю жизнь, превратив это слово в статус дворянина-помещика.',
    img: '17-squire-ambitious-page.jpg',
    imgTitle: 'Сквайр-оруженосец',
    imgSearch: 'medieval+squire+shield+bearer+knight+attendant+landowner+history',
    imgSearchLabel: 'сквайр'
  },
  {
    n: 18,
    title: 'Йомены: свободные, но не дворяне',
    content:
      'В Англии была прослойка йоменов — свободных крестьян-землевладельцев. Они не служили сюзерену как рыцари, а пахали землю, но при этом ни от кого не зависели и были обязаны иметь длинный лук для защиты страны.',
    img: '18-yeomen-free-not-noble.jpg',
    imgTitle: 'Йомены с луком',
    imgSearch: 'medieval+English+yeoman+longbow+free+farmer+landowner+history',
    imgSearchLabel: 'йомены'
  },
  {
    n: 19,
    title: 'Как должности превратились в титулы',
    content:
      'В раннем Средневековье должность графа или виконта давалась лично человеку. Но чиновники быстро смекнули: зачем возвращать жирную должность королю? Они начали передавать свои кресла сыновьям.',
    img: '19-offices-became-titles.jpg',
    imgTitle: 'Наследование должностей',
    imgSearch: 'medieval+hereditary+office+count+viscount+father+son+inheritance',
    imgSearchLabel: 'должности в титулы'
  },
  {
    n: 20,
    title: 'Приватизация государства',
    content:
      'Королям пришлось смириться. Графства, баронии и маркизы стали наследственными владениями. Должность чиновника окончательно превратилась в личную частную собственность, которую можно было передать по наследству или дать в приданое дочери.',
    img: '20-privatization-of-state.jpg',
    imgTitle: 'Наследственные владения',
    imgSearch: 'medieval+hereditary+fief+county+barony+marquisate+inheritance+dowry',
    imgSearchLabel: 'приватизация государства'
  },
  {
    n: 21,
    title: 'Титул без работы',
    content:
      'С развитием абсолютизма короли создали новые аппараты чиновников и постоянные армии. Старые феодалы оказались не у дел. Граф больше не собирал налоги, а герцог не вел племя в бой. Должность выродилась в простое звание.',
    img: '21-title-without-work.jpg',
    imgTitle: 'Титул без функции',
    imgSearch: 'absolutism+medieval+nobility+title+without+duties+court+aristocrat',
    imgSearchLabel: 'титул без работы'
  },
  {
    n: 22,
    title: 'Английский пэр: что это значит?',
    content:
      'Пэр (от лат. par — равный) — это член высшей британской аристократии. Почему «равный»? Потому что король признавал высшую знать (герцогов, маркизов, графов, виконтов и баронов) равными себе по чести, имеющими право судить друг друга.',
    img: '22-english-peer-meaning.jpg',
    imgTitle: 'Пэр и палата',
    imgSearch: 'British+peer+House+of+Lords+medieval+nobility+peerage+history',
    imgSearchLabel: 'английский пэр'
  },
  {
    n: 23,
    title: 'Иерархия британской знати',
    content:
      'Система устаканилась: на самом верху Герцог, затем Маркиз, Граф (Earl), Виконт и Барон. Ниже них идут баронеты и рыцари, которые дворяне, но не пэры, и в Палату Лордов их не пускали.',
    img: '23-british-nobility-hierarchy.jpg',
    imgTitle: 'Иерархия знати',
    imgSearch: 'British+nobility+hierarchy+duke+marquess+earl+viscount+baron+chart',
    imgSearchLabel: 'иерархия знати'
  },
  {
    n: 24,
    title: 'Баронет: покупной титул',
    content:
      'Титул баронета придумал король Яков I в 1611 году чисто ради денег. Он продавал его всем богачам, чтобы оплатить войну в Ирландии. Это наследственный титул, дающий право на приставку «сэр», но не делающий человека пэром.',
    img: '24-baronet-bought-title.jpg',
    imgTitle: 'Баронет Якова I',
    imgSearch: 'baronet+King+James+I+1611+hereditary+title+sold+nobility+history',
    imgSearchLabel: 'баронет'
  },
  {
    n: 25,
    title: 'Лорд: собирательное слово',
    content:
      '«Лорд» (от древнеангл. hlāford — хранитель хлеба) — это вообще не титул. Это вежливое обращение к баронам, виконтам, графам и маркизам, а также к сыновьям герцогов. Самостоятельного титула «лорд» не существует.',
    img: '25-lord-collective-word.jpg',
    imgTitle: 'Обращение «лорд»',
    imgSearch: 'medieval+lord+title+address+nobility+hlaford+bread+keeper+history',
    imgSearchLabel: 'слово «лорд»'
  },
  {
    n: 26,
    title: 'Старшинство внутри одного титула',
    content:
      'Два графа равны? Как бы не так. Если титул одного создан в 1400 году, а другого — в 1600-м, то первый считается старше и почетнее. Высший шик — владеть древним титулом, пусть даже баронским, а не новоиспеченным герцогским.',
    img: '26-seniority-within-title.jpg',
    imgTitle: 'Старшинство титулов',
    imgSearch: 'British+nobility+precedence+ancient+title+peerage+seniority+history',
    imgSearchLabel: 'старшинство титулов'
  },
  {
    n: 27,
    title: 'Эпоха Нового времени: инфляция титулов',
    content:
      'К временам «Трех мушкетеров» всё превратилось в ярмарку тщеславия. Земли давно не соответствовали титулам. Человек мог называться маркизом просто потому, что его дед купил у короля бумажку, а реальной властью в провинции обладал обычный безродный интендант.',
    img: '27-early-modern-title-inflation.jpg',
    imgTitle: 'Инфляция титулов',
    imgSearch: '17th+century+nobility+title+inflation+court+vanity+Three+Musketeers+era',
    imgSearchLabel: 'инфляция титулов'
  },
  {
    n: 28,
    title: 'Знаменитая путаница Дюма',
    content:
      'Атос — граф де ла Фер, Портос — барон дю Валлон. В XVII веке во Франции это означало лишь уровень родовитости и придворных привилегий. При этом Портос, будучи «всего лишь» бароном, мог быть гораздо богаче графа де ла Фер.',
    img: '28-duma-famous-confusion.jpg',
    imgTitle: 'Атос и Портос',
    imgSearch: 'Three+Musketeers+Athos+Porthos+French+nobility+title+wealth+17th+century',
    imgSearchLabel: 'путаница Дюма'
  },
  {
    n: 29,
    title: 'От функционала к эстетике',
    content:
      'Эволюция титулов — это история того, как практичные вещи становятся предметом роскоши. Окровавленный командир приграничной заставы (маркграф) за пару веков эволюционировал в напудренного маркиза на каблуках.',
    img: '29-function-to-aesthetics.jpg',
    imgTitle: 'От функции к роскоши',
    imgSearch: 'medieval+marquis+to+powdered+court+nobility+evolution+fashion+history',
    imgSearchLabel: 'функция и эстетика'
  },
  {
    n: 30,
    title: 'Главный исторический парадокс',
    content:
      'Древние графы и бароны не поняли бы своих изнеженных потомков. Для средневекового человека титул — это прежде всего работа: судить, собирать зерно, воевать и командовать гарнизоном. Быть знатным изначально значило тяжело трудиться на короля.',
    img: '30-noble-title-paradox.jpg',
    imgTitle: 'Титул как работа',
    imgSearch: 'medieval+noble+duties+judge+tax+war+garrison+hard+work+history',
    imgSearchLabel: 'исторический парадокс'
  }
]

const quizzes = [
  {
    q: 1,
    slides: [1, 2, 3],
    questions: [
      {
        text: 'Кем изначально был дворянин в Средние века?',
        options: [
          'Независимым ремесленником',
          'Лично свободным слугой сюзерена, часто с оружием',
          'Крестьянином без прав',
          'Только церковным служителем'
        ],
        correct: 1,
        expl: 'Дворянин — свободный человек, который служит, а не «работает» в современном смысле.'
      },
      {
        text: 'Кто такие министериалы в средневековой Германии?',
        options: [
          'Монахи без оружия',
          'Рыцари и управленцы, юридически «несвободные»',
          'Только королевские сыновья',
          'Купцы из Италии'
        ],
        correct: 1,
        expl: 'Они воевали и имели замки, но формально оставались «рабами» короля или епископа.'
      },
      {
        text: 'Что изначально означало слово «рыцарь»?',
        options: [
          'Поэта при дворе',
          'Тяжеловооруженного профессионального конного воина',
          'Организатора турниров ради дам',
          'Судью без оружия'
        ],
        correct: 1,
        expl: 'Knight/cniht/Ritter — слуга, юноша, всадник; романтика пришла позже.'
      }
    ]
  },
  {
    q: 2,
    slides: [4, 5, 6],
    questions: [
      {
        text: 'Зачем рыцарю-баннерету было право поднимать знамя?',
        options: [
          'Только для красоты парада',
          'Чтобы солдаты видели ориентир в бою',
          'Чтобы торговать на ярмарке',
          'Чтобы судить крестьян'
        ],
        correct: 1,
        expl: 'Без радиосвязи баннер показывал, куда бежать в горячке сражения.'
      },
      {
        text: 'Чем были графы, герцоги и бароны в раннем Средневековье?',
        options: [
          'Сказочными прозвищами без функции',
          'Названиями конкретных должностей и военных функций',
          'Только церковными санами',
          'Именами городов'
        ],
        correct: 1,
        expl: 'Титулы начинались как утилитарные должности, а не «сказочные звания».'
      },
      {
        text: 'Кто такой барон в феодальном смысле?',
        options: [
          'Держатель лена напрямую от короля',
          'Крестьянин без земли',
          'Только городской мэр',
          'Наследник виконта по закону'
        ],
        correct: 0,
        expl: 'Барон — держатель баронии, полученной не от другого феодала, а от короля.'
      }
    ]
  },
  {
    q: 3,
    slides: [7, 8, 9],
    questions: [
      {
        text: 'Почему «бароны» диктовали условия королю в Magna Carta?',
        options: [
          'Потому что барон — низший титул знати',
          'Потому что барон тогда — прямой королевский вассал со статусом',
          'Потому что король был крестьянином',
          'Потому что бароны были единственными рыцарями'
        ],
        correct: 1,
        expl: 'Только прямые вассалы имели право выдвигать требования монарху.'
      },
      {
        text: 'Кем изначально был граф (comes)?',
        options: [
          'Поэтом при дворе',
          'Королевским наместником, сборщиком налогов и судьёй',
          'Только командиром флота',
          'Монахом-переписчиком'
        ],
        correct: 1,
        expl: 'Comes — «спутник императора», по сути региональный чиновник.'
      },
      {
        text: 'Чем английский Earl отличается от Count?',
        options: [
          'Earl — слово скандинавского происхождения (jarl)',
          'Earl всегда ниже барона',
          'Earl — только женский титул',
          'Earl не имеет жены'
        ],
        correct: 0,
        expl: 'В Англии граф — Earl, а жён называют Countess, потому что jarl-ицы не было.'
      }
    ]
  },
  {
    q: 4,
    slides: [10, 11, 12],
    questions: [
      {
        text: 'Кто такой бургграф?',
        options: [
          'Наместник пфальца',
          'Комендант укреплённого города',
          'Сборщик налогов на море',
          'Сын герцога без титула'
        ],
        correct: 1,
        expl: 'Burggraf — граф-«комендант» города с укреплениями.'
      },
      {
        text: 'От чего происходит слово «маркиз» (маркграф)?',
        options: [
          'От «маркет» — торговой площади',
          'От «марки» — опасной приграничной территории',
          'От имени святого Марка',
          'От французского «marier» — жениться'
        ],
        correct: 1,
        expl: 'March — пограничная марка, где нужны были особые полномочия и войска.'
      },
      {
        text: 'Кем изначально был виконт?',
        options: [
          'Заместителем графа (vice-comes)',
          'Сыном короля',
          'Главой церкви',
          'Капитаном торгового корабля'
        ],
        correct: 0,
        expl: 'Виконт исполнял обязанности графа, пока тот при дворе или в походе.'
      }
    ]
  },
  {
    q: 5,
    slides: [13, 14, 15],
    questions: [
      {
        text: 'Чем герцог изначально отличался от графа?',
        options: [
          'Герцог был назначенным чиновником, граф — вождём',
          'Герцог — древний племенной вождь, а не просто чиновник',
          'Герцог всегда был ниже барона',
          'Герцог существовал только во Франции'
        ],
        correct: 1,
        expl: 'Dux — военный предводитель; короли «покупали» лояльность высоким статусом.'
      },
      {
        text: 'Когда в Англии появился первый герцог?',
        options: [
          'В 1066 году',
          'В 1337 году — сын Эдуарда III',
          'В 1611 году',
          'Никогда'
        ],
        correct: 1,
        expl: 'До 1337 года такого титула в Англии не существовало.'
      },
      {
        text: 'Кого называли «принцем» в Средние века?',
        options: [
          'Только сына короля',
          'Любого независимого суверена, которому никто не указ',
          'Только епископа',
          'Только рыцаря без земли'
        ],
        correct: 1,
        expl: 'Princeps — «первый»; в Риме так звали императора, в Средние века — любого суверена.'
      }
    ]
  },
  {
    q: 6,
    slides: [16, 17, 18],
    questions: [
      {
        text: 'Почему принц крови не был рыцарем «по умолчанию»?',
        options: [
          'Рыцарство запрещали законы',
          'Знатность рождения и рыцарство — разные вещи, нужен обряд и обучение',
          'Принцы не умели ездить верхом',
          'Рыцари не принимали знатных'
        ],
        correct: 1,
        expl: 'Даже сын короля рождался знатным, но не рыцарем — нужна была посвящение.'
      },
      {
        text: 'Кем изначально был сквайр?',
        options: [
          'Королевским судьёй',
          'Оруженосцем (щитоносцем) рыцаря',
          'Монахом',
          'Купцом из Фlanders'
        ],
        correct: 1,
        expl: 'Scutarius — щитоносец; позже многие оставались сквайрами всю жизнь из-за цены рыцарства.'
      },
      {
        text: 'Чем отличались йомены от дворян?',
        options: [
          'Йомены были рабами',
          'Йомены — свободные землевладельцы-крестьяне с луком, но не дворяне',
          'Йомены служили только в церкви',
          'Йомены не имели земли'
        ],
        correct: 1,
        expl: 'Они пахали свою землю, были свободны и обязаны иметь длинный лук.'
      }
    ]
  },
  {
    q: 7,
    slides: [19, 20, 21],
    questions: [
      {
        text: 'Как должности стали титулами?',
        options: [
          'Король запретил наследование',
          'Чиновники начали передавать должности сыновьям',
          'Церковь переименовала все должности',
          'Крестьяне выбрали новые названия'
        ],
        correct: 1,
        expl: 'Графы и виконты «приватизировали» кресла, не возвращая их королю.'
      },
      {
        text: 'Что произошло с графствами и барониями?',
        options: [
          'Они исчезли за одну ночь',
          'Стали наследственными владениями, передаваемыми или дававшимися в приданое',
          'Перешли только церкви',
          'Стал обязательным выборный срок'
        ],
        correct: 1,
        expl: 'Должность превратилась в частную собственность семьи.'
      },
      {
        text: 'Почему титул «выродился в звание» при абсолютизме?',
        options: [
          'Короли отменили все титулы',
          'Новые чиновники и армии заменили старых феодалов — функции исчезли',
          'Дворяне отказались от земли',
          'Титулы стали только женскими'
        ],
        correct: 1,
        expl: 'Граф уже не собирал налоги, герцог не вёл племя — осталось только звание.'
      }
    ]
  },
  {
    q: 8,
    slides: [22, 23, 24],
    questions: [
      {
        text: 'Почему пэра называют «равным» (par)?',
        options: [
          'Потому что он равен крестьянам',
          'Король признавал высшую знать равной себе по чести',
          'Потому что все пэры одинаково бедны',
          'Это перевод слова «parliament»'
        ],
        correct: 1,
        expl: 'Пэры — герцоги, маркизы, графы, виконты, бароны — «равные» королю по чести.'
      },
      {
        text: 'Кто из перечисленного — пэр в британской системе?',
        options: ['Баронет', 'Граф (Earl)', 'Рыцарь без титула', 'Йомен'],
        correct: 1,
        expl: 'Баронеты и рыцари — дворяне, но не пэры и не в Палату лордов.'
      },
      {
        text: 'Зачем король Яков I создал баронетов в 1611 году?',
        options: [
          'Чтобы наградить только воинов',
          'Чтобы продавать титул и собрать деньги на войну в Ирландии',
          'Чтобы заменить всех герцогов',
          'По требованию парламента'
        ],
        correct: 1,
        expl: 'Баронет — наследственный титул с «сэр», но не пэр.'
      }
    ]
  },
  {
    q: 9,
    slides: [25, 26, 27],
    questions: [
      {
        text: '«Лорд» — это…',
        options: [
          'Самостоятельный высший титул',
          'Вежливое обращение, а не отдельный титул',
          'Только титул сыновей короля',
          'Синоним «крестьянин»'
        ],
        correct: 1,
        expl: 'Hlāford — «хранитель хлеба»; так обращаются к баронам, графам и сыновьям герцогов.'
      },
      {
        text: 'Как определяется старшинство двух графов?',
        options: [
          'По росту',
          'По дате создания титула — древнее почётнее',
          'По количеству замков',
          'По алфавиту фамилии'
        ],
        correct: 1,
        expl: 'Древний баронский титул может быть престижнее нового герцогского.'
      },
      {
        text: 'Что такое «инфляция титулов» в Новое время?',
        options: [
          'Титулы стали реже',
          'Звания обесценились: земли не соответствовали титулу, власть у интendantов',
          'Король запретил все маркизы',
          'Титулы стали только женскими'
        ],
        correct: 1,
        expl: 'К XVII веку титул часто — бумажка и тщеславие, а не реальная власть.'
      }
    ]
  },
  {
    q: 10,
    slides: [28, 29, 30],
    questions: [
      {
        text: 'Что показывает пример Атоса и Портоса у Дюма?',
        options: [
          'Барон всегда беднее графа',
          'Титул не равен богатству и реальной силе',
          'Графы не существовали во Франции',
          'Дюма писал документальную историю'
        ],
        correct: 1,
        expl: 'В XVII веке титул — уровень родовитости, а Портос мог быть богаче «графа».'
      },
      {
        text: 'Как описана эволюция маркграфа в слайдах?',
        options: [
          'От поэта к монаху',
          'От командира заставы к «напудренному маркизу»',
          'От крестьянина к королю за год',
          'Он не менялся'
        ],
        correct: 1,
        expl: 'Практичная пограничная функция превратилась в предмет роскоши и этикета.'
      },
      {
        text: 'В чём главный исторический парадокс титулов?',
        options: [
          'Средневековые титулы были декоративными с самого начала',
          'Изначально титул — работа: судить, собирать зерно, воевать',
          'Дворяне никогда не служили королю',
          'Бароны всегда были беднее крестьян'
        ],
        correct: 1,
        expl: 'Быть знатным значило тяжело трудиться на короля — не только «быть красивым».'
      }
    ]
  }
]

const deSlides = [
  {
    n: 1,
    title: 'Adeliger — freier Diener',
    content:
      'Heute ist Freiheit selbstverständlich — im Mittelalter war ein niemandem Gehörender ein Privileg. Der Adelige war ursprünglich eine persönlich freie Person, die nicht «arbeitet», sondern ihrem Lehnsherrn dient — meist mit Waffe in der Hand.',
    imgTitle: 'Freier Diener'
  },
  {
    n: 2,
    title: 'Aber auch adelige «Unfreie»',
    content:
      'Im mittelalterlichen Deutschland gab es Ministerialen: Ritter und Verwalter mit Waffen, Schlössern und Kriegsdienst — juristisch aber «unfrei», faktisch Leibeigene des Königs oder Bischofs.',
    imgTitle: 'Ministerialen'
  },
  {
    n: 3,
    title: 'Ritter: Soldat, kein Romantiker',
    content:
      '«Ritter» (engl. knight, ahd. cniht — Diener, Junge) hatte zuerst nichts mit Turnieren und Damen zu tun. Es war ein schwerbewaffneter Berufsreiter, der für Offiziersdienst zugelassen wurde.',
    imgTitle: 'Ritter als Soldat'
  },
  {
    n: 4,
    title: 'Bachelor und Banneret',
    content:
      'Ein Bachelor ist ein einfacher Ritter (mit Dienern). Ein Banneret darf im Kampf sein eigenes Banner tragen — nicht Schau, sondern Funktion: ohne Funk dient es als Orientierung für die Soldaten.',
    imgTitle: 'Banner und Bachelor'
  },
  {
    n: 5,
    title: 'Woher kommen die Titel?',
    content:
      'Graf, Herzog, Baron — klingt nach Dumas-Roman. Frühmittelalterlich war alles utilitaristisch: konkrete Amtstitel und militärische Funktionen.',
    imgTitle: 'Utilitaristische Titel'
  },
  {
    n: 6,
    title: 'Baron: Mann mit Land',
    content:
      'Baron kommt von lat. baro — «Mann», «Söldner». Ein Baron hält eine Baronie (Lehen) direkt vom König, nicht von einem anderen Vasallen.',
    imgTitle: 'Baron und Baronie'
  },
  {
    n: 7,
    title: 'Warum Barone Könige diktierten',
    content:
      'Bei Magna Carta wundern wir uns über «Barone». Damals bedeutete Baron: direkter königlicher Vasall — nur sie durften dem Monarchen Forderungen stellen.',
    imgTitle: 'Barone und König'
  },
  {
    n: 8,
    title: 'Graf: alter Buchhalter',
    content:
      'Graf (engl. count, lat. comes — Gefährte des Kaisers) war zuerst königlicher Statthalter: Steuerer, Richter, Verwalter einer Region.',
    imgTitle: 'Graf als Statthalter'
  },
  {
    n: 9,
    title: 'Englische Anomalie: Earl',
    content:
      'In England heißt der Graf Earl — von skandinav. jarl, Stammesführer. Die Ehefrau heißt Countess, weil es kein weibliches jarl gab.',
    imgTitle: 'Earl und Countess'
  },
  {
    n: 10,
    title: 'Vielfalt der Grafen',
    content:
      'Pfalzgraf — Verwalter des Königspfalz. Landgraf — Provinzstatthalter. Burggraf — Kommandant einer befestigten Stadt. Alle im Staatsdienst.',
    imgTitle: 'Grafenarten'
  },
  {
    n: 11,
    title: 'Markgraf: Grenzer mit Extra-Power',
    content:
      'Markgraf/Marquis von «Mark» — gefährliche Grenzmark. Der Statthalter hatte mehr Truppen und Befugnisse als ein normaler Graf.',
    imgTitle: 'Markgraf an der Grenze'
  },
  {
    n: 12,
    title: 'Vizegraf: einfach der Stellvertreter',
    content:
      'Vizegraf (viscount, lat. vice-comes) — «Stellvertreter des Grafen», der dessen Pflichten übernahm, während der Graf am Hof oder im Krieg war.',
    imgTitle: 'Vizegraf'
  },
  {
    n: 13,
    title: 'Herzog: ganz andere Kategorie',
    content:
      'Herzog (lat. dux — Heerführer) war kein ernannter Beamter, sondern alter germanischer Stammesführer. Könige kauften Loyalität mit höchstem Status.',
    imgTitle: 'Herzog als Führer'
  },
  {
    n: 14,
    title: 'Herzöge fast wie Könige',
    content:
      'Herzöge regierten riesige Gebiete (Bayern, Sachsen) weitgehend selbst. Erster englischer Herzog: Sohn Eduards III., 1337 — vorher gab es den Titel in England nicht.',
    imgTitle: 'Herzog und Territorium'
  },
  {
    n: 15,
    title: 'Prinz: erster unter Gleichen',
    content:
      'Prinz (lat. princeps — der Erste) hieß zuerst nicht «Sohn des Königs». In Rom der Kaiser; im Mittelalter jeder unabhängige Souverän.',
    imgTitle: 'Prinz als Souverän'
  },
  {
    n: 16,
    title: 'Warum Walisische Prinzen keine Ritter sind',
    content:
      'Adel (Geburt) und Rittertum (Beruf) waren getrennt. Selbst Königssöhne wurden adelig geboren — Ritter wurden sie erst durch Ausbildung und Weihe.',
    imgTitle: 'Geburt und Rittertum'
  },
  {
    n: 17,
    title: 'Squaire: Page mit Anspruch',
    content:
      'Squaire (lat. scutarius — Schildträger) — Waffenknecht eines Ritters. Ritterung wurde teuer; viele reiche Grundbesitzer blieben lebenslang Squaire.',
    imgTitle: 'Squaire'
  },
  {
    n: 18,
    title: 'Yeomen: frei, aber nicht adelig',
    content:
      'In England Yeomen — freie Bauern mit Land. Sie pflügten, waren unabhängig und mussten einen Langbogen für die Landesverteidigung haben.',
    imgTitle: 'Yeomen mit Langbogen'
  },
  {
    n: 19,
    title: 'Wie Ämter zu Titeln wurden',
    content:
      'Früh wurden Graf- oder Vizegrafposten persönlich vergeben. Beamte übergaben sie bald an Söhne — warum dem König das Amt zurückgeben?',
    imgTitle: 'Erbbare Ämter'
  },
  {
    n: 20,
    title: 'Privatisierung des Staates',
    content:
      'Könige akzeptierten es: Grafschaften, Baronien, Marken wurden Erbbesitz — übertragbar oder als Mitgift.',
    imgTitle: 'Erbliche Herrschaften'
  },
  {
    n: 21,
    title: 'Titel ohne Arbeit',
    content:
      'Mit dem Absolutismus kamen neue Beamte und stehende Heere. Alte Feudale waren überflüssig — der Graf sammelte keine Steuern mehr, der Herzog führte kein Stammesheer.',
    imgTitle: 'Titel ohne Funktion'
  },
  {
    n: 22,
    title: 'Englischer Peer: was heißt das?',
    content:
      'Peer (lat. par — gleich) — Mitglied der höchsten britischen Aristokratie. Der König erkannte sie als seinesgleichen in Ehre, mit Recht, sich gegenseitig zu richten.',
    imgTitle: 'Peer und Parlament'
  },
  {
    n: 23,
    title: 'Hierarchie der britischen Elite',
    content:
      'Oben: Herzog, Marquess, Earl, Viscount, Baron. Darunter Baronets und Ritter — adelig, aber keine Peers, kein House of Lords.',
    imgTitle: 'Adels-Hierarchie'
  },
  {
    n: 24,
    title: 'Baronet: gekaufter Titel',
    content:
      'König Jakob I. erfand 1611 den Baronet — verkauft an Reiche für den Irland-Krieg. Erblich mit «Sir», aber kein Peer.',
    imgTitle: 'Baronet Jakobs I.'
  },
  {
    n: 25,
    title: 'Lord: Sammelwort',
    content:
      'Lord (ahd. hlāford — Brot-Hüter) ist kein Titel, sondern Anrede für Barone bis Marquess und für Herzogssöhne. Ein Titel «Lord» existiert nicht.',
    imgTitle: 'Anrede «Lord»'
  },
  {
    n: 26,
    title: 'Seniorität innerhalb eines Titels',
    content:
      'Zwei Earls gleich? Nein — wer 1400 den Titel bekam, steht über dem von 1600. Ein alter Baronentitel kann prestigeträchtiger sein als ein neuer Herzogstitel.',
    imgTitle: 'Titelseniorenität'
  },
  {
    n: 27,
    title: 'Frühe Neuzeit: Titelsinflation',
    content:
      'Zur Musketeier-Zeit: Titelmarkt und Eitelkeit. Land passte nicht zum Rang — ein Marquis-Titel konnte eine Papierurkunde sein, während ein Intendant regierte.',
    imgTitle: 'Titelsinflation'
  },
  {
    n: 28,
    title: 'Dumas’ berühmte Verwechslung',
    content:
      'Athos — Graf, Porthos — Baron. Im Frankreich des 17. Jh. bedeutete das vor allem Abstammung und Hofprivilegien — Porthos konnte reicher sein als Athos.',
    imgTitle: 'Athos und Porthos'
  },
  {
    n: 29,
    title: 'Vom Funktionalen zum Ästhetischen',
    content:
      'Titelgeschichte: Praktisches wird Luxus. Der blutige Markgraf an der Grenze wird zum pudrigen Marquis auf Absätzen.',
    imgTitle: 'Funktion und Luxus'
  },
  {
    n: 30,
    title: 'Das historische Paradox',
    content:
      'Alte Grafen und Barone würden ihre verweichlichten Nachfahren nicht verstehen. Im Mittelalter war ein Titel vor allem Arbeit: richten, Korn eintreiben, kämpfen, Garnison führen.',
    imgTitle: 'Titel als Arbeit'
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
        `      { id: 'q-ntl-${q.q}-${i + 1}', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
    )
    .join(',\n')
  return `    {\n      id: 'q${q.q}',\n      title: 'Викторина',\n      content: '',\n      duration: 2,\n      questions: [\n${lines}\n      ]\n    }`
}

const quizzesDE = [
  {
    q: 1,
    questions: [
      {
        text: 'Wer war der Adelige im Mittelalter ursprünglich?',
        options: [
          'Unabhängiger Handwerker',
          'Persönlich freier Diener des Lehnsherrn, oft mit Waffe',
          'Rechtlose*r Bauer',
          'Nur Kirchenbeamte*r'
        ],
        correct: 1,
        expl: 'Adel = frei und dienend — nicht «arbeiten» im modernen Sinn.'
      },
      {
        text: 'Wer waren Ministerialen?',
        options: [
          'Waffenlose Mönche',
          'Ritter/Verwalter, juristisch «unfrei»',
          'Nur Königssöhne',
          'Italienische Kaufleute'
        ],
        correct: 1,
        expl: 'Sie kämpften und hatten Burgen, blieben aber Leibeigene des Herrn.'
      },
      {
        text: 'Was bedeutete «Ritter» ursprünglich?',
        options: [
          'Hofdichter',
          'Schwerbewaffneter Berufsreiter',
          'Turnierorganisator für Damen',
          'Richter ohne Waffe'
        ],
        correct: 1,
        expl: 'Knight/cniht/Ritter — Diener, Junge, Reiter; Romantik kam später.'
      }
    ]
  },
  {
    q: 2,
    questions: [
      {
        text: 'Wozu durfte ein Banneret sein Banner tragen?',
        options: [
          'Nur für Paradeschönheit',
          'Als Orientierung für Soldaten im Kampf',
          'Für Markthandel',
          'Um Bauern zu richten'
        ],
        correct: 1,
        expl: 'Ohne Funk war das Banner der Anker in der Schlacht.'
      },
      {
        text: 'Was waren Graf/Herzog/Baron frühmittelalterlich?',
        options: [
          'Märchennamen ohne Funktion',
          'Konkrete Ämter und militärische Funktionen',
          'Nur Kirchenämter',
          'Stadtnamen'
        ],
        correct: 1,
        expl: 'Titel begannen utilitaristisch, nicht als Roman-Schmuck.'
      },
      {
        text: 'Wer ist ein Baron im Feudalsinn?',
        options: [
          'Lehenshalter direkt vom König',
          'Landloser Bauer',
          'Nur Stadtbürgermeister',
          'Gesetzlicher Erbe eines Vizegrafen'
        ],
        correct: 0,
        expl: 'Baron = Baronie direkt vom König, nicht vom Vasallen.'
      }
    ]
  },
  {
    q: 3,
    questions: [
      {
        text: 'Warum diktierten «Barone» dem König in der Magna Carta?',
        options: [
          'Weil Baron der niedrigste Titel war',
          'Weil Baron damals direkter königlicher Vasall mit Status war',
          'Weil der König Bauer war',
          'Weil nur Barone Ritter waren'
        ],
        correct: 1,
        expl: 'Nur direkte Vasallen durften Forderungen stellen.'
      },
      {
        text: 'Wer war der Graf (comes) ursprünglich?',
        options: [
          'Hofdichter',
          'Königlicher Statthalter, Steuerer, Richter',
          'Nur Flottenkommandant',
          'Mönch-Schreiber'
        ],
        correct: 1,
        expl: 'Comes = «Gefährte des Kaisers», regionaler Beamter.'
      },
      {
        text: 'Was ist besonders am englischen Earl?',
        options: [
          'Earl kommt von skandinav. jarl',
          'Earl steht immer unter dem Baron',
          'Earl ist nur ein Frauentitel',
          'Earl hat keine Ehefrau'
        ],
        correct: 0,
        expl: 'Earl statt Count; Ehefrau heißt Countess — kein weibl. jarl.'
      }
    ]
  },
  {
    q: 4,
    questions: [
      {
        text: 'Wer ist ein Burggraf?',
        options: [
          'Verwalter des Pfalz',
          'Kommandant einer befestigten Stadt',
          'Meeressteuerer',
          'Herzogssohn ohne Titel'
        ],
        correct: 1,
        expl: 'Burggraf = «Stadt-Kommandant» mit Befestigung.'
      },
      {
        text: 'Wovon kommt «Markgraf/Marquis»?',
        options: [
          'Vom Markt — Handelsplatz',
          'Von der «Mark» — gefährlicher Grenzland',
          'Vom Heiligen Markus',
          'Vom franz. «marier» — heiraten'
        ],
        correct: 1,
        expl: 'March = Grenzmark mit Extra-Truppen und Befugnissen.'
      },
      {
        text: 'Wer war der Vizegraf ursprünglich?',
        options: [
          'Stellvertreter des Grafen (vice-comes)',
          'Sohn des Königs',
          'Kirchenoberhaupt',
          'Handelsschiff-Kapitän'
        ],
        correct: 0,
        expl: 'Er übernahm, während der Graf am Hof oder im Krieg war.'
      }
    ]
  },
  {
    q: 5,
    questions: [
      {
        text: 'Wie unterschied sich der Herzog vom Grafen?',
        options: [
          'Herzog = Beamter, Graf = Stammesführer',
          'Herzog = alter Stammesführer, nicht nur Beamter',
          'Herzog stand immer unter dem Baron',
          'Herzog gab es nur in Frankreich'
        ],
        correct: 1,
        expl: 'Dux = Heerführer; Könige kauften Loyalität mit Rang.'
      },
      {
        text: 'Wann gab es den ersten englischen Herzog?',
        options: ['1066', '1337 — Sohn Eduards III.', '1611', 'Nie'],
        correct: 1,
        expl: 'Vor 1337 existierte der Titel in England nicht.'
      },
      {
        text: 'Wen nannte man im Mittelalter «Prinz»?',
        options: [
          'Nur den Königssohn',
          'Jeden unabhängigen Souverän',
          'Nur den Bischof',
          'Nur landlosen Ritter'
        ],
        correct: 1,
        expl: 'Princeps = «Erster» — Souverän, dem niemand befiehlt.'
      }
    ]
  },
  {
    q: 6,
    questions: [
      {
        text: 'Warum ist ein Prinz nicht automatisch Ritter?',
        options: [
          'Gesetz verbot es',
          'Geburt (Adel) und Rittertum (Beruf) sind getrennt',
          'Prinzen konnten nicht reiten',
          'Ritter nahmen keine Adeligen'
        ],
        correct: 1,
        expl: 'Auch Königssöhne brauchten Ausbildung und Weihe.'
      },
      {
        text: 'Wer war ein Squaire ursprünglich?',
        options: [
          'Königlicher Richter',
          'Waffenknecht (Schildträger) eines Ritters',
          'Mönch',
          'Kaufmann aus Flandern'
        ],
        correct: 1,
        expl: 'Scutarius — viele blieben lebenslang Squaire wegen der Kosten.'
      },
      {
        text: 'Wie unterschieden sich Yeomen vom Adel?',
        options: [
          'Yeomen waren Sklaven',
          'Freie Bauern mit Land und Langbogen, aber nicht adelig',
          'Nur Kirchendienst',
          'Ohne Land'
        ],
        correct: 1,
        expl: 'Sie pflügten eigenes Land und waren zur Landesverteidigung verpflichtet.'
      }
    ]
  },
  {
    q: 7,
    questions: [
      {
        text: 'Wie wurden Ämter zu Titeln?',
        options: [
          'König verbot Erbe',
          'Beamte gaben Posten an Söhne weiter',
          'Kirche benannte alles um',
          'Bauern wählten Namen'
        ],
        correct: 1,
        expl: 'Grafen/Vizegrafen «privatisierten» ihre Sitze.'
      },
      {
        text: 'Was geschah mit Grafschaften und Baronien?',
        options: [
          'Sie verschwanden über Nacht',
          'Wurden Erbbesitz — vererbbar oder als Mitgift',
          'Gingen nur an die Kirche',
          'Wurden nur gewählt'
        ],
        correct: 1,
        expl: 'Amt wurde Familien-Eigentum.'
      },
      {
        text: 'Warum wurde der Titel «nur noch Rang» beim Absolutismus?',
        options: [
          'Könige schafften alle Titel ab',
          'Neue Beamte/Heere ersetzten alte Feudale — Funktionen weg',
          'Adel gab Land auf',
          'Titel nur für Frauen'
        ],
        correct: 1,
        expl: 'Graf sammelte keine Steuern mehr — nur noch der Name blieb.'
      }
    ]
  },
  {
    q: 8,
    questions: [
      {
        text: 'Warum heißt der Peer «gleich» (par)?',
        options: [
          'Gleich den Bauern',
          'König erkannte höchste Elite als seinesgleichen in Ehre',
          'Alle Peers gleich arm',
          'Übersetzung von «Parliament»'
        ],
        correct: 1,
        expl: 'Herzöge bis Barone — «Peers» mit besonderem Ehrenrang.'
      },
      {
        text: 'Wer ist Peer in Großbritannien?',
        options: ['Baronet', 'Earl (Graf)', 'Ritter ohne Titel', 'Yeoman'],
        correct: 1,
        expl: 'Baronets und Ritter — adelig, aber keine Peers.'
      },
      {
        text: 'Warum schuf Jakob I. 1611 Baronets?',
        options: [
          'Nur für Krieger',
          'Titelsverkauf für Geld — Irland-Krieg',
          'Ersatz aller Herzöge',
          'Parlamentsauftrag'
        ],
        correct: 1,
        expl: 'Erblich mit «Sir», aber kein Peer.'
      }
    ]
  },
  {
    q: 9,
    questions: [
      {
        text: '«Lord» ist…',
        options: [
          'Ein eigenständiger Höchsttitel',
          'Höfliche Anrede, kein eigener Titel',
          'Nur Titel für Königssöhne',
          'Synonym für Bauer'
        ],
        correct: 1,
        expl: 'Hlāford — Anrede für Barone bis Marquess und Herzogssöhne.'
      },
      {
        text: 'Wie wird Seniorität zweier Earls bestimmt?',
        options: [
          'Nach Körpergröße',
          'Nach Datum der Titelschöpfung — älter = höher',
          'Nach Burgenzahl',
          'Alphabetisch'
        ],
        correct: 1,
        expl: 'Alter Baronentitel kann prestigeträchtiger sein als neuer Herzogstitel.'
      },
      {
        text: 'Was ist «Titelsinflation» in der Frühen Neuzeit?',
        options: [
          'Titel wurden seltener',
          'Rang ohne Land/Macht — Intendanten regierten',
          'König verbot Marquis',
          'Nur Frauentitel'
        ],
        correct: 1,
        expl: 'XVII. Jh.: oft Papier und Eitelkeit statt echter Gewalt.'
      }
    ]
  },
  {
    q: 10,
    questions: [
      {
        text: 'Was zeigt Athos und Porthos bei Dumas?',
        options: [
          'Baron immer ärmer als Graf',
          'Titel ≠ Reichtum und echte Macht',
          'Grafen gab es in Frankreich nicht',
          'Dumas schrieb Dokumentation'
        ],
        correct: 1,
        expl: 'Titel = Abstammung; Porthos konnte reicher sein.'
      },
      {
        text: 'Wie wird die Markgraf-Evolution beschrieben?',
        options: [
          'Vom Dichter zum Mönch',
          'Vom Grenzkommandanten zum pudrigen Marquis',
          'Vom Bauer zum König in einem Jahr',
          'Unverändert'
        ],
        correct: 1,
        expl: 'Praktische Grenzfunktion wurde Luxus und Etikette.'
      },
      {
        text: 'Was ist das historische Paradox der Titel?',
        options: [
          'Titel waren von Anfang an dekorativ',
          'Titel war Arbeit: richten, Korn, Krieg, Garnison',
          'Adel diente nie dem König',
          'Barone immer ärmer als Bauern'
        ],
        correct: 1,
        expl: 'Adel bedeutete harte Arbeit für den König — nicht nur Glanz.'
      }
    ]
  }
]

function quizDe(q) {
  const de = quizzesDE[q.q - 1]
  const lines = de.questions
    .map(
      (qu, i) =>
        `      { id: 'q-ntl-${q.q}-${i + 1}-de', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
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
    return `      { id: 'q-ntl-f-${i + 1}', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
  })
  .join(',\n')

const finalQuizDe = quizzesDE
  .flatMap(q => q.questions)
  .map((qu, i) => {
    return `    { id: 'q-ntl-f-${i + 1}-de', text: ${JSON.stringify(qu.text)}, type: 'multiple-choice', options: ${JSON.stringify(qu.options)}, correctAnswer: ${qu.correct}, explanation: ${JSON.stringify(qu.expl)} }`
  })
  .join(',\n')

const sessionRu = `import { Session } from '../types/session'

export const medievalNobleTitlesSessionRU: Session = {
  id: 'medieval-noble-titles',
  title: 'Как появились дворянские титулы и кем эти люди были изначально',
  description:
    'Тридцать слайдов о происхождении средневековых титулов: от свободного слуги и рыцаря-солдата до графа-бухгалтера, маркграфа на границе, наследования должностей и британских пэров — без ссылок в тексте.',
  type: 'discussion',
  category: 'История',
  duration: 90,
  structure: {
    greeting:
      'Граф, барон, герцог — красивые слова из романов. Но изначально это были должности: судить, собирать налоги, воевать на границе.',
    mainContent:
      'От министериалов и рыцарей-баннеретов до Magna Carta, иерархии британских пэров, баронетов Якова I и «инфляции титулов» эпохи мушкетёров.',
    interactive: 'Десять мини-викторин по три вопроса и итоговая викторина на тридцать вопросов.',
    additional: 'Иллюстрации по IMAGE_LIST.html и IMAGE_LIST.md в public/media/medieval-noble-titles/.',
    closing:
      'Главный парадокс: быть знатным изначально значило тяжело работать на короля — а не только носить красивое звание.'
  },
  slides: [
${ruParts.join(',\n\n')}
  ],
  quiz: {
    id: 'quiz-medieval-noble-titles',
    title: 'Итоговая викторина: дворянские титулы',
    questions: [
${finalQuizRu}
    ]
  },
  metadata: {
    created: '2026-06-10',
    updated: '2026-06-10',
    tags: ['история', 'средневековье', 'дворянство', 'титулы', 'феодализм', 'обсуждение'],
    difficulty: 'medium'
  }
}
`

const sessionDe = `import { Slide, QuizBlock } from '../types/session'

export const medievalNobleTitlesSlidesDE: Slide[] = [
${deParts.join(',\n\n')}
]

export const medievalNobleTitlesFinalQuizDE: QuizBlock = {
  id: 'quiz-medieval-noble-titles-de',
  title: 'Abschlussquiz: Adelstitel im Mittelalter',
  questions: [
${finalQuizDe}
  ]
}
`

const sessionTitle =
  'Как появились дворянские титулы и кем эти люди были изначально'

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
  <title>IMAGE LIST — Дворянские титулы</title>
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
const mediaDir = join(root, 'public/media/medieval-noble-titles')
mkdirSync(mediaDir, { recursive: true })

writeFileSync(join(root, 'src/data/medieval-noble-titles-session.ts'), sessionRu, 'utf8')
writeFileSync(join(root, 'src/i18n/medieval-noble-titles-content-de.ts'), sessionDe, 'utf8')
writeFileSync(join(mediaDir, 'IMAGE_LIST.md'), imageListMd, 'utf8')
writeFileSync(join(mediaDir, 'IMAGE_LIST.html'), imageListHtml, 'utf8')
writeFileSync(join(mediaDir, 'README.md'), readmeMd, 'utf8')
console.log('Generated session and media list files')
