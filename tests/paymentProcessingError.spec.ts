import { test } from "@playwright/test";

import { PaymentProcessingErrorFlow }
from "../flows/PaymentProcessingErrorFlow";

test.describe("Payment Processing Error Validation", () => {

    test(
        "Verify system behaviour during payment processing error",
        async ({ page }) => {

            const flow =
                new PaymentProcessingErrorFlow(page);

            await flow.execute();

        }
    );

});