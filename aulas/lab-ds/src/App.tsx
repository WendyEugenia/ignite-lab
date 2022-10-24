import { Heading } from './components/Heading'
import { Logo } from './logo'
import './styles/global.css'

export function App() {
  return(
    <div className=' w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100' > 
    <Logo/>

    <Heading size='lg'>
      Ignite lab
    </Heading>
      <Text size="lg"> Faça login e comece a usar!</Text>
    </div>
    )
}


