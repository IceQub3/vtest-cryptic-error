/**
 *
 * Bug reproduction
 *
 */
import { vi, test, expect } from "vitest";
import { importedFunc } from "./example";

const { func } = vi.hoisted(() => ({
  func: importedFunc 
}));

test("example test", async () => {
  expect(8).toBe(8);
});
