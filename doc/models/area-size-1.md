
# Area Size 1

Size of an area. Contain the size of the pad area where the signature is written, given with the maximum abscissa and ordinate values (X and Y). The maximum value is FFFF.

## Structure

`AreaSize1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `x` | `string` | Required | Abscissa of a point coordinates. The hexadecimal value in text of the abscissa of the coordinates of a point. Leading zero can be removed (e.g. 3BC, 0, and 1287). |
| `y` | `string` | Required | Ordinate of a point coordinates. The hexadecimal value in text of the ordinate of the coordinates of a point. Leading zero can be removed (e.g. 3BC, 0, and 1287). |

## Example

```ts
import { AreaSize1 } from 'adyen';

const areaSize1: AreaSize1 = {
  x: 'X4',
  y: 'Y2',
};
```

