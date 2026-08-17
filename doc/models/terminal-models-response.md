
# Terminal Models Response

## Structure

`TerminalModelsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Item[] \| undefined`](../../doc/models/item.md) | Optional | The terminal models that the API credential has access to. |

## Example

```ts
import { TerminalModelsResponse } from 'adyen';

const terminalModelsResponse: TerminalModelsResponse = {
  data: [
    {
      id: 'id0',
      name: 'name0',
    },
    {
      id: 'id0',
      name: 'name0',
    },
    {
      id: 'id0',
      name: 'name0',
    }
  ],
};
```

