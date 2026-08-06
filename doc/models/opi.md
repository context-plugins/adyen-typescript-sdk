
# Opi

*This model accepts additional fields of type unknown.*

## Structure

`Opi`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enablePayAtTable` | `boolean \| undefined` | Optional | Indicates if Pay at table is enabled. |
| `payAtTableStoreNumber` | `string \| undefined` | Optional | The store number to use for Pay at Table. |
| `payAtTableUrl` | `string \| undefined` | Optional | The URL and port number used for Pay at Table communication. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Opi } from 'adyen';

const opi: Opi = {
  enablePayAtTable: false,
  payAtTableStoreNumber: 'payAtTableStoreNumber0',
  payAtTableUrl: 'payAtTableURL2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

