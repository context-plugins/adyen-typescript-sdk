
# Shopper Name 2

The shopper's full name.

## Structure

`ShopperName2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The first name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `lastName` | `string` | Required | The last name.<br><br>**Constraints**: *Maximum Length*: `80` |

## Example

```ts
import { ShopperName2 } from 'adyen';

const shopperName2: ShopperName2 = {
  firstName: 'firstName4',
  lastName: 'lastName4',
};
```

