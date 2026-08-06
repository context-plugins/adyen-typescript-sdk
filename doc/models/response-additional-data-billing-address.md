
# Response Additional Data Billing Address

*This model accepts additional fields of type unknown.*

## Structure

`ResponseAdditionalDataBillingAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingAddressCity` | `string \| undefined` | Optional | The billing address city passed in the payment request. |
| `billingAddressCountry` | `string \| undefined` | Optional | The billing address country passed in the payment request.<br><br>Example: NL |
| `billingAddressHouseNumberOrName` | `string \| undefined` | Optional | The billing address house number or name passed in the payment request. |
| `billingAddressPostalCode` | `string \| undefined` | Optional | The billing address postal code passed in the payment request.<br><br>Example: 1011 DJ |
| `billingAddressStateOrProvince` | `string \| undefined` | Optional | The billing address state or province passed in the payment request.<br><br>Example: NH |
| `billingAddressStreet` | `string \| undefined` | Optional | The billing address street passed in the payment request. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ResponseAdditionalDataBillingAddress } from 'adyen';

const responseAdditionalDataBillingAddress: ResponseAdditionalDataBillingAddress = {
  billingAddressCity: 'billingAddress.city6',
  billingAddressCountry: 'billingAddress.country0',
  billingAddressHouseNumberOrName: 'billingAddress.houseNumberOrName4',
  billingAddressPostalCode: 'billingAddress.postalCode2',
  billingAddressStateOrProvince: 'billingAddress.stateOrProvince2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

