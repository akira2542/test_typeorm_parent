import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity, Player, TABLE } from '@/database';

@Entity(TABLE.PLAYER_ACCOUNT)
export class PlayerAccount extends BaseEntity {
  @Column({ name: 'bank_name', nullable: false })
  bankName: string;

  @Column({ name: 'bank_code', nullable: false })
  bankCode: string;

  @Column({ name: 'account_name', nullable: false })
  accountName: string;

  @Column({ name: 'account_number', unique: true, nullable: false })
  accountNumber: string;

  @Column({ name: 'account_last_four', nullable: false })
  accountLastFour: string;

  @Column({ name: 'account_last_six', nullable: false })
  accountLastSix: string;

  @OneToOne(() => Player, (player) => player.playerAccount, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'player_id' })
  player: Player;
}
