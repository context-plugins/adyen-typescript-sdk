
# Interchange Data

*This model accepts additional fields of type unknown.*

## Structure

`InterchangeData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `interchangeAmount` | [`InterchangeAmount \| undefined`](../../doc/models/interchange-amount.md) | Optional | - |
| `interchangeRateIndicator` | `string \| undefined` | Optional | A 3-character alphanumeric code assigned by Visa that identifies the specific interchange reimbursement program a transaction qualified for. The code is assigned based on the card type, entry mode, and security data provided. |
| `type` | [`Type85`](../../doc/models/type-85.md) | Required | The type of events data.<br><br>Possible values:<br><br>- **interchangeData**: information about the interchange fee applied to a transaction. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InterchangeData, Type85 } from 'adyen';

const interchangeData: InterchangeData = {
  type: Type85.InterchangeData,
  interchangeAmount: {
    currency: 'currency2',
    value: BigInt(62),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  interchangeRateIndicator: 'interchangeRateIndicator6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

