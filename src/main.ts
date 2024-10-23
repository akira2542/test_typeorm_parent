// index.ts
import { YourEntityRepository } from './repositories/your-entity.repository';
import { YourEntity } from './entities/your-entity.entity';

async function main() {
    const newEntity = new YourEntity();
    newEntity.name = 'Sample Name';
    newEntity.description = 'Sample Description';

    await YourEntityRepository.save(newEntity);

    console.log('New entity saved!');
}

main();
