
# Update Account Holder State Request

*This model accepts additional fields of type unknown.*

## Structure

`UpdateAccountHolderStateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the Account Holder on which to update the state. |
| `disable` | `boolean` | Required | If true, disable the requested state.  If false, enable the requested state. |
| `reason` | `string \| undefined` | Optional | The reason that the state is being updated.<br><br>> Required if the state is being disabled. |
| `stateType` | [`StateType`](../../doc/models/state-type.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StateType, UpdateAccountHolderStateRequest } from 'adyen';

const updateAccountHolderStateRequest: UpdateAccountHolderStateRequest = {
  accountHolderCode: 'accountHolderCode6',
  disable: false,
  stateType: StateType.Payout,
  reason: 'reason6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

