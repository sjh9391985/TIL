/**
 *
 * 인터페이스 내보내기
 */

export interface IUser {
  name: string;
  age: number;
}

// 타입 별칭 내보내기
export type MyType = string | number;

/**
 * 
 * 선언 모듈 가져오기
 * import { IUser, MyType } from .'/myTypes';
 */

const user: IUser {
    name: 'Heropy',
    age: 85
}

// const something : MyType = true , Error


