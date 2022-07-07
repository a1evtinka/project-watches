module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Watches', [{
      title: 'Aviator Brown',
      image: 'https://cs2.livemaster.ru/storage/de/66/b34bb848f6f6e3beb589f7611a7a.jpg',
      category: 'унисекс',
      case: 'сталь',
      strap: 'натуральная кожа',
      glass: 'минеральное',
      mechanism: 'ручной завод',
      water: '30WR',
      description: 'Модель Aviator Brown по праву можно считать унисекс. Это часы, которые здорово смотрятся как на мужском запястье, так и на женском, вне зависимости от размеров запястья. Мастера команды Studio MART подходят у выполнению каждого заказа индивидуально, что позволяет идеально "посадить" часы на вашу руку с учётом дополнительных пожеланий.',
      price: 7452,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Vitruvian',
      image: 'https://cs2.livemaster.ru/storage/6b/5d/f8a6b3b03f1ff65f069361acf',
      category: 'мужские',
      case: 'сталь',
      strap: 'натуральная кожа',
      glass: 'минеральное',
      mechanism: 'ручной завод',
      water: '30WR',
      description: 'Модель Aviator Brown по праву можно считать унисекс. Это часы, которые здорово смотрятся как на мужском запястье, так и на женском, вне зависимости от размеров запястья. Мастера команды Studio MART подходят у выполнению каждого заказа индивидуально, что позволяет идеально "посадить" часы на вашу руку с учётом дополнительных пожеланий.',
      price: 7452,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Aviator Brown',
      image: 'https://cs2.livemaster.ru/storage/de/66/b34bb848f6f6e3beb589f7611a7a.jpg',
      category: 'Унисекс',
      case: 'сталь',
      strap: 'натуральная кожа',
      glass: 'минеральное',
      mechanism: 'ручной завод',
      water: '30WR',
      description: 'Модель Aviator Brown по праву можно считать унисекс. Это часы, которые здорово смотрятся как на мужском запястье, так и на женском, вне зависимости от размеров запястья. Мастера команды Studio MART подходят у выполнению каждого заказа индивидуально, что позволяет идеально "посадить" часы на вашу руку с учётом дополнительных пожеланий.',
      price: 7452,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Aviator Brown',
      image: 'https://cs2.livemaster.ru/storage/de/66/b34bb848f6f6e3beb589f7611a7a.jpg',
      category: 'Унисекс',
      case: 'сталь',
      strap: 'натуральная кожа',
      glass: 'минеральное',
      mechanism: 'ручной завод',
      water: '30WR',
      description: 'Модель Aviator Brown по праву можно считать унисекс. Это часы, которые здорово смотрятся как на мужском запястье, так и на женском, вне зависимости от размеров запястья. Мастера команды Studio MART подходят у выполнению каждого заказа индивидуально, что позволяет идеально "посадить" часы на вашу руку с учётом дополнительных пожеланий.',
      price: 7452,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Aviator Brown',
      image: 'https://cs2.livemaster.ru/storage/de/66/b34bb848f6f6e3beb589f7611a7a.jpg',
      category: 'Унисекс',
      case: 'сталь',
      strap: 'натуральная кожа',
      glass: 'минеральное',
      mechanism: 'ручной завод',
      water: '30WR',
      description: 'Модель Aviator Brown по праву можно считать унисекс. Это часы, которые здорово смотрятся как на мужском запястье, так и на женском, вне зависимости от размеров запястья. Мастера команды Studio MART подходят у выполнению каждого заказа индивидуально, что позволяет идеально "посадить" часы на вашу руку с учётом дополнительных пожеланий.',
      price: 7452,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Aviator Brown',
      image: 'https://cs2.livemaster.ru/storage/de/66/b34bb848f6f6e3beb589f7611a7a.jpg',
      category: 'Унисекс',
      case: 'сталь',
      strap: 'натуральная кожа',
      glass: 'минеральное',
      mechanism: 'ручной завод',
      water: '30WR',
      description: 'Модель Aviator Brown по праву можно считать унисекс. Это часы, которые здорово смотрятся как на мужском запястье, так и на женском, вне зависимости от размеров запястья. Мастера команды Studio MART подходят у выполнению каждого заказа индивидуально, что позволяет идеально "посадить" часы на вашу руку с учётом дополнительных пожеланий.',
      price: 7452,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkInsert('Watches', null, {});
  },
};
