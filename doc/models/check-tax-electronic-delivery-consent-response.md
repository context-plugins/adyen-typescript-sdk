
# Check Tax Electronic Delivery Consent Response

*This model accepts additional fields of type unknown.*

## Structure

`CheckTaxElectronicDeliveryConsentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `us1099K` | `boolean \| undefined` | Optional | Consent to electronically deliver tax form US1099-K. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckTaxElectronicDeliveryConsentResponse } from 'adyen';

const checkTaxElectronicDeliveryConsentResponse: CheckTaxElectronicDeliveryConsentResponse = {
  us1099K: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

