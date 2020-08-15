const baseState = {
  actions: [
    {title: 'Включить/выключить свет', value: 'light', image: 'https://thumbs.dreamstime.com/b/%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81-%D0%B2%D0%BA-%D1%8E%D1%87%D0%B0%D1%82%D1%8C-%D1%81%D0%B2%D0%B5%D1%82-78799373.jpg', rooms: ['sleep', 'bathroom', 'living', 'kitchen']},
    {title: 'Изменить температуру', value: 'temperature', image: 'https://fotki.ykt.ru/albums/userpics/2019/02-15/39009683.jpg', rooms: ['sleep', 'kitchen', 'living']},
    {title: 'Стирать вещи', value: 'wash', image: 'https://online-samsung.ru/sites/default/files/styles/product_big/public/products/ru-ww80r42lxfwdlp-ww80r42lxfwdlp-dynamicdoorclosedwhite-172198606.jpg?itok=7-RJbm8Y', rooms: ['bathroom']},
    {title: 'Пылесосить', value: 'vaccum', image: 'https://images11.domashnyochag.ru/upload/article/4f2/4f2fcf45f53186c828702e99eaad0b19.JPG', rooms: ['sleep', 'kitchen']}
  ],
  rooms: {
    sleep: {title: 'Спальная комната', value: 'sleep', image: 'https://krovat.ru/upload/resize_cache/iblock/24e/882_578_0a74b1951a2f66827aebce3e196a2174b/24e8951aa09ac8b5194bde26a31fee57.webp' },
    living: {title: 'Гостинная комната', value: 'living', image: 'https://remont-f.ru/upload/iblock/bce/gostinaya-v-kvartire-v-sovremennom-stile-foto-interyera-01.jpg'},
    bathroom: {title: 'Ванная комната', value: 'bathroom', image: 'https://www.jacobdelafon.ru/zakony-elegantnosti/wp-content/uploads/2018/05/24nov17Exelmans006-retouche.jpg'},
    kitchen: {title: 'Кухня', value: 'kitchen', image: 'https://www.kuhnicity.ru/upload/iblock/04b/04b5dd207dede70ffad4ba464ac3766e.jpg'},
  },

  data: {
    sleep: {
      light: true,
      temperature: 23,
      wash: false,
      vaccum: false
    },
    living: {
      light: false,
      temperature: 21,
      wash: false,
      vaccum: false
    },
    bathroom: {
      light: false,
      temperature: 19,
      wash: true,
      vaccum: false
    },
    kitchen: {
      light: false,
      temperature: 19,
      wash: true,
      vaccum: true
    }
  }
}

export const storeReducer = (state = baseState, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
}