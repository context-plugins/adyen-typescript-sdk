
# Payment Instrument 3

Contains information about the payment instrument used in the transfer.

## Structure

`PaymentInstrument3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The description of the resource. |
| `id` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `reference` | `string \| undefined` | Optional | The reference for the resource. |
| `tokenType` | `string \| undefined` | Optional | The type of wallet that the network token is associated with. |

## Example

```ts
import { PaymentInstrument3 } from 'adyen';

const paymentInstrument3: PaymentInstrument3 = {
  description: 'description6',
  id: 'id6',
  reference: 'reference2',
  tokenType: 'tokenType2',
};
```

