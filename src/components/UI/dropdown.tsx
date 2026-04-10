// Dropdown.tsx
import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import styles from "./Dropdown.module.css";

type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: Option[];
  onChange?: (value: string) => void;
  defaultValue?: string;
};

export function Dropdown({ options, onChange, defaultValue }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const initialOption =
  options.find((o) => o.value === defaultValue) ?? options[0]!;

  const [selected, setSelected] = useState(initialOption);

  const dropdownRef = useRef<HTMLDivElement>(null);


  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option.value);
  };

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.label}
        <FiChevronDown
          className={`${styles.icon} ${isOpen ? styles.rotate : ""}`}
        />
      </button>

      {isOpen && (
        <div className={styles.menu}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.item}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}