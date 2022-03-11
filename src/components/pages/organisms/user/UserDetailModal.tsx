import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

//memoは全体を囲う。
export const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value="鈴木" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value="鈴木" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>mail</FormLabel>
                <Input value="鈴木" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>Tel</FormLabel>
                <Input value="鈴木" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
  );
});
