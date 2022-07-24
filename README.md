This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Database Structure
users/{uid} Public user profile
usernames/{username} Username uniqueness tracking
users/{uid}/posts/{slug} User can have many posts
users/{uid}/posts/{slug}/hearts/{uid} many-to-many relationship between users and posts via hearts

