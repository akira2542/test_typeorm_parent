import { Column, Entity } from 'typeorm';
import { BaseEntity, TABLE } from '@/database';

@Entity(TABLE.GAME)
export class Game extends BaseEntity {
  // บอล มวย วัว ยังไม่มี slot
  @Column({ name: 'provider_code', nullable: false })
  providerCode: string;

  @Column({ nullable: false })
  name: string;

  // nullable false in the future
  @Column({ nullable: true })
  type: string;
}
