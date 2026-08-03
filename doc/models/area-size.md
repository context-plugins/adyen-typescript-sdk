
# Area Size

*This model accepts additional fields of type unknown.*

## Structure

`AreaSize`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `x` | `string` | Required | Abscissa of a point coordinates. The hexadecimal value in text of the abscissa of the coordinates of a point. Leading zero can be removed (e.g. 3BC, 0, and 1287). |
| `y` | `string` | Required | Ordinate of a point coordinates. The hexadecimal value in text of the ordinate of the coordinates of a point. Leading zero can be removed (e.g. 3BC, 0, and 1287). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AreaSize } from 'adyenlib';

const areaSize: AreaSize = {
  x: 'X4',
  y: 'Y8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

