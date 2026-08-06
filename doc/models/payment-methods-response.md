
# Payment Methods Response

*This model accepts additional fields of type unknown.*

## Structure

`PaymentMethodsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentMethods` | [`PaymentMethod[] \| undefined`](../../doc/models/payment-method.md) | Optional | Detailed list of payment methods required to generate payment forms. |
| `storedPaymentMethods` | [`StoredPaymentMethod3[] \| undefined`](../../doc/models/stored-payment-method-3.md) | Optional | List of all stored payment methods. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FundingSource, PaymentMethodsResponse } from 'adyen';

const paymentMethodsResponse: PaymentMethodsResponse = {
  paymentMethods: [
    {
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
        'key0': 'configuration2',
        'key1': 'configuration1',
        'key2': 'configuration0'
      },
      fundingSource: FundingSource.Debit,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  storedPaymentMethods: [
    {
      bankAccountNumber: 'bankAccountNumber2',
      bankLocationId: 'bankLocationId6',
      brand: 'brand6',
      cashtag: 'cashtag0',
      expiryMonth: 'expiryMonth6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      bankAccountNumber: 'bankAccountNumber2',
      bankLocationId: 'bankLocationId6',
      brand: 'brand6',
      cashtag: 'cashtag0',
      expiryMonth: 'expiryMonth6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      bankAccountNumber: 'bankAccountNumber2',
      bankLocationId: 'bankLocationId6',
      brand: 'brand6',
      cashtag: 'cashtag0',
      expiryMonth: 'expiryMonth6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

