
# Pix Pay by Bank Risk Signals

*This model accepts additional fields of type unknown.*

## Structure

`PixPayByBankRiskSignals`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `confidenceScore` | [`ConfidenceScore \| undefined`](../../doc/models/confidence-score.md) | Optional | - |
| `elapsedTimeSinceBoot` | `bigint \| undefined` | Optional | - |
| `isRootedDevice` | `boolean \| undefined` | Optional | - |
| `language` | `string \| undefined` | Optional | - |
| `osVersion` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `32` |
| `screenBrightness` | `number \| undefined` | Optional | - |
| `screenDimensions` | [`ScreenDimensions \| undefined`](../../doc/models/screen-dimensions.md) | Optional | - |
| `userTimeZoneOffset` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PixPayByBankRiskSignals } from 'adyenlib';

const pixPayByBankRiskSignals: PixPayByBankRiskSignals = {
  confidenceScore: {
    errors: [
      'errors9',
      'errors0',
      'errors1'
    ],
    score: 155.44,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  elapsedTimeSinceBoot: BigInt(140),
  isRootedDevice: false,
  language: 'language8',
  osVersion: 'osVersion6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

