const baseState = {
  actions: [
    {title: 'Включить/выключить свет', value: 'light', rooms: ['sleep', 'bathroom', 'living', 'kitchen']},
    {title: 'Изменить температуру', value: 'temperature', rooms: ['sleep', 'kitchen', 'living']},
    {title: 'Стирать вещи', value: 'wash', rooms: ['bathroom']},
    {title: 'Пылесосить', value: 'vaccum', rooms: ['sleep', 'kitchen']}
  ],
  rooms: [
    {title: 'Спальная комната', value: 'sleep' },
    {title: 'Гостинная комната', value: 'living'},
    {title: 'Ванная комната', value: 'bathroom'},
    {title: 'Кухня', value: 'kitchen'},
  ],

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