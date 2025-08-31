const {By, Key, Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');   
//chrome = require('chromedriver');   

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.google.com/');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'), 10000);
    } finally {
        //await driver.quit();

        setInterval(() => {
            driver.quit();
        }, 8000);
    }


}

example().catch(err => console.error(err));
// const { Builder, By, Key, until } = require('selenium-webdriver');