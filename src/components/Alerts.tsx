import { CircleCheck, X } from "lucide-react";
import { toast } from "sonner";
import Button from "./ui/buttton";

const Alerts = {
  success: (message: string) => {
    toast.custom((t) => (
      <div className="w-[var(--width)] rounded-lg border border-border bg-background px-4 py-3 bg-green-50">
        <div className="flex gap-2">
          <div className="flex items-start grow gap-3">
            <CircleCheck className="mt-0.5 shrink-0 text-green-700" size={20} aria-hidden="true" />
            <div className="text-green-700">
              <h3 className="!font-sofia-bold">Success</h3>
              <p className="text-sm ">{message}</p>
            </div>
          </div>
          <Button
            className="w-auto p-0 size-5 h-auto !min-w-[auto] bg-transparent"
            onPress={() => toast.dismiss(t)}
            aria-label="Close banner"
          >
            <X
              size={16}
              className="opacity-80 transition-opacity group-hover:opacity-100 text-green-700"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    ));
  },
  error: (message: string) => {
    toast.custom((t) => (
      <div className="w-[var(--width)] rounded-lg border border-border bg-background px-4 py-3 bg-danger-50">
        <div className="flex gap-2">
          <div className="flex items-center grow gap-3">
            <CircleCheck className="mt-0.5 shrink-0 text-danger-700" size={20} aria-hidden="true" />
            <div className=" text-danger-700">
              <h3 className="!font-sofia-bold">Error</h3>
              <p className="text-sm ">{message}</p>
            </div>
          </div>
          <Button
            className="w-auto p-0 size-5 h-auto !min-w-[auto] bg-transparent"
            onPress={() => toast.dismiss(t)}
            aria-label="Close banner"
          >
            <X
              size={16}
              className="opacity-80 transition-opacity group-hover:opacity-100 text-danger-700"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    ));
  },
  warning: (message: string) => {
    toast.custom((t) => (
      <div className="w-[var(--width)] rounded-lg border border-border bg-background px-4 py-3 bg-blue-50">
        <div className="flex gap-2">
          <div className="flex grow gap-3 items-start">
            <CircleCheck className="mt-0.5 shrink-0 text-blue-700" size={20} aria-hidden="true" />
            <div className="text-blue-700">
              <h3 className="!font-sofia-bold">Warning</h3>
              <p className="text-sm ">{message}</p>
            </div>
          </div>
          <Button
            className="w-auto p-0 size-5 h-auto !min-w-[auto] bg-transparent"
            onPress={() => toast.dismiss(t)}
            aria-label="Close banner"
          >
            <X
              size={16}
              className="opacity-80 transition-opacity group-hover:opacity-100 text-blue-700"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    ));
  },
  info: (message: string) => {
    toast.custom((t) => (
      <div className="w-[var(--width)] rounded-lg border border-border bg-background px-4 py-3 bg-yellow-50">
        <div className="flex gap-2 items-start">
          <div className="flex grow gap-3">
            <CircleCheck className="mt-0.5 shrink-0 text-yellow-700" size={20} aria-hidden="true" />
            <div className="text-yellow-700">
              <h3 className="!font-sofia-bold">Info</h3>
              <p className="text-sm ">{message}</p>
            </div>
          </div>
          <Button
            className="w-auto p-0 size-5 h-auto !min-w-[auto] bg-transparent"
            onPress={() => toast.dismiss(t)}
            aria-label="Close banner"
          >
            <X
              size={16}
              className="opacity-80 transition-opacity group-hover:opacity-100 text-yellow-700"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    ));
  },
};

export default Alerts;
