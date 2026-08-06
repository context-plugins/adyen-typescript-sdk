
# Stored Value Issue Response

*This model accepts additional fields of type unknown.*

## Structure

`StoredValueIssueResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authCode` | `string \| undefined` | Optional | Authorisation code:<br><br>* When the payment is authorised, this field holds the authorisation code for the payment.<br>* When the payment is not authorised, this field is empty. |
| `currentBalance` | [`CurrentBalance \| undefined`](../../doc/models/current-balance.md) | Optional | - |
| `paymentMethod` | `Record<string, string> \| undefined` | Optional | The collection that contains the type of the payment method and its specific information if available |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. |
| `refusalReason` | `string \| undefined` | Optional | If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.<br><br>When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values. |
| `resultCode` | [`ResultCode3 \| undefined`](../../doc/models/result-code-3.md) | Optional | - |
| `thirdPartyRefusalReason` | `string \| undefined` | Optional | Raw refusal reason received from the third party, where available |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StoredValueIssueResponse } from 'adyen';

const storedValueIssueResponse: StoredValueIssueResponse = {
  authCode: 'authCode8',
  currentBalance: {
    currency: 'currency2',
    value: BigInt(232),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  paymentMethod: {
    'key0': 'paymentMethod6'
  },
  pspReference: 'pspReference6',
  refusalReason: 'refusalReason4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

