import { Img, Modal, ModalContent, ModalOverlay, useBreakpointValue } from '@chakra-ui/react'

interface Props {
  modalImage: string
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}
export const ImgPrevieModal: React.VFC<Props> = (props) => {
  const responsiveSize = useBreakpointValue(['xs', 'md'])
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered size={responsiveSize}>
      <ModalOverlay />
      <ModalContent>
        <Img src={props.modalImage} />
      </ModalContent>
    </Modal>
  )
}
