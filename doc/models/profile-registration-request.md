
# Profile Registration Request

## Structure

`ProfileRegistrationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The unique identifier of the account holder.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `150` |
| `paymentInstrumentIds` | `string[]` | Required | The unique identifiers of the payment instruments to be associated with the iDEAL profile.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `100`, *Minimum Length*: `1`, *Maximum Length*: `150` |

## Example

```ts
import { ProfileRegistrationRequest } from 'adyen';

const profileRegistrationRequest: ProfileRegistrationRequest = {
  accountHolderId: 'AH00000000000000000000000',
  paymentInstrumentIds: [
    'PI00000000000000000000000',
    'PI11111111111111111111111'
  ],
};
```

