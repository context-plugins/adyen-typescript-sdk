
# Payment Token 1

Surrogate of the PAN (Primary Account Number) of the payment card to identify the payment mean of the customer. It allows, for a merchant, to identify the customer.
Restriction of product payable by a card.

## Structure

`PaymentToken1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tokenRequestedType` | [`TokenRequestedType1Enum`](../../doc/models/token-requested-type-1-enum.md) | Required | Type of token replacing the PAN of a payment card to identify the payment<br>mean of the customer. It allows, for a merchant, to use a token for a transaction<br>only or for a longer period.<br>Possible values:<br><br>* **Customer**<br>* **Transaction** |
| `tokenValue` | `string` | Required | Payment token replacing the PAN of the payment card to identify the payment<br>mean of the customer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `expiryDateTime` | `string \| undefined` | Optional | Expiry date and time. Limits the validity of a payment token. |

## Example

```ts
import { PaymentToken1, TokenRequestedType1Enum } from 'adyen';

const paymentToken1: PaymentToken1 = {
  tokenRequestedType: TokenRequestedType1Enum.Transaction,
  tokenValue: 'TokenValue8',
  expiryDateTime: '2016-03-13T12:52:32.123Z',
};
```

