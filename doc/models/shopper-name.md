
# Shopper Name

## Structure

`ShopperName`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The first name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `lastName` | `string` | Required | The last name.<br><br>**Constraints**: *Maximum Length*: `80` |

## Example

```ts
import { ShopperName } from 'adyen';

const shopperName: ShopperName = {
  firstName: 'firstName2',
  lastName: 'lastName6',
};
```

