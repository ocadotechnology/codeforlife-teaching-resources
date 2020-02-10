const puppeteer = require('puppeteer')
require('dotenv').config({
  path: '.env.development'
})

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function generatePDFFromLink (page, title, link) {
  await page
    .goto(link, { waitUntil: 'networkidle0', timeout: 3000 })
    .catch(() => {})
  await page.pdf({
    path: `${title}.pdf`,
    displayHeaderFooter: true,
    footerTemplate: `<p style="font-size: 10px; width: 100%; padding: 10px 0px 0px; margin: 0px 50px; font-family:'Source Sans Pro'; border-top: 1px solid black;">
        <span style="float: left;">${title}</span>
        <span style="float: right;">www.codeforlife.education | <span class="pageNumber"></span></span>
      </p>`,
    format: 'A4',
    printBackground: true,
    margin: {
      top: 10,
      bottom: 70
    }
  })
}

async function login (page) {
  await page.click('#login')
  await sleep(5000)
  await page.type('input[name="email"]', process.env.PUPPETEER_USERNAME)
  await page.type('input[type="password"]', process.env.PUPPETEER_PASSWORD)
  await page.click('button[name="submit"]')
  await sleep(3000)
}

;(async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('http://localhost:8000', { waitUntil: 'networkidle2' })

  await login(page)

  const worksheets = await page.$$eval('a', as =>
    as.map(a => {
      return { title: a.textContent, link: a.href }
    })
  )

  for (const worksheet of worksheets) {
    await generatePDFFromLink(page, worksheet.title, worksheet.link)
  }

  await browser.close()
})()
