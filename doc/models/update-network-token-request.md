
# Update Network Token Request

*This model accepts additional fields of type unknown.*

## Structure

`UpdateNetworkTokenRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`Status16 \| undefined`](../../doc/models/status-16.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Status16, UpdateNetworkTokenRequest } from 'adyen';

const updateNetworkTokenRequest: UpdateNetworkTokenRequest = {
  status: Status16.Closed,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

