
# Uk Fps Tracing Data

*This model accepts additional fields of type unknown.*

## Structure

`UkFpsTracingData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fpid` | `string` | Required | The FPS trace number. This is a unique identifier assigned to transfers processed by [FPS](https://www.bankofengland.co.uk/payment-systems/services/faster-payments-service). |
| `type` | [`Type88`](../../doc/models/type-88.md) | Required | **ukFps** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Type88, UkFpsTracingData } from 'adyen';

const ukFpsTracingData: UkFpsTracingData = {
  fpid: 'fpid2',
  type: Type88.UkFps,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

