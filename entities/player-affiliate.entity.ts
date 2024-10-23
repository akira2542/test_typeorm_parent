import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity, Player, TABLE } from '@/database';

@Entity(TABLE.PLAYER_AFFILIATE)
export class PlayerAffiliate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @ManyToOne(() => Player)
  // @JoinColumn({ name: 'upline_id' })
  // upline: Player;
  //
  // @ManyToOne(() => Player, (player) => player.downlines, {
  //   nullable: false,
  // })
  // @JoinColumn({ name: 'downline_id' })
  // downline: Player;

  @Column({ nullable: true })
  note: string;

  @Column({ nullable: false })
  username: string;

  @OneToOne(() => Player, (player) => player.playerAffiliate, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'player_id' })
  player: Player;

  @ManyToOne(
    () => PlayerAffiliate,
    (playerAffiliate) => playerAffiliate.children,
  )
  @JoinColumn({ name: 'parent_id' })
  parent: PlayerAffiliate;

  @OneToMany(() => PlayerAffiliate, (playerAffiliate) => playerAffiliate.parent)
  children: PlayerAffiliate[];
}
