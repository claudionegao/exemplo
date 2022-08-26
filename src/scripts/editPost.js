import { Request } from "./request.js";
import { Render } from "./render.js";

export class Edit{
    static async editPost() {
        const editBtn = document.querySelectorAll('#editPost')
        const modalEdit = document.querySelector('.modal__edit')

        editBtn.forEach((btn) => {
            btn.addEventListener('click', async (e) => {
                e.preventDefault()
    
                modalEdit.classList.remove('modal__edit--active')

                const postId = e.target.closest('div').id

                const newContent = document.getElementById('postEdit')
                newContent.value = await Request.searchPost(postId)

                const submit = document.getElementById('submit')

                submit.addEventListener('click', async (e) => {
                    e.preventDefault()

                    const post = {
                        content: newContent.value
                    }

                    console.log(postId);

                    await Request.editPost(postId, post)
                    Render.renderPosts()

                    modalEdit.classList.add('modal__edit--active')

                    newContent.value = ''

                })
    
            })

        })

    }
    
    static async deletePost() {
        const delBtn = document.querySelectorAll('#delPost')
        const modalDel = document.querySelector('.modal__delete')
        
        delBtn.forEach((btn) => {
            btn.addEventListener('click', async (e) => {
                e.preventDefault()
   
                modalDel.classList.remove('modal__delete--active')

                const postId = e.target.closest('div').id

                const deleteBtn = document.getElementById('delete')

                deleteBtn.addEventListener('click', async (e) => {
                    e.preventDefault()

                    await Request.deletePost(postId)
                    Render.renderPosts()
                    
                    modalDel.classList.add('modal__delete--active')
                                        
                })
                
            })
            
        })

    }
}
