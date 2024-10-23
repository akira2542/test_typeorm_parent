// repositories/YourEntityRepository.ts
import { EntityManager, Repository } from 'typeorm';
import { YourEntity } from '../entities/your-entity.entity';

export class YourEntityRepository extends Repository<YourEntity> {
    constructor(private entityManager: EntityManager) {
        super(YourEntity, entityManager);
    }
}