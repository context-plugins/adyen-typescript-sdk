
# Account Verification Routes Response

*This model accepts additional fields of type unknown.*

## Structure

`AccountVerificationRoutesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `routes` | [`Route[]`](../../doc/models/route.md) | Required | This array lists available open banking redirection links, each with its associated provider metadata. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountVerificationRoutesResponse } from 'adyen';

const accountVerificationRoutesResponse: AccountVerificationRoutesResponse = {
  routes: [
    {
      link: 'link6',
      provider: {
        logoUrl: 'logoURL6',
        name: 'name8',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

