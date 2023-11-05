
import { Chart } from './components/chart';
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center py-8 px-2 gap-3">
      <h1 className="text-lg">Mahjong Calculator</h1>
      {/* <button>New Game</button> */}
      <Chart />
    </main>
  )
}
