
# Stored Value Balance Check Response

*This model accepts additional fields of type unknown.*

## Structure

`StoredValueBalanceCheckResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currentBalance` | [`CurrentBalance \| undefined`](../../doc/models/current-balance.md) | Optional | - |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. |
| `refusalReason` | `string \| undefined` | Optional | If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.<br><br>When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values. |
| `resultCode` | [`ResultCode3 \| undefined`](../../doc/models/result-code-3.md) | Optional | - |
| `thirdPartyRefusalReason` | `string \| undefined` | Optional | Raw refusal reason received from the third party, where available |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ResultCode3, StoredValueBalanceCheckResponse } from 'adyen';

const storedValueBalanceCheckResponse: StoredValueBalanceCheckResponse = {
  currentBalance: {
    currency: 'currency2',
    value: BigInt(232),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  pspReference: 'pspReference6',
  refusalReason: 'refusalReason4',
  resultCode: ResultCode3.Success,
  thirdPartyRefusalReason: 'thirdPartyRefusalReason6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

