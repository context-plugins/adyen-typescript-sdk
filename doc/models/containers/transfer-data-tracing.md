
# Transfer Data Tracing

## Class Name

`TransferDataTracing`

## Cases

| Type |
|  --- |
| [`UKFpsTracingData`](../../../doc/models/uk-fps-tracing-data.md) |
| [`USAchTracingData`](../../../doc/models/us-ach-tracing-data.md) |

## UKFpsTracingData

### Initialization Code

#### Example

```ts
const value: TransferDataTracing = {
  fpid: 'fpid0',
  type: 'ukFps',
};
```

## USAchTracingData

### Initialization Code

#### Example

```ts
const value: TransferDataTracing = {
  traceNumber: 'traceNumber8',
  type: 'usAch',
};
```

