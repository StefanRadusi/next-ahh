class CustomFetch {
    constructor() {
        this.domain = 'https://ahh-services.herokuapp.com/';
        // this.domain = 'http://localhost:8080/';
    }

    makeRequest(method, url, params) {
        if(method == 'GET') {
            let finalURl = this.domain + url;
            if (params) {
                finalURl += `?${Object.keys(params).map(key => key + '=' + params[key]).join('&')}`; 
            }
            return new Request(finalURl);
        } else if (method == 'POST') {
            return new Request(
                this.domain + url,
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

    // fetchFromCloudinary(method, url, params) {
    //     const cloudName = 'hofas67vr';
    //     const apiKey = '252193543756474';
    //     const apiSecret = 'lEWldoRle9zhG-B02O6m7Hgt--Y';

    //     let finalUrl = `https://api.cloudinary.com/v1_1/${cloudName}/${url}`;

    //     return new Promise((resolve, reject) => {
    //         fetch(this.makeRequest(method, finalUrl, params))
    //         .then(response => response.json())
    //         .then(json => resolve(json));
    //     })
    // }
}

export default new CustomFetch();