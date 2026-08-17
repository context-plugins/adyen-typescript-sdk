
# Opi 1

Settings for an Oracle Payment Interface (OPI) integration.

## Structure

`Opi1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enablePayAtTable` | `boolean \| undefined` | Optional | Indicates if Pay at table is enabled. |
| `payAtTableStoreNumber` | `string \| undefined` | Optional | The store number to use for Pay at Table. |
| `payAtTableURL` | `string \| undefined` | Optional | The URL and port number used for Pay at Table communication. |

## Example

```ts
import { Opi1 } from 'adyen';

const opi1: Opi1 = {
  enablePayAtTable: false,
  payAtTableStoreNumber: 'payAtTableStoreNumber4',
  payAtTableURL: 'payAtTableURL8',
};
```

