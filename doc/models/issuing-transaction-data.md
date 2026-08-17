
# Issuing Transaction Data

## Structure

`IssuingTransactionData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `captureCycleId` | `string \| undefined` | Optional | captureCycleId associated with transfer event. |
| `type` | `string` | Required, Constant | The type of events data.<br><br>Possible values:<br><br>- **issuingTransactionData**: issuing transaction data<br><br>**Value**: `'issuingTransactionData'` |

## Example

```ts
import { IssuingTransactionData } from 'adyen';

const issuingTransactionData: IssuingTransactionData = {
  type: 'issuingTransactionData',
  captureCycleId: 'captureCycleId4',
};
```

