(async () => {
  const get = (xpath) =>
    document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null,
    ).singleNodeValue;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const scrollContainerXPath =
    "/html/body/div[1]/div[2]/div[9]/div[9]/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div[1]";

  const titleXPath =
    "/html/body/div[1]/div[2]/div[9]/div[9]/div/div/div[1]/div[3]/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div[1]/h1";

  const ratingXPath =
    "/html/body/div[1]/div[2]/div[9]/div[9]/div/div/div[1]/div[3]/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div[2]/div/div[1]/div[2]/span[1]/span[1]";

  const categoryXPath =
    "/html/body/div[1]/div[2]/div[9]/div[9]/div/div/div[1]/div[3]/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/span[1]";

  const phoneXPath =
    "/html/body/div[1]/div[2]/div[9]/div[9]/div/div/div[1]/div[3]/div/div[1]/div/div/div[2]/div[9]/div[6]/button/div/div[2]/div[1]";

  const scrollContainer = get(scrollContainerXPath);

  if (!scrollContainer) {
    console.error("Scroll container not found");
    return;
  }

  let businesses = [];

  try {
    businesses = JSON.parse(localStorage.getItem("businesses") || "[]");
  } catch {
    businesses = [];
  }

  // Start from div[3], then div[5], div[7], div[9]...
  for (let index = 3; index < 1000; index += 2) {
    try {
      console.log(`Processing index ${index}`);

      const clickElementXPath = `/html/body/div[1]/div[2]/div[9]/div[9]/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div[1]/div[${index}]/div/a`;

      let clickElement = get(clickElementXPath);

      // If element is not visible yet, scroll and retry
      if (!clickElement) {
        scrollContainer.scrollBy(0, 500);
        await sleep(1500);
        clickElement = get(clickElementXPath);
      }

      if (!clickElement) {
        console.log(`No element found at index ${index}`);
        continue;
      }

      clickElement.scrollIntoView({
        behavior: "instant",
        block: "center",
      });

      await sleep(500);

      clickElement.click();

      console.log(`Clicked index ${index}`);

      await sleep(3000);

      const data = {
        title: get(titleXPath)?.textContent?.trim() || null,
        rating: get(ratingXPath)?.textContent?.trim() || null,
        category: get(categoryXPath)?.textContent?.trim() || null,
        phone: get(phoneXPath)?.textContent?.trim() || null,
        scrapedAt: new Date().toISOString(),
      };

      // Skip empty entries
      if (data.title) {
        businesses.push(data);

        localStorage.setItem("businesses", JSON.stringify(businesses));

        console.log("Saved:", data);
      } else {
        console.log(`No business data found at index ${index}`);
      }

      // Scroll periodically to load more results
      if (index % 10 === 1) {
        scrollContainer.scrollBy(0, 800);
        await sleep(1000);
      }
    } catch (err) {
      console.error(`Error at index ${index}:`, err);
    }
  }

  console.log("Finished scraping");
})();
