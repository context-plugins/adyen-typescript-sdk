
# List Associations Response

*This model accepts additional fields of type unknown.*

## Structure

`ListAssociationsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Link`](../../doc/models/link.md) | Required | - |
| `data` | [`AssociationListing[]`](../../doc/models/association-listing.md) | Required | Contains a list of associations and their corresponding details. |
| `itemsTotal` | `number` | Required | The total number of items available. |
| `pagesTotal` | `number` | Required | The total number of pages available. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AssociationStatus1,
  ListAssociationsResponse,
  ScaDeviceType3,
  ScaEntityType2,
} from 'adyenlib';

const listAssociationsResponse: ListAssociationsResponse = {
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
    next: {
      href: 'href4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    previous: {
      href: 'href0',
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
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  data: [
    {
      createdAt: '2016-03-13T12:52:32.123Z',
      entityId: 'entityId8',
      entityType: ScaEntityType2.LegalEntity,
      scaDeviceId: 'BSDR11111111111A1AAA1AAAAA1AA1',
      scaDeviceType: ScaDeviceType3.Android,
      status: AssociationStatus1.PendingApproval,
      scaDeviceName: 'scaDeviceName0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  itemsTotal: 1,
  pagesTotal: 1,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

