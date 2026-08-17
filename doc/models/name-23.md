
# Name 23

The individual's name.

## Structure

`Name23`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The individual's first name. Must not be blank. |
| `infix` | `string \| undefined` | Optional | The infix in the individual's name, if any. |
| `lastName` | `string` | Required | The individual's last name. Must not be blank. |

## Example

```ts
import { Name23 } from 'adyen';

const name23: Name23 = {
  firstName: 'firstName6',
  lastName: 'lastName2',
  infix: 'infix2',
};
```

