import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity, Player, TABLE } from '@/database';

@Entity(TABLE.PLAYER_SETTING)
export class PlayerSetting extends BaseEntity {
  @Column({ default: true })
  sport: boolean;

  @Column({ default: true })
  casino: boolean;

  @Column({ default: true })
  slot: boolean;

  @Column({ default: true })
  wuachon: boolean;

  @Column({ default: true })
  bypass_wheel: boolean;

  @Column({ default: true })
  bypass_card: boolean;

  @Column({
    name: 'level_one_commission',
    type: 'decimal',
    precision: 18,
    scale: 2,
    default: 0,
  })
  levelOneCommission: number;

  @Column({
    name: 'level_two_commission',
    type: 'decimal',
    precision: 18,
    scale: 2,
    default: 0,
  })
  levelTwoCommission: number;

  // 1 - 1
  @OneToOne(() => Player, (player) => player.playerSetting, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'player_id' })
  player: Player;
}
