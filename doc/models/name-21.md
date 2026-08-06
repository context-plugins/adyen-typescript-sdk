
# Name 21

The individual's name.

*This model accepts additional fields of type unknown.*

## Structure

`Name21`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The individual's first name. Must not be blank. |
| `infix` | `string \| undefined` | Optional | The infix in the individual's name, if any. |
| `lastName` | `string` | Required | The individual's last name. Must not be blank. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Name21 } from 'adyen';

const name21: Name21 = {
  firstName: 'firstName6',
  lastName: 'lastName2',
  infix: 'infix2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

