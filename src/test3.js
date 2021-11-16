require('chromedriver');
const {
    Builder,
    By
} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    await driver.get('https://chromedriver.chromium.org/home');
    await driver.sleep(2000);
    const titleText = await driver.findElement(By.css('.Rn3Z1b'));
    let text = await titleText.getText();
    console.log(text);
    const titleCe = await driver.findElements(By.css('.plFg0c .VsJjtf'));
    await titleCe[2].click();
    await driver.sleep(1000);
    const titleCeText = await driver.findElement(By.css('.Rn3Z1b'));
    await driver.executeScript('arguments[0].style.backgroundColor = "red"',  titleCeText);
    text = await titleCeText.getText();
    console.log(text);
    await driver.sleep(1000);
    await driver.quit();

})();