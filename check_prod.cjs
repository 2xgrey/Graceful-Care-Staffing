const { exec } = require('child_process');
const puppeteer = require('puppeteer');

(async () => {
  const server = exec('npx serve dist -p 3001');
  
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.type(), msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('response', response => {
    if (!response.ok()) {
      console.log('RESPONSE FAILED:', response.status(), response.url());
    }
  });

  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });
  const html = await page.content();
  console.log('HTML LENGTH:', html.length);
  
  await browser.close();
  server.kill();
  process.exit(0);
})();
