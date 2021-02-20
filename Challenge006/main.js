function domainName(url){
    return (url.match(/(?<=w{3}[.]).*?(?=[.])/) || 
    url.match(/(?<=\/\/).*?(?=[.])/) ||
    url.match(/.*?(?=[.])/))[0]
}
console.log(domainName("http://google.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))
console.log(domainName("http://www.codewar.ru"))