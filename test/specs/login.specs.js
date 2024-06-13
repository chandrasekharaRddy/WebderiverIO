const LoginPage = require("../pages/login.page")
   
   describe("DemoTest",()=>{
    it("loginPage",async ()=>{
        browser.url('https://the-internet.herokuapp.com/login')
       await LoginPage.login('tomsmith','SuperSecretPassword!')
        await LoginPage.checkmessage("you logged into a secure Area!")
        // await $('#username').setValue("tomsmith")
        // await $('#password').setValue("SuperSecretPassword!")
        // await $('button[type="submit"]').click()
        // await expect($('#flash')).toHaveTextContaining("Logged into a server ")
    })
   })