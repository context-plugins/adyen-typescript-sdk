
# List External Terminal Actions Response

*This model accepts additional fields of type unknown.*

## Structure

`ListExternalTerminalActionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`ExternalTerminalAction[] \| undefined`](../../doc/models/external-terminal-action.md) | Optional | The list of terminal actions. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

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
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      actionType: 'actionType0',
      config: 'config6',
      confirmedAt: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      result: 'result4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

