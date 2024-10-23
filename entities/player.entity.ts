import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from '@/database/base.entity';
import { TABLE } from '@/database/database.constant';

import {
  PlayerAccount,
  PlayerSetting,
  PlayerBalance,
  PlayerAffiliate,
  Agent,
} from '@/database';

@Entity(TABLE.PLAYER)
export class Player extends BaseEntity {
  @Column({ unique: true, nullable: false })
  username: string;

  // @Column({ name: 'display_username', unique: true, nullable: false })
  // displayUsername: string;

  // @Column({ unique: true })
  // phone: string;

  @Column({ nullable: false })
  password: string;

  @Column({
    name: 'password_withdraw',
    nullable: true,
    comment: 'pin for request withdrawal',
  })
  passwordWithdraw: string;

  @Column({ name: 'affiliate_code', unique: true })
  affiliateCode: string;

  @Column({ type: 'text', nullable: true })
  note: string;

  @Column({ unique: true, nullable: true })
  line: string;

  // TODO: boolean or string ?
  @Column({ default: 'active' })
  status: string;

  @Column({ name: 'last_login', type: 'timestamp' })
  lastLogin: Date;

  // 1 - 1
  @OneToOne(() => PlayerBalance, (playerBalance) => playerBalance.player)
  playerBalance: PlayerBalance;

  @OneToOne(() => PlayerSetting, (playerSetting) => playerSetting.player)
  playerSetting: PlayerSetting;

  @OneToOne(() => PlayerAccount, (playerAccount) => playerAccount.player)
  playerAccount: PlayerAccount;

  @OneToOne(() => PlayerAffiliate, (playerAffiliate) => playerAffiliate.player)
  playerAffiliate: PlayerAffiliate;

  // 1 - n
  @ManyToOne(() => Agent, (agent) => agent.players)
  @JoinColumn({ name: 'agent_id' })
  agent: Agent;

  // @OneToMany(() => PlayerAffiliate, (playerAffiliate) => playerAffiliate.upline)
  // upline: PlayerAffiliate[];

  // @OneToMany(
  //   () => PlayerAffiliate,
  //   (playerAffiliate) => playerAffiliate.downline,
  // )
  // downlines: PlayerAffiliate[];
}
