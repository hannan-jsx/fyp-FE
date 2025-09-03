import { FileRecordItem } from "@/api/document";
import { shrinkText } from "@/lib/utils";
import Shimmer from "./ui/Shimmer";

type UploadHistoryProps = {
  data: FileRecordItem[];
  isLoading?: boolean;
};

const UploadHistory = ({ data, isLoading = false }: UploadHistoryProps) => {
  return (
    <div className="border p-4 rounded-lg">
      <div className="space-y-3">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <Shimmer height={70} key={index} />
          ))
        ) : data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex justify-between items-center hover:shadow-md transition"
            >
              <div>
                <p className="font-medium text-blue-600">
                  {shrinkText(item?.file_name, 30)}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(item?.uploaded_at).toLocaleDateString()}
                </p>
              </div>
              <div className="text-sm text-gray-700 text-right">
                <p>
                  <span className="font-semibold">By:</span> {item?.uploaded_by}
                </p>
                <p>
                  <span className="font-semibold">Inserted:</span>{" "}
                  {item?.inserted_count || 0},{" "}
                  <span className="font-semibold">Skipped:</span>{" "}
                  {item?.skipped_count || 0}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-sm">
            No upload history found.
          </p>
        )}
      </div>
    </div>
  );
};

export default UploadHistory;
