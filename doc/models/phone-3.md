
# Phone 3

The phone number of the account holder.

*This model accepts additional fields of type unknown.*

## Structure

`Phone3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | `string` | Required | The full phone number provided as a single string.<br>For example, **"0031 6 11 22 33 44"**, **"+316/1122-3344"**,<br><br>or **"(0031) 611223344"**. |
| `type` | [`Type4`](../../doc/models/type-4.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Phone3, Type4 } from 'adyen';

const phone3: Phone3 = {
  number: 'number0',
  type: Type4.Landline,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

