// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// not using api routing doing so would limit 
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
