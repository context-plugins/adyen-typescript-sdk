
# Calculate Terms of Service Status Response

*This model accepts additional fields of type unknown.*

## Structure

`CalculateTermsOfServiceStatusResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `termsOfServiceTypes` | [`TermsOfServiceType[] \| undefined`](../../doc/models/terms-of-service-type.md) | Optional | The type of Terms of Service that the legal entity needs to accept. If empty, no Terms of Service needs to be accepted. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CalculateTermsOfServiceStatusResponse,
  TermsOfServiceType,
} from 'adyen';

const calculateTermsOfServiceStatusResponse: CalculateTermsOfServiceStatusResponse = {
  termsOfServiceTypes: [
    TermsOfServiceType.AdyenAccount,
    TermsOfServiceType.AdyenCapital,
    TermsOfServiceType.AdyenCard
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

