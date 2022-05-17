/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export interface ModalButtonProps {
  children: any
  value: string
  title: string
  size: string
  onOpen: any | undefined
  accept: string | undefined
  onAccept: any | undefined
  decline: string | undefined
  onDecline: any | undefined
}

export const ModalButton = (props: ModalButtonProps) => {
  const [visible, setVisibleState] = useState(false)

  const accept = (): void => {
    if (props.onAccept != null) {
      props.onAccept()
    }
    setVisibleState(false)
  }

  const decline = (): void => {
    if (props.onDecline != null) {
      props.onDecline()
    }
    setVisibleState(false)
  }

  const open = (): void => {
    if (props.onOpen != null) {
      props.onOpen()
    }
    setVisibleState(true)
  }

  return (
    <div className='Modal-button'>
      <Button size={props.size} block onClick={open}>
        {props.value}
      </Button>
      <Modal isOpen={visible} className='ActionModal'>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={accept}>
            {props.accept}
          </Button>
          <Button color='secondary' onClick={decline}>
            {props.decline}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalButton
