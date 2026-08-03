
# Terminal Models Response

*This model accepts additional fields of type unknown.*

## Structure

`TerminalModelsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`NetworkTokenRequestor[] \| undefined`](../../doc/models/network-token-requestor.md) | Optional | The terminal models that the API credential has access to. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TerminalModelsResponse } from 'adyenlib';

const terminalModelsResponse: TerminalModelsResponse = {
  data: [
    {
      id: 'id0',
      name: 'name0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      id: 'id0',
      name: 'name0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      id: 'id0',
      name: 'name0',
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

