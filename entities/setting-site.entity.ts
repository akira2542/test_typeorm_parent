import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  ValueTransformer,
} from 'typeorm';
import { Agent, BaseEntity, TABLE } from '@/database';

class ArrayTransformer implements ValueTransformer {
  to(value: string[]): string {
    return value.join(',');
  }

  from(value: string): string[] {
    return value.split(',');
  }
}

export interface SettingValue {
  data: Record<string, any>;
}

@Entity(TABLE.SETTING_SITE)
export class SettingSite extends BaseEntity {
  @Column({ name: 'display_name', nullable: false })
  displayName: string;

  @Column({ unique: true, nullable: false, comment: 'use . to separate' })
  key: string;

  // json binary
  @Column({ type: 'jsonb', default: {}, nullable: false })
  value: SettingValue;

  // dashboard, deposit, withdraw, register, affiliate
  @Column({ nullable: false, comment: 'Routing route in player site' })
  feature: string;

  @Column({ type: 'text' })
  description: string;

  // There are string, boolean, number, array and object
  @Column({ nullable: false })
  type: string;

  @Column({ name: 'is_edit', type: 'boolean', default: true })
  isEdit: boolean;

  @Column({
    type: 'text',
    transformer: new ArrayTransformer(),
    comment: '[EN, TH]',
  })
  language: string[];

  @ManyToOne(() => Agent, (agent) => agent.settingSites)
  @JoinColumn({ name: 'agent_id' })
  agent: Agent;
}
