
# Screen Dimensions

*This model accepts additional fields of type unknown.*

## Structure

`ScreenDimensions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `height` | `number \| undefined` | Optional | - |
| `width` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ScreenDimensions } from 'adyenlib';

const screenDimensions: ScreenDimensions = {
  height: 252,
  width: 152,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

