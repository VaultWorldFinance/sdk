import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  BSCTESTNET = 97,
  FANTOMNET = 250,
  FANTOMTESTNET = 4002,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = {
  56: '0x8274921E9D4a53B9aEf220A7E69251c2dd996416',
  97: '0x8274921E9D4a53B9aEf220A7E69251c2dd996416',
  250: '0xEF45d134b73241eDa7703fa787148D9C9F4950b0',
  4002: '0xEF45d134b73241eDa7703fa787148D9C9F4950b0',
}

export const INIT_CODE_HASH = {
  56: '0xfca8423b9dc2d94f0ea6764dacbbe434ad81abe29a9a860bbe0621880afd0d73',
  97: '0xfca8423b9dc2d94f0ea6764dacbbe434ad81abe29a9a860bbe0621880afd0d73',
  250: '0xe242e798f6cee26a9cb0bbf24653bf066e5356ffeac160907fe2cc108e238617',
  4002: '0xe242e798f6cee26a9cb0bbf24653bf066e5356ffeac160907fe2cc108e238617',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(998)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
