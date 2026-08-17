
# Update Account Holder State Request

## Structure

`UpdateAccountHolderStateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the Account Holder on which to update the state. |
| `disable` | `boolean` | Required | If true, disable the requested state.  If false, enable the requested state. |
| `reason` | `string \| undefined` | Optional | The reason that the state is being updated.<br><br>> Required if the state is being disabled. |
| `stateType` | [`StateTypeEnum`](../../doc/models/state-type-enum.md) | Required | The state to be updated.<br><br>> Permitted values are: `Processing`, `Payout` |

## Example

```ts
import { StateTypeEnum, UpdateAccountHolderStateRequest } from 'adyen';

const updateAccountHolderStateRequest: UpdateAccountHolderStateRequest = {
  accountHolderCode: 'accountHolderCode6',
  disable: false,
  stateType: StateTypeEnum.Payout,
  reason: 'reason6',
};
```

