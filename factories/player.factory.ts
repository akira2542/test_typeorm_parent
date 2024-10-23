import { setSeederFactory } from 'typeorm-extension';
import { Player, Agent } from '@/database';

export default setSeederFactory(Player, async (faker) => {
  const player = new Player();
  // const agent = await Agent.findOne({ where: { type: 'agent' } });
  player.username = faker.internet.userName();
  player.password = faker.internet.password();
  player.affiliateCode = faker.string.uuid();
  // player.agent = agent;

  return player;
});
