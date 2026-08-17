
# Cash Out Info Counterparty 1

Contains information about the counterparty of the cashout transfer.

## Structure

`CashOutInfoCounterparty1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferInstrumentId` | `string \| undefined` | Optional | The unique identifier of the counterparty transfer instrument.<br><br>If you do not provide this field, the cashout funds remain in the instructing balance account after the cashout transfer is settled. |

## Example

```ts
import { CashOutInfoCounterparty1 } from 'adyen';

const cashOutInfoCounterparty1: CashOutInfoCounterparty1 = {
  transferInstrumentId: 'transferInstrumentId8',
};
```

