
# Transfer Notification Validation Fact

## Structure

`TransferNotificationValidationFact`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `result` | `string \| undefined` | Optional | The evaluation result of the validation fact. |
| `type` | `string \| undefined` | Optional | The type of the validation fact. |

## Example

```ts
import { TransferNotificationValidationFact } from 'adyen';

const transferNotificationValidationFact: TransferNotificationValidationFact = {
  result: 'result4',
  type: 'type8',
};
```

