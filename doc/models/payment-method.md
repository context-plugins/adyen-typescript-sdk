
# Payment Method

*This model accepts additional fields of type unknown.*

## Structure

`PaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apps` | [`PaymentMethodUpiApps[] \| undefined`](../../doc/models/payment-method-upi-apps.md) | Optional | A list of apps for this payment method. |
| `brand` | `string \| undefined` | Optional | Brand for the selected gift card. For example: plastix, hmclub. |
| `brands` | `string[] \| undefined` | Optional | List of possible brands. For example: visa, mc. |
| `configuration` | `Record<string, string> \| undefined` | Optional | The configuration of the payment method. |
| `fundingSource` | [`FundingSource \| undefined`](../../doc/models/funding-source.md) | Optional | - |
| `group` | [`PaymentMethodGroup \| undefined`](../../doc/models/payment-method-group.md) | Optional | - |
| `inputDetails` | [`InputDetail[] \| undefined`](../../doc/models/input-detail.md) | Optional | All input details to be provided to complete the payment with this payment method. |
| `issuers` | [`PaymentMethodIssuer[] \| undefined`](../../doc/models/payment-method-issuer.md) | Optional | A list of issuers for this payment method. |
| `name` | `string \| undefined` | Optional | The displayable name of this payment method. |
| `promoted` | `boolean \| undefined` | Optional | Indicates whether this payment method should be promoted or not. |
| `type` | `string \| undefined` | Optional | The unique payment method code. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FundingSource, PaymentMethod } from 'adyen';

const paymentMethod: PaymentMethod = {
  apps: [
    {
      id: 'id6',
      name: 'name6',
      appIdentifierInfo: {
        androidPackageId: 'androidPackageId8',
        iosScheme: 'iosScheme8',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      id: 'id6',
      name: 'name6',
      appIdentifierInfo: {
        androidPackageId: 'androidPackageId8',
        iosScheme: 'iosScheme8',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
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
  fundingSource: FundingSource.Debit,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

