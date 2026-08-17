
# US Ach Tracing Data

## Structure

`USAchTracingData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `traceNumber` | `string` | Required | The ACH trace number. This is a unique 15-digit identifier assigned to transfers processed by [ACH](https://fiscal.treasury.gov/payments-from-government/automated-clearing-house-ach). |
| `type` | `string` | Required, Constant | **usAch**<br><br>**Value**: `'usAch'` |

## Example

```ts
import { USAchTracingData } from 'adyen';

const uSAchTracingData: USAchTracingData = {
  traceNumber: 'traceNumber2',
  type: 'usAch',
};
```

