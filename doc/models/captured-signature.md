
# Captured Signature

## Structure

`CapturedSignature`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `areaSize` | [`AreaSize1 \| undefined`](../../doc/models/area-size-1.md) | Optional | Size of an area. Contain the size of the pad area where the signature is written, given with the maximum abscissa and ordinate values (X and Y). The maximum value is FFFF. |
| `signaturePoint` | [`Point[] \| undefined`](../../doc/models/point.md) | Optional | Coordinates of a point where the pen changes direction or lift. Contain the Coordinates of a point of the written signature where the pen changes direction or lift where (X and Y). When the signer lifts the pen, both X and Y have the value FFFF. |

## Example

```ts
import { CapturedSignature } from 'adyen';

const capturedSignature: CapturedSignature = {
  areaSize: {
    x: 'X4',
    y: 'Y8',
  },
  signaturePoint: [
    {
      x: 'X0',
      y: 'Y6',
    },
    {
      x: 'X0',
      y: 'Y6',
    },
    {
      x: 'X0',
      y: 'Y6',
    }
  ],
};
```

