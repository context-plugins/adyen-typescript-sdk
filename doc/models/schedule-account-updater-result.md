
# Schedule Account Updater Result

*This model accepts additional fields of type unknown.*

## Structure

`ScheduleAccountUpdaterResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pspReference` | `string` | Required | Adyen's 16-character unique reference associated with the transaction. This value is globally unique; quote it when communicating with us about this request. |
| `result` | `string` | Required | The result of scheduling an Account Updater. If scheduling was successful, this field returns **Success**; otherwise it contains the error message. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ScheduleAccountUpdaterResult } from 'adyenlib';

const scheduleAccountUpdaterResult: ScheduleAccountUpdaterResult = {
  pspReference: 'pspReference8',
  result: 'result6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

