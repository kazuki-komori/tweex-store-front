import { Img } from '@chakra-ui/image'
import { AspectRatio, Box, Flex, Grid, GridItem } from '@chakra-ui/layout'
import React from 'react'

interface Props {
  profileImg: string
  text: string
  images: string[]
}

export const TwitterCard: React.VFC<Props> = (props) => {
  // 画像の配置操作
  const columns = props.images.length % 2 === 0 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'
  return (
    <Box as="div" boxShadow="sm" maxW="md" borderWidth="1px" rounded="md">
      <Box p={3}>
        <Flex>
          <Img src={props.profileImg} alt="プロフィール画像" rounded="full" />
          <p>{props.text}</p>
        </Flex>
        <Box pt={4}>
          {(() => {
            if (props.images.length === 3) {
              return (
                <Grid h="250px" templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap={1}>
                  <GridItem rowSpan={2} colSpan={1} w="full">
                    <AspectRatio h="full">
                      <Img src={props.images[0]} alt="ツイートの画像" objectFit="cover" rounded="sm" opacity={0.9} />
                    </AspectRatio>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <AspectRatio h="125px">
                      <Img src={props.images[1]} alt="ツイートの画像" objectFit="cover" rounded="sm" opacity={0.9} />
                    </AspectRatio>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <AspectRatio h="125px">
                      <Img src={props.images[2]} alt="ツイートの画像" objectFit="cover" rounded="sm" opacity={0.9} />
                    </AspectRatio>
                  </GridItem>
                </Grid>
              )
            } else {
              return (
                <Grid templateColumns={columns} gap={2}>
                  {props.images.map((image, idx) => (
                    <AspectRatio key={idx} h="200px" ratio={4 / 3}>
                      <Img src={image} alt="ツイートの画像" objectFit="cover" rounded="sm" opacity={0.9} />
                    </AspectRatio>
                  ))}
                </Grid>
              )
            }
          })()}
        </Box>
      </Box>
    </Box>
  )
}
