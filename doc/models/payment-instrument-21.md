
# Payment Instrument 21

Contains information about the payment instrument that was used for the transaction.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentInstrument21`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The description of the resource. |
| `id` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `reference` | `string \| undefined` | Optional | The reference for the resource. |
| `tokenType` | `string \| undefined` | Optional | The type of wallet that the network token is associated with. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentInstrument21 } from 'adyenlib';

const paymentInstrument21: PaymentInstrument21 = {
  description: 'description2',
  id: 'id8',
  reference: 'reference6',
  tokenType: 'tokenType6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

