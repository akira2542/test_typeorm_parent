// repositories/YourEntityRepository.ts
import { EntityManager, Like, Repository } from 'typeorm';
import { YourEntity } from '../entities/your-entity.entity';
import { Injectable } from '@nestjs/common';
@Injectable()
export class YourEntityRepository extends Repository<YourEntity> {
    constructor(private entityManager: EntityManager) {
        super(YourEntity, entityManager);
    }

    findByName(name: string) {
        this.find({
            where: {
                name: Like(`%${name}%`)
            }
        });
    }
}