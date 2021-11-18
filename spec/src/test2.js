require('chromedriver');
const {
    Builder,
    By
} = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

describe('desc', function () {

    it('test', async function () {
        let driver = await new Builder().forBrowser('chrome').build();
        async function waitTitle() {
            const titles = await driver.findElements(By.css('.Rn3Z1b'));
            return !!titles.length;
        }
        driver.manage().window().maximize();
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.wait(waitTitle, 5000);
        const title1 = await driver.findElement(By.css('.Rn3Z1b'));
        let text = await title1.getText();
        expect(text).toBe('ChromeDriver');
        const titleCe = await driver.findElements(By.css('.plFg0c .VsJjtf'));
        await titleCe[2].click();
        await driver.wait(waitTitle, 5000);
        const title2 = await driver.findElement(By.css('.Rn3Z1b'));
        await driver.executeScript('arguments[0].style.backgroundColor = "red"', title2);
        text = await title2.getText();
        expect(text).toBe('Chrome Extensions');
        await driver.executeScript('arguments[0].style.backgroundColor = "red"', title2);
        await driver.wait(waitTitle, 5000);
        await driver.quit();
    });
});