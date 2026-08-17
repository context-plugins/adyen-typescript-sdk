
# Name 1

The name of the person funding the money.

## Structure

`Name1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The first name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `lastName` | `string` | Required | The last name.<br><br>**Constraints**: *Maximum Length*: `80` |

## Example

```ts
import { Name1 } from 'adyen';

const name1: Name1 = {
  firstName: 'firstName4',
  lastName: 'lastName4',
};
```

