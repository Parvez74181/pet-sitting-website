"use client";
import { fetchDistrictData } from "@/app/actions";
import { cn } from "@/lib/utils";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalProps,
  useDisclosure,
  Button as HeroUIButton,
  Input,
  Form,
  Divider,
} from "@heroui/react";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/buttton";
import { MapPin, Minus, MinusCircle, PlusCircle, Search } from "lucide-react";
import SearchableSelect from "./SearchableSelect";
import services from "@/data/services";
import petCategories from "@/data/petCategories ";
import PetCounter from "./PetCounter";

type Props = {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
};
const SitterFindingModal = ({ children, className, color }: Props) => {
  const hiddenButtonRef = useRef<HTMLButtonElement | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [submitted, setSubmitted] = useState(null);
  const [FormData, setFormData] = useState([]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default browser page refresh.
    e.preventDefault();

    // Get form data as an object.
    // const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(e.currentTarget);

    // Submit data to your backend API.
    // setSubmitted(data);
  };

  const handleSubmitFormClick = () => {
    if (hiddenButtonRef.current) {
      hiddenButtonRef.current.click(); // Triggers the click on the hidden button
    }
  };

  const handleServiceSelect = () => {};
  return (
    <>
      <HeroUIButton
        color={color}
        radius="full"
        className={cn("flex px-5 py-2 rounded-full font-medium text-base", className)}
        onPress={onOpen}
      >
        {children}
      </HeroUIButton>
      <Modal
        scrollBehavior="inside"
        className="overflow-y-auto"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Find a Sitter in your area</ModalHeader>
              <ModalBody className="hide-scrollbar">
                <Form onSubmit={onSubmit} validationBehavior="native">
                  <SearchableSelect />

                  <h6 className="mt-5 text-lg font-bold">What services are you looking for?</h6>

                  {services.map((service, i) => (
                    <div key={i} className="w-full cursor-pointer">
                      <div className="border  p-3 w-full rounded-xl flex items-center justify-start gap-3">
                        <span>{service.icon}</span>
                        <div className="font-sofia-extralight ">
                          <h6>{service.title}</h6>
                          <p>{service.subDescription}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <h6 className="mt-5 text-lg font-bold">How many pets do you need to book for?</h6>

                  <PetCounter />

                  <Button ref={hiddenButtonRef} color="primary" className="w-full hidden" type="submit">
                    <Search size={20} strokeWidth={2.5} /> Find a sitter
                  </Button>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button
                  onPress={handleSubmitFormClick}
                  id="submit-form"
                  color="primary"
                  className="w-full "
                  type="submit"
                >
                  <Search size={20} strokeWidth={2.5} /> Find a sitter
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SitterFindingModal;
