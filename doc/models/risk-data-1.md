
# Risk Data 1

Any risk-related settings to apply to the payment.

*This model accepts additional fields of type unknown.*

## Structure

`RiskData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientData` | `string \| undefined` | Optional | Contains client-side data, like the device fingerprint, cookies, and specific browser settings.<br><br>**Constraints**: *Maximum Length*: `5000` |
| `customFields` | `Record<string, string> \| undefined` | Optional | Any custom fields used as part of the input to configured risk rules. |
| `fraudOffset` | `number \| undefined` | Optional | An integer value that is added to the normal fraud score. The value can be either positive or negative. |
| `profileReference` | `string \| undefined` | Optional | The risk profile to assign to this payment. When left empty, the merchant-level account's default risk profile will be applied. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RiskData1 } from 'adyen';

const riskData1: RiskData1 = {
  clientData: 'clientData2',
  customFields: {
    'key0': 'customFields0'
  },
  fraudOffset: 192,
  profileReference: 'profileReference0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

