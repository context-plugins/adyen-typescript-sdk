
# Captured Signature 1

Numeric value of a handwritten signature. Contains the value of a handwritten signature, e.g. the signature of a cardholder on the merchant payment receipt. Only one format of the signature is allowed:

* The size of the pad area where the signature is written, given with the maximum abscissa and ordinate values.
* The sequence of coordinates where the pen changes direction or lift.

*This model accepts additional fields of type unknown.*

## Structure

`CapturedSignature1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `areaSize` | [`AreaSize \| undefined`](../../doc/models/area-size.md) | Optional | - |
| `signaturePoint` | [`Point[] \| undefined`](../../doc/models/point.md) | Optional | Coordinates of a point where the pen changes direction or lift. Contain the Coordinates of a point of the written signature where the pen changes direction or lift where (X and Y). When the signer lifts the pen, both X and Y have the value FFFF. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CapturedSignature1 } from 'adyen';

const capturedSignature1: CapturedSignature1 = {
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

