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
    IconButton,
  } from "@chakra-ui/react";
  import { BiAddToQueue, BiEditAlt } from "react-icons/bi";
  
  function EditModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <IconButton
            onClick={onOpen}
            variant='ghost'
            colorScheme="blue"
            aria-label="See menu"
            size={"sm"}
            icon={<BiEditAlt size={20} />}
        
        />   
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> Edit BFF </ModalHeader>
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
  
                {/* <RadioGroup defaultValue="Male" mt={4}>
                  <Flex gap={5}>
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                  </Flex>
                </RadioGroup> */}

                <ModalFooter>
                    <Button colorScheme="blue" mr={3}>Update</Button>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default EditModal;
  