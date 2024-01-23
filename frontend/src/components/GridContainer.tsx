import { GridContainerProps } from "types/types";

export const GridContainer = ({ children }: GridContainerProps) => {
  return (
    <div className="pt-2">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {children}
      </div>
    </div>
  );
};
