describe('Demo Tests',function() {
    it('my First Test',async function(){
      
        browser.url('https://google.com')
      await  $('[name="q"]').setValue('webdriverIO')
      browser.keys('enter')
        browser.pause(10000)

    })
    
})