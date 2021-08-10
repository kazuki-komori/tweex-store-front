import { TwitterCard } from '@/components/common/TwitterCard'
import { Button } from '@chakra-ui/button'
import { ViewIcon } from '@chakra-ui/icons'
import { Stack } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'

export const CPreview = () => {
  const responsiveSize = useBreakpointValue(['sm', 'md'])
  const Images = [
    'https://pbs.twimg.com/media/Ey7mFUcVIAMhhVd.jpg',
    'https://pbs.twimg.com/media/Ey7mFUcVIAMhhVd.jpg',
    'https://pbs.twimg.com/media/Ey7mFUcVIAMhhVd.jpg',
  ]
  return (
    <Stack align="center">
      <Button
        leftIcon={<ViewIcon />}
        size={responsiveSize}
        width={['120px', '150px']}
        bg="main-blue"
        color="white"
        _hover={{ bg: 'main-deep-blue' }}
      >
        プレビュー
      </Button>
      <TwitterCard
        text="届いた！\nこれ着て大学行ったら流石に変人扱いされそう https://t.co/C41aJhLByQ"
        images={Images}
      />
    </Stack>
  )
}
