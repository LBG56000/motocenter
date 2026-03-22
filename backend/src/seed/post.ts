import { connectToMongo } from "."
import Brand from "../models/Brand"
import Category from "../models/Category"
import Post from "../models/Post"
import User from "../models/User"

const seedPost = async () => {
  await connectToMongo()
  await Post.deleteMany({})

  const user = await User.findOne({ id: 'u-001' })
  const category1 = await Category.findOne({ id: 'c-001' })
  const category2 = await Category.findOne({ id: 'c-002' })

  const brand = await Brand.findOne({ id: 'b-001' })

  if (!user || !category1 || !category2 || !brand) {
    throw new Error('Missing seeded data')
  }

  await Post.insertMany([
    {
      id: 'p-001',
      question: 'Question 1',
      content: 'Quelle est la meilleure moto pour débuter ?',
      category: category1._id,
      user: user._id,
      brand: brand._id,
      views: 12,
      image: 'https://resources.motogp.pulselive.com/photo-resources/2026/03/21/b8cc7d18-21ff-445e-a24a-b6db858e2795/LGZ_1910_.jpg?width=1580&height=889'
    },
    {
      id: 'p-002',
      question: 'Question 2',
      content: 'Quelle est la meilleure marque de moto ?',
      category: category2._id,
      user: user._id,
      brand: brand._id,
      image: 'https://resources.motogp.pulselive.com/photo-resources/2026/03/21/b8cc7d18-21ff-445e-a24a-b6db858e2795/LGZ_1910_.jpg?width=1580&height=889'
    },
  ])
}

export default seedPost