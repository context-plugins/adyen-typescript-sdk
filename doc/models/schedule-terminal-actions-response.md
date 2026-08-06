
# Schedule Terminal Actions Response

*This model accepts additional fields of type unknown.*

## Structure

`ScheduleTerminalActionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actionDetails` | [`ScheduleTerminalActionsResponseActionDetails \| undefined`](../../doc/models/containers/schedule-terminal-actions-response-action-details.md) | Optional | This is a container for one-of cases. |
| `items` | [`TerminalActionScheduleDetail[] \| undefined`](../../doc/models/terminal-action-schedule-detail.md) | Optional | A list containing a terminal ID and an action ID for each terminal that the action was scheduled for. |
| `scheduledAt` | `string \| undefined` | Optional | The date and time when the action should happen.<br>Format: [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339), but without the **Z** before the time offset. For example, **2021-11-15T12:16:21+0100**<br>The action is sent with the first [maintenance call](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api#when-actions-take-effect) after the specified date and time in the time zone of the terminal.<br>An empty value causes the action to be sent as soon as possible: at the next maintenance call. |
| `storeId` | `string \| undefined` | Optional | The unique ID of the [store](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/stores). If present, all terminals in the `terminalIds` list must be assigned to this store. |
| `terminalsWithErrors` | `Record<string, unknown> \| undefined` | Optional | The validation errors that occurred in the list of terminals, and for each error the IDs of the terminals that the error applies to. |
| `totalErrors` | `number \| undefined` | Optional | The number of terminals for which scheduling the action failed. |
| `totalScheduled` | `number \| undefined` | Optional | The number of terminals for which the action was successfully scheduled. This doesn't mean the action has happened yet. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ScheduleTerminalActionsResponse, Type210 } from 'adyen';

const scheduleTerminalActionsResponse: ScheduleTerminalActionsResponse = {
  actionDetails: {
    type: Type210.ForceReboot,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  items: [
    {
      id: 'id8',
      terminalId: 'terminalId6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  scheduledAt: 'scheduledAt0',
  storeId: 'storeId8',
  terminalsWithErrors: {
    'key0': { 'key1': 'val1', 'key2': 'val2' },
    'key1': { 'key1': 'val1', 'key2': 'val2' }
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

