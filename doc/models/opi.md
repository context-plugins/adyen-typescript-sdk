
# Opi

## Structure

`Opi`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enablePayAtTable` | `boolean \| undefined` | Optional | Indicates if Pay at table is enabled. |
| `payAtTableStoreNumber` | `string \| undefined` | Optional | The store number to use for Pay at Table. |
| `payAtTableURL` | `string \| undefined` | Optional | The URL and port number used for Pay at Table communication. |

## Example

```ts
import { Opi } from 'adyen';

const opi: Opi = {
  enablePayAtTable: false,
  payAtTableStoreNumber: 'payAtTableStoreNumber0',
  payAtTableURL: 'payAtTableURL2',
};
```

