
# Name 2

The name of the contact.

*This model accepts additional fields of type unknown.*

## Structure

`Name2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The first name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `lastName` | `string` | Required | The last name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Name2 } from 'adyen';

const name2: Name2 = {
  firstName: 'firstName0',
  lastName: 'lastName8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

