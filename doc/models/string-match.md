
# String Match

*This model accepts additional fields of type unknown.*

## Structure

`StringMatch`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | [`Operation \| undefined`](../../doc/models/operation.md) | Optional | - |
| `value` | `string \| undefined` | Optional | The string to be matched. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Operation, StringMatch } from 'adyen';

const stringMatch: StringMatch = {
  operation: Operation.IsEqualTo,
  value: 'value0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

