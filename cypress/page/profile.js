import locators from "../locators/profile.json"
import assertionObj from "../utility/assert"
import actionsObj from "../utility/actions"

class Profileobj1{
    get editProfile(){
        return cy.xpath(locators.Profile_section)
    }
    get Title(){
        return cy.get(locators.title)
    }
    get Firstname(){
        return cy.get(locators.firstname)
    }
    get lastName(){
        return cy.get(locators.surname)
    }
    get Phone(){
        return cy.get(locators.phone)
    }
    get dateOfBirth(){
        return cy.get(locators.Dataofbirth)
    }
    get licType(){
        return cy.get(locators.Licensetype)
    }
    get licPeriod(){
        return cy.get(locators.Licenseperiod)
    }
    get OccupationCmb(){
        return cy.get(locators.Occupation)
    }
    get street(){
        return cy.get(locators.Adress.street)
    }
    get city(){
        return cy.get(locators.Adress.city)
    }
    get country(){
        return cy.get(locators.Adress.country)
    }
    get pinCode(){
        return cy.get(locators.Adress.pinCode)
    }
   
    navigateEditProfile(){
        cy.wait(2000)
        actionsObj.buttonClick(this.editProfile)
    }
    titleDrop(value){
        assertionObj.assertText(this.Title,value)
    }
    FirstnameTxt(value){
        assertionObj.assertText(this.Firstname,value)
    }
    lastnameTxt(value){
        assertionObj.assertText(this.lastName,value)
    }
    Phone_txt(value){
        assertionObj.assertText(this.Phone,value)

    }
    DOBcmb(dob){

        assertionObj.assertText(this.dateOfBirth.eq,dob)
 
    }
    licenceType(){
        assertionObj.assertText(this.licType)
    }
    licPeriodCmb(value){
        assertionObj.assertText(this.licPeriod,value)
    }
    Occupation(value){
        assertionObj.assertText(this.OccupationCmb,value)
    }
    adress(street,city,country,pincode){
        assertionObj.assertText(this.street,street)
        assertionObj.assertText(this.city,city)
        assertionObj.assertText(this.country,country)
        assertionObj.assertText(this.pinCode,pincode)
    }

}
let ProfileObj =new Profileobj1()
export default ProfileObj