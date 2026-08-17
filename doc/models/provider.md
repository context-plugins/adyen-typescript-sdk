
# Provider

## Structure

`Provider`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logoURL` | `string` | Required | The URL of the organization's or brand's logo. This URL typically points to an image file (e.g., .png, .jpg, .svg) that can be displayed to visually represent the entity.<br><br>**Constraints**: *Minimum Length*: `1` |
| `name` | `string` | Required | The official or commonly used name of the organization, brand, or entity.<br><br>**Constraints**: *Minimum Length*: `1` |

## Example

```ts
import { Provider } from 'adyen';

const provider: Provider = {
  logoURL: 'logoURL6',
  name: 'name8',
};
```

