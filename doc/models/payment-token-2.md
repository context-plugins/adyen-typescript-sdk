
# Payment Token 2

*This model accepts additional fields of type unknown.*

## Structure

`PaymentToken2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tokenRequestedType` | [`TokenRequestedType1`](../../doc/models/token-requested-type-1.md) | Required | - |
| `tokenValue` | `string` | Required | Payment token replacing the PAN of the payment card to identify the payment<br>mean of the customer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `expiryDateTime` | `string \| undefined` | Optional | Expiry date and time. Limits the validity of a payment token. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentToken2, TokenRequestedType1 } from 'adyenlib';

const paymentToken2: PaymentToken2 = {
  tokenRequestedType: TokenRequestedType1.Transaction,
  tokenValue: 'TokenValue4',
  expiryDateTime: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

