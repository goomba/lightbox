import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Modal, ModalProps } from ".";

export default {
	title: "Components/Modal",
	component: Modal,
} as Meta;

const Template: Story<ModalProps> = (props) => {
	return (
		<>
			<p>A modal</p>
			<Modal {...props} />
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	children: "i am modal",
	isOpen: true,
};
