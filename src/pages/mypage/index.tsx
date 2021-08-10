import { getUser } from '@/redux/users/selectors'
import { useSelector } from 'react-redux'
import { AppStates } from '../../redux/types'

export const MyPage = () => {
  const selector = useSelector((state: AppStates) => state)
  const user = getUser(selector)

  return (
    <div>
      <p>{JSON.stringify(user)}</p>
    </div>
  )
}

export default MyPage
