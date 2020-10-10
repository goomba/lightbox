import React from "react";
import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";
import { isBrowser } from "~/utils";

export interface PortalProps {
	children: React.ReactNode;
	container?: HTMLElement;
	disablePortal?: boolean;
	isTransitionable?: boolean;
}

export const Portal: React.FC<PortalProps> = (props) => {
	if (!isBrowser()) {
		return null;
	}
	// Done here so we can safely use document.body
	const {
		children,
		container = document.body,
		disablePortal = false,
		isTransitionable = false,
	} = props;

	const content = isTransitionable ? (
		<AnimatePresence>{children}</AnimatePresence>
	) : (
		children
	);

	return disablePortal ? (
		<>{content}</>
	) : (
		ReactDOM.createPortal(content, container)
	);
};
