class logButton{
    static logOutTrigger(params) {
        const logOut = document.getElementById("logOut")
        logOut.addEventListener("click",()=>{        
            localStorage.removeItem('@kenzieBlog: token')
            localStorage.removeItem('@kenzieBlog: id')
            window.location.assign('exemplo/index.html')
        })
    }
}
export {logButton}
