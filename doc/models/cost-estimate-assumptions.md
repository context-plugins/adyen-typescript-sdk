
# Cost Estimate Assumptions

*This model accepts additional fields of type unknown.*

## Structure

`CostEstimateAssumptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `assume3DSecureAuthenticated` | `boolean \| undefined` | Optional | If true, the cardholder is expected to successfully authorise via 3D Secure. |
| `assumeLevel3Data` | `boolean \| undefined` | Optional | If true, the transaction is expected to have valid Level 3 data. |
| `installments` | `number \| undefined` | Optional | If not zero, the number of installments. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CostEstimateAssumptions } from 'adyen';

const costEstimateAssumptions: CostEstimateAssumptions = {
  assume3DSecureAuthenticated: false,
  assumeLevel3Data: false,
  installments: 124,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

