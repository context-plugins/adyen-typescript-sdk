
# Route

## Structure

`Route`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `link` | `string` | Required | The redirection link. You can use this link to redirect the user to the open banking flow when the user selects it.<br><br>**Constraints**: *Minimum Length*: `1` |
| `provider` | [`Provider2`](../../doc/models/provider-2.md) | Required | Metadata about the selected provider, including the name and company logo. You can use this information to inform the user about the provider they will be redirected to when they select the link. |

## Example

```ts
import { Route } from 'adyen';

const route: Route = {
  link: 'link2',
  provider: {
    logoURL: 'logoURL6',
    name: 'name8',
  },
};
```

