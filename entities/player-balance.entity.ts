import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity, Player, TABLE } from '@/database';

@Entity(TABLE.PLAYER_BALANCE)
export class PlayerBalance extends BaseEntity {
  @Column({
    type: 'decimal',
    precision: 18,
    scale: 2,
    nullable: false,
    default: 0,
  })
  balance: number;

  @Column({ name: 'default_currency', default: 'thb' })
  defaultCurrency: string;

  @OneToOne(() => Player, (player) => player.playerBalance, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'player_id' })
  player: Player;
}
