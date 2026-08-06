
# Offline Processing

*This model accepts additional fields of type unknown.*

## Structure

`OfflineProcessing`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chipFloorLimit` | `number \| undefined` | Optional | The maximum offline transaction amount for chip cards, in the processing currency and specified in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { OfflineProcessing } from 'adyen';

const offlineProcessing: OfflineProcessing = {
  chipFloorLimit: 192,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

