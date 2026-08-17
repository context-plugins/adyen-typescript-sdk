
# Point

## Structure

`Point`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `x` | `string` | Required | The hexadecimal value of the coordinates of a point on the abscissa. |
| `y` | `string` | Required | The hexadecimal value of the coordinates of a point on the ordinate. |

## Example

```ts
import { Point } from 'adyen';

const point: Point = {
  x: 'X6',
  y: 'Y0',
};
```

