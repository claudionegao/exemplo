import { Request } from "./request.js";

class Registrar{
    static registrar(){
        
        const token = localStorage.getItem('@kenzieBlog: token')

        token ? window.location.assign('src/pages/dashboard.html'): null

        const _user = document.getElementById("regUser")
        const _email = document.getElementById("regEmail")
        const _picture = document.getElementById("regPic")
        const _password = document.getElementById("regPass")
        const _button = document.getElementById("regButton")

        _button.addEventListener("click", async (e) => {
            e.preventDefault()

            const body = {
                    username: _user.value,
                    email: _email.value,
                    avatarUrl: _picture.value,
                    password: _password.value                  
            }

            const {message} = await Request.register(body)
            if (message != undefined) {
                this.errorMessage(message)
            }
        })
    }
    static errorMessage(message){
        const messageBox = document.getElementById('errorMessage')
        messageBox.innerHTML = message
        messageBox.classList.add("message--active")

        setTimeout(() => {
            messageBox.classList.remove("message--active")
        }, 2000);
    }
}
export {Registrar}
Registrar.registrar()
                  
