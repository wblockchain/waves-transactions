import {TRANSACTION_TYPE} from '@waves/ts-types'
import {
    isEq,
    orEq,
    isAssetId,
    isRecipient,
    isNumber,
    isNumberLike,
    prop,
    isArray,
    getError,
    validateByShema,
    ifElse,
    defaultValue,
    isPublicKey,
    isRequired,
    validatePipe,
    pipe,
    isString,
    gte,
    isValidDataPair, isBase64
} from './validators'


const invokeScheme = {
    type: isEq(TRANSACTION_TYPE.INVOKE_EXPRESSION),
    senderPublicKey: isPublicKey,
    version: isEq(1),
    expression: isBase64,
    fee: isNumberLike,
    feeAssetId: isAssetId,
    chainId: isNumber,
    timestamp: isNumber,
    proofs: ifElse(isArray, defaultValue(true), orEq([ undefined ])),
}


export const invokeExpressionValidator = validateByShema(invokeScheme, getError)