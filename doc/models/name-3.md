
# Name 3

## Structure

`Name3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The individual's first name. Must not be blank. |
| `infix` | `string \| undefined` | Optional | The infix in the individual's name, if any. |
| `lastName` | `string` | Required | The individual's last name. Must not be blank. |

## Example

```ts
import { Name3 } from 'adyen';

const name3: Name3 = {
  firstName: 'firstName0',
  lastName: 'lastName8',
  infix: 'infix8',
};
```

