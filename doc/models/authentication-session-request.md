
# Authentication Session Request

*This model accepts additional fields of type unknown.*

## Structure

`AuthenticationSessionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowOrigin` | `string` | Required | The URL where the component will appear. In your live environment, you must protect the URL with an SSL certificate and ensure that it starts with `https://`. |
| `policy` | [`Policy`](../../doc/models/policy.md) | Required | - |
| `product` | [`ProductType21`](../../doc/models/product-type-21.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AuthenticationSessionRequest, ProductType21 } from 'adyenlib';

const authenticationSessionRequest: AuthenticationSessionRequest = {
  allowOrigin: 'allowOrigin0',
  policy: {
    resources: [
      {
        type: 'Resource',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    roles: [
      'roles8'
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  product: ProductType21.Onboarding,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

