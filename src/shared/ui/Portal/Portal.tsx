import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  element?: Element;
};
export const Portal = ({
  children,
  element = document.getElementById("root") || document.body
}: PortalProps) => {
  return createPortal(children, element);
};