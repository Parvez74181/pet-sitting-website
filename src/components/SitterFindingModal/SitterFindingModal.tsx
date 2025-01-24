"use client";
import { cn } from "@/lib/utils";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button as HeroUIButton,
  Form,
} from "@heroui/react";
import { useRef, useState } from "react";
import Button from "../ui/buttton";
import { Search } from "lucide-react";
import SearchableSelect from "./SearchableSelect";
import PetCounter from "./PetCounter";
import PetServices from "./PetServices";
import { useAppSelector } from "@/lib/hooks";

type Props = {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
};
const SitterFindingModal = ({ children, className, color }: Props) => {
  const hiddenButtonRef = useRef<HTMLButtonElement | null>(null);
  const errorContainer = useRef<HTMLParagraphElement | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState({
    petServices: false,
    petCounts: false,
  });
  const selectedPetService = useAppSelector((state) => state.petServices.selectedPetService);
  const location = useAppSelector((state) => state.location.location);
  const petCounts = useAppSelector((state) => state.petCounter);

  const validateValues = (): boolean => {
    if (!selectedPetService) {
      setError((prevError) => ({ ...prevError, petServices: true }));
      errorContainer.current!.innerText = "Please select a pet service";
      return false;
    }

    if (!location) {
      setError((prevError) => ({ ...prevError, location: true }));
      errorContainer.current!.innerText = "Please select a location";
      return false;
    }

    const atLeastOnePetCountNonZero = Object.values(petCounts).some((count) => count > 0);
    if (!atLeastOnePetCountNonZero) {
      setError((prevError) => ({ ...prevError, petCounts: true }));
      errorContainer.current!.innerText = "Please select a pet";
      return false;
    }

    return true;
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!validateValues()) {
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      errorContainer.current!.innerText = "";
      console.log("Form submitted successfully with data:", {
        selectedPetService,
        location,
        petCounts,
      });
    }, 1000);
  };

  const handleSubmitFormClick = () => {
    if (hiddenButtonRef.current) {
      hiddenButtonRef.current.click(); // Triggers the click on the hidden button
    }
  };

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
              <ModalHeader className="flex flex-col gap-1">
                <span>Find a Sitter in your area</span>
                <p ref={errorContainer} className="text-sm text-danger font-normal"></p>
              </ModalHeader>

              <ModalBody className="hide-scrollbar">
                <Form encType="application/x-www-form-urlencoded" onSubmit={onSubmit} validationBehavior="native">
                  <SearchableSelect />

                  <h6 id="petService" className="mt-5 text-lg font-bold">
                    What services are you looking for?
                  </h6>
                  <PetServices isError={error.petServices} />

                  {/* <h6 id="date" className="mt-5 text-lg font-bold">
                    When do you need the service?
                  </h6>
                  <PetServices isError={error.petServices} /> */}

                  <h6 id="petCount" className="mt-5 text-lg font-bold">
                    How many pets do you need to book for?
                  </h6>
                  <PetCounter isError={error.petCounts} />

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
                  isLoading={loading}
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
