
# List Company Api Credentials Response

*This model accepts additional fields of type unknown.*

## Structure

`ListCompanyApiCredentialsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks \| undefined`](../../doc/models/pagination-links.md) | Optional | - |
| `data` | [`CompanyApiCredential[] \| undefined`](../../doc/models/company-api-credential.md) | Optional | The list of API credentials. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListCompanyApiCredentialsResponse } from 'adyen';

const listCompanyApiCredentialsResponse: ListCompanyApiCredentialsResponse = {
  itemsTotal: 36,
  pagesTotal: 254,
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
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        allowedOrigins: {
          href: 'href6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        company: {
          href: 'href2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        generateApiKey: {
          href: 'href6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        generateClientKey: {
          href: 'href4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        merchant: {
          href: 'href6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      allowedOrigins: [
        {
          domain: 'domain0',
          links: {
            self: {
              href: 'href0',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          id: 'id4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      associatedMerchantAccounts: [
        'associatedMerchantAccounts0',
        'associatedMerchantAccounts1',
        'associatedMerchantAccounts2'
      ],
      description: 'description0',
      subjectDn: 'subjectDN0',
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

