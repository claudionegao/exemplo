export class Request {
    
        static baseUrl = 'https://blog-m2.herokuapp.com'
        static token = localStorage.getItem('@kenzieBlog: token')
        static header = {
            'Content-type': 'application/json',
            Authorization: `Bearer ${this.token}`
        }
    
    static async login(body) {
        const userLogin = await fetch(`${this.baseUrl}/users/login`, {
            method: 'POST',
            headers: this.header,
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
        .then(resp => {
            if(resp.token != undefined){
                localStorage.setItem('@kenzieBlog: token', resp.token)
                localStorage.setItem('@kenzieBlog: id', resp.userId)
                window.location.assign('exemplo/src/pages/dashboard.html')
            }
            return resp
        })
        .catch(err => console.log(err))

        return userLogin
    }

    static async register(body) {
        const userRegisterr = await fetch(`${this.baseUrl}/users/register`,{
            method: 'POST',
            headers: this.header,
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
        .then(resp => resp)
        .catch(err => err)

        return userRegisterr
    }

    static async listPosts() {
        const list = await fetch(`${this.baseUrl}/posts?page=1`, {
            method: 'GET',
            headers: this.header
        })
        .then(resp => resp.json())
        .then(resp => resp.data)
        .catch(err => console.log(err))

        return list
    }

    static async addPost(content) {
        const post = await fetch(`${this.baseUrl}/posts`, {
            method: 'POST',
            headers: this.header,
            body: JSON.stringify(content)
        })
        .then(resp => resp.json())
        .catch(err => err)

        return post        
    }

    static async searchUser(id) {
        const postContent = await fetch(`${this.baseUrl}/users/${id}`, {
            headers: this.header
        })
        .then(resp => resp.json())
        .then(resp => resp)
        .catch(err => err)

        return postContent
    }

}

    



