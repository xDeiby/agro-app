import React, { ElementType, MouseEventHandler, ReactNode } from "react";
import { StyledButton, StyledIcon } from "./button-lineal.style";
import Spinner from "../../spinner";
import { ComponentSize } from "../../../config/styles/constants/sizes";

export type ButtonType = "default" | "danger" | "ghost" | "secondary";

interface BaseButtonProps {
    typeButton?: ButtonType;
    icon?: ElementType;
    type?: "button" | "submit" | "reset";
    size?: ComponentSize;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
}

type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;

/**
 * If href is supplied, button becomes an anchor link
 */
type HTMLAnchorProps = {
    href?: string;
} & BaseButtonProps;

/**
 * If `as` is supplied, button becomes a custom html node specified in `as`
 */
type CustomNodeProps = {
    as?: ElementType;
    to?: string;
} & BaseButtonProps;

export type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
    const {
        type = "button",
        typeButton = "default",
        icon,
        size = "default",
        className,
        children,
        disabled = false,
        loading,
        onClick,
        href,
        as,
        to,
    } = props;

    const styles = {
        innerType: typeButton,
        size,
        disabled,
        withText: children != null,
    };

    const spinnerStyles = {
        size: size === "large" ? 25 : size === "default" ? 20 : 15,
        light: true,
    };

    const childrenWithIcon = !icon ? (
        children
    ) : (
        <>
            {children}
            <StyledIcon as={icon} />
        </>
    );

    if (as && !disabled) {
        return (
            <StyledButton type={type} as={as} to={to} ref={ref} className={className} {...styles}>
                {loading ? (
                    <>
                        Loading
                        <Spinner {...spinnerStyles} />
                    </>
                ) : (
                    childrenWithIcon
                )}
            </StyledButton>
        );
    }

    if (href && !disabled) {
        return (
            <StyledButton
                as="a"
                type={type}
                href={href}
                ref={ref as React.MutableRefObject<HTMLAnchorElement>}
                className={className}
                {...styles}
            >
                {loading ? (
                    <>
                        Loading
                        <Spinner {...spinnerStyles} />
                    </>
                ) : (
                    childrenWithIcon
                )}
            </StyledButton>
        );
    }

    return (
        <StyledButton
            as="button"
            type={type}
            onClick={onClick}
            ref={ref as React.MutableRefObject<HTMLButtonElement>}
            className={className}
            {...styles}
        >
            {loading ? (
                <>
                    Loading
                    <Spinner {...spinnerStyles} />
                </>
            ) : (
                childrenWithIcon
            )}
        </StyledButton>
    );
};

export default React.forwardRef<unknown, ButtonProps>(Button);
