import {
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Flex,
    FormLabel,
    Input,
    Textarea,
    RadioGroup,
    Radio,
    FormControl,
    ModalFooter,
  } from "@chakra-ui/react";
  import { BiAddToQueue } from "react-icons/bi";
  
  const CreateModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen}>
          <BiAddToQueue size={20} />
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> My new BFF 🤩 </ModalHeader>
            <ModalCloseButton />
  
            <ModalBody pb={6}>
              <Flex alignItems={"center"} gap={4} flexDirection="column">
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input placeholder="John Doe" />
                </FormControl>
  
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input placeholder="Software Engineer" />
                </FormControl>
  
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    resize={"none"}
                    overflow={"hidden"}
                    placeholder="He is a software engineer who loves to code and build things"
                  />
                </FormControl>
  
                <RadioGroup defaultValue="Male" mt={4}>
                  <Flex gap={5}>
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                  </Flex>
                </RadioGroup>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3}>Add</Button>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default CreateModal;
  