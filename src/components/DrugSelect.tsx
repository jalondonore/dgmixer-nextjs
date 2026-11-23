"use client";

import { DRUGS, DRUG_ORDER, isDrugId } from "@/content/drugs";
import type { DrugId } from "@/types";

interface DrugSelectProps {
  id: string;
  value: DrugId | null;
  other: DrugId | null;
  disabled?: boolean;
  onChange: (value: DrugId | null) => void;
}

export function DrugSelect({
  id,
  value,
  other,
  disabled = false,
  onChange,
}: DrugSelectProps) {
  const available = DRUG_ORDER.filter((drugId) => drugId !== other);

  return (
    <select
      id={id}
      className="drugSelect"
      value={value ?? ""}
      disabled={disabled}
      onChange={(event) => {
        const next = event.target.value;
        onChange(isDrugId(next) ? next : null);
      }}
    >
      <option value="">Choose one drug</option>
      {available.map((drugId) => (
        <option key={drugId} value={drugId}>
          {DRUGS[drugId].label}
        </option>
      ))}
    </select>
  );
}
