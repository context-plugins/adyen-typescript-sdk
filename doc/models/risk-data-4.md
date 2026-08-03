
# Risk Data 4

Contains risk data, such as client-side data, used to identify risk for a transaction.

*This model accepts additional fields of type unknown.*

## Structure

`RiskData4`

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
import { RiskData4 } from 'adyenlib';

const riskData4: RiskData4 = {
  clientData: 'clientData4',
  customFields: {
    'key0': 'customFields2',
    'key1': 'customFields3',
    'key2': 'customFields4'
  },
  fraudOffset: 194,
  profileReference: 'profileReference2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

