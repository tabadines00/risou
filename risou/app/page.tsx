import Link from '@/node_modules/next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hello Thomas!</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}
