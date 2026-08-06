
# Transfer Notification Validation Fact

*This model accepts additional fields of type unknown.*

## Structure

`TransferNotificationValidationFact`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `result` | `string \| undefined` | Optional | The evaluation result of the validation fact. |
| `type` | `string \| undefined` | Optional | The type of the validation fact. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransferNotificationValidationFact } from 'adyen';

const transferNotificationValidationFact: TransferNotificationValidationFact = {
  result: 'result4',
  type: 'type8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

