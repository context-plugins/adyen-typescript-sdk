
# Terms of Service Acceptance Info

*This model accepts additional fields of type unknown.*

## Structure

`TermsOfServiceAcceptanceInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acceptedBy` | `string \| undefined` | Optional | The unique identifier of the user that accepted the Terms of Service. |
| `acceptedFor` | `string \| undefined` | Optional | The unique identifier of the legal entity for which the Terms of Service are accepted. |
| `createdAt` | `string \| undefined` | Optional | The date when the Terms of Service were accepted, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00. |
| `id` | `string \| undefined` | Optional | An Adyen-generated reference for the accepted Terms of Service. |
| `type` | [`Type25 \| undefined`](../../doc/models/type-25.md) | Optional | - |
| `validTo` | `string \| undefined` | Optional | The expiration date for the Terms of Service acceptance, in ISO 8601 extended format. For example, 2022-12-18T00:00:00+01:00. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TermsOfServiceAcceptanceInfo, Type25 } from 'adyenlib';

const termsOfServiceAcceptanceInfo: TermsOfServiceAcceptanceInfo = {
  acceptedBy: 'acceptedBy2',
  acceptedFor: 'acceptedFor4',
  createdAt: '2016-03-13T12:52:32.123Z',
  id: 'id4',
  type: Type25.AdyenForPlatformsAdvanced,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

