import { getUser } from '@/redux/users/selectors'
import { Button } from '@chakra-ui/button'
import { DownloadIcon } from '@chakra-ui/icons'
import { Box, Stack } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { useSelector } from 'react-redux'
import { AppStates } from '../../redux/types'
import { CForm } from './CForm'
import { CPreview } from './CPreview'

export const MyPage = () => {
  const selector = useSelector((state: AppStates) => state)
  const user = getUser(selector)
  const responsiveSize = useBreakpointValue(['sm', 'md'])

  return (
    <Box as="section" py={16}>
      <Stack align="center">
        <CForm />
        <CPreview />
        <Button
          leftIcon={<DownloadIcon />}
          size={responsiveSize}
          width={['120px', '150px']}
          bg="main-blue"
          color="white"
          _hover={{ bg: 'main-deep-blue' }}
        >
          保存
        </Button>
      </Stack>
      <p>{JSON.stringify(user)}</p>
    </Box>
  )
}

export default MyPage
