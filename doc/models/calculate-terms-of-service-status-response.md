
# Calculate Terms of Service Status Response

## Structure

`CalculateTermsOfServiceStatusResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `termsOfServiceTypes` | [`TermsOfServiceTypeEnum[] \| undefined`](../../doc/models/terms-of-service-type-enum.md) | Optional | The type of Terms of Service that the legal entity needs to accept. If empty, no Terms of Service needs to be accepted. |

## Example

```ts
import {
  CalculateTermsOfServiceStatusResponse,
  TermsOfServiceTypeEnum,
} from 'adyen';

const calculateTermsOfServiceStatusResponse: CalculateTermsOfServiceStatusResponse = {
  termsOfServiceTypes: [
    TermsOfServiceTypeEnum.AdyenAccount,
    TermsOfServiceTypeEnum.AdyenCapital,
    TermsOfServiceTypeEnum.AdyenCard
  ],
};
```

