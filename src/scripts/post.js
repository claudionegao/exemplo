export class Post{
    constructor(imgUrl, userName, post, date, userId, postId){
        this.imgUrl = imgUrl
        this.userName = userName
        this.post = post
        this.date = date
        this.userId = userId
        this.postId = postId
    }

    createCard() {

        const cardContainer = document.createElement('li')
        cardContainer.classList.add('list__card')

        const cardImg = document.createElement('img')
        cardImg.src = this.imgUrl
        cardImg.alt = 'Foto do Usuário'
        cardImg.title = 'Foto do Usuário'

        const cardContent = document.createElement('div')
        cardContent.classList.add('card__content')

        const cardName = document.createElement('h2')
        cardName.innerText = this.userName

        const cardPost = document.createElement('p')
        cardPost.innerText = this.post

        cardContent.append(cardName, cardPost)

        const boxBtns = document.createElement('div')
        boxBtns.classList.add('box__btns')

        const datePost = document.createElement('span')
        datePost.innerText = this.date.substring(0, 10)

        if(this.verifyId()){
            
            const cardBtns = document.createElement('div')
            cardBtns.id = this.postId
    
            const cardButtonEdit = document.createElement('button')
            cardButtonEdit.classList.add('card__buttons')
            cardButtonEdit.id = 'editPost'
            cardButtonEdit.innerHTML = '<img src="../assets/edit 1.svg" alt="">'
    
            const cardButtonDelete = document.createElement('button')
            cardButtonDelete.classList.add('card__buttons')
            cardButtonDelete.id = 'delPost'
            cardButtonDelete.innerHTML = '<img src="../assets/trash-bin 1.svg" alt="">'
    
            cardBtns.append(cardButtonEdit, cardButtonDelete)
            boxBtns.append(datePost, cardBtns)
            cardContainer.append(cardImg, cardContent, boxBtns)

            return cardContainer
        }else{
            boxBtns.appendChild(datePost)
    
            cardContainer.append(cardImg, cardContent, boxBtns)
    
            return cardContainer

        }


    }

    verifyId() {
        let id = localStorage.getItem('@kenzieBlog: id')

        if(this.userId == parseInt(id)){
            return true
        }

        return false
    }
}

