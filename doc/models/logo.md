
# Logo

## Structure

`Logo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `string \| undefined` | Optional | The image file, converted to a Base64-encoded string, of the logo to be shown on the terminal.<br><br>**Constraints**: *Maximum Length*: `350000` |

## Example

```ts
import { Logo } from 'adyen';

const logo: Logo = {
  data: 'data4',
};
```

