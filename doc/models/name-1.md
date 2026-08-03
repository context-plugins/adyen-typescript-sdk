
# Name 1

*This model accepts additional fields of type unknown.*

## Structure

`Name1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The individual's first name. Must not be blank. |
| `infix` | `string \| undefined` | Optional | The infix in the individual's name, if any. |
| `lastName` | `string` | Required | The individual's last name. Must not be blank. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Name1 } from 'adyenlib';

const name1: Name1 = {
  firstName: 'firstName4',
  lastName: 'lastName4',
  infix: 'infix4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

