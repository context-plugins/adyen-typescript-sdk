
# Order Item

*This model accepts additional fields of type unknown.*

## Structure

`OrderItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique identifier of the product. |
| `installments` | `bigint \| undefined` | Optional | The number of installments for the specified product `id`. |
| `name` | `string \| undefined` | Optional | The name of the product. |
| `quantity` | `number \| undefined` | Optional | The number of items with the specified product `id` included in the order. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { OrderItem } from 'adyenlib';

const orderItem: OrderItem = {
  id: 'id8',
  installments: BigInt(136),
  name: 'name8',
  quantity: 210,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

