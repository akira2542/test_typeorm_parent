// repositories/YourEntityRepository.ts
import { AppDataSource } from '../data-source';
import { YourEntity } from '../entities/your-entity.entity';

export const YourEntityRepository = AppDataSource.getRepository(YourEntity);
