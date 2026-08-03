
# Name 5

*This model accepts additional fields of type unknown.*

## Structure

`Name5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The first name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `lastName` | `string` | Required | The last name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Name5 } from 'adyenlib';

const name5: Name5 = {
  firstName: 'firstName6',
  lastName: 'lastName2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

