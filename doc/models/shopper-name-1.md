
# Shopper Name 1

The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program.

## Structure

`ShopperName1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The first name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `lastName` | `string` | Required | The last name.<br><br>**Constraints**: *Maximum Length*: `80` |

## Example

```ts
import { ShopperName1 } from 'adyen';

const shopperName1: ShopperName1 = {
  firstName: 'firstName6',
  lastName: 'lastName2',
};
```

