"use client";

import useSwr from "swr";
import Select from "react-select";

type Model = {};

const modalFetcher = () => fetch("/api/getEngines").then((res) => res.json());

const ModelSelection = () => {
  const { data: models, isLoading } = useSwr("models", modalFetcher);
  const { data: model, mutate: setModel } = useSwr("model",{
    fallbackData: "text-davinci-003"
  })
  return (
    <div>
      <Select
        className="mt-2"
        isSearchable
        isLoading={isLoading}
        defaultValue={model}
        placeholder={model}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
        options={models?.engines}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
