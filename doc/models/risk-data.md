
# Risk Data

## Structure

`RiskData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientData` | `string \| undefined` | Optional | Contains client-side data, like the device fingerprint, cookies, and specific browser settings.<br><br>**Constraints**: *Maximum Length*: `5000` |
| `customFields` | `Record<string, string> \| undefined` | Optional | Any custom fields used as part of the input to configured risk rules. |
| `fraudOffset` | `number \| undefined` | Optional | An integer value that is added to the normal fraud score. The value can be either positive or negative. |
| `profileReference` | `string \| undefined` | Optional | The risk profile to assign to this payment. When left empty, the merchant-level account's default risk profile will be applied. |

## Example

```ts
import { RiskData } from 'adyen';

const riskData: RiskData = {
  clientData: 'clientData8',
  customFields: {
    'key0': 'customFields6'
  },
  fraudOffset: 124,
  profileReference: 'profileReference6',
};
```

