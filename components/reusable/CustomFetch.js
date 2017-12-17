import default from "../Footer";

class CustomFetch {
    makeRequest(method, url, params) {
        if(method == 'GET') {
            let finalURl = url;
            if (params) {
                finalURl += `?${Object.keys(params).map(key => key + '=' + params[key]).join('&')}`; 
            }
            return new Request(finalURl);
        } else if (method == 'POST') {
            return new Request(
                url,
                {
                    method : 'POST',
                    body : JSON.stringify(params)
                }
            );
        }
    }

    fetch(method, url, params) {
        return new Promise((resolve, reject) => {
            fetch(this.makeRequest(method, url, params))
            .then(response => response.json())
            .then(json => resolve(json));
        })
    }
}

export default new CustomEvent();