import { getUser } from '@/redux/users/selectors'
import { useSelector } from 'react-redux'

export const MyPage = () => {
  const selector = useSelector((state) => state)
  const user = getUser(selector)

  return (
    <div>
      <p>{JSON.stringify(user)}</p>
    </div>
  )
}

export default MyPage
