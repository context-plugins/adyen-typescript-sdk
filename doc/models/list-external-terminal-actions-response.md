
# List External Terminal Actions Response

## Structure

`ListExternalTerminalActionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`ExternalTerminalAction[] \| undefined`](../../doc/models/external-terminal-action.md) | Optional | The list of terminal actions. |

## Example

```ts
import { ListExternalTerminalActionsResponse } from 'adyen';

const listExternalTerminalActionsResponse: ListExternalTerminalActionsResponse = {
  data: [
    {
      actionType: 'actionType0',
      config: 'config6',
      confirmedAt: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      result: 'result4',
    },
    {
      actionType: 'actionType0',
      config: 'config6',
      confirmedAt: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      result: 'result4',
    }
  ],
};
```

