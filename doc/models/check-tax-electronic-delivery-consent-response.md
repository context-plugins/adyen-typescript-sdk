
# Check Tax Electronic Delivery Consent Response

## Structure

`CheckTaxElectronicDeliveryConsentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uS1099k` | `boolean \| undefined` | Optional | Consent to electronically deliver tax form US1099-K. |

## Example

```ts
import { CheckTaxElectronicDeliveryConsentResponse } from 'adyen';

const checkTaxElectronicDeliveryConsentResponse: CheckTaxElectronicDeliveryConsentResponse = {
  uS1099k: false,
};
```

