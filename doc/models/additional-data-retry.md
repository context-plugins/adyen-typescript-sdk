
# Additional Data Retry

## Structure

`AdditionalDataRetry`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `retryChainAttemptNumber` | `string \| undefined` | Optional | The number of times the transaction (not order) has been retried between different payment service providers. For instance, the `chainAttemptNumber` set to 2 means that this transaction has been recently tried on another provider before being sent to Adyen.<br><br>> If you submit `retry.chainAttemptNumber`, `retry.orderAttemptNumber`, and `retry.skipRetry` values, we also recommend you provide the `merchantOrderReference` to facilitate linking payment attempts together. |
| `retryOrderAttemptNumber` | `string \| undefined` | Optional | The index of the attempt to bill a particular order, which is identified by the `merchantOrderReference` field. For example, if a recurring transaction fails and is retried one day later, then the order number for these attempts would be 1 and 2, respectively.<br><br>> If you submit `retry.chainAttemptNumber`, `retry.orderAttemptNumber`, and `retry.skipRetry` values, we also recommend you provide the `merchantOrderReference` to facilitate linking payment attempts together. |
| `retrySkipRetry` | `string \| undefined` | Optional | The Boolean value indicating whether Adyen should skip or retry this transaction, if possible.<br><br>> If you submit `retry.chainAttemptNumber`, `retry.orderAttemptNumber`, and `retry.skipRetry` values, we also recommend you provide the `merchantOrderReference` to facilitate linking payment attempts together. |

## Example

```ts
import { AdditionalDataRetry } from 'adyen';

const additionalDataRetry: AdditionalDataRetry = {
  retryChainAttemptNumber: 'retry.chainAttemptNumber4',
  retryOrderAttemptNumber: 'retry.orderAttemptNumber4',
  retrySkipRetry: 'retry.skipRetry6',
};
```

