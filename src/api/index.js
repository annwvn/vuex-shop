//如果请求回来是json, response.json()去解析
function handleJSONResponse(response) {
    return response.json()
        .then(json => {
            if (response.ok) {
                return json
            } else {
                return Promise.reject(Object.assign({}, json, {
                    status: response.status,
                    statusText: response.statusText
                }))
            }
        })
}

//如果请求回来是html, response.text()去解析
function handleTextResponse(response) {
    return response.text()
        .then(text => {
            if (response.ok) {
                return text
            } else {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText,
                    err: text
                })
            }
        })
}

function handleResponse(response) {
    //检查当前contentType
    let contentType = response.headers.get('content-type')
    if (contentType.includes('application/json')) {
        return handleJSONResponse(response)
    } else if (contentType.includes('text/html')) {
        return handleTextResponse(response)
    } else {
        throw new Error(`Sorry, content-type ${contentType} not supported`)
    }
}

export const request = (url, opt = {}) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(handleResponse)
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}