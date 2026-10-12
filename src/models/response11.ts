import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorCondition1Schema, type ErrorCondition1 } from "./error-condition1.js";
import { result11Schema, type Result11 } from "./result11.js";

/** Result of a message request processing. */
export type Response11 = {
  /**
   * Result of the processing of the message. Possible values:
   * * **Failure**
   * * **Partial**
   * * **Success**
   */
  result: Result11;
  /**
   * Condition that has produced an error on the processing of a message request. Returned if Result
   * is not Success. Possible values:
   * * **Aborted**
   * * **Busy**
   * * **Cancel**
   * * **DeviceOut**
   * * **InProgress**
   * * **InsertedCard**
   * * **InvalidCard**
   * * **LoggedOut**
   * * **MessageFormat**
   * * **NotAllowed**
   * * **NotFound**
   * * **PaymentRestriction**
   * * **Refusal**
   * * **UnavailableDevice**
   * * **UnavailableService**
   * * **UnreachableHost**
   * * **WrongPIN**
   */
  errorCondition?: ErrorCondition1;
  /**
   * Additional information related to processing status of a message request. If present, the POI
   * logs it for further examination.
   */
  additionalResponse?: string;
};

export const response11Schema: Schema<Response11> = s.object<Response11>({
  result: result11Schema,
  errorCondition: s.optional(s.lazy(() => errorCondition1Schema)),
  additionalResponse: s.optional(s.string()),
  _keysMap: {
    result: "Result",
    errorCondition: "ErrorCondition",
    additionalResponse: "AdditionalResponse",
  },
});
