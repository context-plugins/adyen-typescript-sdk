
# Payment Instrument 2

## Structure

`PaymentInstrument2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The description of the resource. |
| `id` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `reference` | `string \| undefined` | Optional | The reference for the resource. |
| `tokenType` | `string \| undefined` | Optional | The type of wallet that the network token is associated with. |

## Example

```ts
import { PaymentInstrument2 } from 'adyen';

const paymentInstrument2: PaymentInstrument2 = {
  description: 'description0',
  id: 'id0',
  reference: 'reference4',
  tokenType: 'tokenType4',
};
```

