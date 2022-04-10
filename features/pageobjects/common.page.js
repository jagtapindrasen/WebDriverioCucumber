class commonPage {
    openHomePage() {
      browser.url("http://automationpractice.com/index.php");
      console.log("Navigating to Url 'http://automationpractice.com/index.php'");
    }
  
    vaerifyPageHeading = async (title) => {
      await browser.waitUntil(
        async () => (await $(".page-heading").getText()) === title,
        {
          timeout: 10000,
          timeoutMsg: "expected text is different after 10s",
        }
      );

      //varcha or khal cha implementation lak shat thew (khal cha implenation sathi all 3 lines lagtil)
      //await this.$(".page-heading").waitForExist({ timeout: 5000 });
      const headingTitle = await $(".page-heading");
      expect(await headingTitle.getText()).toEqual(title);
    };

  };
  export default new commonPage();