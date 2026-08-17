
# Interchange Data

## Structure

`InterchangeData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `interchangeAmount` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The currency and value of the adjusted interchange fee. |
| `interchangeRateIndicator` | `string \| undefined` | Optional | A 3-character alphanumeric code assigned by Visa that identifies the specific interchange reimbursement program a transaction qualified for. The code is assigned based on the card type, entry mode, and security data provided. |
| `type` | `string` | Required, Constant | The type of events data.<br><br>Possible values:<br><br>- **interchangeData**: information about the interchange fee applied to a transaction.<br><br>**Value**: `'interchangeData'` |

## Example

```ts
import { InterchangeData } from 'adyen';

const interchangeData: InterchangeData = {
  type: 'interchangeData',
  interchangeAmount: {
    currency: 'currency2',
    value: BigInt(62),
  },
  interchangeRateIndicator: 'interchangeRateIndicator6',
};
```

