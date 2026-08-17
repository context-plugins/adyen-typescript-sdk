
# Account Event

## Structure

`AccountEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `event` | [`EventEnum \| undefined`](../../doc/models/event-enum.md) | Optional | The event.<br><br>> Permitted values: `InactivateAccount`, `RefundNotPaidOutTransfers`.<br>> For more information, refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-process). |
| `executionDate` | `string \| undefined` | Optional | The date on which the event will take place. |
| `reason` | `string \| undefined` | Optional | The reason why this event has been created. |

## Example

```ts
import { AccountEvent, EventEnum } from 'adyen';

const accountEvent: AccountEvent = {
  event: EventEnum.InactivateAccount,
  executionDate: '2016-03-13T12:52:32.123Z',
  reason: 'reason0',
};
```

