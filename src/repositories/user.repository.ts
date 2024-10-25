// repositories/YourEntityRepository.ts
import { EntityManager, Like, Repository } from 'typeorm';
import { YourEntity } from '../entities/your-entity.entity';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
@Injectable()
export class UserRepository extends Repository<UserEntity> {
    constructor(private entityManager: EntityManager) {
        super(YourEntity, entityManager);
    }

    findByUsername(username: string) {
        this.find({
            where: {
                username: Like(`%${username}%`)
            }
        });
    }
}

// a