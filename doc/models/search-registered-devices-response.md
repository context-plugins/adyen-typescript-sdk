
# Search Registered Devices Response

## Structure

`SearchRegisteredDevicesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Device[] \| undefined`](../../doc/models/device.md) | Optional | Contains a list of registered SCA devices and their corresponding details. |
| `itemsTotal` | `number \| undefined` | Optional | The total amount of registered SCA devices that match the query parameters. |
| `link` | [`Link1 \| undefined`](../../doc/models/link-1.md) | Optional | Contains links to the list pages. |
| `pagesTotal` | `number \| undefined` | Optional | The total amount of list pages. |

## Example

```ts
import { SearchRegisteredDevicesResponse, Type101Enum } from 'adyen';

const searchRegisteredDevicesResponse: SearchRegisteredDevicesResponse = {
  data: [
    {
      id: 'id0',
      name: 'name0',
      paymentInstrumentId: 'paymentInstrumentId2',
      type: Type101Enum.Browser,
    },
    {
      id: 'id0',
      name: 'name0',
      paymentInstrumentId: 'paymentInstrumentId2',
      type: Type101Enum.Browser,
    }
  ],
  itemsTotal: 202,
  link: {
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
  pagesTotal: 92,
};
```

