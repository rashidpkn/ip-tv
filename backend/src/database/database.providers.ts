import { Sequelize } from 'sequelize-typescript';
import { user } from './model/user.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345',
        database: 'ip-tv',
        logging:false
      });
      sequelize.addModels([user]);
      await sequelize.sync({force:true});
      
      return sequelize;
    },
  },
];