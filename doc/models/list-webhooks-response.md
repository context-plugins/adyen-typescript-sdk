
# List Webhooks Response

## Structure

`ListWebhooksResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks1 \| undefined`](../../doc/models/pagination-links-1.md) | Optional | Pagination references. |
| `accountReference` | `string \| undefined` | Optional | Reference to the account. |
| `data` | [`Webhook[] \| undefined`](../../doc/models/webhook.md) | Optional | The list of webhooks configured for this account. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |

## Example

```ts
import { CommunicationFormatEnum, ListWebhooksResponse } from 'adyen';

const listWebhooksResponse: ListWebhooksResponse = {
  itemsTotal: 144,
  pagesTotal: 106,
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
  accountReference: 'accountReference0',
  data: [
    {
      active: false,
      communicationFormat: CommunicationFormatEnum.Json,
      type: 'type0',
      url: 'url4',
      links: {
        generateHmac: {
          href: 'href6',
        },
        self: {
          href: 'href0',
        },
        testWebhook: {
          href: 'href6',
        },
        company: {
          href: 'href2',
        },
        merchant: {
          href: 'href6',
        },
      },
      acceptsExpiredCertificate: false,
      acceptsSelfSignedCertificate: false,
      acceptsUntrustedRootCertificate: false,
      accountReference: 'accountReference2',
    },
    {
      active: false,
      communicationFormat: CommunicationFormatEnum.Json,
      type: 'type0',
      url: 'url4',
      links: {
        generateHmac: {
          href: 'href6',
        },
        self: {
          href: 'href0',
        },
        testWebhook: {
          href: 'href6',
        },
        company: {
          href: 'href2',
        },
        merchant: {
          href: 'href6',
        },
      },
      acceptsExpiredCertificate: false,
      acceptsSelfSignedCertificate: false,
      acceptsUntrustedRootCertificate: false,
      accountReference: 'accountReference2',
    }
  ],
};
```

