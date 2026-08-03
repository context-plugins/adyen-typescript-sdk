
# Terminal Action Schedule Detail

*This model accepts additional fields of type unknown.*

## Structure

`TerminalActionScheduleDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The ID of the action on the specified terminal. |
| `terminalId` | `string \| undefined` | Optional | The unique ID of the terminal that the action applies to. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TerminalActionScheduleDetail } from 'adyenlib';

const terminalActionScheduleDetail: TerminalActionScheduleDetail = {
  id: 'id6',
  terminalId: 'terminalId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

