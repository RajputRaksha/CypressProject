import {Given,And,When,Then} from "cypress-cucumber-preprocessor/steps"
import loginData from '../../fixtures/login.json'
import navigationObj from "../../page/navigation"
import ProfileObj from "../../page/profile"
import profileData from '../../fixtures/profile.json'
let url;
var reqId
before(()=>{
    url=Cypress.config().baseUrl+'index.php'
})
Given("I login to DemoGuru insurance Site",()=>{
    navigationObj.launchApp(url,loginData.emailId,loginData.password)

})
And("I navigate to Profile Section",()=>{
    ProfileObj.navigateEditProfile()
});

And("I check all User Details",()=>{
    ProfileObj.titleDrop(profileData.Title)
    ProfileObj.lastnameTxt(profileData.Surname)
    ProfileObj.FirstnameTxt(profileData.Firstname)
    ProfileObj.Phone_txt(profileData.Phone)
    ProfileObj.DOBcmb(profileData.Dataofbirth)
    ProfileObj.licenceType()
    ProfileObj.licPeriodCmb(profileData.LicensePeriod)
    ProfileObj.Occupation(profileData.Occupation)
    ProfileObj.adress(profileData.ADDRESS.street,profileData.ADDRESS.city,profileData.ADDRESS.country,profileData.ADDRESS.pinCode)

})