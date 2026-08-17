
# Store Split Configuration

## Structure

`StoreSplitConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Optional | The [unique identifier of the balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id) to which the split amount must be booked, depending on the defined [split logic](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/splitConfigurations#request-rules-splitLogic). |
| `splitConfigurationId` | `string \| undefined` | Optional | The unique identifier of the [split configuration profile](https://docs.adyen.com/platforms/automatic-split-configuration/create-split-configuration/). |

## Example

```ts
import { StoreSplitConfiguration } from 'adyen';

const storeSplitConfiguration: StoreSplitConfiguration = {
  balanceAccountId: 'balanceAccountId4',
  splitConfigurationId: 'splitConfigurationId8',
};
```

