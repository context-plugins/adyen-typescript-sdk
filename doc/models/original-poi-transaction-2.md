
# Original Poi Transaction 2

Identification of a previous POI transaction.

*This model accepts additional fields of type unknown.*

## Structure

`OriginalPoiTransaction2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleId` | `string \| undefined` | Optional | Identification of a Sale System for the NEXO SaletoPOI protocol.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `poiid` | `string \| undefined` | Optional | Identification of a payment terminal for the NEXO SaletoPOI protocol.<br>If original transaction is coming from another POI.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `poiTransactionId` | [`PoiTransactionId \| undefined`](../../doc/models/poi-transaction-id.md) | Optional | - |
| `reuseCardDataFlag` | `boolean \| undefined` | Optional | Indicates if the card data has to be retrieved from a previous transaction.<br><br>**Default**: `true` |
| `approvalCode` | `string \| undefined` | Optional | Code assigned to a transaction approval by the Acquirer.<br>If referral.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `acquirerId` | `number \| undefined` | Optional | Identification of the Acquirer.<br>Restrict to the Acquirer if present. |
| `amountValue` | `number \| undefined` | Optional | Value of an amount.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `hostTransactionId` | [`HostTransactionId \| undefined`](../../doc/models/host-transaction-id.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { OriginalPoiTransaction2 } from 'adyenlib';

const originalPoiTransaction2: OriginalPoiTransaction2 = {
  saleId: 'SaleID8',
  poiid: 'POIID2',
  poiTransactionId: {
    transactionId: 'TransactionID2',
    timeStamp: '2016-03-13T12:52:32.123Z',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  reuseCardDataFlag: true,
  approvalCode: 'ApprovalCode8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

