
# Remediating Action

*This model accepts additional fields of type unknown.*

## Structure

`RemediatingAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | The remediating action code. |
| `message` | `string \| undefined` | Optional | A description of how you can resolve the verification error. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RemediatingAction } from 'adyen';

const remediatingAction: RemediatingAction = {
  code: 'code6',
  message: 'message8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

