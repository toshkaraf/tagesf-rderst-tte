import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const stories = [
  { f: '01-pirate-ransom.jpg', tRu: 'Выкуп занижен', tDe: 'Lösegeld zu niedrig', ru: 'Когда пираты потребовали за Цезаря 20 талантов, он оскорбился и сказал, что они явно не понимают, кого поймали. Он сам предложил 50 — и пираты, озадаченные, согласились, решив, что пленник просто странный.', de: 'Als die Piraten für Caesar 20 Talente forderten, fühlte er sich beleidigt und erklärte, sie hätten nicht begriffen, wen sie da hätten. Er schlug selbst 50 vor — die Piraten, ratlos, willigten ein und hielten ihn für einen merkwürdigen Reichen.' },
  { f: '02-pirate-crucifixion.jpg', tRu: 'Распятие как обещание', tDe: 'Kreuzigung als Versprechen', ru: 'Всё время плена Цезарь дружески общался с пиратами, играл с ними, читал стихи и при этом регулярно обещал их всех распять. Пираты хохотали. Когда выкуп был выплачен, Цезарь снарядил флот, поймал их и распял — велев сначала перерезать горло, потому что всё-таки сдружился.', de: 'In der Gefangenschaft spielte Caesar freundschaftlich mit den Piraten und versprach regelmäßig, sie alle zu kreuzigen — die lachten. Nach der Lösegeldzahlung fuhr er aus, fing sie und ließ sie kreuzigen, zuvor aber die Kehle durchschneiden, weil er sich mit ihnen angefreundet hatte.' },
  { f: '03-pirate-silence.jpg', tRu: '«Молчите, я сплю»', tDe: '«Schweigt, ich schlafe»', ru: 'В плену у пиратов Цезарь вёл себя как хозяин положения: когда хотел спать, приказывал пиратам не шуметь. Те, к собственному удивлению, слушались — видимо, авторитет формируется независимо от того, кто чей пленник.', de: 'Bei den Piraten benahm er sich wie der Herr der Lage: Wollte er schlafen, befahl er Ruhe — und die Piraten gehorchten, zu ihrer eigenen Überraschung. Autorität entsteht offenbar unabhängig davon, wer wessen Gefangener ist.' },
  { f: '04-alps-first-village.jpg', tRu: 'Лучше первый в деревне', tDe: 'Lieber der Erste im Dorf', ru: 'Проезжая через нищую альпийскую деревушку, Цезарь сказал друзьям, что предпочёл бы быть первым человеком здесь, чем вторым в Риме. Друзья засмеялись. Цезарь не смеялся — он говорил совершенно серьёзно, что было смешнее любой шутки.', de: 'In einem armen Alpendorf sagte er zu Freunden, er wolle lieber der Erste hier sein als der Zweite in Rom. Die lachten — er meinte es todernst, was komischer war als jeder Witz.' },
  { f: '05-alexander-statue-tears.jpg', tRu: 'Плач у статуи', tDe: 'Tränen vor der Statue', ru: 'В испанской библиотеке Цезарь увидел статую Александра Македонского и расплакался. На вопрос спутников он ответил: «Александр в мои годы уже завоевал полмира, а я до сих пор не сделал ничего достойного». Ему было около тридцати.', de: 'In einer spanischen Bibliothek sah er eine Statue Alexanders des Großen und weinte. Auf die Frage der Begleiter: In seinem Alter habe Alexander schon halb die Welt erobert, er selbst noch nichts Bemerkenswertes — er war etwa dreißig.' },
  { f: '06-laurel-baldness.jpg', tRu: 'Венок — лучшая награда', tDe: 'Der Kranz als beste Auszeichnung', ru: 'Из всех почестей сената Цезарь больше всего ценил право постоянно носить лавровый венок. Светоний пишет: потому что венок скрывал лысину. Диктатор Рима боролся с облысением так же упорно, как с Верцингеториксом.', de: 'Unter allen Ehren des Senats schätzte Caesar am meisten das Recht, dauernd einen Lorbeerkranz zu tragen — Sueton: weil er die Glatze verbarg. Der Diktator kämpfte gegen Haarausfall so hart wie gegen Vercingetorix.' },
  { f: '07-triumph-soldiers-song.jpg', tRu: 'Песня на триумфе', tDe: 'Soldatenlied beim Triumph', ru: 'На триумфе солдаты пели и хвалебное, и насмешливое. О Цезаре: «Прячьте жён — ведём лысого развратника!» Цезарь шёл впереди и улыбался — репутация донжуана его не огорчала, лысину он давно принял как данность.', de: 'Beim Triumph sangen die Soldaten Spottverse: «Versteckt die Frauen — wir führen den kahlen Schürzenjäger!» Caesar ging voraus und lächelte; den Ruf des Verführers störte ihn nicht, die Glatze hatte er längst akzeptiert.' },
  { f: '08-caesar-hairstyle-wreath.jpg', tRu: 'Причёска диктатора', tDe: 'Frisur des Diktators', ru: 'Цезарь зачёсывал редкие волосы с затылка на лоб. Светоний замечает, что он болезненно реагировал, когда в сенате враги срывали с него венок — это была и политическая провокация, и личное оскорбление.', de: 'Er kämmte die spärlichen Haare vom Hinterkopf nach vorn. Sueton: Er reagierte heftig, wenn ihm im Senat der Kranz gerissen wurde — politische Provokation und persönliche Kränkung zugleich.' },
  { f: '09-storm-ship-caesar.jpg', tRu: '«Ты везёшь Цезаря»', tDe: '«Du trägst Caesar»', ru: 'Во время шторма Цезарь инкогнито сел в рыбацкую лодку. Когда кормчий испугался волн, Цезарь открыл имя: «Смелее! Ты везёшь Цезаря и его удачу!» Кормчий, по всей видимости, воспринял это как дополнительный повод для паники.', de: 'Im Sturm fuhr er inkognito in einem Fischerboot. Als der Steuermann die Wellen fürchtete, nannte er sich: «Mut! Du trägst Caesar und sein Glück!» — was den Mann vermutlich noch nervöser machte.' },
  { f: '10-africa-embrace.jpg', tRu: 'Обнял землю', tDe: 'Die Erde umarmen', ru: 'В Африке, высаживаясь, Цезарь споткнулся и упал лицом вниз. Солдаты замерли — дурное предзнаменование! Он раскинул руки, обнял землю и воскликнул: «Держу тебя, Африка!» Армия разразилась смехом и пошла в бой с подъёмом.', de: 'Beim Landgang in Afrika stolperte er und fiel flach hin — die Soldaten erstarrten. Er breitete die Arme aus, umarmte den Boden: «Ich halte dich, Afrika!» Die Armee lachte und ging mit neuem Schwung in den Kampf.' },
  { f: '11-alexandria-swim-documents.jpg', tRu: 'Переправа с документами', tDe: 'Schwimmen mit Akten', ru: 'В Александрии, спасаясь вплавь под стрелами, Цезарь держал важные бумаги над головой, чтобы не намочить, а военный плащ тащил зубами. Солдаты пересказывали эпизод с восхищением и лёгким недоумением.', de: 'In Alexandria schwamm er unter Pfeilen und hielt wichtige Papiere trocken über dem Kopf, den Mantel zwischen den Zähnen. Die Soldaten erzählten das später mit Bewunderung und leichtem Kopfschütteln.' },
  { f: '12-alesia-double-siege.jpg', tRu: 'Осада с двух сторон', tDe: 'Doppelbelagerung', ru: 'При Алезии Цезарь осаждал Верцингеторикса изнутри и сам был осаждён галльской армией снаружи. На тревожный доклад об атаках с обеих сторон он ответил, что воевать в двух направлениях эффективнее — экономит время.', de: 'Bei Alesia belagerte er Vercingetorix innen und wurde außen von einer riesigen gallischen Armee belagert. Auf die Meldung von beiden Seiten antwortete er, in zwei Richtungen zu kämpfen spare Zeit.' },
  { f: '13-sulla-letters.jpg', tRu: '«Сулла не знал букв»', tDe: '«Sulla konnte nicht lesen»', ru: 'Друзья удивлялись, почему Цезарь не устраивает проскрипции, как Сулла. Цезарь отвечал: «Сулла не знал букв» — образованный человек понимает: живой, обязанный тебе враг полезнее мёртвого.', de: 'Warum keine Proskriptionen wie Sulla? Caesar: «Sulla konnte nicht lesen» — ein Gebildeter weiß: ein lebender, dir verpflichteter Feind nützt mehr als ein toter.' },
  { f: '14-debts-politics.jpg', tRu: 'Долги как стратегия', tDe: 'Schulden als Strategie', ru: 'В молодости Цезарь набрал астрономические долги — около 25 миллионов сестерциев. Он объяснял: политику нужны либо деньги, либо долги; второе лучше — кредиторы кровно заинтересованы в твоём успехе.', de: 'In der Jugend machte er riesige Schulden (~25 Mio. Sesterzen). Politik brauche Geld oder Schulden — letzteres sei besser, denn Gläubiger hätten ein vitales Interesse an deinem Aufstieg.' },
  { f: '15-lupercalia-crown.jpg', tRu: 'Корона — три раза «нет»', tDe: 'Die Krone — dreimal Nein', ru: 'На Луперкалиях Антоний трижды предлагал царскую корону. Цезарь трижды отказался под аплодисменты. Цицерон писал, что спектакль был срежиссирован: Цезарь проверял готовность народа к монархии.', de: 'Bei den Luperkalien bot Antonius dreimal die Königskrone an — Caesar lehnte dreimal unter Applaus ab. Cicero meinte, es sei inszeniert: Caesar testete, ob das Volk die Monarchie wolle.' },
  { f: '16-pontius-aquila.jpg', tRu: 'Понтий Аквила', tDe: 'Pontius Aquila', ru: 'Трибун Понтий Аквила не встал, когда Цезарь проезжал мимо трибун. Цезарь был взбешён и несколько дней к каждому публичному обещанию добавлял: «…если, конечно, Понтий Аквила позволит».', de: 'Der Tribun Pontius Aquila blieb sitzen, als Caesar vorbeifuhr. Caesar war wütend und ergänzte tagelang jedes öffentliche Versprechen mit: «…sofern Pontius Aquila einwilligt.»' },
  { f: '17-pompey-blame.jpg', tRu: '«Это не я, это Помпей»', tDe: '«Nicht ich — Pompeius»', ru: 'Когда предъявляли обвинения в злоупотреблениях в провинции, Цезарь отвечал, что он скромный человек, а вот Помпей завоевал полмира не совсем законными методами.', de: 'Bei Vorwürfen der Amtsmissbräuche in der Provinz erwiderte er kühl, er sei bescheiden — Pompeius habe halb die Welt mit nicht ganz legalen Methoden erobert.' },
  { f: '18-veni-vidi-vici.jpg', tRu: 'Veni, vidi, vici', tDe: 'Veni, vidi, vici', ru: 'После молниеносной победы над Фарнаком Цезарь прислал в Рим донесение из трёх слов: «Пришёл, увидел, победил». Краткость — издёвка над полководцами, которые слали реляции на десятках страниц.', de: 'Nach dem Blitzsieg über Pharnaces schickte er den berühmten Dreizeiler nach Rom — eine gezielte Spitze gegen Feldherren mit seitenlangen Siegesberichten.' },
  { f: '19-envy-reply.jpg', tRu: 'Ответ завистнику', tDe: 'Antwort an den Neider', ru: 'Сенатор публично говорил, что Цезарь добился всего нечестными методами. Цезарь ответил: «Приятно слышать, что ты признаёшь мой путь путём к успеху».', de: 'Ein Senator sagte, Caesar habe alles mit unlauteren Mitteln erreicht. Caesar: «Schön, dass du meinen Weg als Erfolgsrezept anerkennst.»' },
  { f: '20-bad-poet-coins.jpg', tRu: 'Плохой поэт', tDe: 'Der schlechte Dichter', ru: 'Бездарный поэт преподнёс вирши с намёком на щедрую награду. Цезарь велел выдать столько монет, сколько, по его мнению, стоили стихи. Поэт получил крайне мало.', de: 'Ein mittelmäßiger Dichter bot Verse gegen großzügige Belohnung an. Caesar ließ so viel zahlen, wie die Verse seiner Meinung nach wert waren — sehr wenig.' },
  { f: '21-cicero-speech.jpg', tRu: 'О Цицероне', tDe: 'Zu Cicero', ru: 'После длинной блестящей речи Цицерона Цезарь сказал: «Аргументы великолепны. Именно поэтому я с тобой не соглашусь — иначе ты решишь, что всегда прав».', de: 'Nach einer langen glänzenden Rede Ciceros: «Die Argumente sind großartig — deshalb stimme ich nicht zu, sonst glaubst du, du hättest immer recht.»' },
  { f: '22-asparagus-myrrh.jpg', tRu: 'Спаржа с миррой', tDe: 'Spargel mit Myrrhe', ru: 'Хозяин подал спаржу с миррой вместо масла. Цезарь съел без замечаний и отругал гостей, которые морщились: «Достаточно просто не есть то, что не нравится — необязательно делать замечания хозяину».', de: 'Spargel mit Myrrhe statt Öl — Caesar aß schweigend und tadelte Gäste, die sich rümpften: Man solle essen, was einem nicht schmeckt, ohne den Gastgeber zu kritisieren.' },
  { f: '23-ides-march-spurinna.jpg', tRu: '«Бойся мартовских ид»', tDe: '«Hüte dich vor den Iden»', ru: 'Прорицатель Спуринна предупредил об опасности в мартовские иды. 15 марта Цезарь крикнул ему: «Иды марта наступили!» Спуринна ответил: «Да — но ещё не прошли». Через час Цезарь был мёртв.', de: 'Der Seher Spurinna warnte vor den Iden des März. Am 15. rief Caesar: «Die Iden sind da!» — «Ja, aber sie sind noch nicht vorbei», antwortete Spurinna. Eine Stunde später war Caesar tot.' },
  { f: '24-sudden-death.jpg', tRu: 'Лучшая смерть', tDe: 'Der beste Tod', ru: 'За несколько дней до убийства в разговоре о хорошей смерти Цезарь ответил: «Внезапную». 15 марта 44 г. до н. э. он получил именно такую — 23 удара кинжалом.', de: 'Tage vor dem Mord fragte man nach einem guten Tod. Caesar: «Einen plötzlichen.» Am 15. März 44 v. Chr. traf genau das zu — 23 Dolchstiche.' },
  { f: '25-death-toga-fall.jpg', tRu: 'Последний жест', tDe: 'Letzte Geste', ru: 'Когда удары посыпались, Цезарь перестал сопротивляться, закутался в тогу и упал, позаботившись, чтобы упасть красиво — укрыв ноги краем одежды. Даже умирая, он думал о том, как будет выглядеть.', de: 'Als die Stiche kamen, hörte er auf zu wehren, hüllte sich in die Toga und fiel so, dass die Beine bedeckt waren — selbst im Sterben achtete er auf das Bild.' },
  { f: '26-caesar-will-people.jpg', tRu: 'Завещание как месть', tDe: 'Das Testament als Rache', ru: 'В завещании Цезарь оставил каждому римскому гражданину по 300 сестерциев и открыл сады для публики. Когда Антоний зачитал это на форуме, толпа бросилась жечь дома убийц — удар из могилы точнее, чем при жизни.', de: 'Im Testament 300 Sesterzen pro Bürger und öffentliche Gärten. Als Antonius es verlas, stürmte das Volk zu den Häusern der Mörder — ein postumer Schlag.' },
  { f: '27-seven-secretaries.jpg', tRu: 'Семь писем одновременно', tDe: 'Sieben Diktate gleichzeitig', ru: 'Цезарь диктовал письма нескольким секретарям одновременно — по разным темам. Светоний пишет, что в напряжённые моменты число доходило до семи. Современники воспринимали это как сверхъестественное.', de: 'Er diktierte gleichzeitig an mehrere Schreiber, in heißen Phasen bis zu sieben, berichtet Sueton — Zeitgenossen hielten das für übernatürlich.' },
  { f: '28-epilepsy.jpg', tRu: 'Эпилепсия — не помеха', tDe: 'Epilepsie kein Hindernis', ru: 'Приступы случались во время кампаний. Цезарь не скрывал этого: приходил в себя — и продолжал командовать. Плутарх пишет, что солдаты уважали его за это даже больше, чем за победы.', de: 'Anfälle mitten in Feldzügen — er verbarg sie nicht, kam zu sich und kommandierte weiter. Plutarch: Die Soldaten respektierten ihn dafür fast mehr als für Siege.' },
  { f: '29-superstition.jpg', tRu: '«Я не суеверен, но…»', tDe: '«Ich bin nicht abergläubisch, aber…»', ru: 'Цезарь высмеивал суеверия, но Светоний фиксирует: он соблюдал обряды, не выезжал в «несчастливые» дни и трижды обходил опрокинутую повозку. «Я не верю в приметы. Я их просто уважаю».', de: 'Er spottete über Aberglauben, befolgte aber Riten, meidete ungünstige Tage und umging umgestürzte Wagen dreimal. «Ich glaube nicht an Zeichen — ich respektiere sie.»' },
  { f: '30-cleopatra-carpet.jpg', tRu: 'Клеопатра из ковра', tDe: 'Kleopatra aus dem Teppich', ru: 'Клеопатра велела завернуть себя в ковёр и пронести во дворец мимо охраны. Когда перед Цезарем развернули свёрток, он был очарован — не столько красотой, сколько изобретательностью.', de: 'Kleopatra ließ sich in einen Teppich wickeln und als Fracht ins Palastinnere schmuggeln. Als man sie vor Caesar ausrollte, beeindruckte ihn vor allem die List.' }
]

const blockQuizRU = [
  [
    { id: 'q-cae-1-1', text: 'Сколько талантов выкупа сначала назвали пираты за Цезаря?', type: 'multiple-choice', options: ['20', '50', '30', '100'], correctAnswer: 0, explanation: 'Цезарь счёл сумму заниженной и предложил 50.' },
    { id: 'q-cae-1-2', text: 'Что, по рассказу, Цезарь сделал с пиратами после выплаты выкупа?', type: 'multiple-choice', options: ['Отпустил без наказания', 'Поймал и казнил (сначала перерезав горло)', 'Взял в легион', 'Назначил магистратами'], correctAnswer: 1, explanation: 'Он сдержал обещание, но сначала перерезал горло из-за «дружбы».' },
    { id: 'q-cae-1-3', text: 'Чего требовал Цезарь от пиратов, когда хотел спать?', type: 'multiple-choice', options: ['Не шуметь', 'Петь', 'Грести быстрее', 'Готовить ужин'], correctAnswer: 0, explanation: 'Он вел себя как хозяин и приказывал тишину.' }
  ],
  [
    { id: 'q-cae-2-1', text: 'Перед статуей кого плакал Цезарь в испанской библиотеке?', type: 'multiple-choice', options: ['Александра Македонского', 'Сципиона', 'Ганнибала', 'Помпея'], correctAnswer: 0, explanation: 'Сравнение с Александром в «мои годы».' },
    { id: 'q-cae-2-2', text: 'Почему, по Светонию, особенно ценилось право носить лавровый венок?', type: 'multiple-choice', options: ['Он скрывал лысину', 'Он давал иммунитет в суде', 'Он был дешевле тоги', 'Он заменял лавры на дуб'], correctAnswer: 0, explanation: 'Венок маскировал облысение.' },
    { id: 'q-cae-2-3', text: 'Кем Цезарь предпочёл бы быть в нищей альпийской деревне?', type: 'multiple-choice', options: ['Первым здесь, а не вторым в Риме', 'Вторым здесь', 'Сенатором деревни', 'Жрецом Юпитера'], correctAnswer: 0, explanation: 'Знаменитая фраза про первого в деревне.' }
  ],
  [
    { id: 'q-cae-3-1', text: 'Кого «вели» солдаты в насмешливой песне на триумфе?', type: 'multiple-choice', options: ['«Лысого развратника»', 'Помпея', 'Катилину', 'Цицерона'], correctAnswer: 0, explanation: 'Споты про Цезаря и лысину.' },
    { id: 'q-cae-3-2', text: 'Как Цезарь маскировал редкие волосы, по описанию?', type: 'multiple-choice', options: ['Зачёсывал с затылка на лоб', 'Брил голову', 'Носил парик', 'Не трогал'], correctAnswer: 0, explanation: 'Светоний описывает причёску.' },
    { id: 'q-cae-3-3', text: 'Что Цезарь сказал испуганному кормчему в шторм?', type: 'multiple-choice', options: ['«Ты везёшь Цезаря и его удачу!»', '«Разворачивайся!»', '«Бросай якорь!»', '«Я — не Цезарь»'], correctAnswer: 0, explanation: 'После раскрытия личности.' }
  ],
  [
    { id: 'q-cae-4-1', text: 'Что крикнул Цезарь, упав на берег в Африке?', type: 'multiple-choice', options: ['«Держу тебя, Африка!»', '«Помощь!»', '«Назад на корабль!»', '«Слава Риму!»'], correctAnswer: 0, explanation: 'Обнял землю и превратил падение в жест.' },
    { id: 'q-cae-4-2', text: 'В Александрии Цезарь, спасаясь вплавь, держал над головой…', type: 'multiple-choice', options: ['Бумаги, чтобы не намочить', 'Щит', 'Золото', 'Меч'], correctAnswer: 0, explanation: 'Документы важнее мокрого плаща.' },
    { id: 'q-cae-4-3', text: 'При Алезии армия Цезаря была в ситуации…', type: 'multiple-choice', options: ['Одновременно осаждала и была осаждена', 'Только атаковала извне', 'Только оборонялась в городе', 'Отступала в Германию'], correctAnswer: 0, explanation: 'Двойное кольцо осад.' }
  ],
  [
    { id: 'q-cae-5-1', text: 'Почему Цезарь якобы не устраивал проскрипции, как Сулла?', type: 'multiple-choice', options: ['«Сулла не знал букв» — живой враг полезнее', 'Боялся сената', 'Не умел читать', 'Любил Суллу'], correctAnswer: 0, explanation: 'Известная реплика о грамоте и политике.' },
    { id: 'q-cae-5-2', text: 'Сколько сестерциев долгов называют в рассказе о молодом Цезаре (порядок)?', type: 'multiple-choice', options: ['Около 25 миллионов', '1 миллион', '100 тысяч', '500 тысяч'], correctAnswer: 0, explanation: 'Астрономическая сумма по источникам.' },
    { id: 'q-cae-5-3', text: 'Сколько раз на Луперкалиях предлагали Цезарю корону, по рассказу?', type: 'multiple-choice', options: ['Три', 'Один', 'Десять', 'Ни разу'], correctAnswer: 0, explanation: 'Антоний и три отказа.' }
  ],
  [
    { id: 'q-cae-6-1', text: 'Кто не встал, когда Цезарь проезжал мимо трибун?', type: 'multiple-choice', options: ['Трибун Понтий Аквила', 'Цицерон', 'Брут', 'Клеопатра'], correctAnswer: 0, explanation: 'За это Цезарь травил сарказмом.' },
    { id: 'q-cae-6-2', text: 'На кого Цезарь перекладывал вину за «незаконные» завоевания в ответ на обвинения?', type: 'multiple-choice', options: ['На Помпея', 'На Красс', 'На Суллу', 'На себя'], correctAnswer: 0, explanation: '«Это не я — это Помпей».' },
    { id: 'q-cae-6-3', text: 'Какую трёхсловную фразу прислал Цезарь после победы над Фарнаком?', type: 'multiple-choice', options: ['Veni, vidi, vici', 'Ave, Caesar', 'Carpe diem', 'Et tu, Brute'], correctAnswer: 0, explanation: 'Классическое донесение.' }
  ],
  [
    { id: 'q-cae-7-1', text: 'Ответ завистнику о «нечестных методах» сводился к тому, что…', type: 'multiple-choice', options: ['Он признаёт путь к успеху', 'Он вызовет на дуэль', 'Он пожалуется сенату', 'Он заплачет'], correctAnswer: 0, explanation: 'Саркастическое «приятно слышать».' },
    { id: 'q-cae-7-2', text: 'Как Цезарь «оценил» стихи навязчивого поэта?', type: 'multiple-choice', options: ['Выдал монет по качеству стихов — очень мало', 'Сделал его лавреатом', 'Сжёг свиток', 'Назначил библиотекарем'], correctAnswer: 0, explanation: 'Щедрость пропорциональна мнению о тексте.' },
    { id: 'q-cae-7-3', text: 'Почему Цезарь отказался согласиться с Цицероном после блестящей речи?', type: 'multiple-choice', options: ['Чтобы Цицерон не решил, что всегда прав', 'Потому что не слышал', 'Потому что спал', 'Потому что не знал латынь'], correctAnswer: 0, explanation: 'Остроумный отказ.' }
  ],
  [
    { id: 'q-cae-8-1', text: 'Чем приправили спаржу на том обеде?', type: 'multiple-choice', options: ['Миррой вместо масла', 'Перцем', 'Уксусом', 'Мёдом'], correctAnswer: 0, explanation: 'Ошибка или скупость хозяина.' },
    { id: 'q-cae-8-2', text: 'Как ответил Спуринна на слова Цезаря «Иды наступили»?', type: 'multiple-choice', options: ['«Да, но ещё не прошли»', '«Всё будет хорошо»', '«Иди домой»', '«Я ошибся»'], correctAnswer: 0, explanation: 'Знаменитый обмен перед убийством.' },
    { id: 'q-cae-8-3', text: 'Какую смерть Цезарь назвал лучшей за несколько дней до убийства?', type: 'multiple-choice', options: ['Внезапную', 'В бою', 'В постели', 'От старости'], correctAnswer: 0, explanation: 'Ирония судьбы.' }
  ],
  [
    { id: 'q-cae-9-1', text: 'Сколько ударов кинжалом называют в рассказе об убийстве 15 марта 44 г. до н. э.?', type: 'multiple-choice', options: ['23', '7', '1', '40'], correctAnswer: 0, explanation: 'Традиционное число в поздней традиции.' },
    { id: 'q-cae-9-2', text: 'Сколько сестерциев завещал каждому гражданинину Цезарь, по рассказу?', type: 'multiple-choice', options: ['300', '30', '3000', '0'], correctAnswer: 0, explanation: 'Завещание и народный гнев на убийц.' },
    { id: 'q-cae-9-3', text: 'До скольких секретарей одновременно диктовал Цезарь в «напряжённые» моменты, по Светонию?', type: 'multiple-choice', options: ['До семи', 'До двух', 'До трёх', 'До десяти'], correctAnswer: 0, explanation: 'Светоний о многозадачности.' }
  ],
  [
    { id: 'q-cae-10-1', text: 'Кто, по Плутарху в этой линии рассказов, особенно ценил стойкость Цезаря при приступах?', type: 'multiple-choice', options: ['Солдаты', 'Сенаторы', 'Жрецы', 'Пираты'], correctAnswer: 0, explanation: 'Эпилепсия на кампании.' },
    { id: 'q-cae-10-2', text: 'Как Цезарь формулировал отношение к приметам?', type: 'multiple-choice', options: ['«Не верю — но уважаю»', '«Верю вслепую»', '«Премечты — ерунда»', '«Только греческие»'], correctAnswer: 0, explanation: 'Противоречие суеверию и обряду.' },
    { id: 'q-cae-10-3', text: 'Как Клеопатра, по рассказу, попала к Цезарю мимо охраны Птолемея?', type: 'multiple-choice', options: ['В ковре как груз', 'В бочке', 'По подземному ходу', 'В лодке ночью'], correctAnswer: 0, explanation: 'Знаменитый трюк с ковром.' }
  ]
]

const blockQuizDE = [
  [
    { id: 'q-cae-1-1-de', text: 'Wie viele Talente forderten die Piraten zuerst für Caesar?', type: 'multiple-choice', options: ['20', '50', '30', '100'], correctAnswer: 0, explanation: 'Er hielt die Summe für zu niedrig und schlug 50 vor.' },
    { id: 'q-cae-1-2-de', text: 'Was tat Caesar den Piraten nach der Lösegeldzahlung laut Erzählung?', type: 'multiple-choice', options: ['Ließ sie frei', 'Stellte sie und ließ sie kreuzigen (nach Halsdurchschnitt)', 'nahm sie in die Legion', 'machte sie zu Magistraten'], correctAnswer: 1, explanation: 'Er hielt Wort, schnitt aber zuerst die Kehle durch.' },
    { id: 'q-cae-1-3-de', text: 'Was befahl Caesar den Piraten, wenn er schlafen wollte?', type: 'multiple-choice', options: ['Ruhe / nicht lärmend', 'Lieder singen', 'schneller rudern', 'Abendessen kochen'], correctAnswer: 0, explanation: 'Er gab sich als Herr der Lage.' }
  ],
  [
    { id: 'q-cae-2-1-de', text: 'Vor wessen Statue weinte Caesar in einer spanischen Bibliothek?', type: 'multiple-choice', options: ['Alexander der Große', 'Scipio', 'Hannibal', 'Pompeius'], correctAnswer: 0, explanation: 'Vergleich mit Alexanders Alter.' },
    { id: 'q-cae-2-2-de', text: 'Warum schätzte Caesar den Lorbeerkranz besonders, laut Sueton?', type: 'multiple-choice', options: ['Er verbarg die Glatze', 'Er gab Immunität vor Gericht', 'Er war billig', 'Er ersetzte Eichenlaub'], correctAnswer: 0, explanation: 'Der Kranz kaschierte Haarausfall.' },
    { id: 'q-cae-2-3-de', text: 'Wen wollte Caesar im armen Alpendorf lieber sein?', type: 'multiple-choice', options: ['Den Ersten hier statt den Zweiten in Rom', 'Den Zweiten hier', 'Dorfsenator', 'Jupiterpriester'], correctAnswer: 0, explanation: 'Berühmtes Zitat.' }
  ],
  [
    { id: 'q-cae-3-1-de', text: 'Wen «führten» die Soldaten im Spottlied beim Triumph?', type: 'multiple-choice', options: ['Den «kahlen Schürzenjäger»', 'Pompeius', 'Catilina', 'Cicero'], correctAnswer: 0, explanation: 'Spott über Caesar und Glatze.' },
    { id: 'q-cae-3-2-de', text: 'Wie kaschierte Caesar dünnes Haar?', type: 'multiple-choice', options: ['Vom Hinterkopf nach vorn gekämmt', 'rasierte Kopf', 'trug Perücke', 'ließ es wachsen'], correctAnswer: 0, explanation: 'Sueton zur Frisur.' },
    { id: 'q-cae-3-3-de', text: 'Was rief Caesar dem ängstlichen Steuermann im Sturm zu?', type: 'multiple-choice', options: ['«Du trägst Caesar und sein Glück!»', '«Wende!»', '«Anker werfen!»', '«Ich bin nicht Caesar»'], correctAnswer: 0, explanation: 'Nach der Namensnennung.' }
  ],
  [
    { id: 'q-cae-4-1-de', text: 'Was rief Caesar, als er in Afrika hinfiel?', type: 'multiple-choice', options: ['«Ich halte dich, Afrika!»', '«Hilfe!»', '«Zurück aufs Schiff!»', '«Ruhm Rom!»'], correctAnswer: 0, explanation: 'Er umarmte die Erde.' },
    { id: 'q-cae-4-2-de', text: 'Was hielt Caesar beim Schwimmen in Alexandria über dem Kopf?', type: 'multiple-choice', options: ['Papiere trocken', 'Schild', 'Gold', 'Schwert'], correctAnswer: 0, explanation: 'Akten wichtiger als nasser Mantel.' },
    { id: 'q-cae-4-3-de', text: 'Welche Lage hatte Caesars Heer bei Alesia?', type: 'multiple-choice', options: ['Belagerte und wurde belagert', 'nur von außen angreifend', 'nur in der Stadt', 'zog nach Germanien ab'], correctAnswer: 0, explanation: 'Doppelring der Belagerung.' }
  ],
  [
    { id: 'q-cae-5-1-de', text: 'Warum keine Proskriptionen wie Sulla, laut Pointe?', type: 'multiple-choice', options: ['«Sulla konnte nicht lesen» — lebender Feind nützt mehr', 'Angst vor dem Senat', 'Analphabet', 'Liebe zu Sulla'], correctAnswer: 0, explanation: 'Berühmte Sentenz.' },
    { id: 'q-cae-5-2-de', text: 'Schuldenhöhe der Jugend Caesars (Größenordnung)?', type: 'multiple-choice', options: ['ca. 25 Millionen Sesterzen', '1 Million', '100 000', '500 000'], correctAnswer: 0, explanation: 'Riesige Summe in der Überlieferung.' },
    { id: 'q-cae-5-3-de', text: 'Wie oft bot man Caesar bei den Luperkalien die Krone an?', type: 'multiple-choice', options: ['Dreimal', 'Einmal', 'Zehnmal', 'Nie'], correctAnswer: 0, explanation: 'Antonius und drei Ablehnungen.' }
  ],
  [
    { id: 'q-cae-6-1-de', text: 'Wer blieb sitzen, als Caesar an den Tribunen vorbeifuhr?', type: 'multiple-choice', options: ['Tribun Pontius Aquila', 'Cicero', 'Brutus', 'Kleopatra'], correctAnswer: 0, explanation: 'Caesars Spott folgte tagelang.' },
    { id: 'q-cae-6-2-de', text: 'Wen nannte Caesar bei Provinzvorwürfen als «wirklichen» Eroberer?', type: 'multiple-choice', options: ['Pompeius', 'Crassus', 'Sulla', 'sich selbst'], correctAnswer: 0, explanation: '«Nicht ich — Pompeius».' },
    { id: 'q-cae-6-3-de', text: 'Welche drei lateinischen Worte schickte Caesar nach dem Sieg über Pharnaces?', type: 'multiple-choice', options: ['Veni, vidi, vici', 'Ave Caesar', 'Carpe diem', 'Et tu, Brute'], correctAnswer: 0, explanation: 'Der Siegesbericht.' }
  ],
  [
    { id: 'q-cae-7-1-de', text: 'Worauf zielte Caesars Antwort dem «Neider» über unlautere Mittel?', type: 'multiple-choice', options: ['Er bestätige den Weg zum Erfolg', 'Zum Duell', 'Senatsbeschwerde', 'Tränen'], correctAnswer: 0, explanation: 'Ironische Anerkennung.' },
    { id: 'q-cae-7-2-de', text: 'Wie «honorierte» Caesar den aufdringlichen Dichter?', type: 'multiple-choice', options: ['Münzen nach Wert der Verse — sehr wenig', 'machte ihn zum Poetenlaureaten', 'verbrannte die Rolle', 'ernannte ihn zum Bibliothekar'], correctAnswer: 0, explanation: 'Zahlung proportional zur Meinung.' },
    { id: 'q-cae-7-3-de', text: 'Warum wollte Caesar Cicero nach großer Rede nicht zustimmen?', type: 'multiple-choice', options: ['Sonst glaubt Cicero, immer recht zu haben', 'weil er taub war', 'weil er schlief', 'weil er kein Latein konnte'], correctAnswer: 0, explanation: 'Geistreiche Absage.' }
  ],
  [
    { id: 'q-cae-8-1-de', text: 'Womit wurde der Spargel auf jenem Gastmahl gewürzt?', type: 'multiple-choice', options: ['Myrrhe statt Öl', 'Pfeffer', 'Essig', 'Honig'], correctAnswer: 0, explanation: 'Fehler oder Geiz des Gastgebers.' },
    { id: 'q-cae-8-2-de', text: 'Wie antwortete Spurinna auf «Die Iden sind da»?', type: 'multiple-choice', options: ['«Ja — aber sie sind noch nicht vorbei»', '«Alles wird gut»', '«Geh nach Hause»', '«Ich lag falsch»'], correctAnswer: 0, explanation: 'Berühmter Dialog.' },
    { id: 'q-cae-8-3-de', text: 'Welchen Tod nannte Caesar kurz vor dem Mord als den besten?', type: 'multiple-choice', options: ['Einen plötzlichen', 'im Kampf', 'im Bett', 'im hohen Alter'], correctAnswer: 0, explanation: 'Ironie des Schicksals.' }
  ],
  [
    { id: 'q-cae-9-1-de', text: 'Wie viele Dolchstiche nennt die Überlieferung oft für den 15. März 44 v. Chr.?', type: 'multiple-choice', options: ['23', '7', '1', '40'], correctAnswer: 0, explanation: 'Traditionelle Zahl in späterer Darstellung.' },
    { id: 'q-cae-9-2-de', text: 'Wie viele Sesterzen pro Bürger im Testament Caesars laut Erzählung?', type: 'multiple-choice', options: ['300', '30', '3000', '0'], correctAnswer: 0, explanation: 'Testament und Volkswut.' },
    { id: 'q-cae-9-3-de', text: 'Bis zu wie vielen Schreibern diktierte Caesar in heißen Phasen, laut Sueton?', type: 'multiple-choice', options: ['Sieben', 'Zwei', 'Drei', 'Zehn'], correctAnswer: 0, explanation: 'Multitasking der Antike.' }
  ],
  [
    { id: 'q-cae-10-1-de', text: 'Wer schätzte Caesars Umgang mit Anfällen im Feld besonders, laut Plutarch-Linie?', type: 'multiple-choice', options: ['Die Soldaten', 'Senatoren', 'Priester', 'Piraten'], correctAnswer: 0, explanation: 'Epilepsie im Feldzug.' },
    { id: 'q-cae-10-2-de', text: 'Wie fasste Caesar sein Verhältnis zu Omen zusammen?', type: 'multiple-choice', options: ['«Ich glaube nicht — ich respektiere»', '«Ich glaube blind»', '«Omen sind Quatsch»', '«Nur griechische»'], correctAnswer: 0, explanation: 'Widerspruch zu Riten.' },
    { id: 'q-cae-10-3-de', text: 'Wie gelangte Kleopatra laut Anekdote an Caesar vorbei an der Wache des Ptolemaios?', type: 'multiple-choice', options: ['Im Teppich als Fracht', 'im Fass', 'durch Geheimgang', 'nachts im Boot'], correctAnswer: 0, explanation: 'Berühmter Trick.' }
  ]
]

function quizQuestions(block) {
  return blockQuizRU[block - 1]
}

function quizQuestionsDe(block) {
  return blockQuizDE[block - 1]
}

const mixed = []
for (let i = 1; i <= 3; i++) for (let b = 1; b <= 10; b++) mixed.push(`q-cae-${b}-${i}`)

const questionBank = {}
for (let b = 1; b <= 10; b++) {
  quizQuestions(b).forEach((q) => { questionBank[q.id] = q })
}

const finalQuestions = mixed.map((id) => ({ ...questionBank[id] }))

const questionBankDe = {}
for (let b = 1; b <= 10; b++) {
  quizQuestionsDe(b).forEach((q) => {
    const base = q.id.replace(/-de$/, '')
    questionBankDe[base] = q
  })
}
const finalQuestionsDe = mixed.map((id) => ({ ...questionBankDe[id] }))

function qsToTs(arr, indent) {
  return (
    '[\n' +
    arr
      .map(
        (q) =>
          `${indent}{ id: '${q.id}', text: ${JSON.stringify(q.text)}, type: 'multiple-choice', options: ${JSON.stringify(q.options)}, correctAnswer: ${q.correctAnswer}, explanation: ${JSON.stringify(q.explanation)} }`
      )
      .join(',\n') +
    '\n' +
    indent +
    ']'
  )
}

function slideRu(i) {
  const st = stories[i]
  return `    { id: 'ca${i + 1}', title: ${JSON.stringify(st.tRu)}, content: ${JSON.stringify(st.ru)}, duration: 3, media: [{ type: 'image', url: '/media/caesar-anecdotes/${st.f}', title: ${JSON.stringify(st.tRu)} }] },`
}

function slideDe(i) {
  const st = stories[i]
  return `  { id: 'ca${i + 1}', title: ${JSON.stringify(st.tDe)}, content: ${JSON.stringify(st.de)}, duration: 3, media: [{ type: 'image', url: '/media/caesar-anecdotes/${st.f}', title: ${JSON.stringify(st.tDe)} }] },`
}

let slidesRu = ''
for (let b = 0; b < 10; b++) {
  for (let k = 0; k < 3; k++) {
    slidesRu += slideRu(b * 3 + k) + '\n'
  }
  slidesRu += `    { id: 'q${b + 1}', title: 'Викторина', content: '', duration: 2, questions: ${qsToTs(quizQuestions(b + 1), '      ')} },\n`
}

let slidesDe = ''
for (let b = 0; b < 10; b++) {
  for (let k = 0; k < 3; k++) {
    slidesDe += slideDe(b * 3 + k) + '\n'
  }
  slidesDe += `  { id: 'q${b + 1}', title: 'Quiz', content: '', duration: 2, questions: ${qsToTs(quizQuestionsDe(b + 1), '    ')} },\n`
}

const finalQuizRu = `  quiz: {
    id: 'quiz-caesar-anecdotes',
    title: 'Итоговая викторина: Цезарь — тридцать историй',
    questions: ${qsToTs(finalQuestions, '      ')}
  },`

const finalQuizDe = `export const caesarAnecdotesFinalQuizDE: QuizBlock = {
  id: 'quiz-caesar-anecdotes-de',
  title: 'Abschlussquiz: Caesar — dreißig Geschichten',
  questions: ${qsToTs(finalQuestionsDe, '  ')}
}
`

const headerRu = `// Сессия: Юлий Цезарь — тридцать историй (анекдоты из античных источников)
import { Session } from '../types/session'

export const caesarAnecdotesSessionRU: Session = {
  id: 'caesar-anecdotes',
  title: 'Цезарь: тридцать остроумных историй',
  description:
    'Эпизоды из жизни Гая Юлия Цезаря, переданные Светонием, Плутархом, Цицероном и другими: остроумие, дерзость и характер — с промежуточными викторинами и итоговым тестом.',
  type: 'presentation',
  category: 'История',
  duration: 90,
  structure: {
    greeting: 'Добро пожаловать на занятие о Цезаре!',
    mainContent: 'Тридцать коротких историй — от пиратского плена до мартовских ид — и обсуждение, что в них достоверно, а что литературная полировка',
    interactive: 'Десять мини-викторин по три вопроса и финальный тест на 30 вопросов',
    additional: 'На каждом сюжетном слайде — иллюстрация; подбор по IMAGE_LIST.html',
    closing: 'Итог: античные авторы создали образ Цезаря — различать факт, переданный слух и художественный штрих полезно всегда'
  },
  slides: [
`

const footerRu = `  ],
${finalQuizRu}
  metadata: {
    created: '2026-04-15',
    tags: ['Рим', 'Цезарь', 'античность', 'анекдот', 'история'],
    difficulty: 'medium'
  }
}
`

fs.writeFileSync(path.join(root, 'src/data/caesar-anecdotes-session.ts'), headerRu + slidesRu + footerRu, 'utf8')

const headerDe = `import { QuizBlock, Slide } from '../types/session'

// Deutsch B2: Caesar — dreißig Geschichten

export const caesarAnecdotesSlidesDE: Slide[] = [
`

const footerDe = `]

${finalQuizDe}
`

fs.writeFileSync(path.join(root, 'src/i18n/caesar-anecdotes-content-de.ts'), headerDe + slidesDe + footerDe, 'utf8')

console.log('Regenerated caesar-anecdotes session files.')
