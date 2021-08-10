import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { useBreakpointValue } from '@chakra-ui/media-query'

export const CForm = () => {
  const responsiveSize = useBreakpointValue(['sm', 'md'])
  return (
    <FormControl maxW="3xl" isRequired>
      <FormLabel>Tweet を保存</FormLabel>
      <Input
        size={responsiveSize}
        placeholder="https://twitter.com/twitter_id/status/0000000000000000000?s=20"
        focusBorderColor="main-blue"
      />
      <FormHelperText>Twitter の共有ボタンからリンクを取得してください。</FormHelperText>
    </FormControl>
  )
}
