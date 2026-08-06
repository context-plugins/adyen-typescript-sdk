
# Captured Signature

*This model accepts additional fields of type unknown.*

## Structure

`CapturedSignature`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `areaSize` | [`AreaSize \| undefined`](../../doc/models/area-size.md) | Optional | - |
| `signaturePoint` | [`Point[] \| undefined`](../../doc/models/point.md) | Optional | Coordinates of a point where the pen changes direction or lift. Contain the Coordinates of a point of the written signature where the pen changes direction or lift where (X and Y). When the signer lifts the pen, both X and Y have the value FFFF. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CapturedSignature } from 'adyen';

const capturedSignature: CapturedSignature = {
  areaSize: {
    x: 'X4',
    y: 'Y8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  signaturePoint: [
    {
      x: 'X0',
      y: 'Y6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      x: 'X0',
      y: 'Y6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      x: 'X0',
      y: 'Y6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

