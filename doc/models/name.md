
# Name

The name of the person funding the money.

*This model accepts additional fields of type unknown.*

## Structure

`Name`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The first name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `lastName` | `string` | Required | The last name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Name } from 'adyenlib';

const name: Name = {
  firstName: 'firstName4',
  lastName: 'lastName4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

