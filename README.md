This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

 
This project represents a scaled down version of a blog website. It has Feed page where you can see posts from other users. If you would like to make a post yourself then go ahead and select the “log in” button. You will be directed to a google log in form. After you have entered the correct credentials; you will be able to Create, Post, Edit and Delete the blogs you desire. 


Database Structure
users/{uid} Public user profile
usernames/{username} Username uniqueness tracking
users/{uid}/posts/{slug} User can have many posts
users/{uid}/posts/{slug}/hearts/{uid} many-to-many relationship between users and posts via hearts
## 
