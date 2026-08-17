
# Provider 2

Metadata about the selected provider, including the name and company logo. You can use this information to inform the user about the provider they will be redirected to when they select the link.

## Structure

`Provider2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logoURL` | `string` | Required | The URL of the organization's or brand's logo. This URL typically points to an image file (e.g., .png, .jpg, .svg) that can be displayed to visually represent the entity.<br><br>**Constraints**: *Minimum Length*: `1` |
| `name` | `string` | Required | The official or commonly used name of the organization, brand, or entity.<br><br>**Constraints**: *Minimum Length*: `1` |

## Example

```ts
import { Provider2 } from 'adyen';

const provider2: Provider2 = {
  logoURL: 'logoURL6',
  name: 'name8',
};
```

