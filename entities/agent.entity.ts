import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity, Player, SettingSite, TABLE } from '@/database';

@Entity(TABLE.AGENT)
export class Agent extends BaseEntity {
  @Column({ name: 'agent_name', nullable: false })
  agentName: string;

  @Column({ name: 'agent_code', nullable: false })
  agentCode: string;

  @Column({ name: 'agent_prefix' })
  agentPrefix: string;

  @OneToMany(() => SettingSite, (settingSite) => settingSite.agent)
  settingSites: SettingSite[];

  @OneToMany(() => Player, (player) => player.agent)
  players: Player[];
}
