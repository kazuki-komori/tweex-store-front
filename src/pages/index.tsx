import { siginIn } from '@/redux/users/oparations'
import { getUser } from '@/redux/users/selectors'
import { Button } from '@chakra-ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { AppStates } from '../redux/types'

export const Home = () => {
  const selector = useSelector((state: AppStates) => state)
  const user = getUser(selector)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <Button
          colorScheme="twitter"
          variant="solid"
          onClick={() => {
            dispatch(siginIn())
          }}
        >
          Twitter でログイン
        </Button>
        <p>{JSON.stringify(user)}</p>
      </div>
    </div>
  )
}

export default Home
