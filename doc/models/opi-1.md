
# Opi 1

Settings for an Oracle Payment Interface (OPI) integration.

*This model accepts additional fields of type unknown.*

## Structure

`Opi1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enablePayAtTable` | `boolean \| undefined` | Optional | Indicates if Pay at table is enabled. |
| `payAtTableStoreNumber` | `string \| undefined` | Optional | The store number to use for Pay at Table. |
| `payAtTableUrl` | `string \| undefined` | Optional | The URL and port number used for Pay at Table communication. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Opi1 } from 'adyenlib';

const opi1: Opi1 = {
  enablePayAtTable: false,
  payAtTableStoreNumber: 'payAtTableStoreNumber4',
  payAtTableUrl: 'payAtTableURL8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

