
# Account Verification Routes Response

## Structure

`AccountVerificationRoutesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `routes` | [`Route[]`](../../doc/models/route.md) | Required | This array lists available open banking redirection links, each with its associated provider metadata. |

## Example

```ts
import { AccountVerificationRoutesResponse } from 'adyen';

const accountVerificationRoutesResponse: AccountVerificationRoutesResponse = {
  routes: [
    {
      link: 'link6',
      provider: {
        logoURL: 'logoURL6',
        name: 'name8',
      },
    }
  ],
};
```

