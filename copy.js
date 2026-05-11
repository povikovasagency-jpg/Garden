// Translations for Garden Resto site
// Russian copy is the source-of-truth (provided by owner) — kept verbatim.
// Estonian + English written to match the warm, personal tone.

window.GARDEN_COPY = {
  ru: {
    nav: {
      story: "История",
      breakfast: "Завтраки",
      menu: "Меню",
      desserts: "Десерты",
      events: "Мероприятия",
      contact: "Контакты",
      reserve: "Забронировать стол",
    },

    // Block 2 — Hero
    hero: {
      kicker: "Семейный ресторан · Kalamaja",
      title1: "Мы готовим так,",
      title2: "как готовят дома,",
      title3: "когда ждут гостей.",
      lead: "Приходи на завтрак, обед или просто так. В Garden Resto всегда вкусная еда и люди, которые рады тебя видеть!",
      address: "Таллинн · Vana-Kalamaja 7a",
      hours: "Вт–Вс · завтраки до 17:00",
      ctaMenu: "Смотреть меню",
      ctaFind: "Найти нас",
    },

    // Block 3 — Family story
    story: {
      sectionLabel: "01 — Кто мы",
      heading: "Мы — семья.",
      paragraphs: [
        "Вячеслав — шеф-повар, бармен и официант в одном лице. Именно я встречаю и провожаю вас, когда вы приходите к нам в гости.",
        "Татьяна — моя жена. Её вы редко увидите в зале, но её работу точно пробовали. Это её десерты.",
        "У нас есть две дочки. Наши главные ориентиры и мотиваторы.",
      ],
      timeline: [
        {
          year: "2020",
          title: "Flower Garden Cafe",
          body: "На семейном совете решили — открываем кафе. Открыли двери в Kalamaja. Идея была простая и немного романтичная: вкусно поесть и купить цветы. Потому что иногда мужчина идёт на первое свидание — и совсем забывает про букет. А у нас — и накормили, и в грязь лицом не ударили.",
        },
        {
          year: "2024",
          title: "Garden Cafe",
          body: "Когда карантин наконец закончился и ремонт променада перестал перекрывать все дороги к нашим дверям — цветы переехали в горшки. Мы стали Garden Cafe. Та же душа, просто без срезанных роз.",
        },
        {
          year: "2026",
          title: "Garden Resto",
          body: "Поняли: мы выросли. Пришло время называть вещи своими именами. Новая точка в нашей биографии. Та же семья. Та же душа. Просто с новым названием.",
        },
      ],
    },

    // Block 4 — Place to come back
    comeback: {
      sectionLabel: "02 — Атмосфера",
      heading: "Garden Resto — место, куда хочется возвращаться.",
      caption: "Маленький зал, большие окна, запах кофе и свежей выпечки.",
    },

    // Block 5 — Breakfasts
    breakfast: {
      sectionLabel: "03 — Завтраки",
      heading: "Иногда утро начинается в полдень,",
      heading2: "и мы не осуждаем — наоборот, понимаем.",
      body: "Завтраки в Garden Resto до 17:00 со вторника по воскресенье. Будь это неспешное утро наедине с собой, праздничный завтрак с семьёй, свидание с любимым человеком или случайный незапланированный завтрак в новом найденном месте — мы всегда рады вас видеть.",
      tag: "Подаём до 17:00",
    },

    // Block 6 — Menu items teaser
    dishes: {
      sectionLabel: "04 — Кухня",
      heading: "Каждое блюдо в меню — это то, что мы сами с удовольствием бы ели каждый день и советовали своим родным.",
      items: [
        { name: "Тыквенный суп", caption: "Пармезан, тыквенные семечки", img: "assets/dish-soup.jpeg" },
        { name: "Салат «Цезарь»", caption: "С курицей или креветками", img: "assets/dish-caesar.jpeg" },
        { name: "Пастуший пирог", caption: "Говядина, картофельное пюре, пармезан", img: "assets/dish-pie.jpeg" },
      ],
    },

    // Block 7 — Tatiana's desserts
    desserts: {
      sectionLabel: "05 — Десерты Татьяны",
      heading: "Татьяна — наш кондитер.",
      paragraphs: [
        "Её торты и десерты вызывают восторг у всех — от самых маленьких до взрослых.",
        "Никаких полуфабрикатов. Каждый ингредиент делается вручную — от коржей до фисташковой пасты.",
        "Десерты Тани можно не только попробовать в ресторане, но и заказать для вашего торжества. Стоимость рассчитывается индивидуально по запросу.",
      ],
      favoritesHeading: "Самые любимые десерты наших гостей",
      items: [
        { name: "Манговый чизкейк", img: "assets/dessert-mango.jpeg" },
        { name: "Наполеон", img: "assets/dessert-napoleon.jpeg" },
        { name: "Творожный пирог с лесными ягодами", img: "assets/dessert-berry.jpeg" },
      ],
      cta: "Заказать торт",
    },

    // Block 8 — Menu
    menu: {
      sectionLabel: "06 — Меню",
      heading: "Меню",
      lead: "Завтраки до 17:00, со вторника по воскресенье. Кухня небольшая, сезонная — мы делаем то, что любим.",
      categories: [
        {
          name: "Завтраки",
          dishes: [
            { name: "Омлет", desc: "Свежий салат, тост", price: "5,50€" },
            { name: "Жареные яйца со свежим салатом", desc: "Härjasilmad värske salatiga", price: "4,50€" },
            { name: "Овсяная каша", desc: "Сливочное масло и джем", price: "5,50€" },
            { name: "Яйца Бенедикт с хамоном Серано", desc: "На бриоши", price: "9,50€" },
            { name: "Авокадо и яйцо пашот", desc: "На ржаном тосте", price: "9,50€" },
            { name: "Круассан с хамоном Серано", desc: "Тёплый, с маслом", price: "4,50€" },
            { name: "Круассан с копчёным лососем", desc: "Тёплый, с маслом", price: "5,50€" },
            { name: "Салат с яйцом и тунцом", desc: "Лёгкий, со свежей зеленью", price: "7,50€" },
            { name: "Свежевыжатый апельсиновый сок", desc: "—", price: "4€" },
          ],
        },
        {
          name: "Закуски",
          dishes: [
            { name: "Тыквенный суп", desc: "Пармезан, тыквенные семечки", price: "5,50€" },
            { name: "Салат «Цезарь»", desc: "С курицей или креветками", price: "9 / 11€" },
            { name: "Салат с козьим сыром", desc: "Маринованное яблоко, свёкла, руккола", price: "11€" },
            { name: "Тартар из говядины", desc: "Чили-майо, брусника, жемчужный лук", price: "13€" },
            { name: "Креветки", desc: "Соус лемонграсс-чили, чиабатта", price: "18€" },
            { name: "Картофельный драник", desc: "Лосось GravLax, соус из хрена", price: "12€" },
          ],
        },
        {
          name: "Основные",
          dishes: [
            { name: "Филе морского окуня", desc: "Овощи с песто, хумус из цветной капусты", price: "18€" },
            { name: "Курица с дижонской горчицей", desc: "Ризотто из сельдерея, салат из редиса", price: "16€" },
            { name: "Свиной шницель", desc: "Картофельное пюре, грибной соус", price: "14€" },
            { name: "Бургер из говядины", desc: "Чили-майо, фри, маринованный огурец, сыр", price: "14€" },
            { name: "Тушёная говядина", desc: "Ирландский колканнон, соус из красного вина", price: "19€" },
            { name: "Пастуший пирог", desc: "Говядина, картофельное пюре, пармезан", price: "14€" },
            { name: "Тыквенное ризотто", desc: "Руккола, пармезан", price: "13€" },
          ],
        },
        {
          name: "Паста",
          dishes: [
            { name: "Паста песто", desc: "Домашний песто, пармезан, руккола", price: "11€" },
            { name: "Паста с говядиной", desc: "Бальзамический уксус, сливки", price: "15€" },
            { name: "Паста с курицей и томатами", desc: "Сливки, томатный соус, томаты", price: "13€" },
          ],
        },
        {
          name: "Десерты Татьяны",
          dishes: [
            { name: "Шоколадный фондан", desc: "Ванильное мороженое", price: "6€" },
            { name: "Крем-брюле с запечённым яблоком", desc: "Желе просекко-имбирь", price: "6€" },
            { name: "Финиковый тоффи-кекс", desc: "Соус солёная карамель, сыр Philadelphia", price: "6€" },
            { name: "Блин", desc: "Варенье, мороженое", price: "5€" },
          ],
        },
        {
          name: "Напитки",
          dishes: [
            { name: "Кофе и чай", desc: "Espresso, Cappuccino, Latte, Flat White, 7 видов чая", price: "от 2€" },
            { name: "Безалкогольные", desc: "Соки, лимонад Realist, Coca-Cola, минеральная вода", price: "от 2,50€" },
            { name: "Пиво", desc: "A'Le Coq, Saku Dublin, Guinness Hop House, Menabrea", price: "4,50€" },
            { name: "Разливное пиво", desc: "Raasiku Pilsner, Raasiku Märzen 33/50cl", price: "4,50 / 5,50€" },
            { name: "Вино по бокалу 15cl", desc: "Просекко, Chardonnay, Soave, Pinot Grigio, Primitivo", price: "6–7€" },
            { name: "Коктейли", desc: "Aperol Spritz, Negroni, Mojito, Mimosa, Bloody Mary", price: "7–9€" },
          ],
        },
      ],
      footnote: "Полное меню напитков — крепкий алкоголь, наливки, кальвадос — у официанта.",
    },

    // Block 9 — Events
    events: {
      sectionLabel: "07 — Мероприятия",
      heading: "Ваше событие — у нас.",
      body: "Дни рождения, маленькие свадьбы, корпоративные ужины, девичники, крестины. Зал на 30 человек, индивидуальное меню, наша кухня и Танины торты. Расскажите о вашем событии — мы свяжемся в течение дня.",
      formTitle: "Оставить заявку",
      fields: {
        name: "Ваше имя",
        contact: "Телефон или e-mail",
        date: "Дата мероприятия",
        guests: "Гостей",
        details: "Расскажите подробнее",
        submit: "Отправить заявку",
        sent: "Спасибо! Мы свяжемся с вами в течение дня.",
      },
    },

    // Block 10 — Contacts
    contact: {
      sectionLabel: "08 — Контакты",
      heading: "Заходите в гости.",
      addressLabel: "Адрес",
      address: ["Vana-Kalamaja 7a", "10414 Tallinn, Eesti"],
      hoursLabel: "Часы работы",
      hours: [
        { d: "Понедельник", h: "Выходной" },
        { d: "Вторник", h: "12:00 — 21:00" },
        { d: "Среда", h: "10:00 — 21:00" },
        { d: "Четверг", h: "10:00 — 21:00" },
        { d: "Пятница", h: "12:00 — 22:00" },
        { d: "Суббота", h: "12:00 — 22:00" },
        { d: "Воскресенье", h: "11:00 — 19:00" },
      ],

      breakfastNote: "Завтраки подаём до 17:00 со вторника по воскресенье.",
      contactLabel: "Связаться",
      phone: "+372 550 4900",
      email: "info@flowergarden.ee",
      socialLabel: "В сетях",
      reserveCta: "Забронировать стол",
      footerNote: "© 2026 Garden Resto · Сделано с любовью в Каламая",
    },
  },

  et: {
    nav: {
      story: "Lugu",
      breakfast: "Hommikusöök",
      menu: "Menüü",
      desserts: "Magustoidud",
      events: "Üritused",
      contact: "Kontakt",
      reserve: "Broneeri laud",
    },
    hero: {
      kicker: "Pererestoran · Kalamaja",
      title1: "Me valmistame nii,",
      title2: "nagu kodus tehakse,",
      title3: "kui külalisi oodatakse.",
      lead: "Tule hommiku-, lõuna- või lihtsalt niisama söögile. Garden Restos on alati hea toit ja inimesed, kes sind näha rõõmustavad.",
      address: "Tallinn · Vana-Kalamaja 7a",
      hours: "T–P · hommikusöök kuni 17:00",
      ctaMenu: "Vaata menüüd",
      ctaFind: "Leia meid",
    },
    story: {
      sectionLabel: "01 — Kes me oleme",
      heading: "Me oleme pere.",
      paragraphs: [
        "Vjatšeslav — peakokk, baarmen ja kelner ühes isikus. Mina olen see, kes teid uksel vastu võtab ja ära saadab.",
        "Tatjana — minu naine. Saalis näete teda harva, aga tema tööd olete kindlasti maitsnud. Need on tema magustoidud.",
        "Meil on kaks tütart. Meie peamised orientiirid ja motivaatorid.",
      ],
      timeline: [
        {
          year: "2020",
          title: "Flower Garden Cafe",
          body: "Pereelt otsustasime — avame kohviku. Avasime uksed Kalamajas. Idee oli lihtne ja veidi romantiline: süüa hästi ja osta lilli. Sest vahel läheb mees esimesele kohtumisele — ja unustab kimbu täiesti ära. Meie juures sai nii süüa kui ka näo päästa.",
        },
        {
          year: "2024",
          title: "Garden Cafe",
          body: "Kui karantiin lõpuks läbi sai ja promenaadi remont enam meie ust ei varjanud — lilled kolisid pottidesse. Meist sai Garden Cafe. Sama hing, lihtsalt ilma lõigatud roosideta.",
        },
        {
          year: "2026",
          title: "Garden Resto",
          body: "Mõistsime: oleme suuremaks kasvanud. Aeg nimetada asju õigete nimedega. Uus peatükk meie loos. Sama pere. Sama hing. Lihtsalt uue nimega.",
        },
      ],
    },
    comeback: {
      sectionLabel: "02 — Õhkkond",
      heading: "Garden Resto — koht, kuhu tahaks tagasi tulla.",
      caption: "Väike saal, suured aknad, kohvi ja värske küpsetise lõhn.",
    },
    breakfast: {
      sectionLabel: "03 — Hommikusöök",
      heading: "Vahel algab hommik keskpäeval,",
      heading2: "ja meie ei mõista hukka — vastupidi, mõistame.",
      body: "Hommikusööki serveerime Garden Restos kuni 17:00, teisipäevast pühapäevani. Olgu see rahulik hommik iseendaga, pidulik hommikusöök perega, kohting kallimaga või juhuslik avastatud hommik uues kohas — meil on alati hea meel teid näha.",
      tag: "Serveerime kuni 17:00",
    },
    dishes: {
      sectionLabel: "04 — Köök",
      heading: "Iga roog menüüs on midagi, mida me ise iga päev sööksime ja oma lähedastele soovitaksime.",
      items: [
        { name: "Kõrvitsasupp", caption: "Parmesan, kõrvitsaseemned", img: "assets/dish-soup.jpeg" },
        { name: "Caesari salat", caption: "Kana või krevettidega", img: "assets/dish-caesar.jpeg" },
        { name: "Karjasepirukas", caption: "Veiseliha, kartulipüree, parmesan", img: "assets/dish-pie.jpeg" },
      ],
    },
    desserts: {
      sectionLabel: "05 — Tatjana magustoidud",
      heading: "Tatjana on meie kondiiter.",
      paragraphs: [
        "Tema tordid ja magustoidud vaimustavad kõiki — väikseimatest täiskasvanuteni.",
        "Mingeid pooltooteid. Iga koostisosa tehakse käsitsi — koorikutest kuni pistaatsiapastani.",
        "Tanja magustoite saab mitte ainult restoranis maitsta, vaid ka oma pidustuste jaoks tellida. Hind arvutatakse eraldi taotluse alusel.",
      ],
      favoritesHeading: "Meie külaliste lemmikmagustoidud",
      items: [
        { name: "Mango juustukook", img: "assets/dessert-mango.jpeg" },
        { name: "Napoleon", img: "assets/dessert-napoleon.jpeg" },
        { name: "Kohupiimakook metsamarjadega", img: "assets/dessert-berry.jpeg" },
      ],
      cta: "Telli tort",
    },
    menu: {
      sectionLabel: "06 — Menüü",
      heading: "Menüü",
      lead: "Hommikusööki serveerime kuni 17:00, teisipäevast pühapäevani. Köök on väike ja hooajaline — teeme seda, mida armastame.",
      categories: [
        {
          name: "Hommikusöök",
          dishes: [
            { name: "Omlett", desc: "Värske salat, röstsai", price: "5,50€" },
            { name: "Härjasilmad värske salatiga", desc: "Praetud munad", price: "4,50€" },
            { name: "Kaerahelbe puder", desc: "Või ja moos", price: "5,50€" },
            { name: "Benedicti munad Serano singiga", desc: "Brioche'il", price: "9,50€" },
            { name: "Avokaado ja pošeeritud muna", desc: "Rukkileival", price: "9,50€" },
            { name: "Croissant Serano singiga", desc: "Soe, võiga", price: "4,50€" },
            { name: "Croissant suitsulõhega", desc: "Soe, võiga", price: "5,50€" },
            { name: "Tuunikala ja muna salat", desc: "Värske rohelisega", price: "7,50€" },
            { name: "Värske apelsini mahl", desc: "—", price: "4€" },
          ],
        },
        {
          name: "Eelroad",
          dishes: [
            { name: "Kõrvitsasupp", desc: "Parmesan, kõrvitsaseemned", price: "5,50€" },
            { name: "Caesari salat", desc: "Kana või krevettidega", price: "9 / 11€" },
            { name: "Kitsejuustu salat", desc: "Marineeritud õun, peet, rukola", price: "11€" },
            { name: "Veise tartar", desc: "Chilli-majo, pohlad, pärlsibul", price: "13€" },
            { name: "Krevetid", desc: "Sidrunheina-chilli kaste, ciabatta", price: "18€" },
            { name: "Kartulipannkook", desc: "GravLax lõhe, mädarõika kaste", price: "12€" },
          ],
        },
        {
          name: "Pearoad",
          dishes: [
            { name: "Merikogre filee", desc: "Pesto köögiviljad, lillkapsa hummus", price: "18€" },
            { name: "Dijoni sinepi kana", desc: "Juurselleri risotto, redise salat", price: "16€" },
            { name: "Sealiha šnitsel", desc: "Kartulipüree, seenekaste", price: "14€" },
            { name: "Veise burger", desc: "Chilli-majo, friikartul, marineeritud kurk, juust", price: "14€" },
            { name: "Hautatud veiseliha", desc: "Iiri colcannon, punase veini kaste", price: "19€" },
            { name: "Karjase pirukas", desc: "Veiseliha, kartulipüree, parmesan", price: "14€" },
            { name: "Kõrvitsa risotto", desc: "Rukola, parmesan", price: "13€" },
          ],
        },
        {
          name: "Pasta",
          dishes: [
            { name: "Pesto pasta", desc: "Kodune pesto, parmesan, rukola", price: "11€" },
            { name: "Veise pasta", desc: "Balsamico äädikas, koor", price: "15€" },
            { name: "Kana-tomati pasta", desc: "Koor, tomatikaste, tomat", price: "13€" },
          ],
        },
        {
          name: "Tatjana magustoidud",
          dishes: [
            { name: "Šokolaadi fondant", desc: "Vaniljejäätis", price: "6€" },
            { name: "Ahjuõuna crème brûlée", desc: "Prosecco-ingveri želee", price: "6€" },
            { name: "Datli-toffee kook", desc: "Soolakaramellikaste, Philadelphia juust", price: "6€" },
            { name: "Pannkook", desc: "Moos, jäätis", price: "5€" },
          ],
        },
        {
          name: "Joogid",
          dishes: [
            { name: "Kohv ja tee", desc: "Espresso, Cappuccino, Latte, Flat White, 7 sorti teed", price: "alates 2€" },
            { name: "Karastusjoogid", desc: "Mahlad, Realist limonaad, Coca-Cola, mineraalvesi", price: "alates 2,50€" },
            { name: "Õlu", desc: "A'Le Coq, Saku Dublin, Guinness Hop House, Menabrea", price: "4,50€" },
            { name: "Kraaniõlu", desc: "Raasiku Pilsner, Raasiku Märzen 33/50cl", price: "4,50 / 5,50€" },
            { name: "Vein klaasiga 15cl", desc: "Prosecco, Chardonnay, Soave, Pinot Grigio, Primitivo", price: "6–7€" },
            { name: "Kokteilid", desc: "Aperol Spritz, Negroni, Mojito, Mimosa, Bloody Mary", price: "7–9€" },
          ],
        },
      ],
      footnote: "Täielik joogimenüü — kanged alkohoolsed joogid, naljakid, kalvados — küsi ettekandjalt.",
    },
    events: {
      sectionLabel: "07 — Üritused",
      heading: "Sinu üritus — meie juures.",
      body: "Sünnipäevad, väikesed pulmad, ettevõtte õhtusöögid, tüdrukute õhtud, ristsed. Saal kuni 30 inimesele, individuaalne menüü, meie köök ja Tatjana tordid. Räägi oma üritusest — võtame ühendust ühe päeva jooksul.",
      formTitle: "Jäta päring",
      fields: {
        name: "Sinu nimi",
        contact: "Telefon või e-post",
        date: "Ürituse kuupäev",
        guests: "Külalisi",
        details: "Räägi rohkem",
        submit: "Saada päring",
        sent: "Aitäh! Võtame ühendust päeva jooksul.",
      },
    },
    contact: {
      sectionLabel: "08 — Kontakt",
      heading: "Tule külla.",
      addressLabel: "Aadress",
      address: ["Vana-Kalamaja 7a", "10414 Tallinn, Eesti"],
      hoursLabel: "Lahtiolekuajad",
      hours: [
        { d: "Esmaspäev", h: "Suletud" },
        { d: "Teisipäev", h: "12:00 — 21:00" },
        { d: "Kolmapäev", h: "10:00 — 21:00" },
        { d: "Neljapäev", h: "10:00 — 21:00" },
        { d: "Reede", h: "12:00 — 22:00" },
        { d: "Laupäev", h: "12:00 — 22:00" },
        { d: "Pühapäev", h: "11:00 — 19:00" },
      ],

      breakfastNote: "Hommikusööki serveerime kuni 17:00, T–P.",
      contactLabel: "Võta ühendust",
      phone: "+372 550 4900",
      email: "info@flowergarden.ee",
      socialLabel: "Sotsiaalmeedias",
      reserveCta: "Broneeri laud",
      footerNote: "© 2026 Garden Resto · Tehtud armastusega Kalamajas",
    },
  },

  en: {
    nav: {
      story: "Story",
      breakfast: "Breakfast",
      menu: "Menu",
      desserts: "Desserts",
      events: "Events",
      contact: "Contact",
      reserve: "Reserve a table",
    },
    hero: {
      kicker: "A family restaurant · Kalamaja",
      title1: "We cook the way",
      title2: "you cook at home,",
      title3: "when guests are coming.",
      lead: "Come for breakfast, lunch, or just because. At Garden Resto there's always good food and people happy to see you.",
      address: "Tallinn · Vana-Kalamaja 7a",
      hours: "Tue–Sun · breakfast until 17:00",
      ctaMenu: "See the menu",
      ctaFind: "Find us",
    },
    story: {
      sectionLabel: "01 — Who we are",
      heading: "We are a family.",
      paragraphs: [
        "Vyacheslav — chef, bartender and waiter, all in one. I'm the one who greets you at the door and walks you out at the end of the night.",
        "Tatiana — my wife. You'll rarely see her in the dining room, but you've definitely tasted her work. The desserts are hers.",
        "We have two daughters. Our north star and the reason for everything.",
      ],
      timeline: [
        {
          year: "2020",
          title: "Flower Garden Cafe",
          body: "At a family council we decided — we open a café. We unlocked the doors in Kalamaja. The idea was simple and a little romantic: eat well and pick up some flowers. Because sometimes a man heads to a first date and forgets the bouquet entirely. With us, you got fed and saved face.",
        },
        {
          year: "2024",
          title: "Garden Cafe",
          body: "When the lockdowns finally lifted and the promenade construction stopped blocking every road to our door, the flowers moved into pots. We became Garden Cafe. Same soul, just without the cut roses.",
        },
        {
          year: "2026",
          title: "Garden Resto",
          body: "We realised: we'd grown up. Time to call things by their proper names. A new chapter in our story. Same family. Same soul. Just a new name on the door.",
        },
      ],
    },
    comeback: {
      sectionLabel: "02 — The room",
      heading: "Garden Resto — a place worth coming back to.",
      caption: "A small room, big windows, the smell of coffee and fresh pastry.",
    },
    breakfast: {
      sectionLabel: "03 — Breakfast",
      heading: "Sometimes morning starts at noon —",
      heading2: "and we don't judge. We get it.",
      body: "Breakfast is served until 17:00, Tuesday to Sunday. A slow morning on your own, a celebration with the family, a date with the person you love, or an unplanned breakfast in a place you've just discovered — we're always happy to see you.",
      tag: "Served until 17:00",
    },
    dishes: {
      sectionLabel: "04 — Kitchen",
      heading: "Every dish on our menu is something we'd happily eat ourselves every day, and recommend to our own family.",
      items: [
        { name: "Pumpkin soup", caption: "Parmesan, pumpkin seeds", img: "assets/dish-soup.jpeg" },
        { name: "Caesar salad", caption: "With chicken or prawns", img: "assets/dish-caesar.jpeg" },
        { name: "Shepherd's pie", caption: "Beef, mashed potato, parmesan", img: "assets/dish-pie.jpeg" },
      ],
    },
    desserts: {
      sectionLabel: "05 — Tatiana's desserts",
      heading: "Tatiana is our pastry chef.",
      paragraphs: [
        "Her cakes and desserts make everyone — from the smallest kids to the grown-ups — light up.",
        "No shortcuts, no pre-mixes. Every component is made by hand, from the sponge to the pistachio paste.",
        "Tanya's desserts can be ordered for your celebration, not just enjoyed at the restaurant. Pricing is bespoke — just ask.",
      ],
      favoritesHeading: "Our guests' favourites",
      items: [
        { name: "Mango cheesecake", img: "assets/dessert-mango.jpeg" },
        { name: "Napoléon", img: "assets/dessert-napoleon.jpeg" },
        { name: "Curd pie with forest berries", img: "assets/dessert-berry.jpeg" },
      ],
      cta: "Order a cake",
    },
    menu: {
      sectionLabel: "06 — Menu",
      heading: "The menu",
      lead: "The menu is small and seasonal. We don't try to be everything to everyone — we cook what we love, and we cook it well.",
      categories: [
        {
          name: "Breakfast",
          dishes: [
            { name: "Omelette", desc: "Fresh salad, toast", price: "5,50€" },
            { name: "Fried eggs with fresh salad", desc: "—", price: "4,50€" },
            { name: "Oatmeal porridge", desc: "Butter and jam", price: "5,50€" },
            { name: "Eggs Benedict with Serrano ham", desc: "On brioche", price: "9,50€" },
            { name: "Avocado and poached eggs", desc: "On rye toast", price: "9,50€" },
            { name: "Croissant with Serrano ham", desc: "Warm, with butter", price: "4,50€" },
            { name: "Croissant with smoked salmon", desc: "Warm, with butter", price: "5,50€" },
            { name: "Tuna and egg salad", desc: "With fresh greens", price: "7,50€" },
            { name: "Fresh orange juice", desc: "—", price: "4€" },
          ],
        },
        {
          name: "Starters",
          dishes: [
            { name: "Pumpkin soup", desc: "Parmesan, pumpkin seeds", price: "5,50€" },
            { name: "Caesar salad", desc: "With chicken or prawns", price: "9 / 11€" },
            { name: "Goat cheese salad", desc: "Pickled apple, beetroot, rocket", price: "11€" },
            { name: "Beef tartare", desc: "Chilli-mayo, lingonberry, pearl onion", price: "13€" },
            { name: "Prawns", desc: "Lemongrass-chilli sauce, ciabatta", price: "18€" },
            { name: "Potato pancake", desc: "Gravlax salmon, horseradish sauce", price: "12€" },
          ],
        },
        {
          name: "Mains",
          dishes: [
            { name: "Sea bass fillet", desc: "Pesto vegetables, cauliflower hummus", price: "18€" },
            { name: "Dijon mustard chicken", desc: "Celeriac risotto, radish salad", price: "16€" },
            { name: "Pork schnitzel", desc: "Mashed potato, mushroom sauce", price: "14€" },
            { name: "Beef burger", desc: "Chilli-mayo, fries, pickle, cheese", price: "14€" },
            { name: "Braised beef", desc: "Irish colcannon, red wine sauce", price: "19€" },
            { name: "Shepherd's pie", desc: "Beef, mashed potato, parmesan", price: "14€" },
            { name: "Pumpkin risotto", desc: "Rocket, parmesan", price: "13€" },
          ],
        },
        {
          name: "Pasta",
          dishes: [
            { name: "Pesto pasta", desc: "House pesto, parmesan, rocket", price: "11€" },
            { name: "Beef pasta", desc: "Balsamic vinegar, cream", price: "15€" },
            { name: "Chicken & tomato pasta", desc: "Cream, tomato sauce, tomatoes", price: "13€" },
          ],
        },
        {
          name: "Tatiana's desserts",
          dishes: [
            { name: "Chocolate fondant", desc: "Vanilla ice cream", price: "6€" },
            { name: "Crème brûlée with baked apple", desc: "Prosecco-ginger jelly", price: "6€" },
            { name: "Sticky date toffee cake", desc: "Salted caramel, Philadelphia cheese", price: "6€" },
            { name: "Crêpe", desc: "House jam, ice cream", price: "5€" },
          ],
        },
        {
          name: "Drinks",
          dishes: [
            { name: "Coffee & tea", desc: "Espresso, Cappuccino, Latte, Flat White, 7 teas", price: "from 2€" },
            { name: "Soft drinks", desc: "Juices, Realist lemonade, Coca-Cola, mineral water", price: "from 2,50€" },
            { name: "Beer", desc: "A'Le Coq, Saku Dublin, Guinness Hop House, Menabrea", price: "4,50€" },
            { name: "Draught beer", desc: "Raasiku Pilsner, Raasiku Märzen 33/50cl", price: "4,50 / 5,50€" },
            { name: "Wine by the glass 15cl", desc: "Prosecco, Chardonnay, Soave, Pinot Grigio, Primitivo", price: "6–7€" },
          ],
        },
      ],
      footnote: "Prices in euro. Full menu refreshes each season.",
    },
    events: {
      sectionLabel: "07 — Events",
      heading: "Your event — at our place.",
      body: "Birthdays, small weddings, company dinners, hen nights, christenings. A room for up to 30, a menu we plan with you, our kitchen and Tanya's cakes. Tell us about your event — we'll be in touch within the day.",
      formTitle: "Send a request",
      fields: {
        name: "Your name",
        contact: "Phone or email",
        date: "Date of the event",
        guests: "Guests",
        details: "Tell us a bit more",
        submit: "Send request",
        sent: "Thank you! We'll be in touch within the day.",
      },
    },
    contact: {
      sectionLabel: "08 — Contact",
      heading: "Come visit.",
      addressLabel: "Address",
      address: ["Vana-Kalamaja 7a", "10414 Tallinn, Estonia"],
      hoursLabel: "Hours",
      hours: [
        { d: "Monday", h: "Closed" },
        { d: "Tuesday", h: "12:00 — 21:00" },
        { d: "Wednesday", h: "10:00 — 21:00" },
        { d: "Thursday", h: "10:00 — 21:00" },
        { d: "Friday", h: "12:00 — 22:00" },
        { d: "Saturday", h: "12:00 — 22:00" },
        { d: "Sunday", h: "11:00 — 19:00" },
      ],

      breakfastNote: "Breakfast served until 17:00, Tue–Sun.",
      contactLabel: "Get in touch",
      phone: "+372 550 4900",
      email: "info@flowergarden.ee",
      socialLabel: "Find us",
      reserveCta: "Reserve a table",
      footerNote: "© 2026 Garden Resto · Made with love in Kalamaja",
    },
  },
};
