import { Request } from "./request.js";
import { Registrar } from "./register.js";

class Login{
        static fieldLogin() {

            const token = localStorage.getItem('@kenzieBlog: token')

            token ? window.location.assign('src/pages/dashboard.html'): null

            const inputEmail = document.getElementById('email')
            const inputPass = document.getElementById('password')
            const submmitBtn = document.getElementById('loginSubmit')

            submmitBtn.addEventListener('click', async (e) => {
                e.preventDefault()

                const body = {
                    email: inputEmail.value,
                    password: inputPass.value
                }
                    
                const {message} = await Request.login(body)
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

Login.fieldLogin()