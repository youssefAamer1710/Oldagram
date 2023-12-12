const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsEl = document.getElementById("posts")
const postImage = document.getElementById("post-img")
const likeBtn = document.getElementById("like-btn")

let timeline = ""

for (let i = 0; i < posts.length; i++) {
    
    let post = `
        <div class="post">
                <section class="profile">
                    <img class="avatar" src=${posts[i].avatar}>
                    <div>
                        <h3>${posts[i].name}</h3>
                        <p>${posts[i].location}</p>
                    </div>
                </section>
                
                <img id="post-img" src=${posts[i].post}>
                
                <section class="icons">
                    <img id="like-btn" src="images/icon-heart.png">
                    <img src="images/icon-comment.png">
                    <img src="images/icon-dm.png">
                </section>
                
                <section class="post-info">
                    <p class="likes"> ${posts[i].likes} Likes </p>
                    <p> <span>${posts[i].username}</span> ${posts[i].comment} </p>
                </section>
        </div>
    `
    
    timeline += post
}

postsEl.innerHTML = timeline

