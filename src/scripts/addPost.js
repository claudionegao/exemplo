import { Request } from "./request.js"
import { Render } from './render.js'

export class AddPost{
    static post() {
        const postInput = document.getElementById('post')
        const postBtn = document.querySelectorAll('#postBtn')
        postBtn.forEach((btn) => {
            
            btn.addEventListener('click', async (e) => {
                e.preventDefault()
    
                const post = {
                    content: postInput.value
                }
    
                const req = await Request.addPost(post)

                Render.renderPosts()
    
                postInput.value = ""
            })

        })

    }
}

AddPost.post()