import React, { FC, useState, ChangeEvent, useRef } from "react";
import styled from "@emotion/styled";
import { Edit, Pic, Plus } from "@ComponentFarm/atom/icons";
// 여기서 Pic, Plus, Edit 아이콘을 import해야 합니다.

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const GrayBox = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 40rem;
  height: 24.8rem;
  background: var(--color-neutral90);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  &.on {
    background: transparent;
  }

  img {
    width: auto;
    height: 100%;
  }
`;

const Text = styled.p`
  color: var(--color-neutral30);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem;
  margin-top: 3rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  margin-top: 1.6rem;
  cursor: pointer;

  svg {
    path {
      fill: var(--color-blue60);
    }
  }
`;

const ImageText = styled.span`
  color: var(--color-blue60);
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 120%;
  margin-left: 0.8rem;
`;

const ImageInput = styled.input`
  display: none;
`;

export interface ImageUploaderProps {
  pageMode?: string;
  isReadOnly?: boolean;
  product_image: string;
  onImageChange?: (file: File) => void;
}

export const ImageUploader: FC<ImageUploaderProps> = ({
  pageMode,
  isReadOnly,
  product_image,
  onImageChange,
}) => {
  const [image, setImage] = useState<File | string | null>(
    pageMode === "add" || product_image === null ? null : product_image
  );
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      if (onImageChange) onImageChange(file);
    }
  };

  const imgSelect = () => {
    if (!isReadOnly) {
      return imageInputRef.current?.click();
    }
    return null;
  };

  return (
    <Container>
      <GrayBox
        onClick={imgSelect}
        className={image && String(image) !== "null" ? "on" : ""}
      >
        <ImageInput
          type="file"
          ref={imageInputRef}
          id="imageInput"
          accept="image/*"
          onChange={handleImageChange}
        />
        {image && String(image) !== "null" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={typeof image === "string" ? image : URL.createObjectURL(image)}
            alt="Uploaded"
          />
        ) : (
          <>
            <Pic size={40} />
            <Text>권장 용량 최대 2MB</Text>
          </>
        )}
      </GrayBox>
      {!isReadOnly && (
        <ImageWrapper onClick={imgSelect}>
          {image ? <Edit /> : <Plus />}
          <ImageText>{image ? "이미지 수정" : "이미지 추가"}</ImageText>
        </ImageWrapper>
      )}
    </Container>
  );
};
