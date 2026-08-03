
# Logo

*This model accepts additional fields of type unknown.*

## Structure

`Logo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `string \| undefined` | Optional | The image file, converted to a Base64-encoded string, of the logo to be shown on the terminal.<br><br>**Constraints**: *Maximum Length*: `350000` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Logo } from 'adyenlib';

const logo: Logo = {
  data: 'data4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

