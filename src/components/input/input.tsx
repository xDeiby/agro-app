/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEventHandler, HTMLAttributes } from "react";
import { ComponentSize } from "../../config/styles/constants/sizes";
import { StyledCross, StyledIcon, StyledInput, StyledWrapper } from "./input.style";

export interface InputProps
	extends Omit<HTMLAttributes<HTMLInputElement>, "size" | "disabled" | "onChange"> {
	icon?: React.ElementType;
	size?: ComponentSize;
	disabled?: boolean;
	error?: boolean;
	value?: string;
	isRequired?: boolean;
	width?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	/* Useful when input is controlled by another element */
	readonly?: boolean;
	clearable?: boolean;
	[key: string]: any;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (props, ref) => {
	const {
		icon,
		size = "default",
		className,
		disabled = false,
		error = false,
		isRequired = false,
		value,
		onChange,
		placeholder,
	
		readonly = false,
		clearable = false,
		...rest
	} = props;

	const styles = {
		innerSize: size,
		disabled: disabled,
		error,
		
		withIcon: icon !== undefined,
		withCross: clearable,
	};

	return (
		<StyledWrapper innerSize={size}>
			<StyledInput
				type={rest.type || "text"}
				value={value}
				onChange={onChange}
				readOnly={readonly}
				ref={ref}
				className={className}
				placeholder={placeholder}
				required={isRequired}
				{...styles}
				{...rest}
			/>
			<StyledIcon as={icon} innerSize={size} />
			{clearable && value ? (
				<StyledCross
					innerSize={size}
					onClick={() => onChange && onChange({ currentTarget: { value: "" } } as any)}
				/>
			) : null}
		</StyledWrapper>
	);
};

export default React.forwardRef<HTMLInputElement, InputProps>(Input);
