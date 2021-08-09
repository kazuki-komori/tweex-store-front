import { getCounter } from '@/redux/users/selectors'
import { Button } from '@chakra-ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { signinAction } from '../redux/users/actions'

export const Home = () => {
  const selector = useSelector((state) => state)
  const counter = getCounter(selector)
  const dispatch = useDispatch()

  return (
    <div>
      <p>{counter}</p>
      <Button
        onClick={() => {
          dispatch(signinAction())
        }}
      >
        +1
      </Button>
    </div>
  )
}

export default Home
