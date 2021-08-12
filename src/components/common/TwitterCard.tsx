import { Img } from '@chakra-ui/image'
import { AspectRatio, Box, Grid, GridItem } from '@chakra-ui/layout'
import { HStack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { ImgPrevieModal } from './ImgPreviewModal'

interface Props {
  profileImg: string
  text: string
  images: string[]
}

export const TwitterCard: React.VFC<Props> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // 画像の配置操作
  const columns = props.images.length % 2 === 0 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'
  return (
    <Box as="div" boxShadow="sm" maxW="lg" borderWidth="1px" rounded="md">
      <Grid gap={[2]} p={[3]} templateColumns={['repeat(6, 1fr)', 'repeat(8, 1fr)']}>
        <GridItem colSpan={1}>
          <Img src={props.profileImg} alt="プロフィール画像" rounded="full" />
        </GridItem>
        <GridItem colSpan={[5, 7]}>
          <HStack spacing={['7px', '10px']} py={1}>
            <Text fontWeight="semibold">かずやん</Text>
            <Text fontSize="md" fontWeight="normal" color="main-text-gray">
              @D_kazuyan
            </Text>
            <Text fontSize="md" fontWeight="normal" color="main-text-gray">
              8月5日
            </Text>
          </HStack>
          <div>
            {props.text.split('\\n').map((s, idx) => {
              return (
                <p key={idx}>
                  {s}
                  <span />
                </p>
              )
            })}
          </div>
          <Box pt={4}>
            {(() => {
              if (props.images.length === 3) {
                return (
                  <Grid h={['200px', '250px']} templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap={1}>
                    <GridItem rowSpan={2} colSpan={1} w="full">
                      <AspectRatio h="full">
                        <Img
                          src={props.images[0]}
                          alt="ツイートの画像"
                          onClick={onOpen}
                          objectFit="cover"
                          rounded={['md', 'sm']}
                          opacity={0.9}
                          _hover={{ opacity: 0.8 }}
                        />
                      </AspectRatio>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <AspectRatio h={['100px', '125px']}>
                        <Img
                          src={props.images[1]}
                          alt="ツイートの画像"
                          onClick={onOpen}
                          objectFit="cover"
                          rounded={['md', 'sm']}
                          opacity={0.9}
                          _hover={{ opacity: 0.8 }}
                        />
                      </AspectRatio>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <AspectRatio h={['100px', '125px']}>
                        <Img
                          src={props.images[2]}
                          alt="ツイートの画像"
                          onClick={onOpen}
                          objectFit="cover"
                          rounded={['md', 'sm']}
                          opacity={0.9}
                          _hover={{ opacity: 0.8 }}
                        />
                      </AspectRatio>
                    </GridItem>
                  </Grid>
                )
              } else {
                return (
                  <Grid templateColumns={columns} gap={2}>
                    {props.images.map((image, idx) => (
                      <AspectRatio key={idx} h="200px" ratio={4 / 3}>
                        <Img
                          src={image}
                          alt="ツイートの画像"
                          onClick={onOpen}
                          objectFit="cover"
                          rounded={['md', 'sm']}
                          opacity={0.9}
                          _hover={{ opacity: 0.8 }}
                        />
                      </AspectRatio>
                    ))}
                  </Grid>
                )
              }
            })()}
          </Box>
        </GridItem>
      </Grid>
      <ImgPrevieModal
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        modalImage="https://pbs.twimg.com/media/Ey7mFUcVIAMhhVd.jpg"
      />
    </Box>
  )
}
