export interface Tech {
  html?: boolean | undefined;
  css?: boolean | undefined;
  react?: boolean | undefined;
  sass?: boolean | undefined;
  typescript?: boolean | undefined;
  next?: boolean | undefined;
  mui?: boolean | undefined;
  redux?: boolean | undefined;
  framer?: boolean | undefined;
}

interface Code {
  id: number;
  title: string;
  text: string;
  url: string;
  github_url: string;
  tech: Tech;
}

const code_data: Code[] = [
  {
    id: 0,
    title: "Next Invest",
    text: "Landing page, нарезанная из фигмовского макета. Адаптивная кросс-браузерная вёрстка. Сделано с применением React и Sass.",
    url: "next",
    github_url: "next-invest-landing-page",
    tech: {
      react: true,
      sass: true,
    },
  },
  {
    id: 9,
    title: "Capital Quiz App 3",
    text: "Третья версия приложения, переписанная на Typescript. Добавлены новые возможности: поиск по странам и столицам, флаги государств, новая анимация. Основной алгоритм остаётся прежним, здесь коренных изменений нет. Material UI используется для элементов интерфейса по-прежнему.",
    url: "newquiz3",
    github_url: "new-quiz-app",
    tech: {
      react: true,
      typescript: true,
      mui: true,
      redux: true
    },
  },
  {
    id: 1,
    title: "Сантонит",
    text: "Большой он-лайн каталог продукции, около 500-т позиций, с элементами корпоративного сайта. Сделан на чистых HTML и CSS, без CMS.",
    url: "santonit",
    github_url: "santonit",
    tech: {
      html: true,
      css: true,
    },
  },
  {
    id: 2,
    title: "Duschy",
    text: "Сайт российского представительства шведской компании, занимающейся производством аксессуаров для ванных комнат. Сделан как каталог продукции, с большим количеством разделов и позиций. HTML и CSS.",
    url: "duschy",
    github_url: "duschy",
    tech: {
      html: true,
      css: true,
    },
  },
  {
    id: 8,
    title: "Home Sweet Home 2.0",
    text: "Второй, улучшенный вариант моего сайта-портфолио, того самого сайта, на котором вы сейчас находитесь. Отличается от первой версии многостраничностью и улучшенной навигацией. Сделан на Next JS и Typescript, кое-где есть немного Material UI.",
    url: "../../",
    github_url: "next-homepage-new",
    tech: {
      css: true,
      next: true,
      typescript: true,
      mui: true,
      framer: true
    },
  },
  {
    id: 6,
    title: "Home Sweet Home 1.0",
    text: "Строго говоря, это не первая версия моего персонального сайта, всего их было несколько, и я уже сбился со счёта, сколько конкретно. Но поскольку это первый персональный проект, который я делал после долгого перерыва, пусть будет 1.0. React и Sass.",
    url: "home1",
    github_url: "home-page",
    tech: {
      react: true,
      sass: true,
    },
  },
  {
    id: 3,
    title: "Capital Quiz App",
    text: "Небольшое приложение, позволяющее играть в «столицы». Сделано с применением Material UI.",
    url: "capital-quiz",
    github_url: "quiz-app",
    tech: {
      react: true,
      css: true,
      mui: true,
    },
  },
  {
    id: 7,
    title: "Capital Quiz App 2",
    text: "Новый алгоритм, новый интерфейс. Добавлены новые опции. Material UI используется по-прежнему.",
    url: "newquiz2",
    github_url: "new-quiz-app",
    tech: {
      react: true,
      mui: true,
    },
  },
  {
    id: 4,
    title: "Wisdom Generator",
    text: "Умные англоязычные мысли и рэндомные картинки из Интернета по API. Дзен-созерцание на любителя.",
    url: "wisdom",
    github_url: "random-quote-app",
    tech: {
      react: true,
      css: true,
    },
  },
  {
    id: 5,
    title: "Meme Generator",
    text: "Генератор мемов — традиционный проект в портфолио каждого разработчика. Классика жанра.",
    url: "meme",
    github_url: "meme-app",
    tech: {
      react: true,
      css: true,
    },
  },
];

export default code_data;
