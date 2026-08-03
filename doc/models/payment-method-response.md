
# Payment Method Response

*This model accepts additional fields of type unknown.*

## Structure

`PaymentMethodResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks \| undefined`](../../doc/models/pagination-links.md) | Optional | - |
| `data` | [`ManagementPaymentMethod[] \| undefined`](../../doc/models/management-payment-method.md) | Optional | The list of supported payment methods and their details. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |
| `typesWithErrors` | [`TypesWithError[] \| undefined`](../../doc/models/types-with-error.md) | Optional | The payment method types that were not successfully requested and their corresponding errors. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  PaymentMethodResponse,
  ProcessingType,
  Type33,
  TypesWithError,
} from 'adyenlib';

const paymentMethodResponse: PaymentMethodResponse = {
  itemsTotal: 208,
  pagesTotal: 86,
  links: {
    first: {
      href: 'href2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    last: {
      href: 'href2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    self: {
      href: 'href0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    next: {
      href: 'href4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    prev: {
      href: 'href8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  data: [
    {
      id: 'id0',
      accel: {
        processingType: ProcessingType.Billpay,
        transactionDescription: {
          doingBusinessAsName: 'doingBusinessAsName0',
          type: Type33.Fixed,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      affirm: {
        publicApiKey: 'publicApiKey4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      afterpayTouch: {
        supportEmail: 'supportEmail8',
        supportUrl: 'supportUrl4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      alipayPlus: {
        settlementCurrencyCode: 'settlementCurrencyCode0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      allowed: false,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      id: 'id0',
      accel: {
        processingType: ProcessingType.Billpay,
        transactionDescription: {
          doingBusinessAsName: 'doingBusinessAsName0',
          type: Type33.Fixed,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      affirm: {
        publicApiKey: 'publicApiKey4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      afterpayTouch: {
        supportEmail: 'supportEmail8',
        supportUrl: 'supportUrl4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      alipayPlus: {
        settlementCurrencyCode: 'settlementCurrencyCode0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      allowed: false,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  typesWithErrors: [
    TypesWithError.AlipayPlusTruemoney,
    TypesWithError.AlipayWap,
    TypesWithError.Amex
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

