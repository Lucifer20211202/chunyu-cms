/*

 * @Date: 2021-12-08 18:06:20
 * @LastEditTime: 2022-10-27 22:53:37
 * @LastEditors: Please set LastEditors
 * @Description: 数据库基类
 * @FilePath: /meimei-admin/src/common/entities/base.entity.ts
 * You can you up，no can no bb！！
 */
import { IsOptional, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { Excel } from 'src/modules/common/excel/excel.decorator';
import { ExcelTypeEnum } from 'src/modules/common/excel/excel.enum';

export class BaseEntity {
  /* 创建时间 */
  @CreateDateColumn({ name: 'create_time', comment: '创建时间' })
  @ApiHideProperty()
  @Excel({
    name: '创建时间',
    type: ExcelTypeEnum.EXPORT,
    dateFormat: 'YYYY-MM-DD HH:mm:ss',
    sort: 100,
  })
  createTime: Date | string;

  /* 更新时间 */
  @UpdateDateColumn({ name: 'update_time', comment: '更新时间' })
  @ApiHideProperty()
  updateTime: Date | string;

  /* 备注 */
  @Column({ name: 'remark', comment: '备注', default: '' })
  @IsOptional()
  @IsString()
  @Excel({
    name: '备注',
    sort: 102,
  })
  remark?: string;
}
