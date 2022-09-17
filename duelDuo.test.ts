
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('check for the see all button', async () => {
    await driver.findElement(By.id('see-all')).click()   
    
    const seeAll = await driver.findElement(By.id('see-all'))
    const displayed = await seeAll.isDisplayed()
    expect(displayed).toBe(true)
})
// above test needs to be clicked on in order to not return false/fail

test('samething as above but for the second button "draw"', async () => {
    await driver.findElement(By.id('draw')).click()   
    
    const drawBtn = await driver.findElement(By.id('choices'))
    const displayed = await drawBtn.isDisplayed()
    expect(displayed).toBe(true)
})