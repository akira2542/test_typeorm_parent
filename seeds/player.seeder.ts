import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Player } from '@/database';
import argon2 from 'argon2';

export default class PlayerSeeder implements Seeder {
  /**
   * Track seeder execution.
   *
   * Default: false
   */
  track = false;

  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(Player);
    // const roleRepository = dataSource.getRepository(AdminRole);
    // const agentRepository = dataSource.getRepository(Agent);
    // const role = await roleRepository.findOne({ where: { role: RoleEnum.SYSTEM } });
    // const agent = await agentRepository.findOne({ where: { type: 'agent' } });
    const password = '11111111';
    const hashPassword = await argon2.hash(password);
    await repository.upsert(
      [
        {
          username: 'test',
          password: hashPassword,
          affiliateCode: 'test',
          lastLogin: new Date(),
        },
      ],
      ['username'],
    );
    // ---------------------------------------------------
    //
    // const adminFactory = await factoryManager.get(Admin);
    // save 1 factory generated entity, to the database
    // await adminFactory.save();

    // await adminFactory.saveMany(10);
  }
}
