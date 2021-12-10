import React, { useCallback, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { Alert } from "../Alert";
import { Container } from "../form";

const StyledToast = styled.div`
  right: 16px;
  position: fixed;
  max-width: calc(100% - 32px);
  transition: all 250ms ease-in;
  width: 100%;

  max-width: 400px;
`;

function Toast({ onRemove, toast, style, ttl, ...props }) {
  const timer = useRef();
  const ref = useRef();
  const removeHandler = useRef(onRemove);
  const { id, title, description, type } = toast;
  const handleRemove = useCallback(
    () => removeHandler.current(id),
    [id, removeHandler]
  );
  const handleMouseEnter = () => {
    clearTimeout(timer.current);
  };

  const handleMouseExist = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = window.setTimeout(() => {
      handleRemove();
    }, ttl);
  };
  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = window.setTimeout(() => {
      handleRemove();
    }, ttl);
    return () => {
      clearTimeout(timer.current);
    };
  }, [handleRemove, timer, ttl]);
  return (
    <CSSTransition nodeRef={ref} style={style} timeout={250} {...props}>
      <StyledToast
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExist}
      >
        <Alert
          onClick={handleRemove}
          title={title}
          description={description}
          type={type}
        />
      </StyledToast>
    </CSSTransition>
  );
}

export default Toast;
