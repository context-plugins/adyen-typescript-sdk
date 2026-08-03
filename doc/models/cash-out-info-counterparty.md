
# Cash Out Info Counterparty

*This model accepts additional fields of type unknown.*

## Structure

`CashOutInfoCounterparty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferInstrumentId` | `string \| undefined` | Optional | The unique identifier of the counterparty transfer instrument.<br><br>If you do not provide this field, the cashout funds remain in the instructing balance account after the cashout transfer is settled. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CashOutInfoCounterparty } from 'adyenlib';

const cashOutInfoCounterparty: CashOutInfoCounterparty = {
  transferInstrumentId: 'transferInstrumentId6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

