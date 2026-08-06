
# Set Tax Electronic Delivery Consent Request

*This model accepts additional fields of type unknown.*

## Structure

`SetTaxElectronicDeliveryConsentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `us1099K` | `boolean \| undefined` | Optional | Consent to electronically deliver tax form US1099-K. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SetTaxElectronicDeliveryConsentRequest } from 'adyen';

const setTaxElectronicDeliveryConsentRequest: SetTaxElectronicDeliveryConsentRequest = {
  us1099K: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

