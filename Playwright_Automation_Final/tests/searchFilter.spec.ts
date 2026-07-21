import { test } from "../fixtures/baseFixtures";
import { SearchFilterFlow } from "../flow/SearchFilterFlow";

test("Verify Search and Price Filter", async ({ homePage, searchResultPage }) => {

    const flow = new SearchFilterFlow(homePage, searchResultPage);

    await flow.verifyLaptopSearchAbove250();

});