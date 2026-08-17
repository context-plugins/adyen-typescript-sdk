
# Payment Method

## Structure

`PaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apps` | [`PaymentMethodUPIApps[] \| undefined`](../../doc/models/payment-method-upi-apps.md) | Optional | A list of apps for this payment method. |
| `brand` | `string \| undefined` | Optional | Brand for the selected gift card. For example: plastix, hmclub. |
| `brands` | `string[] \| undefined` | Optional | List of possible brands. For example: visa, mc. |
| `configuration` | `Record<string, string> \| undefined` | Optional | The configuration of the payment method. |
| `fundingSource` | [`FundingSource9Enum \| undefined`](../../doc/models/funding-source-9-enum.md) | Optional | The funding source of the payment method. |
| `group` | [`PaymentMethodGroup2 \| undefined`](../../doc/models/payment-method-group-2.md) | Optional | The group where this payment method belongs to. |
| `inputDetails` | [`InputDetail[] \| undefined`](../../doc/models/input-detail.md) | Optional | All input details to be provided to complete the payment with this payment method. |
| `issuers` | [`PaymentMethodIssuer[] \| undefined`](../../doc/models/payment-method-issuer.md) | Optional | A list of issuers for this payment method. |
| `name` | `string \| undefined` | Optional | The displayable name of this payment method. |
| `promoted` | `boolean \| undefined` | Optional | Indicates whether this payment method should be promoted or not. |
| `type` | `string \| undefined` | Optional | The unique payment method code. |

## Example

```ts
import { FundingSource9Enum, PaymentMethod } from 'adyen';

const paymentMethod: PaymentMethod = {
  apps: [
    {
      id: 'id6',
      name: 'name6',
      appIdentifierInfo: {
        androidPackageId: 'androidPackageId8',
        iosScheme: 'iosScheme8',
      },
    },
    {
      id: 'id6',
      name: 'name6',
      appIdentifierInfo: {
        androidPackageId: 'androidPackageId8',
        iosScheme: 'iosScheme8',
      },
    }
  ],
  brand: 'brand6',
  brands: [
    'brands3'
  ],
  configuration: {
    'key0': 'configuration6',
    'key1': 'configuration7'
  },
  fundingSource: FundingSource9Enum.Debit,
};
```

