import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The date when the transfer will be processed. This date must be within 30 days of the current
 * date.
 *
 * Until the `executionDate`:
 * - The `status` of the transfer remains as **received**.
 * - The `reason` of the transfer remains as **pending**.
 */
export type ExecutionDate3 = {
  /**
   * The date when the transfer will be processed. This date must be:
   * * Within 30 days of the current date.
   * * In the [ISO 8601 format](https://www.iso.org/iso-8601-date-and-time-format.html)
   *   **YYYY-MM-DD**. For example: 2025-01-31
   */
  date?: string;
  /**
   * The timezone that applies to the execution date. Use a timezone identifier from the [tz
   * database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   *
   * Example: **America/Los_Angeles**. Default value: **Europe/Amsterdam**.
   */
  timezone?: string;
};

export const executionDate3Schema: Schema<ExecutionDate3> = s.object<ExecutionDate3>({
  date: s.optional(s.dateOnly()),
  timezone: s.optional(s.string()),
});
