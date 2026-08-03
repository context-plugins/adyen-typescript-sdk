
# Profile Registration Request

*This model accepts additional fields of type unknown.*

## Structure

`ProfileRegistrationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The unique identifier of the account holder.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `150` |
| `paymentInstrumentIds` | `string[]` | Required | The unique identifiers of the payment instruments to be associated with the iDEAL profile.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `100`, *Minimum Length*: `1`, *Maximum Length*: `150` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ProfileRegistrationRequest } from 'adyenlib';

const profileRegistrationRequest: ProfileRegistrationRequest = {
  accountHolderId: 'AH00000000000000000000000',
  paymentInstrumentIds: [
    'PI00000000000000000000000',
    'PI11111111111111111111111'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

