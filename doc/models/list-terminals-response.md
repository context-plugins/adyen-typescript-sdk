
# List Terminals Response

*This model accepts additional fields of type unknown.*

## Structure

`ListTerminalsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks \| undefined`](../../doc/models/pagination-links.md) | Optional | - |
| `data` | [`Terminal[] \| undefined`](../../doc/models/terminal.md) | Optional | The list of terminals and their details. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListTerminalsResponse, Status24, Status32 } from 'adyenlib';

const listTerminalsResponse: ListTerminalsResponse = {
  itemsTotal: 226,
  pagesTotal: 68,
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
      assignment: {
        companyId: 'companyId6',
        status: Status24.Inventory,
        merchantId: 'merchantId2',
        reassignmentTarget: {
          inventory: false,
          companyId: 'companyId4',
          merchantId: 'merchantId0',
          storeId: 'storeId8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        storeId: 'storeId0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      cloudDeviceApiEndpoint: 'cloudDeviceApiEndpoint2',
      connectivity: {
        bluetooth: {
          ipAddress: 'ipAddress2',
          macAddress: 'macAddress2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        cellular: {
          iccid: 'iccid6',
          iccid2: 'iccid24',
          status: Status32.Deprecated,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        ethernet: {
          ipAddress: 'ipAddress2',
          linkNegotiation: 'linkNegotiation6',
          macAddress: 'macAddress2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        wifi: {
          ipAddress: 'ipAddress8',
          macAddress: 'macAddress6',
          ssid: 'ssid4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      countryCode: 'countryCode6',
      firmwareVersion: 'firmwareVersion2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      assignment: {
        companyId: 'companyId6',
        status: Status24.Inventory,
        merchantId: 'merchantId2',
        reassignmentTarget: {
          inventory: false,
          companyId: 'companyId4',
          merchantId: 'merchantId0',
          storeId: 'storeId8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        storeId: 'storeId0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      cloudDeviceApiEndpoint: 'cloudDeviceApiEndpoint2',
      connectivity: {
        bluetooth: {
          ipAddress: 'ipAddress2',
          macAddress: 'macAddress2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        cellular: {
          iccid: 'iccid6',
          iccid2: 'iccid24',
          status: Status32.Deprecated,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        ethernet: {
          ipAddress: 'ipAddress2',
          linkNegotiation: 'linkNegotiation6',
          macAddress: 'macAddress2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        wifi: {
          ipAddress: 'ipAddress8',
          macAddress: 'macAddress6',
          ssid: 'ssid4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      countryCode: 'countryCode6',
      firmwareVersion: 'firmwareVersion2',
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

