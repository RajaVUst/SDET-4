import { test } from "@playwright/test";

import { RemoveProductValidationFlow }
from "../flows/RemoveProductValidationFlow";

test.describe("Remove Product Validation", () => {

    test("Validate removing products from cart", async ({ page }) => {

        const flow = new RemoveProductValidationFlow(page);

        await flow.execute();

    });

});