import locators from "../locators/editProfile.json"
import assertionObj from "../utility/assert"
import actionsObj from "../utility/actions"
class editProfileobj1{
    get editProfile(){
        return cy.xpath(locators.editProfile_section_xpath)
    }
    get Title(){
        return cy.get(locators.title_drop)
    }
    get Firstname(){
        return cy.get(locators.firstname_txt)
    }
    get lastName(){
        return cy.get(locators.surname_txt)
    }
    get Phone(){
        return cy.get(locators.phone_txt)
    }
    get dateOfBirth(){
        return cy.xpath(locators.Dataofbirth_xpath)
    }
    get licType(){
        return cy.get(locators.Licensetype_radio)
    }
    get licPeriod(){
        return cy.get(locators.Licenseperiod_cmb)
    }
    get OccupationCmb(){
        return cy.get(locators.Occupation_cmb)
    }
    get street(){
        return cy.get(locators.Adress.street_txt)
    }
    get city(){
        return cy.get(locators.Adress.city_txt)
    }
    get country(){
        return cy.get(locators.Adress.country_txt)
    }
    get pinCode(){
        return cy.get(locators.Adress.pinCode_txt)
    }
    get updateBtn(){
        return cy.get(locators.update_btn)
    }
    get UpdatedText(){
        return cy.get(locators.updated_p)
    }
    navigateEditProfile(){
        cy.wait(2000)
        actionsObj.buttonClick(this.editProfile)
    }
    titleDrop(value){
        actionsObj.dropDown(this.Title,value)
    }
    FirstnameTxt(value){
        actionsObj.inputText(this.Firstname,value)
    }
    lastnameTxt(value){
        actionsObj.inputText(this.lastName,value)
    }
    Phone_txt(value){
        actionsObj.inputText(this.Phone,value)

    }
    DOBcmb(dob){
        dob=dob.split("/")
        actionsObj.dropDown(this.dateOfBirth.eq(0),dob[0])
        actionsObj.dropDown(this.dateOfBirth.eq(1),dob[1])
        actionsObj.dropDown(this.dateOfBirth.eq(2),dob[2])
    }
    licenceType(){
        actionsObj.buttonClick(this.licType)
    }
    licPeriodCmb(value){
        actionsObj.dropDown(this.licPeriod,value)
    }
    Occupation(value){
        actionsObj.dropDown(this.OccupationCmb,value)
    }
    adress(street,city,country,pincode){
        actionsObj.inputText(this.street,street)
        actionsObj.inputText(this.city,city)
        actionsObj.inputText(this.country,country)
        actionsObj.inputText(this.pinCode,pincode)
    }
    updateBtnClick(){
        actionsObj.buttonClick(this.updateBtn)
    }
    assertUpdated(value){
        assertionObj.assertText(this.UpdatedText,value)
    }
}
let editProfileObj =new editProfileobj1()
export default editProfileObj