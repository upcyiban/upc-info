function fetchListen (httpRequest, before, after) {
    before && (httpRequest.fetchBefore = before)
    after && (httpRequest.fetchAfter = after)
}
export default fetchListen
