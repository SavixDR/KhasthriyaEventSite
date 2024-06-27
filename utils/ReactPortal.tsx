import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

const createWrapperAndAppendBody = (wrapperId: string) => {
	if (!document) return null;
	const wrapperElement = document.createElement("div");
	wrapperElement.setAttribute("id", wrapperId);
	document.body.appendChild(wrapperElement);
	return wrapperElement;
};

const ReactPortal = ({
	children,
	wrapperId,
}: {
	children: React.ReactNode;
	wrapperId: string;
}) => {
	const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;

        if (!element) {
            element = createWrapperAndAppendBody(wrapperId);
            systemCreated = true;
        }

        setWrapperElement(element!);

        return () => {
            if (systemCreated && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        }
    }, [wrapperId])

    if (!wrapperElement) return null;

	return createPortal(children, wrapperElement)
};

export default ReactPortal;
