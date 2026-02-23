import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Button / CTA component
 *
 * Props:
 *  variant  – 'primary' | 'gold' | 'outline' | 'outline-gold' | 'ghost'
 *  size     – 'sm' | 'md' (default) | 'lg'
 *  to       – internal route  (renders as <Link>)
 *  href     – external url    (renders as <a>)
 *  onClick  – click handler   (renders as <button>)
 *  arrow    – boolean, append ArrowRight icon
 *  icon     – React node, prepend custom icon
 *  className, style – extra overrides
 */
const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    to,
    href,
    onClick,
    arrow = false,
    icon,
    className = '',
    style = {},
    type = 'button',
    disabled = false,
    ...rest
}) => {
    const classes = [
        'btn',
        `btn-${variant}`,
        size !== 'md' ? `btn-${size}` : '',
        className
    ].filter(Boolean).join(' ');

    const content = (
        <>
            {icon && <span className="btn-icon">{icon}</span>}
            {children}
            {arrow && <ArrowRight size={size === 'sm' ? 15 : size === 'lg' ? 20 : 17} />}
        </>
    );

    if (to) {
        return (
            <Link to={to} className={classes} style={style} {...rest}>
                {content}
            </Link>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                style={style}
                target="_blank"
                rel="noopener noreferrer"
                {...rest}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            style={style}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {content}
        </button>
    );
};

export default Button;