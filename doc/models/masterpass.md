
# Masterpass

*This model accepts additional fields of type unknown.*

## Structure

`Masterpass`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `fundingSource` | [`FundingSource \| undefined`](../../doc/models/funding-source.md) | Optional | - |
| `masterpassTransactionId` | `string` | Required | The Masterpass transaction ID. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type35 \| undefined`](../../doc/models/type-35.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FundingSource, Masterpass, Type35 } from 'adyenlib';

const masterpass: Masterpass = {
  masterpassTransactionId: 'masterpassTransactionId6',
  checkoutAttemptId: 'checkoutAttemptId8',
  fundingSource: FundingSource.Debit,
  sdkData: 'sdkData8',
  type: Type35.Masterpass,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

