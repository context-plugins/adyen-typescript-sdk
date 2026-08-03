
# Name 22

*This model accepts additional fields of type unknown.*

## Structure

`Name22`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | The first name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `lastName` | `string \| undefined` | Optional | The last name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Name22 } from 'adyenlib';

const name22: Name22 = {
  firstName: 'firstName0',
  lastName: 'lastName8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

