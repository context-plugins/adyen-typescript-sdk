
# Invalid Field

## Structure

`InvalidField`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The field that has an invalid value. |
| `value` | `string` | Required | The invalid value. |
| `message` | `string` | Required | Description of the validation error. |

## Example

```ts
import { InvalidField } from 'adyen';

const invalidField: InvalidField = {
  name: 'name6',
  value: 'value8',
  message: 'message6',
};
```

