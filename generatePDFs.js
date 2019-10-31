const puppeteer = require('puppeteer');

async function generatePDFFromLink(page, title, link) {
  await page.goto(link, {waitUntil: 'networkidle0', timeout: 3000}).catch(() => {})
  await page.emulateMedia('screen')
  await page.pdf({path: `${title}.pdf`, format: 'A4', printBackground: true})
}

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('http://localhost:9000', {waitUntil: 'networkidle2'})

  let worksheets = await page.$$eval('a', as => as.map(a => {
    return {title: a.textContent, link: a.href} 
  }))

  for (let worksheet of worksheets) {
    await generatePDFFromLink(page, worksheet.title, worksheet.link)
  }

  await browser.close();
})();