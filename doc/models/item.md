
# Item

The token requestor is an entity who requested tokenization of the card for secure payments.

## Structure

`Item`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The value to provide in the result. |
| `name` | `string \| undefined` | Optional | The display name. |

## Example

```ts
import { Item } from 'adyen';

const item: Item = {
  id: 'id2',
  name: 'name2',
};
```

