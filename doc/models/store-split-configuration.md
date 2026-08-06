
# Store Split Configuration

*This model accepts additional fields of type unknown.*

## Structure

`StoreSplitConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Optional | The [unique identifier of the balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id) to which the split amount must be booked, depending on the defined [split logic](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/splitConfigurations#request-rules-splitLogic). |
| `splitConfigurationId` | `string \| undefined` | Optional | The unique identifier of the [split configuration profile](https://docs.adyen.com/platforms/automatic-split-configuration/create-split-configuration/). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StoreSplitConfiguration } from 'adyen';

const storeSplitConfiguration: StoreSplitConfiguration = {
  balanceAccountId: 'balanceAccountId4',
  splitConfigurationId: 'splitConfigurationId8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

