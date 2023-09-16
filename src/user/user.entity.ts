import { Field, ID, ObjectType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsNumberString, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import bcrypt from 'bcrypt'; // 암호화 사용 


@Entity()
@ObjectType()
export class user {

    equalsPw(password: string): boolean {
        return bcrypt.compareSync(password, this.passwordHash);
      }

    static hashUserPw(plainPassword: string): string {
    if (plainPassword) {
        return bcrypt.hashSync(plainPassword, 12);
        }
    } 

    @Field(() => ID, { description: '회원번호' })
    @IsNotEmpty()
    @IsNumberString()
    @PrimaryGeneratedColumn()
    id: string

    @Field({ description: '이메일' })
    @Unique(['email'])
    @IsNotEmpty()
    @IsEmail()
    @Column()
    email: string;
  
    
    @Field({description: "이름"})
    @IsNotEmpty()
    @IsString()
    @Column()
    name: string

    @Column()
    passwordHash: string;
  
    @Field({ description: '관리자 연락처', nullable: true })
    @IsNumberString()
    @Column()
    phone: string;  // 보류 추가 여부 결정 필요 

    
}
