class logButton{
    static logOutTrigger(params) {
        const logOut = document.getElementById("logOut")
        logOut.addEventListener("click",()=>{        
            localStorage.removeItem('@kenzieBlog: token')
            localStorage.removeItem('@kenzieBlog: id')
            window.location.assign('/index.html')
        })
    }
}
export {logButton}