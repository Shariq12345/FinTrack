import { useCSVReader } from "react-papaparse";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

type Props = {
  onUpload: (results: any) => void;
};

export const UploadButton = ({ onUpload }: Props) => {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }: any) => (
        <div>
          <Button
            variant="outline"
            size="sm"
            className="w-full lg:w-auto"
            {...getRootProps()}
          >
            <Upload className="size-4 mr-2" />
            Import
          </Button>
          {acceptedFile && (
            <div className="flex flex-col items-center mt-2">
              <ProgressBar />
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                {...getRemoveFileProps()}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      )}
    </CSVReader>
  );
};
