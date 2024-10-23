// data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { YourEntity } from './entities/your-entity.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',  // Choose your DB type (postgres, mysql, sqlite, etc.)
    host: 'localhost',
    port: 5432,         // Default Postgres port
    username: 'user',
    password: 'password',
    database: 'your-database',
    synchronize: true,  // For development use; use migrations in production
    logging: false,
    entities: [YourEntity],  // Add all your entities here
    migrations: [],
    subscribers: [],
});

// Initialize the data source
AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });
