import { motion, useReducedMotion } from 'framer-motion';
import { EASE, staggerItem } from './motion';

/**
 * Scroll-triggered reveal. Renders the final state immediately when the user
 * prefers reduced motion, so nothing is hidden behind an animation that
 * never plays.
 */
export default function Reveal({
  as = 'div',
  children,
  delay = 0,
  y = 22,
  duration = 0.5,
  className,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  if (reduce) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -80px 0px' }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Wraps a grid/list so children animate in sequence (the "stagger list"
 * preset: 60ms apart, slight scale, back-out ease).
 */
export function Stagger({ as = 'div', children, className, each = 0.06, ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  if (reduce) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -60px 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: each } } }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Child of <Stagger>. */
export function StaggerItem({ as = 'div', children, className, ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  if (reduce) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <Tag className={className} variants={staggerItem} {...rest}>
      {children}
    </Tag>
  );
}
