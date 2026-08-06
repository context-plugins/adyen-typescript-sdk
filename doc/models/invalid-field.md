
# Invalid Field

*This model accepts additional fields of type unknown.*

## Structure

`InvalidField`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string` | Required | Description of the validation error. |
| `name` | `string` | Required | The field that has an invalid value. |
| `value` | `string` | Required | The invalid value. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InvalidField } from 'adyen';

const invalidField: InvalidField = {
  message: 'message6',
  name: 'name6',
  value: 'value8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

