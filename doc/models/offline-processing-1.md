
# Offline Processing 1

Settings for EMV [offline payment](https://docs.adyen.com/point-of-sale/offline-payments) features.

## Structure

`OfflineProcessing1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chipFloorLimit` | `number \| undefined` | Optional | The maximum offline transaction amount for chip cards, in the processing currency and specified in [minor units](https://docs.adyen.com/development-resources/currency-codes). |

## Example

```ts
import { OfflineProcessing1 } from 'adyen';

const offlineProcessing1: OfflineProcessing1 = {
  chipFloorLimit: 212,
};
```

