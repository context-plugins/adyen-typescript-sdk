
# Schedule Account Updater Result

## Structure

`ScheduleAccountUpdaterResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pspReference` | `string` | Required | Adyen's 16-character unique reference associated with the transaction. This value is globally unique; quote it when communicating with us about this request. |
| `result` | `string` | Required | The result of scheduling an Account Updater. If scheduling was successful, this field returns **Success**; otherwise it contains the error message. |

## Example

```ts
import { ScheduleAccountUpdaterResult } from 'adyen';

const scheduleAccountUpdaterResult: ScheduleAccountUpdaterResult = {
  pspReference: 'pspReference8',
  result: 'result6',
};
```

