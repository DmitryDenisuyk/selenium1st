require('chromedriver');
const {
    Builder,
    By
} = require('selenium-webdriver');

describe('desc', function () {

    it('test', async function () {

        (async function example() {
            let driver = await new Builder().forBrowser('chrome').build();
            await driver.get('https://chromedriver.chromium.org/home');
            await driver.sleep(5000);
            const titleText = await driver.findElement(By.css('.Rn3Z1b'));
            let text = await titleText.getText();
            console.log(text);
            expect(text).toBe('ChromeDriver');
            const titleCe = await driver.findElements(By.css('.plFg0c .VsJjtf'));
            await titleCe[2].click();
            await driver.sleep(2000);
            const titleCeText = await driver.findElement(By.css('.Rn3Z1b'));
            await driver.executeScript('arguments[0].style.backgroundColor = "red"',  titleCeText);
            text = await titleCeText.getText();
            console.log(text);
            expect(text).toBe('Chrome Extensions');
            await driver.sleep(2000);
            await driver.quit();
        })();
    });
}());