
# Set Tax Electronic Delivery Consent Request

## Structure

`SetTaxElectronicDeliveryConsentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uS1099k` | `boolean \| undefined` | Optional | Consent to electronically deliver tax form US1099-K. |

## Example

```ts
import { SetTaxElectronicDeliveryConsentRequest } from 'adyen';

const setTaxElectronicDeliveryConsentRequest: SetTaxElectronicDeliveryConsentRequest = {
  uS1099k: false,
};
```

