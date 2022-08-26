import { Post } from './post.js';
import { Request } from './request.js';
import { AddPost } from './addPost.js';
import { Edit } from './editPost.js';
import { logButton } from './logOut.js';

export class Render{
    static async renderPosts() {
        const profile = document.getElementById('profile')

        const list = document.querySelector('.list')

        const listPost = await Request.listPosts()

        const {avatarUrl} = await Request.searchUser(localStorage.getItem('@kenzieBlog: id'))

        profile.src = avatarUrl

        list.innerHTML = ''

        listPost.forEach(({id, content, createdAt, user}) => {
            const postCard = new Post(user.avatarUrl, user.username, content, createdAt, user.id, id)

            list.appendChild(postCard.createCard())
        });

        Edit.editPost()
        Edit.deletePost()
    }
}

Render.renderPosts()
logButton.logOutTrigger()