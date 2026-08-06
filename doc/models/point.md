
# Point

*This model accepts additional fields of type unknown.*

## Structure

`Point`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `x` | `string` | Required | The hexadecimal value of the coordinates of a point on the abscissa. |
| `y` | `string` | Required | The hexadecimal value of the coordinates of a point on the ordinate. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Point } from 'adyen';

const point: Point = {
  x: 'X6',
  y: 'Y0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

