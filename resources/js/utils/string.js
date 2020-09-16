/**
 * Get string between characters
 * @param  {[type]} string
 * @param  {[type]} start
 * @param  {[type]} end
 * @return String
 */
export const substrInBetween = (string, start, end) => {
    let strlength1 = start.length
    return string.substring(
        string.indexOf(start) + strlength1,
        string.indexOf(end)
    )
}
