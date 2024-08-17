import { useState } from "react";

const useDisclosureManager = () => {
  const [openComponents, setOpenComponents] = useState({});

  const openComponent = (componentName) => {
    setOpenComponents((prev) => ({ ...prev, [componentName]: true }));
  };

  const closeComponent = (componentName) => {
    setOpenComponents((prev) => {
      const newOpenComponents = { ...prev };
      delete newOpenComponents[componentName];
      return newOpenComponents;
    });
  };
  const isOpen = (componentName) => !!openComponents[componentName];

  return { openComponent, closeComponent, isOpen };
};

export default useDisclosureManager;
