
# Search Registered Devices Response

*This model accepts additional fields of type unknown.*

## Structure

`SearchRegisteredDevicesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Device[] \| undefined`](../../doc/models/device.md) | Optional | Contains a list of registered SCA devices and their corresponding details. |
| `itemsTotal` | `number \| undefined` | Optional | The total amount of registered SCA devices that match the query parameters. |
| `link` | [`Link \| undefined`](../../doc/models/link.md) | Optional | - |
| `pagesTotal` | `number \| undefined` | Optional | The total amount of list pages. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SearchRegisteredDevicesResponse, Type10 } from 'adyenlib';

const searchRegisteredDevicesResponse: SearchRegisteredDevicesResponse = {
  data: [
    {
      id: 'id0',
      name: 'name0',
      paymentInstrumentId: 'paymentInstrumentId2',
      type: Type10.Browser,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      id: 'id0',
      name: 'name0',
      paymentInstrumentId: 'paymentInstrumentId2',
      type: Type10.Browser,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  itemsTotal: 202,
  link: {
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
  pagesTotal: 92,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

