
# Transfer Data

*This model accepts additional fields of type unknown.*

## Structure

`TransferData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolder` | [`ResourceReference \| undefined`](../../doc/models/resource-reference.md) | Optional | - |
| `amount` | [`Amount5`](../../doc/models/amount-5.md) | Required | - |
| `balanceAccount` | [`ResourceReference \| undefined`](../../doc/models/resource-reference.md) | Optional | - |
| `balancePlatform` | `string \| undefined` | Optional | The unique identifier of the balance platform. |
| `balances` | [`BalanceMutation[] \| undefined`](../../doc/models/balance-mutation.md) | Optional | The list of the latest balance statuses in the transfer. |
| `category` | [`Category3`](../../doc/models/category-3.md) | Required | - |
| `categoryData` | [`TransferDataCategoryData \| undefined`](../../doc/models/containers/transfer-data-category-data.md) | Optional | This is a container for one-of cases. |
| `counterparty` | [`TransferNotificationCounterParty \| undefined`](../../doc/models/transfer-notification-counter-party.md) | Optional | - |
| `createdAt` | `string \| undefined` | Optional | The date and time when the transfer was created, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**. |
| `creationDate` | `string \| undefined` | Optional | The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**. |
| `description` | `string \| undefined` | Optional | Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.<br><br>Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**<br><br>Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' " ! ?** |
| `directDebitInformation` | [`DirectDebitInformation \| undefined`](../../doc/models/direct-debit-information.md) | Optional | - |
| `direction` | [`Direction \| undefined`](../../doc/models/direction.md) | Optional | - |
| `eventId` | `string \| undefined` | Optional | The unique identifier of the latest transfer event. Included only when the `category` is **issuedCard**. |
| `events` | [`TransferEvent[] \| undefined`](../../doc/models/transfer-event.md) | Optional | The list of events leading up to the current status of the transfer. |
| `executionDate` | [`ExecutionDate \| undefined`](../../doc/models/execution-date.md) | Optional | - |
| `externalReason` | [`ExternalReason \| undefined`](../../doc/models/external-reason.md) | Optional | - |
| `id` | `string \| undefined` | Optional | The ID of the resource. |
| `networkReason` | [`NetworkReason \| undefined`](../../doc/models/network-reason.md) | Optional | - |
| `paymentInstrument` | [`PaymentInstrument2 \| undefined`](../../doc/models/payment-instrument-2.md) | Optional | - |
| `reason` | [`Reason21 \| undefined`](../../doc/models/reason-21.md) | Optional | - |
| `reference` | `string \| undefined` | Optional | Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.<br><br>**Constraints**: *Maximum Length*: `80` |
| `referenceForBeneficiary` | `string \| undefined` | Optional | A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**.The maximum length depends on the `category`.<br><br>- **internal**: 80 characters<br><br>- **bank**: 35 characters when transferring to an IBAN, 15 characters for others. |
| `review` | [`TransferReview \| undefined`](../../doc/models/transfer-review.md) | Optional | - |
| `sequenceNumber` | `number \| undefined` | Optional | The sequence number of the transfer webhook. The numbers start from 1 and increase with each new webhook for a specific transfer.<br><br>The sequence number can help you restore the correct sequence of events even if they arrive out of order. |
| `status` | [`Status53`](../../doc/models/status-53.md) | Required | - |
| `tracing` | [`TransferDataTracing \| undefined`](../../doc/models/containers/transfer-data-tracing.md) | Optional | This is a container for one-of cases. |
| `tracking` | [`TransferDataTracking \| undefined`](../../doc/models/containers/transfer-data-tracking.md) | Optional | This is a container for one-of cases. |
| `transactionRulesResult` | [`TransactionRulesResult \| undefined`](../../doc/models/transaction-rules-result.md) | Optional | - |
| `type` | [`Type83 \| undefined`](../../doc/models/type-83.md) | Optional | - |
| `ultimateParty` | [`UltimatePartyIdentification \| undefined`](../../doc/models/ultimate-party-identification.md) | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  Category3,
  Priority,
  Status53,
  TransferData,
  Type312,
} from 'adyenlib';

const transferData: TransferData = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  category: Category3.PlatformPayment,
  status: Status53.CaptureReversalPending,
  accountHolder: {
    description: 'description0',
    id: 'id0',
    reference: 'reference4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  balanceAccount: {
    description: 'description2',
    id: 'id2',
    reference: 'reference2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  balancePlatform: 'balancePlatform4',
  balances: [
    {
      balance: BigInt(224),
      currency: 'currency0',
      received: BigInt(214),
      reserved: BigInt(158),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      balance: BigInt(224),
      currency: 'currency0',
      received: BigInt(214),
      reserved: BigInt(158),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  categoryData: {
    priority: Priority.Instant,
    type: Type312.Bank,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

