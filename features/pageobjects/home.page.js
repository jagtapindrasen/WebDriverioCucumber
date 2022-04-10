class HomePage {
    // WebElement Locators
    get btnSignIn() {
      return $(".login");
    }
  
    get btnSignOut() {
      return $(".logout");
    }
  
    get txtSignedUserName() {
      return $(".header_user_info .account");
    }
  
    get link_Contact() {
      return $("#contact-link");
    }
  
    get img_Logo() {
      return $(".logo.img-responsive");
    }
  
  get titleIndrasen() {
    return $("#login_form .page-subheading");
  }

    // Actions
  
    async navigateToLoginPage() {
    console.log("***************** Click cha aadhi ");
      await this.btnSignIn.click();
    console.log("***************** Click cha nantar ");
      console.log("Sign In Button Is Clicked");
    console.log("***************** Verification cha aadhi ");
    await expect(await this.titleIndrasen.getText()).toEqual(
      "ALREADY REGISTERED?"
    );
    console.log("***************** Verification cha nantar ");
    }
  }
  export default new HomePage();