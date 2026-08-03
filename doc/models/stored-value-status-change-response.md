
# Stored Value Status Change Response

*This model accepts additional fields of type unknown.*

## Structure

`StoredValueStatusChangeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authCode` | `string \| undefined` | Optional | Authorisation code:<br><br>* When the payment is authorised, this field holds the authorisation code for the payment.<br>* When the payment is not authorised, this field is empty. |
| `currentBalance` | [`CurrentBalance \| undefined`](../../doc/models/current-balance.md) | Optional | - |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. |
| `refusalReason` | `string \| undefined` | Optional | If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.<br><br>When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values. |
| `resultCode` | [`ResultCode3 \| undefined`](../../doc/models/result-code-3.md) | Optional | - |
| `thirdPartyRefusalReason` | `string \| undefined` | Optional | Raw refusal reason received from the third party, where available |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ResultCode3, StoredValueStatusChangeResponse } from 'adyenlib';

const storedValueStatusChangeResponse: StoredValueStatusChangeResponse = {
  authCode: 'authCode2',
  currentBalance: {
    currency: 'currency2',
    value: BigInt(232),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  pspReference: 'pspReference0',
  refusalReason: 'refusalReason8',
  resultCode: ResultCode3.Error,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

