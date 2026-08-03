
# Pin Change Response

*This model accepts additional fields of type unknown.*

## Structure

`PinChangeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`Status13`](../../doc/models/status-13.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PinChangeResponse, Status13 } from 'adyenlib';

const pinChangeResponse: PinChangeResponse = {
  status: Status13.Completed,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

