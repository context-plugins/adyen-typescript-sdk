
# Name 4

The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program.

## Structure

`Name4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The first name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `lastName` | `string` | Required | The last name.<br><br>**Constraints**: *Maximum Length*: `80` |

## Example

```ts
import { Name4 } from 'adyen';

const name4: Name4 = {
  firstName: 'firstName4',
  lastName: 'lastName4',
};
```

