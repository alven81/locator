import React, { useState } from "react";
import styled from "styled-components";
import { useLayer, Arrow } from "react-laag";

const StyledMarker = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  background-color: lightgreen;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    z-index: 1;
  }
`;
const InfoBox = styled.div`
  padding: 1em;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

export default function Marker({ name }) {
  const [isOpen, setOpen] = useState(false);
  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen,
    triggerOffset: 10,
    auto: true,
    overflowContainer: false,
    onOutsideClick: () => setOpen(false)
  });
  return (
    <>
      <StyledMarker
        {...triggerProps}
        onClick={() => setOpen((prev) => !prev)}
      />
      {isOpen &&
        renderLayer(
          <InfoBox {...layerProps}>
            {name}
            <Arrow {...arrowProps} />
          </InfoBox>
        )}
    </>
  );
}
