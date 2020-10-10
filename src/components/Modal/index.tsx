import React from "react";
import { Portal, PortalProps } from "~/components/Portal";

export interface ModalProps {
	children: React.ReactNode;
	isOpen: boolean;
	PortalComponent?: React.ComponentType;
	portalProps?: Omit<PortalProps, "children">;
}

export const Modal: React.FC<ModalProps> = ({
	children,
	isOpen,
	PortalComponent = Portal,
	portalProps,
}) => {
	return (
		<PortalComponent {...portalProps}>
			{isOpen && (
				<div
					id="modal-root"
					style={{
						width: "100px",
						height: "100px",
						background: "red",
						position: "absolute",
						left: 0,
						top: 0,
						zIndex: 9999999999,
					}}
				>
					{children}
				</div>
			)}
		</PortalComponent>
	);
};
