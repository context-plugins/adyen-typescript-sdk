
# Offline Processing

## Structure

`OfflineProcessing`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chipFloorLimit` | `number \| undefined` | Optional | The maximum offline transaction amount for chip cards, in the processing currency and specified in [minor units](https://docs.adyen.com/development-resources/currency-codes). |

## Example

```ts
import { OfflineProcessing } from 'adyen';

const offlineProcessing: OfflineProcessing = {
  chipFloorLimit: 192,
};
```

