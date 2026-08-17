
# Payment Method Response

## Structure

`PaymentMethodResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks1 \| undefined`](../../doc/models/pagination-links-1.md) | Optional | Pagination references. |
| `data` | [`ManagementPaymentMethod[] \| undefined`](../../doc/models/management-payment-method.md) | Optional | The list of supported payment methods and their details. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |
| `typesWithErrors` | [`TypesWithErrorEnum[] \| undefined`](../../doc/models/types-with-error-enum.md) | Optional | The payment method types that were not successfully requested and their corresponding errors. |

## Example

```ts
import {
  PaymentMethodResponse,
  ProcessingTypeEnum,
  Type8Enum,
  TypesWithErrorEnum,
} from 'adyen';

const paymentMethodResponse: PaymentMethodResponse = {
  itemsTotal: 208,
  pagesTotal: 86,
  links: {
    first: {
      href: 'href2',
    },
    last: {
      href: 'href2',
    },
    self: {
      href: 'href0',
    },
    next: {
      href: 'href4',
    },
    prev: {
      href: 'href8',
    },
  },
  data: [
    {
      id: 'id0',
      accel: {
        processingType: ProcessingTypeEnum.Billpay,
        transactionDescription: {
          doingBusinessAsName: 'doingBusinessAsName0',
          type: Type8Enum.Fixed,
        },
      },
      affirm: {
        publicApiKey: 'publicApiKey4',
      },
      afterpayTouch: {
        supportEmail: 'supportEmail8',
        supportUrl: 'supportUrl4',
      },
      alipayPlus: {
        settlementCurrencyCode: 'settlementCurrencyCode0',
      },
      allowed: false,
    },
    {
      id: 'id0',
      accel: {
        processingType: ProcessingTypeEnum.Billpay,
        transactionDescription: {
          doingBusinessAsName: 'doingBusinessAsName0',
          type: Type8Enum.Fixed,
        },
      },
      affirm: {
        publicApiKey: 'publicApiKey4',
      },
      afterpayTouch: {
        supportEmail: 'supportEmail8',
        supportUrl: 'supportUrl4',
      },
      alipayPlus: {
        settlementCurrencyCode: 'settlementCurrencyCode0',
      },
      allowed: false,
    }
  ],
  typesWithErrors: [
    TypesWithErrorEnum.AlipayPlusTruemoney,
    TypesWithErrorEnum.AlipayWap,
    TypesWithErrorEnum.Amex
  ],
};
```

