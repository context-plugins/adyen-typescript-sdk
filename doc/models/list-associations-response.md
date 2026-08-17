
# List Associations Response

## Structure

`ListAssociationsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Link3`](../../doc/models/link-3.md) | Required | A list of hyperlinks to resources related to this response. |
| `data` | [`AssociationListing[]`](../../doc/models/association-listing.md) | Required | Contains a list of associations and their corresponding details. |
| `itemsTotal` | `number` | Required | The total number of items available. |
| `pagesTotal` | `number` | Required | The total number of pages available. |

## Example

```ts
import {
  AssociationStatus1Enum,
  ListAssociationsResponse,
  ScaDeviceType3Enum,
  ScaEntityType2Enum,
} from 'adyen';

const listAssociationsResponse: ListAssociationsResponse = {
  links: {
    first: {
      href: 'href2',
    },
    last: {
      href: 'href2',
    },
    next: {
      href: 'href4',
    },
    previous: {
      href: 'href0',
    },
    self: {
      href: 'href0',
    },
  },
  data: [
    {
      createdAt: '2016-03-13T12:52:32.123Z',
      entityId: 'entityId8',
      entityType: ScaEntityType2Enum.LegalEntity,
      scaDeviceId: 'BSDR11111111111A1AAA1AAAAA1AA1',
      scaDeviceType: ScaDeviceType3Enum.Android,
      status: AssociationStatus1Enum.PendingApproval,
      scaDeviceName: 'scaDeviceName0',
    }
  ],
  itemsTotal: 1,
  pagesTotal: 1,
};
```

