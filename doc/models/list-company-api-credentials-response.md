
# List Company Api Credentials Response

## Structure

`ListCompanyApiCredentialsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks1 \| undefined`](../../doc/models/pagination-links-1.md) | Optional | Pagination references. |
| `data` | [`CompanyApiCredential[] \| undefined`](../../doc/models/company-api-credential.md) | Optional | The list of API credentials. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |

## Example

```ts
import { ListCompanyApiCredentialsResponse } from 'adyen';

const listCompanyApiCredentialsResponse: ListCompanyApiCredentialsResponse = {
  itemsTotal: 36,
  pagesTotal: 254,
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
      active: false,
      allowedIpAddresses: [
        'allowedIpAddresses5'
      ],
      clientKey: 'clientKey6',
      id: 'id0',
      roles: [
        'roles8'
      ],
      username: 'username0',
      links: {
        self: {
          href: 'href0',
        },
        allowedOrigins: {
          href: 'href6',
        },
        company: {
          href: 'href2',
        },
        generateApiKey: {
          href: 'href6',
        },
        generateClientKey: {
          href: 'href4',
        },
        merchant: {
          href: 'href6',
        },
      },
      allowedOrigins: [
        {
          domain: 'domain0',
          links: {
            self: {
              href: 'href0',
            },
          },
          id: 'id4',
        }
      ],
      associatedMerchantAccounts: [
        'associatedMerchantAccounts0',
        'associatedMerchantAccounts1',
        'associatedMerchantAccounts2'
      ],
      description: 'description0',
      subjectDN: 'subjectDN0',
    }
  ],
};
```

