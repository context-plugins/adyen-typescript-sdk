
# List Terminals Response

## Structure

`ListTerminalsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks1 \| undefined`](../../doc/models/pagination-links-1.md) | Optional | Pagination references. |
| `data` | [`Terminal[] \| undefined`](../../doc/models/terminal.md) | Optional | The list of terminals and their details. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |

## Example

```ts
import { ListTerminalsResponse, Status21Enum, Status31Enum } from 'adyen';

const listTerminalsResponse: ListTerminalsResponse = {
  itemsTotal: 226,
  pagesTotal: 68,
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
      assignment: {
        companyId: 'companyId6',
        status: Status21Enum.Inventory,
        merchantId: 'merchantId2',
        reassignmentTarget: {
          inventory: false,
          companyId: 'companyId4',
          merchantId: 'merchantId0',
          storeId: 'storeId8',
        },
        storeId: 'storeId0',
      },
      cloudDeviceApiEndpoint: 'cloudDeviceApiEndpoint2',
      connectivity: {
        bluetooth: {
          ipAddress: 'ipAddress2',
          macAddress: 'macAddress2',
        },
        cellular: {
          iccid: 'iccid6',
          iccid2: 'iccid24',
          status: Status31Enum.Deprecated,
        },
        ethernet: {
          ipAddress: 'ipAddress2',
          linkNegotiation: 'linkNegotiation6',
          macAddress: 'macAddress2',
        },
        wifi: {
          ipAddress: 'ipAddress8',
          macAddress: 'macAddress6',
          ssid: 'ssid4',
        },
      },
      countryCode: 'countryCode6',
      firmwareVersion: 'firmwareVersion2',
    },
    {
      assignment: {
        companyId: 'companyId6',
        status: Status21Enum.Inventory,
        merchantId: 'merchantId2',
        reassignmentTarget: {
          inventory: false,
          companyId: 'companyId4',
          merchantId: 'merchantId0',
          storeId: 'storeId8',
        },
        storeId: 'storeId0',
      },
      cloudDeviceApiEndpoint: 'cloudDeviceApiEndpoint2',
      connectivity: {
        bluetooth: {
          ipAddress: 'ipAddress2',
          macAddress: 'macAddress2',
        },
        cellular: {
          iccid: 'iccid6',
          iccid2: 'iccid24',
          status: Status31Enum.Deprecated,
        },
        ethernet: {
          ipAddress: 'ipAddress2',
          linkNegotiation: 'linkNegotiation6',
          macAddress: 'macAddress2',
        },
        wifi: {
          ipAddress: 'ipAddress8',
          macAddress: 'macAddress6',
          ssid: 'ssid4',
        },
      },
      countryCode: 'countryCode6',
      firmwareVersion: 'firmwareVersion2',
    }
  ],
};
```

