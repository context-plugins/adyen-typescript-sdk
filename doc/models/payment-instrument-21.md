
# Payment Instrument 21

Contains information about the payment instrument that was used for the transaction.

## Structure

`PaymentInstrument21`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The description of the resource. |
| `id` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `reference` | `string \| undefined` | Optional | The reference for the resource. |
| `tokenType` | `string \| undefined` | Optional | The type of wallet that the network token is associated with. |

## Example

```ts
import { PaymentInstrument21 } from 'adyen';

const paymentInstrument21: PaymentInstrument21 = {
  description: 'description2',
  id: 'id8',
  reference: 'reference6',
  tokenType: 'tokenType6',
};
```

