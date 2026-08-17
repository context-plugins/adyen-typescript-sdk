
# Terminal Status Enum

The status of the terminal:

- `OnlineToday`, `OnlineLast1Day`, `OnlineLast2Days` etcetera to `OnlineLast7Days`: Indicates when in the past week the terminal was last online.

- `SwitchedOff`: Indicates it was more than a week ago that the terminal was last online.

- `ReAssignToInventoryPending`, `ReAssignToStorePending`, `ReAssignToMerchantInventoryPending`: Indicates the terminal is scheduled to be reassigned.

## Enumeration

`TerminalStatusEnum`

## Fields

| Name |
|  --- |
| `OnlineLast1Day` |
| `OnlineLast2Days` |
| `OnlineLast3Days` |
| `OnlineLast4Days` |
| `OnlineLast5Days` |
| `OnlineLast6Days` |
| `OnlineLast7Days` |
| `OnlineToday` |
| `ReAssignToInventoryPending` |
| `ReAssignToMerchantInventoryPending` |
| `ReAssignToStorePending` |
| `SwitchedOff` |

## Example

```ts
import { TerminalStatusEnum } from 'adyen';

const terminalStatus = TerminalStatusEnum.OnlineLast1Day;
```

