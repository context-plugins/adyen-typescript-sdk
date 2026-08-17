
# UK Fps Tracing Data

## Structure

`UKFpsTracingData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fpid` | `string` | Required | The FPS trace number. This is a unique identifier assigned to transfers processed by [FPS](https://www.bankofengland.co.uk/payment-systems/services/faster-payments-service). |
| `type` | `string` | Required, Constant | **ukFps**<br><br>**Value**: `'ukFps'` |

## Example

```ts
import { UKFpsTracingData } from 'adyen';

const uKFpsTracingData: UKFpsTracingData = {
  fpid: 'fpid0',
  type: 'ukFps',
};
```

