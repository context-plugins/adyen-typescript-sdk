
# Cash Out Info Counterparty

## Structure

`CashOutInfoCounterparty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferInstrumentId` | `string \| undefined` | Optional | The unique identifier of the counterparty transfer instrument.<br><br>If you do not provide this field, the cashout funds remain in the instructing balance account after the cashout transfer is settled. |

## Example

```ts
import { CashOutInfoCounterparty } from 'adyen';

const cashOutInfoCounterparty: CashOutInfoCounterparty = {
  transferInstrumentId: 'transferInstrumentId6',
};
```

