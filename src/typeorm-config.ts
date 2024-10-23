// typeorm.config.ts

import { DataSource } from 'typeorm';
import { YourEntity } from './entities/your-entity.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',  // Replace with your database type
    host: 'localhost',
    port: 5432,
    username: 'your-username',
    password: 'your-password',
    database: 'your-database',
    synchronize: true,  // Automatically synchronize database structure, set to false in production
    entities: [YourEntity],
    logging: true,
});
