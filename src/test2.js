require('chromedriver');
const {
    Builder,
    By
} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    async function waitTitle() {
        const titles = await driver.findElements(By.css('Rn3Z1b'));
        return !!titles.length;
    }
    driver.manage().window().maximize();
    await driver.get('https://chromedriver.chromium.org/home');
    await driver.wait(waitTitle, 5000);
    const titleText = await driver.findElement(By.css('.Rn3Z1b'));
    let text = await titleText.getText();
    // expect(text).toBe('ChromeDriver');
    const titleCe = await driver.findElements(By.css('.plFg0c .VsJjtf'));
    await titleCe[2].click();
    await driver.wait(waitTitle, 5000);
    const titleCeText = await driver.findElement(By.css('.Rn3Z1b'));
    await driver.executeScript('arguments[0].style.backgroundColor = "red"',  titleCeText);
    text = await titleCeText.getText();
    // expect(text).toBe('Chrome Extensions');
    await driver.sleep(2000);
    await driver.quit();

})();