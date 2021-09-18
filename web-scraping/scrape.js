const request = require("request")
const cheerio = require("cheerio")
const fs = require('fs')
const writeStream = fs.createWriteStream('post.csv')

//Write Headers
writeStream.write(`各縣市政府自行車道路線資料下載 \n`)

request('https://bikeway.cpami.gov.tw/Bikeway/CMMSER/DataShow.aspx?argNewsid=20210809134604707', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html)

        const siteHeading = $('#ctl00_ContentPlaceHolder1_TextEditor p > a:first-child')
        // console.log(siteHeading)
        // console.log(siteHeading.html())
        // console.log(siteHeading.text())
        // const output = siteHeading.children('a').text()
        // const output = siteHeading.children('a').next().text()
        // const output = siteHeading.children('a').parent().text()
        // const output = siteHeading.find('a').attr('href')
        // console.log(output)
        // $('#ctl00_ContentPlaceHolder1_TextEditor p').each((i, el) =>{
        //     if (i != 0) {
        //         const item =  el.find('a').attr('href')
        //         console.log(item)
        //     }
        // })
        siteHeading.each((i, elem ) => {
            writeStream.write(`${$(elem).attr('href')} \n`)

        })
        console.log('done')
    }
})