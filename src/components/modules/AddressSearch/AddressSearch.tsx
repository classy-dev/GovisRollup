import React, { HTMLAttributes, useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import styled from "@emotion/styled";
import { Modal } from "@ComponentFarm/modules/Modal/Modal";
import { Button } from "@ComponentFarm/atom/Button/Button";
import useSyncedRef from "@HookFarm/useSyncedRef";

interface AddressSearchProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  onSearch?: (address: string) => void;
}

const AddressSearchField = styled.div`
  display: inline-flex;
  align-items: stretch;
  width: 100%;
  height: 4.4rem;

  input {
    height: 100%;
  }

  button {
    min-width: auto;
    margin-left: 0.8rem;
  }
`;

const generateExtraAddress = (data: Address) => {
  let extraAddress = "";
  if (data.bname !== "") {
    extraAddress += data.bname;
  }
  if (data.buildingName !== "") {
    extraAddress +=
      extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
  }
  return extraAddress;
};

export const AddressSearch = React.forwardRef<
  HTMLInputElement,
  Omit<AddressSearchProps, "readOnly">
>(({ className, children, disabled, onSearch, ...formControlProps }, ref) => {
  const refs = useSyncedRef<HTMLInputElement>(ref);
  const [showAddressPopup, setShowAddressPopup] = useState(false);

  const handleComplete = React.useCallback(
    (data: Address) => {
      const el = refs?.current;

      const triggerChangeEvent = (value: string) => {
        if (el) {
          el.value = value;
          const changeEvent = new Event("change", { bubbles: true });
          el.dispatchEvent(changeEvent);
          /** @ts-ignore */
          formControlProps.onChange?.(changeEvent);
        }
      };

      const extraAddress = generateExtraAddress(data);
      const formattedAddress = `${data.address} ${
        extraAddress ? `(${extraAddress})` : ""
      }`;

      triggerChangeEvent(formattedAddress);
      return onSearch?.(formattedAddress);
    },
    [onSearch, formControlProps.onChange]
  );

  const handleOpen = React.useCallback(() => setShowAddressPopup(true), []);
  const handleClose = React.useCallback(() => setShowAddressPopup(false), []);

  return (
    <AddressSearchField>
      <input
        ref={refs}
        className={`inp ${className ?? ""}`}
        readOnly
        disabled={disabled}
        {...formControlProps}
        onClick={handleOpen}
      />
      <Button
        type="button"
        disabled={disabled}
        variant="gostSecondary"
        onClick={handleOpen}
      >
        주소 검색
      </Button>
      <Modal
        isOpen={showAddressPopup}
        showCancelButton={false}
        showCloseButton={false}
        onClose={handleClose}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} onClose={handleClose} />
      </Modal>
    </AddressSearchField>
  );
});

AddressSearch.displayName = "AddressSearch";
