This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

 
This project represents a scaled down version of a blog website. It has Feed when you mount the browser. You can see previous posts from other users. If you would like to make a post yourself then go ahead and select the “log in” button. You will be directed to a google log in form. After you have entered the correct credentials; you will be able to Create, Post, Edit and Delete the blogs you desire. It may lack the curb appeal of a popular blog website, however that is ok because this app was functionality focused. Using a firebase server, Javascript, Next.js, CSS, and helpful packages; this app is able to be rendered through local host and global. 

Database Structure
users/{uid} Public user profile
usernames/{username} Username uniqueness tracking
users/{uid}/posts/{slug} User can have many posts
users/{uid}/posts/{slug}/hearts/{uid} many-to-many relationship between users and posts via hearts
## 
