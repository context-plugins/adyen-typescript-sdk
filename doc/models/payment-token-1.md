
# Payment Token 1

Surrogate of the PAN (Primary Account Number) of the payment card to identify the payment mean of the customer. It allows, for a merchant, to identify the customer.
Restriction of product payable by a card.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentToken1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tokenRequestedType` | [`TokenRequestedType1`](../../doc/models/token-requested-type-1.md) | Required | - |
| `tokenValue` | `string` | Required | Payment token replacing the PAN of the payment card to identify the payment<br>mean of the customer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `expiryDateTime` | `string \| undefined` | Optional | Expiry date and time. Limits the validity of a payment token. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentToken1, TokenRequestedType1 } from 'adyenlib';

const paymentToken1: PaymentToken1 = {
  tokenRequestedType: TokenRequestedType1.Transaction,
  tokenValue: 'TokenValue8',
  expiryDateTime: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

