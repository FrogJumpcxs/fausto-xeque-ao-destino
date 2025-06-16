import dynamic from 'next/dynamic'

const FaustoTabuleiro = dynamic(() => import('../src/game/FaustoTabuleiro'), { ssr: false })

export default function Home() {
  return <FaustoTabuleiro />
}
