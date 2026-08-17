
# Order Item

## Structure

`OrderItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique identifier of the product. |
| `installments` | `bigint \| undefined` | Optional | The number of installments for the specified product `id`. |
| `name` | `string \| undefined` | Optional | The name of the product. |
| `quantity` | `number \| undefined` | Optional | The number of items with the specified product `id` included in the order. |

## Example

```ts
import { OrderItem } from 'adyen';

const orderItem: OrderItem = {
  id: 'id8',
  installments: BigInt(136),
  name: 'name8',
  quantity: 210,
};
```

