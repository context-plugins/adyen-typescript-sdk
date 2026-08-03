
# Sale Terminal Data 2

Information related to the software and hardware feature of the Sale Terminal.
Present if the login involve a Sale Terminal.

*This model accepts additional fields of type unknown.*

## Structure

`SaleTerminalData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalsGroupId` | `string \| undefined` | Optional | Identification of a group of transactions on a POI Terminal, having the same Sale features.<br>Could be used to group POI for reconciliation or other purpose defined by the Sale System. The default value is assigned by the Login Request.<br><br>**Constraints**: *Pattern*: `^.{1,16}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SaleTerminalData2 } from 'adyenlib';

const saleTerminalData2: SaleTerminalData2 = {
  totalsGroupId: 'TotalsGroupID4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

