

function navigate(href) {
   window.history.pushState({}, '', href);
   const navigationEvent = new Event('navigate');
   window.dispatchEvent(navigationEvent);
};


export function Link({ target, to, ...props }) {
   const handleClick = e => {
      const isMainEvent = e.button === 0;
      const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
      const isManageableEvent = target === undefined || target === '_self';

      if (isMainEvent && !isModifiedEvent && isManageableEvent) {
         e.preventDefault();
         navigate(to);
      }

   };

   return (
      <a onClick={handleClick} href={to} target={target} {...props} />
   )
}
