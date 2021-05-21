/*
Human Readable Time
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/
function humanReadable(seconds) {
    if (seconds < 60) return `00:00:${seconds.toString().padStart(2,0)}`
    let sec = seconds % 60 
    let min = Math.floor(seconds / 60)
    if (min < 60 ) return `00:${min.toString().padStart(2,0)}:${sec.toString().padStart(2,0)}`
    let hr = Math.floor(min/60)
    min = min%60
    return `${hr.toString().padStart(2,0)}:${min.toString().padStart(2,0)}:${sec.toString().padStart(2,0)}`
}

console.log(humanReadable(359999))


//other's method

