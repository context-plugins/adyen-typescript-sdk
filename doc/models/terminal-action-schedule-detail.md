
# Terminal Action Schedule Detail

## Structure

`TerminalActionScheduleDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The ID of the action on the specified terminal. |
| `terminalId` | `string \| undefined` | Optional | The unique ID of the terminal that the action applies to. |

## Example

```ts
import { TerminalActionScheduleDetail } from 'adyen';

const terminalActionScheduleDetail: TerminalActionScheduleDetail = {
  id: 'id6',
  terminalId: 'terminalId4',
};
```

