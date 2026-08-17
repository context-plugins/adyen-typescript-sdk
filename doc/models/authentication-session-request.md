
# Authentication Session Request

## Structure

`AuthenticationSessionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowOrigin` | `string` | Required | The URL where the component will appear. In your live environment, you must protect the URL with an SSL certificate and ensure that it starts with `https://`. |
| `policy` | [`Policy2`](../../doc/models/policy-2.md) | Required | An object that contains a description of the allowed resources and roles for the requested session. |
| `product` | [`ProductType2Enum`](../../doc/models/product-type-2-enum.md) | Required | The type of component.<br><br>For [Onboarding components](https://docs.adyen.com/platforms/onboard-users/components), set this to **onboarding**.<br><br>For [Platform Experience components](https://docs.adyen.com/platforms/build-user-dashboards), set this to **platform**. |

## Example

```ts
import { AuthenticationSessionRequest, ProductType2Enum } from 'adyen';

const authenticationSessionRequest: AuthenticationSessionRequest = {
  allowOrigin: 'allowOrigin0',
  policy: {
    resources: [
      {
        type: 'Resource',
      }
    ],
    roles: [
      'roles8'
    ],
  },
  product: ProductType2Enum.Onboarding,
};
```

