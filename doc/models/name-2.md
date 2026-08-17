
# Name 2

The name of the shopper.

## Structure

`Name2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The first name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `lastName` | `string` | Required | The last name.<br><br>**Constraints**: *Maximum Length*: `80` |

## Example

```ts
import { Name2 } from 'adyen';

const name2: Name2 = {
  firstName: 'firstName0',
  lastName: 'lastName8',
};
```

