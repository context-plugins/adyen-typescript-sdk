
# Sale Terminal Data 1

Information related to the software and hardware features of the Sale Terminal.
If content is not empty.

*This model accepts additional fields of type unknown.*

## Structure

`SaleTerminalData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalsGroupId` | `string \| undefined` | Optional | Identification of a group of transactions on a POI Terminal, having the same Sale features.<br>Could be used to group POI for reconciliation or other purpose defined by the Sale System. The default value is assigned by the Login Request.<br><br>**Constraints**: *Pattern*: `^.{1,16}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SaleTerminalData1 } from 'adyen';

const saleTerminalData1: SaleTerminalData1 = {
  totalsGroupId: 'TotalsGroupID6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

