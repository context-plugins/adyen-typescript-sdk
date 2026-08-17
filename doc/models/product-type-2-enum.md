
# Product Type 2 Enum

The type of component.

For [Onboarding components](https://docs.adyen.com/platforms/onboard-users/components), set this to **onboarding**.

For [Platform Experience components](https://docs.adyen.com/platforms/build-user-dashboards), set this to **platform**.

## Enumeration

`ProductType2Enum`

## Fields

| Name |
|  --- |
| `Onboarding` |
| `Platform` |
| `Bank` |

## Example

```ts
import { ProductType2Enum } from 'adyen';

const productType2 = ProductType2Enum.Onboarding;
```

