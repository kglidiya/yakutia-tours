export const getRandomItem = (arr: string[]) => {
  // return arr[Math.floor(Math.random() * arr.length)];
  arr.push(arr.shift() as string);
};

export const images = [
  // "https://sportishka.com/uploads/posts/2022-02/1645635189_49-sportishka-com-p-kurilskoe-ozero-kamchatka-turizm-krasivo-f-57.jpg",
  // "https://photocentra.ru/images/main107/1071764_main.jpg",
  // "https://kronoki.ru/upload/iblock/b29/b294f641f110741f056ef09e27234f82.jpg",
  // "https://dalgeotour.com/upload/iblock/df5/4e99900u3yjj9c9j2pbyqrw605ssfv2e.jpg",
  "https://celes.club/uploads/posts/2021-12/1640858891_29-celes-club-p-oimyakon-zima-priroda-krasivo-foto-35.jpg",
  "https://celes.club/uploads/posts/2021-12/1640831579_66-celes-club-p-priroda-yakutii-zimoi-priroda-krasivo-foto-78.jpg",

  "https://goarctic.ru/upload/iblock/aa8/aa859a34bf7475b05f8e106b92cd8cf9.jpg",

  //  "http://wikiway.com/upload/uf/0e9/oyamikon_035.jpg",
  //  "https://celes.club/uploads/posts/2021-11/1637323386_54-celes-club-p-yakutskaya-loshad-zhivotnie-krasivo-foto-55.jpg",
  "https://sportishka.com/uploads/posts/2022-03/1646721567_48-sportishka-com-p-tundra-zimoi-i-letom-turizm-krasivo-foto-54.jpg",
  "https://35photo.pro/photos_main/428/2144480.jpg",
];

export const factsGallery = [
  "https://img.dni.ru/binaries/v3_photo/124341.jpg",
  "https://cdn.fishki.net/upload/post/2020/01/29/3214613/davydovagalina6533-80032710-147820549987965-8155857056283111211-n.jpg",
  "https://cdn1.img.sputniknews.uz/img/07e5/01/04/15724557_0:0:1274:720_2072x0_60_0_0_2d47a5927db890df5c2faf45c3067bcd.jpg",

  "https://bloknot.ru/wp-content/uploads/2020/02/nOgJgLoY.jpg",
];

export const tourGallery = [
  {
    id: 1,
    image:
      "https://avatars.dzeninfra.ru/get-zen_doc/1549204/pub_6376ec167056c31ec5f83291_6376eef4b54d7a6ee08870d7/scale_1200",
    title: "Путешествие в Оймякон (Полюс холода)",
    price: "100 000 руб.",
    date: "Январь-февраль",
    duration: "6 дней",
  },
  {
    id: 2,
    image: "https://jazico-travel.com/Assets/images/russia/5.jpg",
    title: "В гостях у оленеводов",
    price: "150 000 руб.",
    date: "Январь-март",
    duration: "6 дней",
  },
  {
    id: 3,
    image:
      "https://happylove.top/uploads/posts/2023-09/1693962860_happylove-top-p-yakutiya-stolbi-lenskie-vkontakte-20.jpg",
    title: "Ленские столбы",
    price: "50 000 руб.",
    date: "Январь-март",
    duration: "1 день",
  },
  {
    id: 1,
    image:
      "https://celes.club/uploads/posts/2023-03/1679761087_celes-club-p-doroga-zimoi-pinterest-43.jpg",
    title: "Якутск — ГУЛАГ — Оймякон — Магадан",
    price: "100 000 руб.",
    date: "Январь-февраль",
    duration: "8 дней",
  },
  {
    id: 1,
    image: "https://pm1.aminoapps.com/7725/db33595fb3923fab3a3ef45cdbc72df7ac8395fdr1-793-505v2_hq.jpg",
    title: "Конные прогулки",
    price: "10 000 руб.",
    date: "Январь-февраль",
    duration: "4 часа",
  },
  {
    id: 1,
    image:
      "https://demotivation.ru/wp-content/uploads/2020/05/nordlicht-yukon-ara-adav-20160214-010224-7580.jpg",
    title: "Ночевка в чуме",
    price: "20 000 руб.",
    date: "Январь-февраль",
    duration: "1 сутки",
  },
];
