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
  56: '0xC490728d1cAC9F6481D8eF40F137633FA1D65956',
  97: '0xC490728d1cAC9F6481D8eF40F137633FA1D65956',
  250: '0x259B6fe3D2054F1290825dDb14399f4C4a8bF625',
  4002: '0x259B6fe3D2054F1290825dDb14399f4C4a8bF625',
}

export const INIT_CODE_HASH = {
  56: '0xfca8423b9dc2d94f0ea6764dacbbe434ad81abe29a9a860bbe0621880afd0d73',
  97: '0xfca8423b9dc2d94f0ea6764dacbbe434ad81abe29a9a860bbe0621880afd0d73',
  250: '0xfca8423b9dc2d94f0ea6764dacbbe434ad81abe29a9a860bbe0621880afd0d73',
  4002: '0xfca8423b9dc2d94f0ea6764dacbbe434ad81abe29a9a860bbe0621880afd0d73',
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
